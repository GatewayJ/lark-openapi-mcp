import {
  assertNoPassthroughQueryOptions,
  parsePassthroughRequestContext,
  PassthroughRequestError,
  sendPassthroughJsonRpcError,
} from '../../src/mcp-server/transport/passthrough-utils';

const createRequest = (overrides: Record<string, any> = {}) =>
  ({
    headers: {},
    query: {},
    body: {},
    ...overrides,
  }) as any;

describe('passthrough transport utils', () => {
  it('allows initialize requests without Lark credential headers', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'initialize' },
      headers: { 'x-request-id': 'req-1' },
    });

    expect(parsePassthroughRequestContext(req, false)).toEqual({ requestId: 'req-1' });
  });

  it('parses tenant access token headers for tools/call', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'tools/call' },
      headers: {
        'lark-access-token': 'tenant-token',
        'x-lark-token-type': 'tenant_access_token',
        'x-request-id': 'req-2',
      },
    });

    expect(parsePassthroughRequestContext(req, true)).toEqual({
      requestId: 'req-2',
      credential: { accessToken: 'tenant-token', type: 'tenant_access_token' },
    });
  });

  it('rejects tools/call when lark-access-token is missing', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'tools/call' },
      headers: { 'x-lark-token-type': 'user_access_token' },
    });

    expect(() => parsePassthroughRequestContext(req, true)).toThrow(PassthroughRequestError);
    expect(() => parsePassthroughRequestContext(req, true)).toThrow('Missing lark-access-token header');
  });

  it('does not treat Authorization as the Lark access token', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'tools/call' },
      headers: {
        authorization: 'Bearer platform-token',
        'x-lark-token-type': 'user_access_token',
      },
    });

    expect(() => parsePassthroughRequestContext(req, true)).toThrow('Missing lark-access-token header');
  });

  it('rejects lark-access-token values with Bearer prefix', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'tools/call' },
      headers: {
        'lark-access-token': 'Bearer user-token',
        'x-lark-token-type': 'user_access_token',
      },
    });

    expect(() => parsePassthroughRequestContext(req, true)).toThrow('raw access token');
  });

  it('rejects invalid token type', () => {
    const req = createRequest({
      body: { jsonrpc: '2.0', id: 1, method: 'tools/call' },
      headers: {
        'lark-access-token': 'user-token',
        'x-lark-token-type': 'app_access_token',
      },
    });

    expect(() => parsePassthroughRequestContext(req, true)).toThrow('X-Lark-Token-Type must be');
  });

  it('rejects query options in passthrough mode', () => {
    const req = createRequest({ query: { tools: 'preset.default' } });

    expect(() => assertNoPassthroughQueryOptions(req)).toThrow('does not allow query options');
  });

  it('returns batch-shaped errors for batch requests', () => {
    const req = createRequest({
      body: [
        { jsonrpc: '2.0', id: 1, method: 'initialize' },
        { jsonrpc: '2.0', id: 2, method: 'tools/call' },
      ],
    });
    const res = {
      headersSent: false,
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    sendPassthroughJsonRpcError(
      res as any,
      req,
      new PassthroughRequestError('missing_lark_credential', 'Missing lark-access-token header'),
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      expect.objectContaining({ id: 1, error: expect.objectContaining({ data: { code: 'missing_lark_credential' } }) }),
      expect.objectContaining({ id: 2, error: expect.objectContaining({ data: { code: 'missing_lark_credential' } }) }),
    ]);
  });
});
