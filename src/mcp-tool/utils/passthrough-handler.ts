import * as lark from '@larksuiteoapi/node-sdk';
import type { RequestCredential } from '../../shared/credential';
import type { McpHandler, McpHandlerOptions } from '../types';
import { logger } from '../../utils/logger';
import { mapPassthroughError } from './passthrough-error';

export function withRequestCredential(credential: RequestCredential): any {
  return credential.type === 'user_access_token'
    ? lark.withUserAccessToken(credential.accessToken)
    : lark.withTenantToken(credential.accessToken);
}

export function stripPassthroughOnlyParams(params: any) {
  if (!params || typeof params !== 'object') {
    return params;
  }
  const { useUAT: _useUAT, ...rest } = params;
  return rest;
}

const sdkFuncCall = async (client: lark.Client, params: any, options: McpHandlerOptions) => {
  const { tool, context } = options || {};
  const { sdkName, path, httpMethod } = tool || {};
  const credential = options.credential || context?.credential;

  if (!credential) {
    throw new Error('Missing Lark access token');
  }

  if (!sdkName) {
    logger.error(`[passthroughLarkOapiHandler] Invalid sdkName`);
    throw new Error('Invalid sdkName');
  }

  const requestParams = stripPassthroughOnlyParams(params);
  const requestCredential = withRequestCredential(credential);
  const chain = sdkName.split('.');
  let func: any = client;

  for (const element of chain) {
    func = func[element as keyof typeof func];
    if (!func) {
      func = async (fallbackParams: any, ...args: any) =>
        await client.request({ method: httpMethod, url: path, ...fallbackParams }, ...args);
      break;
    }
  }

  if (typeof func !== 'function') {
    func = async (fallbackParams: any, ...args: any) =>
      await client.request({ method: httpMethod, url: path, ...fallbackParams }, ...args);
  }

  return await func(requestParams, requestCredential);
};

export const passthroughLarkOapiHandler: McpHandler = async (client, params, options) => {
  try {
    const response = await sdkFuncCall(client, params, options);
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(response?.data ?? response),
        },
      ],
    };
  } catch (error) {
    return mapPassthroughError(error, {
      tool: options?.tool?.name,
      tokenType: options?.credential?.type || options?.context?.credential?.type,
    });
  }
};
