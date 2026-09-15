"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkMcpTool = void 0;
const node_sdk_1 = require("@larksuiteoapi/node-sdk");
const types_1 = require("./types");
const tools_1 = require("./tools");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const auth_1 = require("../auth");
const safe_json_parse_1 = require("../utils/safe-json-parse");
const constants_2 = require("../utils/constants");
const logger_1 = require("../utils/logger");
/**
 * Feishu/Lark MCP
 */
class LarkMcpTool {
    /**
     * Feishu/Lark MCP
     * @param options Feishu/Lark Client Options
     */
    constructor(options, auth) {
        var _a;
        // Lark Client
        this.client = null;
        // User Access Token
        this.userAccessToken = {};
        // All Tools
        this.allTools = [];
        this.options = options;
        this.auth = auth;
        if (options.client) {
            this.client = options.client;
        }
        else if (options.appId && options.appSecret) {
            this.client = new node_sdk_1.Client({ appId: options.appId, appSecret: options.appSecret, ...options });
        }
        const isZH = ((_a = options.toolsOptions) === null || _a === void 0 ? void 0 : _a.language) === 'zh';
        const filterOptions = {
            allowTools: constants_1.defaultToolNames,
            tokenMode: this.options.tokenMode || types_1.TokenMode.AUTO,
            ...options.toolsOptions,
        };
        this.allTools = (0, utils_1.filterTools)(isZH ? tools_1.AllToolsZh : tools_1.AllTools, filterOptions);
        logger_1.logger.info(`[LarkMcpTool] Initialized with ${this.allTools.length} tools, tokenMode: ${this.options.tokenMode}`);
    }
    /**
     * Get MCP Tools
     * @returns MCP Tool Definition Array
     */
    getTools() {
        return this.allTools;
    }
    /**
     * Update User Access Token
     * @param userAccessToken User Access Token
     */
    updateUserAccessToken(userAccessToken) {
        if (typeof userAccessToken === 'string') {
            this.userAccessToken.value = userAccessToken;
        }
        else {
            this.userAccessToken = userAccessToken;
        }
    }
    async getUserAccessToken() {
        if (this.userAccessToken.getter) {
            return await this.userAccessToken.getter();
        }
        return this.userAccessToken.value;
    }
    async setUserAccessToken(userAccessToken) {
        this.userAccessToken.value = userAccessToken;
        if (this.userAccessToken.setter) {
            await this.userAccessToken.setter(userAccessToken);
        }
    }
    async reAuthorize() {
        const userAccessToken = await this.getUserAccessToken();
        // if not enable oauth mode, return empty object
        if (!this.auth || !this.options.oauth) {
            return {};
        }
        logger_1.logger.info(`[LarkMcpTool] Re-authorizing user access token`);
        const { authorizeUrl, accessToken } = await this.auth.reAuthorize(userAccessToken);
        if (accessToken) {
            logger_1.logger.info(`[LarkMcpTool] Successfully re-authorized user access token`);
            this.setUserAccessToken(accessToken);
            return { userAccessToken: accessToken };
        }
        return { authorizeUrl };
    }
    async ensureGetUserAccessToken() {
        var _a;
        const userAccessToken = await this.getUserAccessToken();
        if (!this.auth) {
            return { userAccessToken };
        }
        const { valid, isExpired, token } = await (0, auth_1.isTokenValid)(userAccessToken);
        if (valid) {
            return { userAccessToken };
        }
        logger_1.logger.info(`[LarkMcpTool] UserAccessToken is invalid or expired, trying to get new token...`);
        try {
            if (isExpired && ((_a = token === null || token === void 0 ? void 0 : token.extra) === null || _a === void 0 ? void 0 : _a.refreshToken)) {
                logger_1.logger.info(`[LarkMcpTool] UserAccessToken is expired, trying to use refreshToken to refresh...`);
                const newToken = await this.auth.refreshToken(token.token);
                if (newToken === null || newToken === void 0 ? void 0 : newToken.access_token) {
                    this.setUserAccessToken(newToken.access_token);
                    return { userAccessToken: newToken.access_token };
                }
            }
        }
        catch (error) {
            logger_1.logger.error(`[LarkMcpTool] Failed to refreshToken: ${error}`);
        }
        // reAuthorize
        return await this.reAuthorize();
    }
    getReAuthorizeMessage(authorizeUrl, errorCode, errorText) {
        var _a;
        const errorMessage = errorCode === constants_2.OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_UNAUTHORIZED
            ? 'Current user_access_token lacks required permissions. Please ensure the corresponding permissions are enabled in the developer console, then re-authorize using the following Authorization URL or login command.'
            : 'Current user_access_token is invalid or expired';
        const instruction = authorizeUrl
            ? [
                'Please open the following URL in your browser to complete the authorization:',
                `Note: Ensure the redirect URL (${(_a = this.auth) === null || _a === void 0 ? void 0 : _a.callbackUrl}) is configured in your app's security settings.`,
                `   If not configured, go to: ${this.options.domain}/app/${this.options.appId}/safe`,
                'Authorization URL:',
                authorizeUrl,
                'This authorization link expires in 60 seconds. Generating a new link will immediately invalidate this one.',
            ]
                .join('\n')
                .trim()
            : '';
        const reAuthorizeMessage = {
            errorCode,
            errorMessage,
            instruction,
            rawErrorText: errorText,
        };
        return {
            isError: true,
            content: [{ type: 'text', text: JSON.stringify(reAuthorizeMessage) }],
        };
    }
    /**
     * Register Tools to MCP Server
     * @param server MCP Server Instance
     */
    registerMcpServer(server, options) {
        for (const tool of this.allTools) {
            server.tool((0, utils_1.caseTransf)(tool.name, options === null || options === void 0 ? void 0 : options.toolNameCase), tool.description, tool.schema, async (params) => {
                var _a, _b, _c, _d, _e;
                try {
                    if (!this.client) {
                        return {
                            isError: true,
                            content: [{ type: 'text', text: JSON.stringify({ msg: 'Client not initialized' }) }],
                        };
                    }
                    const handler = tool.customHandler || utils_1.larkOapiHandler;
                    const shouldUseUAT = (0, utils_1.getShouldUseUAT)(this.options.tokenMode, (_a = params === null || params === void 0 ? void 0 : params.useUAT) !== null && _a !== void 0 ? _a : false);
                    if (shouldUseUAT) {
                        const { userAccessToken, authorizeUrl } = await this.ensureGetUserAccessToken();
                        if (!userAccessToken) {
                            return this.getReAuthorizeMessage(authorizeUrl);
                        }
                        logger_1.logger.info(`[LarkMcpTool] Calling tool: ${tool.name}`);
                        const result = await handler(this.client, { ...params, useUAT: shouldUseUAT }, { userAccessToken, tool });
                        const errorCode = (0, safe_json_parse_1.safeJsonParse)((_c = (_b = result.content) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.text, { code: 0 }).code;
                        if (result.isError &&
                            [
                                constants_2.OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_UNAUTHORIZED,
                                constants_2.OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_INVALID,
                            ].includes(errorCode)) {
                            logger_1.logger.info(`[LarkMcpTool] User access token unauthorized the scope or invalid, reAuthorize, errorCode: ${errorCode}`);
                            // user access token unauthorized the scope or invalid, reAuthorize
                            const { authorizeUrl } = await this.reAuthorize();
                            return this.getReAuthorizeMessage(authorizeUrl, errorCode, (_e = (_d = result.content) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.text);
                        }
                        return result;
                    }
                    logger_1.logger.info(`[LarkMcpTool] Calling tool: ${tool.name}`);
                    return handler(this.client, { ...params, useUAT: shouldUseUAT }, { tool });
                }
                catch (error) {
                    logger_1.logger.error(`[LarkMcpTool] Failed to call tool: ${tool.name}, error: ${error}`);
                    return {
                        isError: true,
                        content: [{ type: 'text', text: JSON.stringify(error === null || error === void 0 ? void 0 : error.message) }],
                    };
                }
            });
        }
    }
}
exports.LarkMcpTool = LarkMcpTool;
