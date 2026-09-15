#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.program = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const commander_1 = require("commander");
const version_1 = require("./utils/version");
const constants_1 = require("./utils/constants");
const parser_string_array_1 = require("./utils/parser-string-array");
const logger_1 = require("./utils/logger");
dotenv_1.default.config();
const program = new commander_1.Command();
exports.program = program;
program.name('lark-mcp').description('Feishu/Lark MCP Tool').version(version_1.currentVersion);
program
    .command('whoami')
    .description('Print All User Sessions')
    .action(async () => {
    const { LoginHandler } = await Promise.resolve().then(() => __importStar(require('./cli/login-handler')));
    LoginHandler.handleWhoAmI();
});
program
    .command('login')
    .description('Login using OAuth and get user access token')
    .option('-a, --app-id <appId>', 'Feishu/Lark App ID')
    .option('-s, --app-secret <appSecret>', 'Feishu/Lark App Secret')
    .option('-d, --domain <domain>', '(Optional) Feishu/Lark Domain (default: "https://open.feishu.cn")')
    .option('--host <host>', '(Optional) Host to listen (default: "localhost")')
    .option('-p, --port <port>', '(Optional) Port to listen (default: "3000")')
    .option('--scope <scope>', '(Optional) Specify OAuth scope for user access token, default is all permissions granted to the app, separated by spaces or commas')
    .option('--debug', '(Optional) Enable debug mode')
    .action(async (options) => {
    if (constants_1.NODE_VERSION_MAJOR < 20) {
        logger_1.logger.error(`❌ This CLI requires Node.js >= 20. You are using v${process.versions.node}.\n\n` +
            `👉 Please upgrade Node.js: https://nodejs.org/`);
        process.exit(1);
    }
    const mergedOptions = { ...constants_1.OAPI_MCP_DEFAULT_ARGS, ...constants_1.OAPI_MCP_ENV_ARGS, ...options };
    if (mergedOptions.debug) {
        logger_1.logger.setLevel(logger_1.LogLevel.DEBUG);
    }
    const { LoginHandler } = await Promise.resolve().then(() => __importStar(require('./cli/login-handler')));
    await LoginHandler.handleLogin({ ...mergedOptions, scope: (0, parser_string_array_1.parseStringArray)(mergedOptions.scope) });
});
program
    .command('logout')
    .description('Logout and clear stored user access token')
    .option('-a, --app-id <appId>', '(Optional) Feishu/Lark App ID, if not specified, logout all apps')
    .option('--debug', '(Optional) Enable debug mode')
    .action(async (options) => {
    if (options.debug) {
        logger_1.logger.setLevel(logger_1.LogLevel.DEBUG);
    }
    const { LoginHandler } = await Promise.resolve().then(() => __importStar(require('./cli/login-handler')));
    await LoginHandler.handleLogout(options.appId);
});
program
    .command('mcp')
    .description('Start Feishu/Lark MCP Service')
    .option('-a, --app-id <appId>', 'Feishu/Lark App ID')
    .option('-s, --app-secret <appSecret>', 'Feishu/Lark App Secret')
    .option('-d, --domain <domain>', '(Optional) Feishu/Lark Domain (default: "https://open.feishu.cn")')
    .option('-t, --tools <tools>', '(Optional) List of API tools to enable, separated by commas or spaces (default: "preset.default")')
    .option('-c, --tool-name-case <toolNameCase>', '(Optional) Tool Name Case, snake or camel or kebab or dot (default: "snake")')
    .option('-l, --language <language>', '(Optional) Tools Language, zh or en (default: "en")')
    .option('--token-mode <tokenMode>', '(Optional) Token Mode, auto or user_access_token or tenant_access_token (default: "auto")')
    .option('--credential-mode <credentialMode>', '(Optional) Credential Mode, standalone or passthrough (default: "standalone")')
    .option('-u, --user-access-token <userAccessToken>', '(Optional) User Access Token (beta)')
    .option('--oauth', '(Optional) Enable MCP Auth Server to get user_access_token and auto request user login when token expires (Beta) (default: false)')
    .option('--scope <scope>', '(Optional) Specify OAuth scope for user access token, default is all permissions granted to the app, separated by spaces or commas')
    .option('-m, --mode <mode>', '(Optional) Transport Mode, stdio or sse or streamable (default: "stdio")')
    .option('--host <host>', '(Optional) Host to listen (default: "localhost")')
    .option('-p, --port <port>', '(Optional) Port to listen (default: "3000")')
    .option('--config <configPath>', '(Optional) Config file path (JSON)')
    .option('--debug', '(Optional) Enable debug mode')
    .action(async (options) => {
    let fileOptions = {};
    if (options.config) {
        try {
            const configContent = fs_1.default.readFileSync(options.config, 'utf-8');
            fileOptions = JSON.parse(configContent);
        }
        catch (err) {
            logger_1.logger.error(`Failed to read config file: ${err}`);
            process.exit(1);
        }
    }
    const mergedOptions = { ...constants_1.OAPI_MCP_DEFAULT_ARGS, ...constants_1.OAPI_MCP_ENV_ARGS, ...fileOptions, ...options };
    if (constants_1.NODE_VERSION_MAJOR < 20 && mergedOptions.oauth) {
        logger_1.logger.error(`❌ This CLI requires Node.js >= 20. You are using v${process.versions.node}.\n\n` +
            `👉 Please upgrade Node.js: https://nodejs.org/`);
        process.exit(1);
    }
    if (mergedOptions.debug) {
        logger_1.logger.setLevel(logger_1.LogLevel.DEBUG);
    }
    const serverOptions = {
        ...mergedOptions,
        scope: (0, parser_string_array_1.parseStringArray)(mergedOptions.scope),
        tools: (0, parser_string_array_1.parseStringArray)(mergedOptions.tools),
    };
    if (serverOptions.credentialMode === 'passthrough') {
        if (serverOptions.mode !== 'streamable') {
            throw new Error('passthrough credential mode only supports streamable transport');
        }
        if (serverOptions.oauth || serverOptions.userAccessToken || serverOptions.tokenMode !== 'auto') {
            throw new Error('passthrough credential mode does not accept oauth, userAccessToken, or tokenMode');
        }
        if (serverOptions.appId || serverOptions.appSecret) {
            throw new Error('passthrough credential mode does not accept appId or appSecret');
        }
        const { initPassthroughMcpServerWithTransport } = await Promise.resolve().then(() => __importStar(require('./mcp-server/shared/init-passthrough')));
        await initPassthroughMcpServerWithTransport(serverOptions);
        return;
    }
    const { initMcpServerWithTransport } = await Promise.resolve().then(() => __importStar(require('./mcp-server/shared/init')));
    await initMcpServerWithTransport('oapi', serverOptions);
});
program
    .command('recall-developer-documents')
    .description('Start Feishu/Lark Open Platform Recall MCP Service')
    .option('-d, --domain <domain>', '(Optional) Feishu Open Platform Domain', 'https://open.feishu.cn')
    .option('-m, --mode <mode>', '(Optional) Transport Mode, stdio or sse or streamable', 'stdio')
    .option('--host <host>', '(Optional) Host to listen', 'localhost')
    .option('-p, --port <port>', '(Optional) Port to listen in sse mode', '3001')
    .option('--debug', '(Optional) Enable debug mode')
    .action(async (options) => {
    if (options.debug) {
        logger_1.logger.setLevel(logger_1.LogLevel.DEBUG);
    }
    const { initMcpServerWithTransport } = await Promise.resolve().then(() => __importStar(require('./mcp-server/shared/init')));
    await initMcpServerWithTransport('recall', options);
});
if (process.argv.length === 2) {
    program.help();
}
program.parse(process.argv);
