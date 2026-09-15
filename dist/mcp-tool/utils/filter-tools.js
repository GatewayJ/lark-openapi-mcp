"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSTHROUGH_DENIED_TOOL_PREFIXES = void 0;
exports.filterTools = filterTools;
exports.isDeniedPassthroughTool = isDeniedPassthroughTool;
exports.filterPassthroughTools = filterPassthroughTools;
const types_1 = require("../types");
exports.PASSTHROUGH_DENIED_TOOL_PREFIXES = ['auth.v3.'];
function filterTools(tools, options) {
    let filteredTools = tools.filter((tool) => {
        var _a, _b;
        return ((_a = options.allowTools) === null || _a === void 0 ? void 0 : _a.includes(tool.name)) ||
            ((_b = options.allowProjects) === null || _b === void 0 ? void 0 : _b.includes(tool.project));
    });
    // Filter by token mode
    if (options.tokenMode && options.tokenMode !== types_1.TokenMode.AUTO) {
        filteredTools = filteredTools.filter((tool) => {
            if (!tool.accessTokens) {
                return false;
            }
            if (options.tokenMode === types_1.TokenMode.USER_ACCESS_TOKEN) {
                return tool.accessTokens.includes('user');
            }
            if (options.tokenMode === types_1.TokenMode.TENANT_ACCESS_TOKEN) {
                return tool.accessTokens.includes('tenant');
            }
            return true;
        });
    }
    return filteredTools;
}
function isDeniedPassthroughTool(tool) {
    return exports.PASSTHROUGH_DENIED_TOOL_PREFIXES.some((prefix) => tool.name.startsWith(prefix));
}
function filterPassthroughTools(tools, options) {
    const filteredTools = filterTools(tools, { ...options, tokenMode: types_1.TokenMode.AUTO });
    const deniedTools = filteredTools.filter(isDeniedPassthroughTool);
    if (deniedTools.length) {
        throw new Error(`passthrough mode forbids credential issuing tools: ${deniedTools.map((tool) => tool.name).join(', ')}`);
    }
    const missingAccessTokenMetadata = filteredTools.filter((tool) => { var _a; return !((_a = tool.accessTokens) === null || _a === void 0 ? void 0 : _a.length); });
    if (missingAccessTokenMetadata.length) {
        throw new Error(`passthrough mode requires accessTokens metadata: ${missingAccessTokenMetadata.map((tool) => tool.name).join(', ')}`);
    }
    return filteredTools;
}
