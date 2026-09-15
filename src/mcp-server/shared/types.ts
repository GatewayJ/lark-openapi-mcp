import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { LarkAuthHandler } from '../../auth/handler';
import type { SettableValue, TokenMode, ToolNameCase } from '../../mcp-tool/types';
export type { LarkTokenType, RequestCredential, RequestExecutionContext } from '../../shared/credential';

export type McpServerType = 'oapi' | 'recall';
export type McpServerTransport = 'stdio' | 'sse' | 'streamable';
export type CredentialMode = 'standalone' | 'passthrough';

export const mcpServerOptionSchema = z.object({
  tools: z.union([z.string(), z.array(z.string())]).optional(),
  language: z.enum(['zh', 'en']).optional(),
  toolNameCase: z.enum(['snake', 'camel']).optional(),
  tokenMode: z.enum(['auto', 'user_access_token', 'tenant_access_token']).optional(),
  credentialMode: z.enum(['standalone', 'passthrough']).optional(),
});

export interface McpServerOptions {
  appId?: string;
  appSecret?: string;
  domain?: string;
  tools?: string[];
  language?: 'zh' | 'en';
  toolNameCase?: ToolNameCase;
  tokenMode?: TokenMode;
  credentialMode?: CredentialMode;
  userAccessToken?: string | SettableValue;
  oauth?: boolean;
  scope?: string[];

  mode?: McpServerTransport;
  host?: string;
  port?: number;
}

export type InitTransportServerFunction = (
  getNewServer: (options?: McpServerOptions, authHandler?: LarkAuthHandler) => McpServer,
  mcpServerOptions: McpServerOptions,
  authOptions?: { needAuthFlow: boolean },
) => void | Promise<void>;
