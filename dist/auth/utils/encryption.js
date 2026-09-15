"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionUtil = void 0;
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("../config");
const logger_1 = require("../../utils/logger");
class EncryptionUtil {
    constructor(aesKey) {
        this.aesKey = aesKey;
    }
    encrypt(data) {
        const iv = crypto_1.default.randomBytes(config_1.AUTH_CONFIG.ENCRYPTION.IV_LENGTH);
        const key = Buffer.from(this.aesKey, 'hex');
        const cipher = crypto_1.default.createCipheriv(config_1.AUTH_CONFIG.ENCRYPTION.ALGORITHM, key, iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + ':' + encrypted;
    }
    decrypt(encryptedData) {
        const parts = encryptedData.split(':');
        if (parts.length !== 2) {
            logger_1.logger.error(`[EncryptionUtil] decrypt: Invalid encrypted data format`);
            throw new Error('Invalid encrypted data format');
        }
        const iv = Buffer.from(parts[0], 'hex');
        const encrypted = parts[1];
        const key = Buffer.from(this.aesKey, 'hex');
        const decipher = crypto_1.default.createDecipheriv(config_1.AUTH_CONFIG.ENCRYPTION.ALGORITHM, key, iv);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    static generateKey() {
        return crypto_1.default.randomBytes(config_1.AUTH_CONFIG.ENCRYPTION.KEY_LENGTH).toString('hex');
    }
}
exports.EncryptionUtil = EncryptionUtil;
