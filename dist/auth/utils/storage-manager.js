"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageManager = exports.StorageManager = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const encryption_1 = require("./encryption");
const config_1 = require("../config");
const logger_1 = require("../../utils/logger");
class StorageManager {
    constructor() {
        this.isInitializedStorageSuccess = false;
        this.initialize();
    }
    get storageFile() {
        return path_1.default.join(config_1.AUTH_CONFIG.STORAGE_DIR, config_1.AUTH_CONFIG.STORAGE_FILE);
    }
    async initialize() {
        if (this.initializePromise) {
            return this.initializePromise;
        }
        this.initializePromise = this.performInitialization();
        await this.initializePromise;
    }
    async performInitialization() {
        try {
            await this.initializeEncryption();
            this.ensureStorageDir();
            this.isInitializedStorageSuccess = true;
        }
        catch (error) {
            logger_1.logger.warn(`[StorageManager] Failed to initialize: ${error}`);
            logger_1.logger.warn('[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store');
            this.isInitializedStorageSuccess = false;
        }
    }
    async initializeEncryption() {
        try {
            const keytar = await Promise.resolve().then(() => __importStar(require('keytar')));
            let key = await keytar.getPassword(config_1.AUTH_CONFIG.SERVER_NAME, config_1.AUTH_CONFIG.AES_KEY_NAME);
            if (!key) {
                key = encryption_1.EncryptionUtil.generateKey();
                await keytar.setPassword(config_1.AUTH_CONFIG.SERVER_NAME, config_1.AUTH_CONFIG.AES_KEY_NAME, key);
            }
            this.encryptionUtil = new encryption_1.EncryptionUtil(key);
        }
        catch (error) {
            logger_1.logger.warn(`[StorageManager] Failed to initialize encryption: ${error}`);
            throw error;
        }
    }
    ensureStorageDir() {
        if (!fs_1.default.existsSync(config_1.AUTH_CONFIG.STORAGE_DIR)) {
            fs_1.default.mkdirSync(config_1.AUTH_CONFIG.STORAGE_DIR, { recursive: true });
        }
    }
    encrypt(data) {
        if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
            throw new Error('StorageManager not initialized - call initialize() first');
        }
        return this.encryptionUtil.encrypt(data);
    }
    decrypt(encryptedData) {
        if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
            throw new Error('StorageManager not initialized - call initialize() first');
        }
        return this.encryptionUtil.decrypt(encryptedData);
    }
    async loadStorageData() {
        await this.initialize();
        if (!this.isInitializedStorageSuccess || !fs_1.default.existsSync(this.storageFile)) {
            return { tokens: {}, clients: {} };
        }
        try {
            const data = fs_1.default.readFileSync(this.storageFile, 'utf8');
            return data ? JSON.parse(this.decrypt(data)) : { tokens: {}, clients: {} };
        }
        catch (error) {
            logger_1.logger.error(`[StorageManager] Failed to load storage data: ${error}`);
            logger_1.logger.error('[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store');
            return { tokens: {}, clients: {} };
        }
    }
    async saveStorageData(data) {
        if (!this.isInitializedStorageSuccess) {
            return;
        }
        await this.initialize();
        try {
            const encryptedData = this.encrypt(JSON.stringify(data, null, 2));
            fs_1.default.writeFileSync(this.storageFile, encryptedData);
        }
        catch (error) {
            logger_1.logger.error(`[StorageManager] Failed to save storage data: ${error}`);
            throw error;
        }
    }
}
exports.StorageManager = StorageManager;
exports.storageManager = new StorageManager();
