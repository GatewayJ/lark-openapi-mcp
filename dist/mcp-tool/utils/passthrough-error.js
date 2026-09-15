"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passthroughToolError = passthroughToolError;
exports.mapPassthroughError = mapPassthroughError;
const constants_1 = require("../../utils/constants");
function passthroughToolError(payload) {
    return {
        isError: true,
        content: [{ type: 'text', text: JSON.stringify(payload) }],
    };
}
function mapPassthroughError(error, extra = {}) {
    var _a, _b;
    const responseData = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
    const status = ((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) || (error === null || error === void 0 ? void 0 : error.status);
    const larkCode = typeof (responseData === null || responseData === void 0 ? void 0 : responseData.code) === 'number' ? responseData.code : undefined;
    const requestId = (responseData === null || responseData === void 0 ? void 0 : responseData.request_id) || (responseData === null || responseData === void 0 ? void 0 : responseData.requestId);
    const message = (responseData === null || responseData === void 0 ? void 0 : responseData.msg) || (responseData === null || responseData === void 0 ? void 0 : responseData.message) || (error === null || error === void 0 ? void 0 : error.message) || 'passthrough tool call failed';
    if (larkCode === constants_1.OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_INVALID ||
        /token.*(invalid|expired)|invalid.*token|expired.*token/i.test(message)) {
        return passthroughToolError({ code: 'lark_token_invalid', message, status, larkCode, requestId, ...extra });
    }
    if (larkCode === constants_1.OAPI_MCP_ERROR_CODE.USER_ACCESS_TOKEN_UNAUTHORIZED || status === 403) {
        return passthroughToolError({ code: 'lark_scope_missing', message, status, larkCode, requestId, ...extra });
    }
    if (status === 429 || status >= 500) {
        return passthroughToolError({
            code: 'upstream_retryable',
            message,
            retryable: true,
            status,
            larkCode,
            requestId,
            ...extra,
        });
    }
    if (larkCode !== undefined || responseData) {
        return passthroughToolError({ code: 'lark_openapi_error', message, status, larkCode, requestId, ...extra });
    }
    return passthroughToolError({ code: 'internal_error', message, status, ...extra });
}
