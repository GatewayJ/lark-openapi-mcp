import { OAPI_MCP_ERROR_CODE } from '../../utils/constants';

type PassthroughErrorPayload = {
  code: string;
  message: string;
  retryable?: boolean;
  status?: number;
  larkCode?: number;
  requestId?: string;
  tool?: string;
  tokenType?: string;
};

export function passthroughToolError(payload: PassthroughErrorPayload) {
  return {
    isError: true,
    content: [{ type: 'text' as const, text: JSON.stringify(payload) }],
  };
}

export function mapPassthroughError(error: any, extra: Pick<PassthroughErrorPayload, 'tool' | 'tokenType'> = {}) {
  const responseData = error?.response?.data;
  const status = error?.response?.status || error?.status;
  const larkCode = typeof responseData?.code === 'number' ? responseData.code : undefined;
  const requestId = responseData?.request_id || responseData?.requestId;
  const message = responseData?.msg || responseData?.message || error?.message || 'passthrough tool call failed';

  if (
    larkCode === OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_INVALID ||
    /token.*(invalid|expired)|invalid.*token|expired.*token/i.test(message)
  ) {
    return passthroughToolError({ code: 'lark_token_invalid', message, status, larkCode, requestId, ...extra });
  }

  if (larkCode === OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_UNAUTHORIZED || status === 403) {
    return passthroughToolError({ code: 'lark_scope_missing', message, status, larkCode, requestId, ...extra });
  }

  if (status === 429 || status >= 500) {
    return passthroughToolError({
      code: 'upstream_retryable',
      message,
      retryable: true,
      status,
      larkCode,
      requestId,
      ...extra,
    });
  }

  if (larkCode !== undefined || responseData) {
    return passthroughToolError({ code: 'lark_openapi_error', message, status, larkCode, requestId, ...extra });
  }

  return passthroughToolError({ code: 'internal_error', message, status, ...extra });
}
