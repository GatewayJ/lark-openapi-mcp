"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authStore = exports.AuthStore = void 0;
const fs_1 = __importDefault(require("fs"));
const storage_manager_1 = require("./utils/storage-manager");
const logger_1 = require("../utils/logger");
class AuthStore {
    constructor() {
        this.storageDataCache = { tokens: {}, clients: {} };
        this.codeVerifiers = new Map();
        this.isReloading = false;
        this.isInitializedStorageSuccess = false;
        this.initialize();
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
            await this.loadFromStorage();
            logger_1.logger.info(`[AuthStore] Initialized storage successfully with ${Object.keys(this.storageDataCache.tokens).length} tokens`);
            await this.clearExpiredTokens();
            this.setupFileWatcher();
            this.isInitializedStorageSuccess = true;
        }
        catch (error) {
            logger_1.logger.error(`[AuthStore] Failed to initialize: ${error}`);
            this.isInitializedStorageSuccess = false;
        }
    }
    setupFileWatcher() {
        try {
            if (fs_1.default.existsSync(storage_manager_1.storageManager.storageFile)) {
                logger_1.logger.info(`[AuthStore] Setup file watcher for ${storage_manager_1.storageManager.storageFile}`);
                this.fileWatcher = fs_1.default.watch(storage_manager_1.storageManager.storageFile, () => {
                    this.handleFileChange();
                });
            }
        }
        catch (error) {
            logger_1.logger.error(`[AuthStore] Failed to setup file watcher: ${error}`);
        }
    }
    async handleFileChange() {
        if (this.isReloading) {
            return;
        }
        this.isReloading = true;
        try {
            logger_1.logger.info(`[AuthStore] Reloading storage from ${storage_manager_1.storageManager.storageFile}`);
            await new Promise((resolve) => setTimeout(resolve, 100));
            await this.loadFromStorage();
        }
        catch (error) {
            logger_1.logger.error(`[AuthStore] Failed to reload storage: ${error}`);
        }
        finally {
            this.isReloading = false;
        }
    }
    async loadFromStorage() {
        const storageData = await storage_manager_1.storageManager.loadStorageData();
        this.storageDataCache = storageData;
    }
    async saveToStorage() {
        if (!this.isInitializedStorageSuccess) {
            return;
        }
        await storage_manager_1.storageManager.saveStorageData(this.storageDataCache);
    }
    async clearExpiredTokens() {
        if (!this.storageDataCache || !this.storageDataCache.tokens) {
            return;
        }
        const now = Date.now() / 1000;
        let hasExpiredTokens = false;
        const expiredTokenKeys = [];
        for (const [tokenKey, token] of Object.entries(this.storageDataCache.tokens)) {
            // 7 days after expires clear the token
            if (token.expiresAt && token.expiresAt + 7 * 24 * 60 * 60 < now) {
                expiredTokenKeys.push(tokenKey);
            }
        }
        if (expiredTokenKeys.length > 0) {
            for (const tokenKey of expiredTokenKeys) {
                delete this.storageDataCache.tokens[tokenKey];
            }
            hasExpiredTokens = true;
        }
        if (this.storageDataCache.localTokens) {
            const orphanedLocalTokenKeys = [];
            for (const [appId, tokenKey] of Object.entries(this.storageDataCache.localTokens)) {
                if (!this.storageDataCache.tokens[tokenKey]) {
                    orphanedLocalTokenKeys.push(appId);
                }
            }
            if (orphanedLocalTokenKeys.length > 0) {
                for (const appId of orphanedLocalTokenKeys) {
                    delete this.storageDataCache.localTokens[appId];
                }
                hasExpiredTokens = true;
            }
        }
        if (hasExpiredTokens) {
            logger_1.logger.info(`[AuthStore] Cleared expired tokens`);
            await this.saveToStorage();
        }
    }
    async storeToken(token) {
        await this.initialize();
        this.storageDataCache.tokens[token.token] = token;
        await this.saveToStorage();
        return token;
    }
    async removeToken(accessToken) {
        await this.initialize();
        delete this.storageDataCache.tokens[accessToken];
        await this.saveToStorage();
    }
    async getToken(accessToken) {
        await this.initialize();
        return this.storageDataCache.tokens[accessToken];
    }
    async getTokenByRefreshToken(refreshToken) {
        await this.initialize();
        return Object.values(this.storageDataCache.tokens).find((token) => { var _a; return ((_a = token.extra) === null || _a === void 0 ? void 0 : _a.refreshToken) === refreshToken; });
    }
    async getLocalAccessToken(appId) {
        var _a;
        await this.initialize();
        return (_a = this.storageDataCache.localTokens) === null || _a === void 0 ? void 0 : _a[appId];
    }
    async storeLocalAccessToken(accessToken, appId) {
        await this.initialize();
        if (!this.storageDataCache.localTokens) {
            this.storageDataCache.localTokens = {};
        }
        this.storageDataCache.localTokens[appId] = accessToken;
        await this.saveToStorage();
        return accessToken;
    }
    async removeLocalAccessToken(appId) {
        var _a;
        await this.initialize();
        if ((_a = this.storageDataCache.localTokens) === null || _a === void 0 ? void 0 : _a[appId]) {
            logger_1.logger.info(`[AuthStore] Removing local access token for app: ${appId}`);
            const tokenToRemove = this.storageDataCache.localTokens[appId];
            delete this.storageDataCache.tokens[tokenToRemove];
            delete this.storageDataCache.localTokens[appId];
            await this.saveToStorage();
        }
    }
    async removeAllLocalAccessTokens() {
        await this.initialize();
        logger_1.logger.info('[AuthStore] Removing all local access tokens');
        if (this.storageDataCache.localTokens) {
            const tokens = Object.values(this.storageDataCache.localTokens);
            for (const token of tokens) {
                if (this.storageDataCache.tokens[token]) {
                    delete this.storageDataCache.tokens[token];
                }
            }
        }
        this.storageDataCache.localTokens = {};
        await this.saveToStorage();
    }
    async getAllLocalAccessTokens() {
        await this.initialize();
        return this.storageDataCache.localTokens || {};
    }
    async registerClient(client) {
        await this.initialize();
        this.storageDataCache.clients[client.client_id] = client;
        await this.saveToStorage();
        return client;
    }
    async getClient(id) {
        await this.initialize();
        return this.storageDataCache.clients[id];
    }
    async removeClient(clientId) {
        await this.initialize();
        delete this.storageDataCache.clients[clientId];
        await this.saveToStorage();
    }
    storeCodeVerifier(key, codeVerifier) {
        this.codeVerifiers.set(key, codeVerifier);
    }
    getCodeVerifier(key) {
        return this.codeVerifiers.get(key);
    }
    removeCodeVerifier(key) {
        this.codeVerifiers.delete(key);
    }
    clearExpiredCodeVerifiers() {
        this.codeVerifiers.clear();
    }
    destroy() {
        if (this.fileWatcher) {
            this.fileWatcher.close();
            this.fileWatcher = undefined;
        }
    }
}
exports.AuthStore = AuthStore;
exports.authStore = new AuthStore();
