"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStreamableServer = void 0;
const express_1 = __importDefault(require("express"));
const streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const utils_1 = require("./utils");
const auth_1 = require("../../auth");
const logger_1 = require("../../utils/logger");
const initStreamableServer = (getNewServer, options, { needAuthFlow } = { needAuthFlow: false }) => {
    const { userAccessToken, oauth, port, host } = options;
    if (!port || !host) {
        throw new Error('[Lark MCP] Port and host are required');
    }
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    let authHandler;
    if (!userAccessToken && needAuthFlow) {
        authHandler = new auth_1.LarkAuthHandler(app, options);
        if (oauth) {
            authHandler.setupRoutes();
        }
    }
    const authMiddleware = (req, res, next) => {
        var _a;
        if (authHandler && oauth) {
            authHandler.authenticateRequest(req, res, next);
        }
        else {
            const authToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (authToken) {
                req.auth = { token: authToken, clientId: 'client_id_for_local_auth', scopes: [] };
            }
            next();
        }
    };
    app.post('/mcp', authMiddleware, async (req, res) => {
        var _a;
        const token = (_a = req.auth) === null || _a === void 0 ? void 0 : _a.token;
        const { data } = (0, utils_1.parseMCPServerOptionsFromRequest)(req);
        const server = getNewServer({ ...options, ...data, userAccessToken: data.userAccessToken || token }, authHandler);
        const transport = new streamableHttp_js_1.StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
        res.on('close', () => {
            transport.close();
            server.close();
        });
        await server.connect(transport);
        await transport.handleRequest(req, res, req.body);
    });
    const handleMethodNotAllowed = async (_req, res) => {
        res
            .writeHead(405)
            .end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null }));
    };
    app.get('/mcp', async (req, res) => {
        try {
            console.log('Received GET MCP request');
            logger_1.logger.info(`[StreamableServerTransport] Received GET MCP request`);
            await handleMethodNotAllowed(req, res);
        }
        catch (error) {
            (0, utils_1.sendJsonRpcError)(res, error);
        }
    });
    app.delete('/mcp', async (req, res) => {
        try {
            console.log('Received DELETE MCP request');
            logger_1.logger.info(`[StreamableServerTransport] Received DELETE MCP request`);
            await handleMethodNotAllowed(req, res);
        }
        catch (error) {
            (0, utils_1.sendJsonRpcError)(res, error);
        }
    });
    app.listen(port, host, (error) => {
        if (error) {
            logger_1.logger.error(`[StreamableServerTransport] Server error: ${error}`);
            process.exit(1);
        }
        console.log(`📡 Streamable endpoint: http://${host}:${port}/mcp`);
        logger_1.logger.info(`[StreamableServerTransport] Streamable endpoint: http://${host}:${port}/mcp`);
    });
};
exports.initStreamableServer = initStreamableServer;
