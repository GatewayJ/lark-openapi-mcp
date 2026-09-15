"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_CONFIG = void 0;
const constants_1 = require("../utils/constants");
exports.AUTH_CONFIG = {
    SERVER_NAME: 'lark-mcp',
    AES_KEY_NAME: 'encryption-key',
    STORAGE_DIR: constants_1.ENV_PATHS.data,
    STORAGE_FILE: 'storage.json',
    ENCRYPTION: {
        ALGORITHM: 'aes-256-cbc',
        KEY_LENGTH: 32, // 256 bits
        IV_LENGTH: 16, // 128 bits
    },
};
