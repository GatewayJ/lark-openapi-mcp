"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanEnvArgs = cleanEnvArgs;
function cleanEnvArgs(args) {
    const result = {};
    for (const [key, value] of Object.entries(args)) {
        if (value) {
            result[key] = value;
        }
    }
    return result;
}
