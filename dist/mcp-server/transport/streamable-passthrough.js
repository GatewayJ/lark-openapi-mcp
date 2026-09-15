"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPassthroughStreamableServer = void 0;
const express_1 = __importDefault(require("express"));
const streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const version_1 = require("../../utils/version");
const logger_1 = require("../../utils/logger");
const passthrough_utils_1 = require("./passthrough-utils");
const utils_1 = require("./utils");
const initPassthroughStreamableServer = (getNewServer, options, runtimeStatus) => {
    const { port, host } = options;
    if (!port || !host) {
        throw new Error('[Lark MCP] Port and host are required');
    }
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '21mb' }));
    app.get('/healthz', (_req, res) => {
        res.status(200).json({ status: 'ok' });
    });
    app.get('/readyz', (_req, res) => {
        res.status(200).json({
            status: 'ready',
            version: version_1.currentVersion,
            mode: 'passthrough',
            transport: 'streamable',
            toolCount: runtimeStatus.toolCount,
            tokenStorage: false,
            oauth: false,
        });
    });
    app.post('/mcp', async (req, res) => {
        try {
            (0, passthrough_utils_1.assertNoPassthroughQueryOptions)(req);
            const context = (0, passthrough_utils_1.parsePassthroughRequestContext)(req, (0, passthrough_utils_1.isToolsCallBody)(req.body));
            const server = getNewServer(context);
            const transport = new streamableHttp_js_1.StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
            res.on('close', () => {
                transport.close();
                server.close();
            });
            await server.connect(transport);
            await transport.handleRequest(req, res, req.body);
        }
        catch (error) {
            if (error instanceof passthrough_utils_1.PassthroughRequestError) {
                (0, passthrough_utils_1.sendPassthroughJsonRpcError)(res, req, error);
                return;
            }
            (0, utils_1.sendJsonRpcError)(res, error);
        }
    });
    const handleMethodNotAllowed = async (_req, res) => {
        res
            .writeHead(405)
            .end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null }));
    };
    app.get('/mcp', async (req, res) => {
        try {
            logger_1.logger.info(`[PassthroughStreamableServerTransport] Received GET MCP request`);
            await handleMethodNotAllowed(req, res);
        }
        catch (error) {
            (0, utils_1.sendJsonRpcError)(res, error);
        }
    });
    app.delete('/mcp', async (req, res) => {
        try {
            logger_1.logger.info(`[PassthroughStreamableServerTransport] Received DELETE MCP request`);
            await handleMethodNotAllowed(req, res);
        }
        catch (error) {
            (0, utils_1.sendJsonRpcError)(res, error);
        }
    });
    app.listen(port, host, (error) => {
        if (error) {
            logger_1.logger.error(`[PassthroughStreamableServerTransport] Server error: ${error}`);
            process.exit(1);
        }
        console.log(`📡 Passthrough streamable endpoint: http://${host}:${port}/mcp`);
        logger_1.logger.info(`[PassthroughStreamableServerTransport] Streamable endpoint: http://${host}:${port}/mcp`);
    });
};
exports.initPassthroughStreamableServer = initPassthroughStreamableServer;
