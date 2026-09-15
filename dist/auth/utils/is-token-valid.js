"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenValid = isTokenValid;
exports.isTokenExpired = isTokenExpired;
const store_1 = require("../store");
async function isTokenValid(accessToken) {
    if (!accessToken) {
        return { valid: false, isExpired: false, token: undefined };
    }
    const token = await store_1.authStore.getToken(accessToken);
    if (!token) {
        return { valid: false, isExpired: false, token: undefined };
    }
    const isExpired = isTokenExpired(token);
    if (isExpired) {
        return { valid: false, isExpired: true, token };
    }
    return { valid: true, isExpired: false, token };
}
function isTokenExpired(token) {
    if (!token) {
        return false;
    }
    if (token.expiresAt && token.expiresAt < Date.now() / 1000) {
        return true;
    }
    return false;
}
