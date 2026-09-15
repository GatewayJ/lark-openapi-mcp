"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAPI_MCP_ERROR_CODE = exports.OAPI_MCP_ENV_ARGS = exports.OAPI_MCP_DEFAULT_ARGS = exports.NODE_VERSION_MAJOR = exports.USER_AGENT = exports.ENV_PATHS = void 0;
const clean_env_args_1 = require("./clean-env-args");
const version_1 = require("./version");
const env_paths_1 = __importDefault(require("env-paths"));
exports.ENV_PATHS = (0, env_paths_1.default)('lark-mcp');
const [major] = process.versions.node.split('.').map(Number);
exports.USER_AGENT = `oapi-sdk-mcp/${version_1.currentVersion}`;
exports.NODE_VERSION_MAJOR = major;
exports.OAPI_MCP_DEFAULT_ARGS = {
    domain: 'https://open.feishu.cn',
    toolNameCase: 'snake',
    language: 'en',
    tokenMode: 'auto',
    credentialMode: 'standalone',
    mode: 'stdio',
    host: 'localhost',
    port: '3000',
};
exports.OAPI_MCP_ENV_ARGS = (0, clean_env_args_1.cleanEnvArgs)({
    appId: process.env.APP_ID,
    appSecret: process.env.APP_SECRET,
    userAccessToken: process.env.USER_ACCESS_TOKEN,
    tokenMode: process.env.LARK_TOKEN_MODE,
    credentialMode: process.env.LARK_CREDENTIAL_MODE,
    tools: process.env.LARK_TOOLS,
    domain: process.env.LARK_DOMAIN,
});
var OAPI_MCP_ERROR_CODE;
(function (OAPI_MCP_ERROR_CODE) {
    OAPI_MCP_ERROR_CODE[OAPI_MCP_ERROR_CODE["USER_ACCESS_TOKEN_INVALID"] = 99991668] = "USER_ACCESS_TOKEN_INVALID";
    OAPI_MCP_ERROR_CODE[OAPI_MCP_ERROR_CODE["USER_ACCESS_TOKEN_UNAUTHORIZED"] = 99991679] = "USER_ACCESS_TOKEN_UNAUTHORIZED";
})(OAPI_MCP_ERROR_CODE || (exports.OAPI_MCP_ERROR_CODE = OAPI_MCP_ERROR_CODE = {}));
