import { Client } from '@larksuiteoapi/node-sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { LarkTokenType, RequestExecutionContext } from '../shared/credential';
import type { LarkMcpToolOptions, McpTool, ToolNameCase } from './types';
import { AllTools, AllToolsZh } from './tools';
import { defaultToolNames } from './constants';
import { caseTransf } from './utils/case-transf';
import { filterPassthroughTools, isDeniedPassthroughTool } from './utils/filter-tools';
import { passthroughLarkOapiHandler } from './utils/passthrough-handler';
import { mapPassthroughError, passthroughToolError } from './utils/passthrough-error';
import { logger } from '../utils/logger';

const credentialToAccessToken = {
  user_access_token: 'user',
  tenant_access_token: 'tenant',
} as const;

function hasExplicitUseUAT(params: any) {
  return !!params && typeof params === 'object' && Object.prototype.hasOwnProperty.call(params, 'useUAT');
}

function isUseUATConsistent(params: any, tokenType: LarkTokenType) {
  if (!hasExplicitUseUAT(params)) {
    return true;
  }

  return tokenType === 'user_access_token' ? params.useUAT === true : params.useUAT === false;
}

export class PassthroughLarkMcpTool {
  private client: Client;

  private context: RequestExecutionContext;

  private allTools: McpTool[] = [];

  constructor(options: LarkMcpToolOptions, context: RequestExecutionContext) {
    this.context = Object.freeze({
      ...context,
      credential: context.credential ? Object.freeze({ ...context.credential }) : undefined,
    });

    this.client =
      options.client ||
      new Client({
        ...options,
        appId: '__passthrough__',
        appSecret: '__passthrough__',
        disableTokenCache: true,
      });

    const isZH = options.toolsOptions?.language === 'zh';
    const filterOptions = {
      allowTools: defaultToolNames,
      ...options.toolsOptions,
    };

    this.allTools = filterPassthroughTools(isZH ? AllToolsZh : AllTools, filterOptions);

    logger.info(`[PassthroughLarkMcpTool] Initialized with ${this.allTools.length} tools`);
  }

  getTools(): McpTool[] {
    return this.allTools;
  }

  registerMcpServer(server: McpServer, options?: { toolNameCase?: ToolNameCase }): void {
    for (const tool of this.allTools) {
      server.tool(caseTransf(tool.name, options?.toolNameCase), tool.description, tool.schema, async (params: any) => {
        const credential = this.context.credential;

        if (!credential) {
          return passthroughToolError({
            code: 'missing_lark_credential',
            message: 'tools/call requires Authorization and X-Lark-Token-Type headers',
            tool: tool.name,
          });
        }

        if (isDeniedPassthroughTool(tool)) {
          return passthroughToolError({
            code: 'credential_tool_forbidden',
            message: 'passthrough mode does not expose credential issuing tools',
            tool: tool.name,
            tokenType: credential.type,
          });
        }

        const requiredAccessToken = credentialToAccessToken[credential.type];
        if (!tool.accessTokens?.includes(requiredAccessToken)) {
          return passthroughToolError({
            code: 'token_type_not_supported',
            message: 'tool does not support the request token type',
            tool: tool.name,
            tokenType: credential.type,
          });
        }

        if (!isUseUATConsistent(params, credential.type)) {
          return passthroughToolError({
            code: 'identity_override_not_allowed',
            message: 'passthrough mode does not allow useUAT to override X-Lark-Token-Type',
            tool: tool.name,
            tokenType: credential.type,
          });
        }

        const handler = tool.customHandler || passthroughLarkOapiHandler;
        logger.info(`[PassthroughLarkMcpTool] Calling tool: ${tool.name}`);

        try {
          return await handler(
            this.client,
            {
              ...params,
              useUAT: credential.type === 'user_access_token',
            },
            { context: this.context, credential, tool },
          );
        } catch (error) {
          return mapPassthroughError(error, { tool: tool.name, tokenType: credential.type });
        }
      });
    }
  }
}
