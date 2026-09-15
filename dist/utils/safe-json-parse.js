"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeJsonParse = safeJsonParse;
function safeJsonParse(str, fallback) {
    if (!str) {
        return fallback;
    }
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return fallback;
    }
}
