import express, { Request, Response } from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { McpServerOptions } from '../shared/types';
import type { RequestExecutionContext } from '../../shared/credential';
import { currentVersion } from '../../utils/version';
import { logger } from '../../utils/logger';
import {
  assertNoPassthroughQueryOptions,
  isToolsCallBody,
  parsePassthroughRequestContext,
  PassthroughRequestError,
  sendPassthroughJsonRpcError,
} from './passthrough-utils';
import { sendJsonRpcError } from './utils';

export type InitPassthroughStreamableServerFunction = (
  getNewServer: (context: RequestExecutionContext) => McpServer,
  mcpServerOptions: McpServerOptions,
  runtimeStatus: { toolCount: number },
) => void | Promise<void>;

export const initPassthroughStreamableServer: InitPassthroughStreamableServerFunction = (
  getNewServer,
  options,
  runtimeStatus,
) => {
  const { port, host } = options;

  if (!port || !host) {
    throw new Error('[Lark MCP] Port and host are required');
  }

  const app = express();
  app.use(express.json({ limit: '21mb' }));

  app.get('/healthz', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/readyz', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'ready',
      version: currentVersion,
      mode: 'passthrough',
      transport: 'streamable',
      toolCount: runtimeStatus.toolCount,
      tokenStorage: false,
      oauth: false,
    });
  });

  app.post('/mcp', async (req: Request, res: Response) => {
    try {
      assertNoPassthroughQueryOptions(req);

      const context = parsePassthroughRequestContext(req, isToolsCallBody(req.body));
      const server = getNewServer(context);
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      res.on('close', () => {
        transport.close();
        server.close();
      });

      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      if (error instanceof PassthroughRequestError) {
        sendPassthroughJsonRpcError(res, req, error);
        return;
      }

      sendJsonRpcError(res, error as Error);
    }
  });

  const handleMethodNotAllowed = async (_req: Request, res: Response) => {
    res
      .writeHead(405)
      .end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null }));
  };

  app.get('/mcp', async (req: Request, res: Response) => {
    try {
      logger.info(`[PassthroughStreamableServerTransport] Received GET MCP request`);
      await handleMethodNotAllowed(req, res);
    } catch (error) {
      sendJsonRpcError(res, error as Error);
    }
  });

  app.delete('/mcp', async (req: Request, res: Response) => {
    try {
      logger.info(`[PassthroughStreamableServerTransport] Received DELETE MCP request`);
      await handleMethodNotAllowed(req, res);
    } catch (error) {
      sendJsonRpcError(res, error as Error);
    }
  });

  app.listen(port, host, (error) => {
    if (error) {
      logger.error(`[PassthroughStreamableServerTransport] Server error: ${error}`);
      process.exit(1);
    }
    console.log(`📡 Passthrough streamable endpoint: http://${host}:${port}/mcp`);
    logger.info(`[PassthroughStreamableServerTransport] Streamable endpoint: http://${host}:${port}/mcp`);
  });
};
