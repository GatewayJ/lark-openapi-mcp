"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseTransf = caseTransf;
function caseTransf(toolName, caseType) {
    if (caseType === 'snake') {
        return toolName.replace(/\./g, '_');
    }
    if (caseType === 'camel') {
        return toolName.replace(/\./g, '_').replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
    }
    if (caseType === 'kebab') {
        return toolName.replace(/\./g, '-');
    }
    return toolName;
}
