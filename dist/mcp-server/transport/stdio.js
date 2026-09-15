"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStdioServer = void 0;
const express_1 = __importDefault(require("express"));
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const auth_1 = require("../../auth");
const auth_2 = require("../../auth");
const logger_1 = require("../../utils/logger");
const initStdioServer = async (getNewServer, options, { needAuthFlow } = { needAuthFlow: false }) => {
    const { userAccessToken, appId, oauth } = options;
    let authHandler;
    if (!userAccessToken && needAuthFlow) {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        authHandler = new auth_2.LarkAuthHandlerLocal(app, options);
        if (oauth) {
            authHandler.setupRoutes();
        }
    }
    const transport = new stdio_js_1.StdioServerTransport();
    const userAccessTokenValue = userAccessToken
        ? userAccessToken
        : appId
            ? { getter: async () => await auth_1.authStore.getLocalAccessToken(appId) }
            : undefined;
    const mcpServer = getNewServer({ ...options, userAccessToken: userAccessTokenValue }, authHandler);
    logger_1.logger.info(`[StdioServerTransport] Connecting to MCP Server, userAccessToken: ${Boolean(userAccessToken)}, appId: ${appId}`);
    mcpServer.connect(transport).catch((error) => {
        logger_1.logger.error(`[StdioServerTransport] MCP Connect Error: ${error}`);
        process.exit(1);
    });
};
exports.initStdioServer = initStdioServer;
