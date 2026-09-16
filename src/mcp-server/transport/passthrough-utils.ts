import crypto from 'crypto';
import type { Request, Response } from 'express';
import type { LarkTokenType, RequestExecutionContext } from '../../shared/credential';

const LARK_ACCESS_TOKEN_HEADER = 'lark-access-token';
const LARK_ACCESS_TOKEN_HEADER_DISPLAY = 'lark-access-token';
const MAX_LARK_ACCESS_TOKEN_HEADER_LENGTH = 8192;
const MAX_TOKEN_TYPE_HEADER_LENGTH = 64;

export enum PassthroughJSONRPCErrorCodes {
  INVALID_REQUEST = -32600,
  INVALID_PARAMS = -32602,
}

export class PassthroughRequestError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly jsonRpcCode = PassthroughJSONRPCErrorCodes.INVALID_PARAMS,
  ) {
    super(message);
  }
}

function getSingleHeader(req: Request, name: string) {
  const value = req.headers[name.toLowerCase()];

  if (Array.isArray(value)) {
    throw new PassthroughRequestError('duplicate_header', `${name} must be provided once`);
  }

  return value;
}

function assertHeaderValue(name: string, value: string, maxLength: number) {
  if (value.length > maxLength) {
    throw new PassthroughRequestError('header_too_large', `${name} is too large`);
  }

  if (/[\u0000-\u001F\u007F]/.test(value)) {
    throw new PassthroughRequestError('invalid_header', `${name} contains control characters`);
  }
}

function parseLarkAccessToken(req: Request) {
  const accessToken = getSingleHeader(req, LARK_ACCESS_TOKEN_HEADER);
  if (!accessToken) {
    throw new PassthroughRequestError(
      'missing_lark_credential',
      `Missing ${LARK_ACCESS_TOKEN_HEADER_DISPLAY} header`,
    );
  }

  assertHeaderValue(LARK_ACCESS_TOKEN_HEADER_DISPLAY, accessToken, MAX_LARK_ACCESS_TOKEN_HEADER_LENGTH);

  if (/\s/.test(accessToken)) {
    throw new PassthroughRequestError(
      'invalid_lark_access_token',
      `${LARK_ACCESS_TOKEN_HEADER_DISPLAY} must contain the raw access token without whitespace or Bearer prefix`,
    );
  }

  return accessToken;
}

function parseTokenType(req: Request): LarkTokenType {
  const tokenType = getSingleHeader(req, 'x-lark-token-type');
  if (!tokenType) {
    throw new PassthroughRequestError('missing_token_type', 'Missing X-Lark-Token-Type header');
  }

  assertHeaderValue('X-Lark-Token-Type', tokenType, MAX_TOKEN_TYPE_HEADER_LENGTH);

  if (tokenType !== 'user_access_token' && tokenType !== 'tenant_access_token') {
    throw new PassthroughRequestError(
      'invalid_token_type',
      'X-Lark-Token-Type must be user_access_token or tenant_access_token',
    );
  }

  return tokenType;
}

export function isToolsCallBody(body: any) {
  if (Array.isArray(body)) {
    return body.some((item) => item?.method === 'tools/call');
  }

  return body?.method === 'tools/call';
}

export function assertNoPassthroughQueryOptions(req: Request) {
  if (Object.keys(req.query || {}).length) {
    throw new PassthroughRequestError(
      'request_config_override_not_allowed',
      'passthrough mode does not allow query options',
      PassthroughJSONRPCErrorCodes.INVALID_REQUEST,
    );
  }
}

export function getJsonRpcId(body: any) {
  if (Array.isArray(body)) {
    return body[0]?.id ?? null;
  }

  return body?.id ?? null;
}

export function parsePassthroughRequestContext(req: Request, requireCredential: boolean): RequestExecutionContext {
  const requestId = getSingleHeader(req, 'x-request-id') || crypto.randomUUID();

  if (Array.isArray(requestId)) {
    throw new PassthroughRequestError('duplicate_header', 'X-Request-Id must be provided once');
  }

  if (requestId) {
    assertHeaderValue('X-Request-Id', requestId, 256);
  }

  if (!requireCredential) {
    return { requestId };
  }

  return {
    requestId,
    credential: {
      accessToken: parseLarkAccessToken(req),
      type: parseTokenType(req),
    },
  };
}

export function sendPassthroughJsonRpcError(res: Response, req: Request, error: PassthroughRequestError) {
  if (!res.headersSent) {
    const jsonRpcError = {
      jsonrpc: '2.0',
      error: {
        code: error.jsonRpcCode,
        message: error.message,
        data: { code: error.code },
      },
    };

    if (Array.isArray(req.body)) {
      res.status(200).json(req.body.map((item) => ({ ...jsonRpcError, id: item?.id ?? null })));
      return;
    }

    res.status(200).json({ ...jsonRpcError, id: getJsonRpcId(req.body) });
  }
}
