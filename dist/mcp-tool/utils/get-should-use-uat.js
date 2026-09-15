"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShouldUseUAT = getShouldUseUAT;
const types_1 = require("../types");
function getShouldUseUAT(tokenMode = types_1.TokenMode.AUTO, useUAT) {
    switch (tokenMode) {
        case types_1.TokenMode.USER_ACCESS_TOKEN: {
            return true;
        }
        case types_1.TokenMode.TENANT_ACCESS_TOKEN: {
            return false;
        }
        case types_1.TokenMode.AUTO:
        default: {
            return useUAT;
        }
    }
}
