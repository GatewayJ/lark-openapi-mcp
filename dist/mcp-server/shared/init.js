"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOAPIMcpServer = initOAPIMcpServer;
exports.initRecallMcpServer = initRecallMcpServer;
exports.initMcpServerWithTransport = initMcpServerWithTransport;
const larkmcp = __importStar(require("../../mcp-tool"));
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const transport_1 = require("../transport");
const noop_1 = require("../../utils/noop");
const version_1 = require("../../utils/version");
const http_instance_1 = require("../../utils/http-instance");
const logger_1 = require("../../utils/logger");
function initOAPIMcpServer(options, authHandler) {
    const { appId, appSecret, userAccessToken, tokenMode, domain, oauth } = options;
    if (!appId || !appSecret) {
        console.error('Error: Missing App Credentials');
        throw new Error('Missing App Credentials');
    }
    let allowTools = options.tools || [];
    for (const [presetName, presetTools] of Object.entries(larkmcp.presetTools)) {
        if (allowTools.includes(presetName)) {
            allowTools = [...presetTools, ...allowTools];
        }
    }
    // Unique
    allowTools = Array.from(new Set(allowTools));
    // Create MCP Server
    const mcpServer = new mcp_js_1.McpServer({ id: 'lark-mcp-server', name: 'Feishu/Lark MCP Server', version: version_1.currentVersion });
    const toolsOptions = allowTools.length
        ? { allowTools: allowTools, language: options.language }
        : { language: options.language };
    const larkClient = new larkmcp.LarkMcpTool({
        appId,
        appSecret,
        logger: { warn: noop_1.noop, error: noop_1.noop, debug: noop_1.noop, info: noop_1.noop, trace: noop_1.noop },
        httpInstance: http_instance_1.oapiHttpInstance,
        domain,
        toolsOptions,
        tokenMode,
        oauth,
    }, authHandler);
    if (userAccessToken) {
        larkClient.updateUserAccessToken(userAccessToken);
    }
    larkClient.registerMcpServer(mcpServer, { toolNameCase: options.toolNameCase });
    return { mcpServer, larkClient };
}
function initRecallMcpServer(options) {
    const server = new mcp_js_1.McpServer({
        id: 'lark-recall-mcp-server',
        name: 'Lark Recall MCP Service',
        version: version_1.currentVersion,
    });
    server.tool(larkmcp.RecallTool.name, larkmcp.RecallTool.description, larkmcp.RecallTool.schema, (params) => larkmcp.RecallTool.handler(params, options));
    return server;
}
async function initMcpServerWithTransport(serverType, options) {
    const { mode, userAccessToken, oauth } = options;
    if (userAccessToken && oauth) {
        logger_1.logger.error(`[initMcpServerWithTransport] userAccessToken and oauth cannot be used together`);
        throw new Error('userAccessToken and oauth cannot be used together');
    }
    const getNewServer = (commonOptions, authHandler) => {
        if (serverType === 'oapi') {
            const { mcpServer } = initOAPIMcpServer({ ...options, ...commonOptions }, authHandler);
            return mcpServer;
        }
        else if (serverType === 'recall') {
            return initRecallMcpServer({ ...options, ...commonOptions });
        }
        logger_1.logger.error(`[initMcpServerWithTransport] Invalid server type: ${serverType}`);
        throw new Error('Invalid server type');
    };
    const needAuthFlow = serverType === 'oapi';
    switch (mode) {
        case 'stdio':
            await (0, transport_1.initStdioServer)(getNewServer, options, { needAuthFlow });
            break;
        case 'sse':
            await (0, transport_1.initSSEServer)(getNewServer, options, { needAuthFlow });
            break;
        case 'streamable':
            await (0, transport_1.initStreamableServer)(getNewServer, options, { needAuthFlow });
            break;
        default:
            throw new Error('Invalid mode:' + mode);
    }
}
