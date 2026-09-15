"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHandler = void 0;
const express_1 = __importDefault(require("express"));
const handler_local_1 = require("../auth/handler/handler-local");
const store_1 = require("../auth/store");
const utils_1 = require("../auth/utils");
const open_1 = __importDefault(require("open"));
class LoginHandler {
    static async checkTokenWithTimeout(timeout, appId) {
        let time = 0;
        return new Promise((resolve) => {
            const interval = setInterval(async () => {
                const token = await store_1.authStore.getLocalAccessToken(appId);
                if (token) {
                    clearInterval(interval);
                    resolve(true);
                }
                time += 2000;
                if (time >= timeout) {
                    clearInterval(interval);
                    resolve(false);
                }
            }, 2000);
        });
    }
    static async handleLogin(options) {
        const { appId, appSecret, domain, host, port, scope, timeout = 60000 } = options;
        if (!appId || !appSecret) {
            console.error('Error: Missing App Credentials (appId and appSecret are required for login)');
            process.exit(1);
        }
        try {
            console.log('🔐 Starting OAuth login process...');
            const app = (0, express_1.default)();
            app.use(express_1.default.json());
            const authHandler = new handler_local_1.LarkAuthHandlerLocal(app, {
                port: parseInt(port),
                host,
                domain,
                appId,
                appSecret,
                scope,
            });
            authHandler.setupRoutes();
            const result = await authHandler.reAuthorize(undefined, true);
            if (result.authorizeUrl) {
                console.log('📱 Please open the following URL in your browser to complete the login:');
                console.log(`💡 Note: Please ensure the redirect URL (${authHandler.callbackUrl}) is configured in your app's security settings.`);
                console.log(`   If not configured yet, go to: ${domain}/app/${appId}/safe`);
                console.log('🔗 Authorization URL:');
                console.log(result.authorizeUrl);
                console.log('\n⏳ Waiting for authorization... (timeout in 60 seconds)');
                (0, open_1.default)(result.authorizeUrl);
                await store_1.authStore.removeLocalAccessToken(appId);
                const success = await this.checkTokenWithTimeout(timeout, appId);
                if (success) {
                    console.log('✅ Successfully logged in');
                    process.exit(0);
                }
                else {
                    console.log('❌ Login failed');
                    process.exit(1);
                }
            }
            else {
                process.exit(1);
            }
        }
        catch (error) {
            console.error('❌ Login failed:', error);
            process.exit(1);
        }
    }
    static async handleLogout(appId) {
        try {
            console.log('🔓 Logging out...');
            if (!appId) {
                await store_1.authStore.removeAllLocalAccessTokens();
                console.log('✅ Successfully logged out from all apps');
                process.exit(0);
            }
            const currentToken = await store_1.authStore.getLocalAccessToken(appId);
            if (!currentToken) {
                console.log(`ℹ️ No active login session found for app: ${appId}`);
                process.exit(0);
            }
            await store_1.authStore.removeLocalAccessToken(appId);
            console.log(`✅ Successfully logged out from app: ${appId}`);
            process.exit(0);
        }
        catch (error) {
            console.error('❌ Logout failed:', error);
            process.exit(1);
        }
    }
    static simpleMask(str) {
        if (!str) {
            return '';
        }
        if (str.length < 6) {
            return '*'.repeat(str.length);
        }
        return str.slice(0, 4) + '*'.repeat(str.length - 6) + str.slice(-2);
    }
    static async handleWhoAmI() {
        var _a, _b, _c;
        const tokens = await store_1.authStore.getAllLocalAccessTokens();
        if (Object.keys(tokens).length <= 0) {
            console.log('ℹ️ No active login sessions found');
            process.exit(0);
        }
        console.log('👤 Current login sessions:\n');
        for (const [appId, accessToken] of Object.entries(tokens)) {
            const token = await store_1.authStore.getToken(accessToken);
            if (!token) {
                console.log('❌ No token info found');
                continue;
            }
            console.log(`📱 App ID: ${appId}`);
            console.log(`⌚️ AccessToken Expired: ${(0, utils_1.isTokenExpired)(token)}`);
            console.log(`🔐 Token Info:`);
            console.log(JSON.stringify({
                clientId: token.clientId,
                token: this.simpleMask(token.token),
                scopes: token.scopes,
                expiresAt: token.expiresAt,
                extra: {
                    refreshToken: this.simpleMask((_a = token.extra) === null || _a === void 0 ? void 0 : _a.refreshToken),
                    appId: (_b = token.extra) === null || _b === void 0 ? void 0 : _b.appId,
                    appSecret: this.simpleMask((_c = token.extra) === null || _c === void 0 ? void 0 : _c.appSecret),
                },
            }, null, 2));
            console.log('\n');
        }
        process.exit(0);
    }
}
exports.LoginHandler = LoginHandler;
