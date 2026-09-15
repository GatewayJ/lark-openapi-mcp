"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONRPCErrorCodes = void 0;
exports.parseMCPServerOptionsFromRequest = parseMCPServerOptionsFromRequest;
exports.sendJsonRpcError = sendJsonRpcError;
exports.sendResponseError = sendResponseError;
const types_1 = require("../shared/types");
var JSONRPCErrorCodes;
(function (JSONRPCErrorCodes) {
    JSONRPCErrorCodes[JSONRPCErrorCodes["PARSE_ERROR"] = -32700] = "PARSE_ERROR";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    JSONRPCErrorCodes[JSONRPCErrorCodes["METHOD_NOT_FOUND"] = -32601] = "METHOD_NOT_FOUND";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
})(JSONRPCErrorCodes || (exports.JSONRPCErrorCodes = JSONRPCErrorCodes = {}));
function parseMCPServerOptionsFromRequest(req) {
    const result = types_1.mcpServerOptionSchema.safeParse(req.query || {});
    if (!result.success) {
        return { data: {}, success: false, message: result.error.message };
    }
    return { data: result.data, success: true };
}
function sendJsonRpcError(res, error, httpCode = 500, code = JSONRPCErrorCodes.INTERNAL_ERROR, id = null) {
    console.error(error);
    if (!res.headersSent) {
        res.status(httpCode).json({ jsonrpc: '2.0', error: { code, message: error.message }, id });
    }
}
function sendResponseError(res, error, httpCode = 500) {
    console.error(error);
    if (!res.headersSent) {
        res.status(httpCode).send(error.message);
    }
}
