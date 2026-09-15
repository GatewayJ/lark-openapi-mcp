import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PassthroughLarkMcpTool } from '../../mcp-tool/passthrough-mcp-tool';
import type { McpServerOptions } from './types';
import type { RequestExecutionContext } from '../../shared/credential';
import type { ToolName } from '../../mcp-tool/tools';
import { presetTools } from '../../mcp-tool/constants';
import { noop } from '../../utils/noop';
import { currentVersion } from '../../utils/version';
import { oapiHttpInstance } from '../../utils/http-instance';
import { initPassthroughStreamableServer } from '../transport/streamable-passthrough';

export function initPassthroughOAPIMcpServer(options: McpServerOptions, context: RequestExecutionContext) {
  let allowTools = options.tools || [];

  for (const [presetName, presetToolNames] of Object.entries(presetTools)) {
    if (allowTools.includes(presetName)) {
      allowTools = [...presetToolNames, ...allowTools];
    }
  }

  allowTools = Array.from(new Set(allowTools));

  const mcpServer = new McpServer({ id: 'lark-mcp-server', name: 'Feishu/Lark MCP Server', version: currentVersion });
  const toolsOptions = allowTools.length
    ? { allowTools: allowTools as ToolName[], language: options.language }
    : { language: options.language };

  const larkClient = new PassthroughLarkMcpTool(
    {
      logger: { warn: noop, error: noop, debug: noop, info: noop, trace: noop },
      httpInstance: oapiHttpInstance,
      domain: options.domain,
      toolsOptions,
    },
    context,
  );

  larkClient.registerMcpServer(mcpServer, { toolNameCase: options.toolNameCase });

  return { mcpServer, larkClient };
}

export async function initPassthroughMcpServerWithTransport(options: McpServerOptions) {
  if (options.mode !== 'streamable') {
    throw new Error('passthrough credential mode only supports streamable transport');
  }

  const probe = initPassthroughOAPIMcpServer(options, { requestId: 'startup-probe' });
  const toolCount = probe.larkClient.getTools().length;
  await probe.mcpServer.close();

  const getNewServer = (context: RequestExecutionContext) => initPassthroughOAPIMcpServer(options, context).mcpServer;

  await initPassthroughStreamableServer(getNewServer, options, { toolCount });
}
