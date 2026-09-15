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
exports.passthroughLarkOapiHandler = void 0;
exports.withRequestCredential = withRequestCredential;
exports.stripPassthroughOnlyParams = stripPassthroughOnlyParams;
const lark = __importStar(require("@larksuiteoapi/node-sdk"));
const logger_1 = require("../../utils/logger");
const passthrough_error_1 = require("./passthrough-error");
function withRequestCredential(credential) {
    return credential.type === 'user_access_token'
        ? lark.withUserAccessToken(credential.accessToken)
        : lark.withTenantToken(credential.accessToken);
}
function stripPassthroughOnlyParams(params) {
    if (!params || typeof params !== 'object') {
        return params;
    }
    const { useUAT: _useUAT, ...rest } = params;
    return rest;
}
const sdkFuncCall = async (client, params, options) => {
    const { tool, context } = options || {};
    const { sdkName, path, httpMethod } = tool || {};
    const credential = options.credential || (context === null || context === void 0 ? void 0 : context.credential);
    if (!credential) {
        throw new Error('Missing Lark access token');
    }
    if (!sdkName) {
        logger_1.logger.error(`[passthroughLarkOapiHandler] Invalid sdkName`);
        throw new Error('Invalid sdkName');
    }
    const requestParams = stripPassthroughOnlyParams(params);
    const requestCredential = withRequestCredential(credential);
    const chain = sdkName.split('.');
    let func = client;
    for (const element of chain) {
        func = func[element];
        if (!func) {
            func = async (fallbackParams, ...args) => await client.request({ method: httpMethod, url: path, ...fallbackParams }, ...args);
            break;
        }
    }
    if (typeof func !== 'function') {
        func = async (fallbackParams, ...args) => await client.request({ method: httpMethod, url: path, ...fallbackParams }, ...args);
    }
    return await func(requestParams, requestCredential);
};
const passthroughLarkOapiHandler = async (client, params, options) => {
    var _a, _b, _c, _d, _e;
    try {
        const response = await sdkFuncCall(client, params, options);
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify((_a = response === null || response === void 0 ? void 0 : response.data) !== null && _a !== void 0 ? _a : response),
                },
            ],
        };
    }
    catch (error) {
        return (0, passthrough_error_1.mapPassthroughError)(error, {
            tool: (_b = options === null || options === void 0 ? void 0 : options.tool) === null || _b === void 0 ? void 0 : _b.name,
            tokenType: ((_c = options === null || options === void 0 ? void 0 : options.credential) === null || _c === void 0 ? void 0 : _c.type) || ((_e = (_d = options === null || options === void 0 ? void 0 : options.context) === null || _d === void 0 ? void 0 : _d.credential) === null || _e === void 0 ? void 0 : _e.type),
        });
    }
};
exports.passthroughLarkOapiHandler = passthroughLarkOapiHandler;
