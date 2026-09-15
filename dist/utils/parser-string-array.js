"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringArray = parseStringArray;
function parseStringArray(str) {
    if (!str) {
        return [];
    }
    if (typeof str === 'string') {
        // split by comma or space and trim space
        return str.split(/[,\s]+/).map((item) => item.trim());
    }
    return str.map((item) => item.trim());
}
