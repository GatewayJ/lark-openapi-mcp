import { passthroughLarkOapiHandler } from '../../src/mcp-tool/utils/passthrough-handler';

const mockWithUserAccessToken = jest.fn((token) => ({ tokenType: 'user', token }));
const mockWithTenantToken = jest.fn((token) => ({ tokenType: 'tenant', token }));

jest.mock('@larksuiteoapi/node-sdk', () => ({
  withUserAccessToken: (token: string) => mockWithUserAccessToken(token),
  withTenantToken: (token: string) => mockWithTenantToken(token),
}));

describe('passthroughLarkOapiHandler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('injects user access token into SDK methods and strips useUAT', async () => {
    const create = jest.fn().mockResolvedValue({ data: { ok: true } });
    const client = { im: { message: { create } } };

    const result = await passthroughLarkOapiHandler(
      client as any,
      { data: { text: 'hello' }, useUAT: true },
      {
        tool: {
          project: 'im',
          name: 'im.v1.message.create',
          description: '',
          schema: {},
          sdkName: 'im.message.create',
        },
        credential: { type: 'user_access_token', accessToken: 'uat-1' },
      },
    );

    expect(result.isError).toBeUndefined();
    expect(mockWithUserAccessToken).toHaveBeenCalledWith('uat-1');
    expect(create).toHaveBeenCalledWith({ data: { text: 'hello' } }, { tokenType: 'user', token: 'uat-1' });
  });

  it('injects tenant access token into fallback client.request', async () => {
    const request = jest.fn().mockResolvedValue({ data: { ok: true } });
    const client = { request };

    const result = await passthroughLarkOapiHandler(
      client as any,
      { data: { name: 'doc' }, useUAT: false },
      {
        tool: {
          project: 'docx',
          name: 'docx.v1.document.create',
          description: '',
          schema: {},
          sdkName: 'docx.document.create',
          httpMethod: 'POST',
          path: '/open-apis/docx/v1/documents',
        },
        credential: { type: 'tenant_access_token', accessToken: 'tat-1' },
      },
    );

    expect(result.isError).toBeUndefined();
    expect(mockWithTenantToken).toHaveBeenCalledWith('tat-1');
    expect(request).toHaveBeenCalledWith(
      { method: 'POST', url: '/open-apis/docx/v1/documents', data: { name: 'doc' } },
      { tokenType: 'tenant', token: 'tat-1' },
    );
  });

  it('maps Lark token errors to stable passthrough error codes', async () => {
    const create = jest.fn().mockRejectedValue({
      response: {
        status: 401,
        data: { code: 99991668, msg: 'token invalid', request_id: 'req-lark-1' },
      },
    });
    const client = { im: { message: { create } } };

    const result = await passthroughLarkOapiHandler(
      client as any,
      { data: { text: 'hello' } },
      {
        tool: {
          project: 'im',
          name: 'im.v1.message.create',
          description: '',
          schema: {},
          sdkName: 'im.message.create',
        },
        credential: { type: 'user_access_token', accessToken: 'uat-1' },
      },
    );

    expect(result.isError).toBe(true);
    expect(JSON.parse(result.content[0].text as string)).toEqual(
      expect.objectContaining({
        code: 'lark_token_invalid',
        larkCode: 99991668,
        requestId: 'req-lark-1',
        tool: 'im.v1.message.create',
      }),
    );
  });

  it('marks upstream rate limits as retryable', async () => {
    const request = jest.fn().mockRejectedValue({
      response: {
        status: 429,
        data: { code: 999999, msg: 'rate limited', request_id: 'req-lark-2' },
      },
    });
    const client = { request };

    const result = await passthroughLarkOapiHandler(
      client as any,
      { data: { name: 'doc' } },
      {
        tool: {
          project: 'docx',
          name: 'docx.v1.document.create',
          description: '',
          schema: {},
          sdkName: 'docx.document.create',
          httpMethod: 'POST',
          path: '/open-apis/docx/v1/documents',
        },
        credential: { type: 'tenant_access_token', accessToken: 'tat-1' },
      },
    );

    expect(result.isError).toBe(true);
    expect(JSON.parse(result.content[0].text as string)).toEqual(
      expect.objectContaining({
        code: 'upstream_retryable',
        retryable: true,
        status: 429,
      }),
    );
  });
});
