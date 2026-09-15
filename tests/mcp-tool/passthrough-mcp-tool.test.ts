const mockBothHandler = jest.fn(() => ({ content: [{ type: 'text' as const, text: '{"ok":true}' }] }));
const mockThrowHandler = jest.fn(() => {
  throw new Error('handler exploded');
});

jest.mock('../../src/mcp-tool/tools', () => ({
  AllTools: [
    {
      project: 'demo',
      name: 'demo.both',
      description: 'both token tool',
      schema: {},
      accessTokens: ['user', 'tenant'],
      customHandler: mockBothHandler,
    },
    {
      project: 'demo',
      name: 'demo.missingMetadata',
      description: 'missing metadata tool',
      schema: {},
      customHandler: jest.fn(),
    },
    {
      project: 'demo',
      name: 'demo.throws',
      description: 'throwing tool',
      schema: {},
      accessTokens: ['user'],
      customHandler: mockThrowHandler,
    },
    {
      project: 'auth',
      name: 'auth.v3.auth.appAccessToken',
      description: 'credential tool',
      schema: {},
      customHandler: jest.fn(),
    },
  ],
  AllToolsZh: [],
}));

jest.mock('../../src/mcp-tool/constants', () => ({
  defaultToolNames: ['demo.both'],
  presetTools: {},
}));

import { PassthroughLarkMcpTool } from '../../src/mcp-tool/passthrough-mcp-tool';

describe('PassthroughLarkMcpTool', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('passes tenant credential to custom handlers and keeps useUAT as a consistency flag', async () => {
    const server = { tool: jest.fn() };
    const tool = new PassthroughLarkMcpTool(
      { client: {} as any, toolsOptions: { allowTools: ['demo.both' as any] } },
      { requestId: 'req-1', credential: { type: 'tenant_access_token', accessToken: 'tat-1' } },
    );

    tool.registerMcpServer(server as any);
    const handler = server.tool.mock.calls[0][3];
    await handler({ data: { ok: true }, useUAT: false });

    expect(mockBothHandler).toHaveBeenCalledWith(
      {},
      { data: { ok: true }, useUAT: false },
      {
        context: { requestId: 'req-1', credential: { type: 'tenant_access_token', accessToken: 'tat-1' } },
        credential: { type: 'tenant_access_token', accessToken: 'tat-1' },
        tool: expect.objectContaining({ name: 'demo.both' }),
      },
    );
  });

  it('rejects useUAT identity override before calling downstream handlers', async () => {
    const server = { tool: jest.fn() };
    const tool = new PassthroughLarkMcpTool(
      { client: {} as any, toolsOptions: { allowTools: ['demo.both' as any] } },
      { requestId: 'req-2', credential: { type: 'user_access_token', accessToken: 'uat-1' } },
    );

    tool.registerMcpServer(server as any);
    const handler = server.tool.mock.calls[0][3];
    const result = await handler({ useUAT: false });

    expect(mockBothHandler).not.toHaveBeenCalled();
    expect(result.isError).toBe(true);
    expect(JSON.parse(result.content[0].text).code).toBe('identity_override_not_allowed');
  });

  it('fails closed when allowlist includes a tool without accessTokens metadata', () => {
    expect(
      () =>
        new PassthroughLarkMcpTool(
          { client: {} as any, toolsOptions: { allowTools: ['demo.missingMetadata' as any] } },
          { requestId: 'req-3' },
        ),
    ).toThrow('requires accessTokens metadata');
  });

  it('forbids auth.v3 credential tools even when explicitly allowlisted', () => {
    expect(
      () =>
        new PassthroughLarkMcpTool(
          { client: {} as any, toolsOptions: { allowTools: ['auth.v3.auth.appAccessToken' as any] } },
          { requestId: 'req-4' },
        ),
    ).toThrow('forbids credential issuing tools');
  });

  it('maps custom handler exceptions to stable tool errors', async () => {
    const server = { tool: jest.fn() };
    const tool = new PassthroughLarkMcpTool(
      { client: {} as any, toolsOptions: { allowTools: ['demo.throws' as any] } },
      { requestId: 'req-5', credential: { type: 'user_access_token', accessToken: 'uat-1' } },
    );

    tool.registerMcpServer(server as any);
    const handler = server.tool.mock.calls[0][3];
    const result = await handler({});

    expect(mockThrowHandler).toHaveBeenCalled();
    expect(result.isError).toBe(true);
    expect(JSON.parse(result.content[0].text)).toEqual(
      expect.objectContaining({
        code: 'internal_error',
        message: 'handler exploded',
        tool: 'demo.throws',
        tokenType: 'user_access_token',
      }),
    );
  });
});
