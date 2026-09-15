"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCodeVerifier = generateCodeVerifier;
exports.generateCodeChallenge = generateCodeChallenge;
exports.generatePKCEPair = generatePKCEPair;
const crypto_1 = __importDefault(require("crypto"));
function generateCodeVerifier() {
    return crypto_1.default.randomBytes(32).toString('base64url');
}
function generateCodeChallenge(codeVerifier) {
    return crypto_1.default.createHash('sha256').update(codeVerifier).digest('base64url');
}
function generatePKCEPair() {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    return { codeVerifier, codeChallenge };
}
