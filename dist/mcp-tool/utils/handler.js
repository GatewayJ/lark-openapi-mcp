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
exports.larkOapiHandler = void 0;
const lark = __importStar(require("@larksuiteoapi/node-sdk"));
const logger_1 = require("../../utils/logger");
const sdkFuncCall = async (client, params, options) => {
    const { tool, userAccessToken } = options || {};
    const { sdkName, path, httpMethod } = tool || {};
    if (!sdkName) {
        logger_1.logger.error(`[larkOapiHandler] Invalid sdkName`);
        throw new Error('Invalid sdkName');
    }
    const chain = sdkName.split('.');
    let func = client;
    for (const element of chain) {
        func = func[element];
        if (!func) {
            func = async (params, ...args) => await client.request({ method: httpMethod, url: path, ...params }, ...args);
            break;
        }
    }
    if (!(func instanceof Function)) {
        func = async (params, ...args) => await client.request({ method: httpMethod, url: path, ...params }, ...args);
    }
    if (params === null || params === void 0 ? void 0 : params.useUAT) {
        if (!userAccessToken) {
            logger_1.logger.error(`[larkOapiHandler] UserAccessToken is invalid or expired`);
            throw new Error('UserAccessToken is invalid or expired');
        }
        return await func(params, lark.withUserAccessToken(userAccessToken));
    }
    return await func(params);
};
const larkOapiHandler = async (client, params, options) => {
    var _a, _b;
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
        return {
            isError: true,
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) || (error === null || error === void 0 ? void 0 : error.message) || error),
                },
            ],
        };
    }
};
exports.larkOapiHandler = larkOapiHandler;
