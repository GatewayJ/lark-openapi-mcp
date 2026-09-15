import type { ToolName, ProjectName } from '../tools';
import { McpTool, ToolsFilterOptions, TokenMode } from '../types';

export const PASSTHROUGH_DENIED_TOOL_PREFIXES = ['auth.v3.'];

export function filterTools(tools: McpTool[], options: ToolsFilterOptions) {
  let filteredTools = tools.filter(
    (tool) =>
      options.allowTools?.includes(tool.name as ToolName) ||
      options.allowProjects?.includes(tool.project as ProjectName),
  );

  // Filter by token mode
  if (options.tokenMode && options.tokenMode !== TokenMode.AUTO) {
    filteredTools = filteredTools.filter((tool) => {
      if (!tool.accessTokens) {
        return false;
      }
      if (options.tokenMode === TokenMode.USER_ACCESS_TOKEN) {
        return tool.accessTokens.includes('user');
      }
      if (options.tokenMode === TokenMode.TENANT_ACCESS_TOKEN) {
        return tool.accessTokens.includes('tenant');
      }
      return true;
    });
  }

  return filteredTools;
}

export function isDeniedPassthroughTool(tool: Pick<McpTool, 'name'>) {
  return PASSTHROUGH_DENIED_TOOL_PREFIXES.some((prefix) => tool.name.startsWith(prefix));
}

export function filterPassthroughTools(tools: McpTool[], options: Omit<ToolsFilterOptions, 'tokenMode'>) {
  const filteredTools = filterTools(tools, { ...options, tokenMode: TokenMode.AUTO });
  const deniedTools = filteredTools.filter(isDeniedPassthroughTool);

  if (deniedTools.length) {
    throw new Error(
      `passthrough mode forbids credential issuing tools: ${deniedTools.map((tool) => tool.name).join(', ')}`,
    );
  }

  const missingAccessTokenMetadata = filteredTools.filter((tool) => !tool.accessTokens?.length);

  if (missingAccessTokenMetadata.length) {
    throw new Error(
      `passthrough mode requires accessTokens metadata: ${missingAccessTokenMetadata.map((tool) => tool.name).join(', ')}`,
    );
  }

  return filteredTools;
}
