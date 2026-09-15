"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSSEServer = void 0;
const express_1 = __importDefault(require("express"));
const sse_js_1 = require("@modelcontextprotocol/sdk/server/sse.js");
const auth_1 = require("../../auth");
const utils_1 = require("./utils");
const logger_1 = require("../../utils/logger");
const initSSEServer = (getNewServer, options, { needAuthFlow } = { needAuthFlow: false }) => {
    const { userAccessToken, port, host, oauth } = options;
    if (!port || !host) {
        throw new Error('[Lark MCP] Port and host are required');
    }
    const app = (0, express_1.default)();
    const transports = new Map();
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
    app.get('/sse', authMiddleware, async (req, res) => {
        var _a;
        logger_1.logger.info(`[SSEServerTransport] Received GET SSE request`);
        const token = (_a = req.auth) === null || _a === void 0 ? void 0 : _a.token;
        const { data } = (0, utils_1.parseMCPServerOptionsFromRequest)(req);
        const server = getNewServer({ ...options, ...data, userAccessToken: data.userAccessToken || token }, authHandler);
        const transport = new sse_js_1.SSEServerTransport('/messages', res);
        transports.set(transport.sessionId, transport);
        res.on('close', () => {
            transport.close();
            server.close();
            transports.delete(transport.sessionId);
        });
        await server.connect(transport);
    });
    app.post('/messages', authMiddleware, async (req, res) => {
        console.log('Received POST messages request');
        logger_1.logger.info(`[SSEServerTransport] Received POST messages request`);
        const sessionId = req.query.sessionId;
        const transport = transports.get(sessionId);
        if (!transport) {
            res.status(400).send('No transport found for sessionId');
            return;
        }
        await transport.handlePostMessage(req, res);
    });
    console.log('⚠️ SSE Mode is deprecated and will be removed in a future version. Please use Streamable mode instead.');
    app.listen(port, host, (error) => {
        if (error) {
            logger_1.logger.error(`[SSEServerTransport] Server error: ${error}`);
            process.exit(1);
        }
        console.log(`📡 SSE endpoint: http://${host}:${port}/sse`);
        logger_1.logger.info(`[SSEServerTransport] SSE endpoint: http://${host}:${port}/sse`);
    });
};
exports.initSSEServer = initSSEServer;
