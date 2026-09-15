"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPassthroughOAPIMcpServer = initPassthroughOAPIMcpServer;
exports.initPassthroughMcpServerWithTransport = initPassthroughMcpServerWithTransport;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const passthrough_mcp_tool_1 = require("../../mcp-tool/passthrough-mcp-tool");
const constants_1 = require("../../mcp-tool/constants");
const noop_1 = require("../../utils/noop");
const version_1 = require("../../utils/version");
const http_instance_1 = require("../../utils/http-instance");
const streamable_passthrough_1 = require("../transport/streamable-passthrough");
function initPassthroughOAPIMcpServer(options, context) {
    let allowTools = options.tools || [];
    for (const [presetName, presetToolNames] of Object.entries(constants_1.presetTools)) {
        if (allowTools.includes(presetName)) {
            allowTools = [...presetToolNames, ...allowTools];
        }
    }
    allowTools = Array.from(new Set(allowTools));
    const mcpServer = new mcp_js_1.McpServer({ id: 'lark-mcp-server', name: 'Feishu/Lark MCP Server', version: version_1.currentVersion });
    const toolsOptions = allowTools.length
        ? { allowTools: allowTools, language: options.language }
        : { language: options.language };
    const larkClient = new passthrough_mcp_tool_1.PassthroughLarkMcpTool({
        logger: { warn: noop_1.noop, error: noop_1.noop, debug: noop_1.noop, info: noop_1.noop, trace: noop_1.noop },
        httpInstance: http_instance_1.oapiHttpInstance,
        domain: options.domain,
        toolsOptions,
    }, context);
    larkClient.registerMcpServer(mcpServer, { toolNameCase: options.toolNameCase });
    return { mcpServer, larkClient };
}
async function initPassthroughMcpServerWithTransport(options) {
    if (options.mode !== 'streamable') {
        throw new Error('passthrough credential mode only supports streamable transport');
    }
    const probe = initPassthroughOAPIMcpServer(options, { requestId: 'startup-probe' });
    const toolCount = probe.larkClient.getTools().length;
    await probe.mcpServer.close();
    const getNewServer = (context) => initPassthroughOAPIMcpServer(options, context).mcpServer;
    await (0, streamable_passthrough_1.initPassthroughStreamableServer)(getNewServer, options, { toolCount });
}
