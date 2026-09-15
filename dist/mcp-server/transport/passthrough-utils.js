"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassthroughRequestError = exports.PassthroughJSONRPCErrorCodes = void 0;
exports.isToolsCallBody = isToolsCallBody;
exports.assertNoPassthroughQueryOptions = assertNoPassthroughQueryOptions;
exports.getJsonRpcId = getJsonRpcId;
exports.parsePassthroughRequestContext = parsePassthroughRequestContext;
exports.sendPassthroughJsonRpcError = sendPassthroughJsonRpcError;
const crypto_1 = __importDefault(require("crypto"));
const MAX_AUTHORIZATION_HEADER_LENGTH = 8192;
const MAX_TOKEN_TYPE_HEADER_LENGTH = 64;
var PassthroughJSONRPCErrorCodes;
(function (PassthroughJSONRPCErrorCodes) {
    PassthroughJSONRPCErrorCodes[PassthroughJSONRPCErrorCodes["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    PassthroughJSONRPCErrorCodes[PassthroughJSONRPCErrorCodes["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
})(PassthroughJSONRPCErrorCodes || (exports.PassthroughJSONRPCErrorCodes = PassthroughJSONRPCErrorCodes = {}));
class PassthroughRequestError extends Error {
    constructor(code, message, jsonRpcCode = PassthroughJSONRPCErrorCodes.INVALID_PARAMS) {
        super(message);
        this.code = code;
        this.jsonRpcCode = jsonRpcCode;
    }
}
exports.PassthroughRequestError = PassthroughRequestError;
function getSingleHeader(req, name) {
    const value = req.headers[name.toLowerCase()];
    if (Array.isArray(value)) {
        throw new PassthroughRequestError('duplicate_header', `${name} must be provided once`);
    }
    return value;
}
function assertHeaderValue(name, value, maxLength) {
    if (value.length > maxLength) {
        throw new PassthroughRequestError('header_too_large', `${name} is too large`);
    }
    if (/[\u0000-\u001F\u007F]/.test(value)) {
        throw new PassthroughRequestError('invalid_header', `${name} contains control characters`);
    }
}
function parseBearerToken(req) {
    const authorization = getSingleHeader(req, 'authorization');
    if (!authorization) {
        throw new PassthroughRequestError('missing_lark_credential', 'Missing Authorization header');
    }
    assertHeaderValue('Authorization', authorization, MAX_AUTHORIZATION_HEADER_LENGTH);
    const match = authorization.match(/^Bearer ([^\s]+)$/);
    if (!(match === null || match === void 0 ? void 0 : match[1])) {
        throw new PassthroughRequestError('invalid_authorization', 'Authorization must use Bearer token format');
    }
    return match[1];
}
function parseTokenType(req) {
    const tokenType = getSingleHeader(req, 'x-lark-token-type');
    if (!tokenType) {
        throw new PassthroughRequestError('missing_token_type', 'Missing X-Lark-Token-Type header');
    }
    assertHeaderValue('X-Lark-Token-Type', tokenType, MAX_TOKEN_TYPE_HEADER_LENGTH);
    if (tokenType !== 'user_access_token' && tokenType !== 'tenant_access_token') {
        throw new PassthroughRequestError('invalid_token_type', 'X-Lark-Token-Type must be user_access_token or tenant_access_token');
    }
    return tokenType;
}
function isToolsCallBody(body) {
    if (Array.isArray(body)) {
        return body.some((item) => (item === null || item === void 0 ? void 0 : item.method) === 'tools/call');
    }
    return (body === null || body === void 0 ? void 0 : body.method) === 'tools/call';
}
function assertNoPassthroughQueryOptions(req) {
    if (Object.keys(req.query || {}).length) {
        throw new PassthroughRequestError('request_config_override_not_allowed', 'passthrough mode does not allow query options', PassthroughJSONRPCErrorCodes.INVALID_REQUEST);
    }
}
function getJsonRpcId(body) {
    var _a, _b, _c;
    if (Array.isArray(body)) {
        return (_b = (_a = body[0]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
    }
    return (_c = body === null || body === void 0 ? void 0 : body.id) !== null && _c !== void 0 ? _c : null;
}
function parsePassthroughRequestContext(req, requireCredential) {
    const requestId = getSingleHeader(req, 'x-request-id') || crypto_1.default.randomUUID();
    if (Array.isArray(requestId)) {
        throw new PassthroughRequestError('duplicate_header', 'X-Request-Id must be provided once');
    }
    if (requestId) {
        assertHeaderValue('X-Request-Id', requestId, 256);
    }
    if (!requireCredential) {
        return { requestId };
    }
    return {
        requestId,
        credential: {
            accessToken: parseBearerToken(req),
            type: parseTokenType(req),
        },
    };
}
function sendPassthroughJsonRpcError(res, req, error) {
    if (!res.headersSent) {
        const jsonRpcError = {
            jsonrpc: '2.0',
            error: {
                code: error.jsonRpcCode,
                message: error.message,
                data: { code: error.code },
            },
        };
        if (Array.isArray(req.body)) {
            res.status(200).json(req.body.map((item) => { var _a; return ({ ...jsonRpcError, id: (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : null }); }));
            return;
        }
        res.status(200).json({ ...jsonRpcError, id: getJsonRpcId(req.body) });
    }
}
