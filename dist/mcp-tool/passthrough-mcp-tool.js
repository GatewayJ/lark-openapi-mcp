"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassthroughLarkMcpTool = void 0;
const node_sdk_1 = require("@larksuiteoapi/node-sdk");
const tools_1 = require("./tools");
const constants_1 = require("./constants");
const case_transf_1 = require("./utils/case-transf");
const filter_tools_1 = require("./utils/filter-tools");
const passthrough_handler_1 = require("./utils/passthrough-handler");
const passthrough_error_1 = require("./utils/passthrough-error");
const logger_1 = require("../utils/logger");
const credentialToAccessToken = {
    user_access_token: 'user',
    tenant_access_token: 'tenant',
};
function hasExplicitUseUAT(params) {
    return !!params && typeof params === 'object' && Object.prototype.hasOwnProperty.call(params, 'useUAT');
}
function isUseUATConsistent(params, tokenType) {
    if (!hasExplicitUseUAT(params)) {
        return true;
    }
    return tokenType === 'user_access_token' ? params.useUAT === true : params.useUAT === false;
}
class PassthroughLarkMcpTool {
    constructor(options, context) {
        var _a;
        this.allTools = [];
        this.context = Object.freeze({
            ...context,
            credential: context.credential ? Object.freeze({ ...context.credential }) : undefined,
        });
        this.client =
            options.client ||
                new node_sdk_1.Client({
                    ...options,
                    appId: '__passthrough__',
                    appSecret: '__passthrough__',
                    disableTokenCache: true,
                });
        const isZH = ((_a = options.toolsOptions) === null || _a === void 0 ? void 0 : _a.language) === 'zh';
        const filterOptions = {
            allowTools: constants_1.defaultToolNames,
            ...options.toolsOptions,
        };
        this.allTools = (0, filter_tools_1.filterPassthroughTools)(isZH ? tools_1.AllToolsZh : tools_1.AllTools, filterOptions);
        logger_1.logger.info(`[PassthroughLarkMcpTool] Initialized with ${this.allTools.length} tools`);
    }
    getTools() {
        return this.allTools;
    }
    registerMcpServer(server, options) {
        for (const tool of this.allTools) {
            server.tool((0, case_transf_1.caseTransf)(tool.name, options === null || options === void 0 ? void 0 : options.toolNameCase), tool.description, tool.schema, async (params) => {
                var _a;
                const credential = this.context.credential;
                if (!credential) {
                    return (0, passthrough_error_1.passthroughToolError)({
                        code: 'missing_lark_credential',
                        message: 'tools/call requires lark-access-token and X-Lark-Token-Type headers',
                        tool: tool.name,
                    });
                }
                if ((0, filter_tools_1.isDeniedPassthroughTool)(tool)) {
                    return (0, passthrough_error_1.passthroughToolError)({
                        code: 'credential_tool_forbidden',
                        message: 'passthrough mode does not expose credential issuing tools',
                        tool: tool.name,
                        tokenType: credential.type,
                    });
                }
                const requiredAccessToken = credentialToAccessToken[credential.type];
                if (!((_a = tool.accessTokens) === null || _a === void 0 ? void 0 : _a.includes(requiredAccessToken))) {
                    return (0, passthrough_error_1.passthroughToolError)({
                        code: 'token_type_not_supported',
                        message: 'tool does not support the request token type',
                        tool: tool.name,
                        tokenType: credential.type,
                    });
                }
                if (!isUseUATConsistent(params, credential.type)) {
                    return (0, passthrough_error_1.passthroughToolError)({
                        code: 'identity_override_not_allowed',
                        message: 'passthrough mode does not allow useUAT to override X-Lark-Token-Type',
                        tool: tool.name,
                        tokenType: credential.type,
                    });
                }
                const handler = tool.customHandler || passthrough_handler_1.passthroughLarkOapiHandler;
                logger_1.logger.info(`[PassthroughLarkMcpTool] Calling tool: ${tool.name}`);
                try {
                    return await handler(this.client, {
                        ...params,
                        useUAT: credential.type === 'user_access_token',
                    }, { context: this.context, credential, tool });
                }
                catch (error) {
                    return (0, passthrough_error_1.mapPassthroughError)(error, { tool: tool.name, tokenType: credential.type });
                }
            });
        }
    }
}
exports.PassthroughLarkMcpTool = PassthroughLarkMcpTool;
