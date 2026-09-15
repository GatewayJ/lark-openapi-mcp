"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkAuthHandlerLocal = void 0;
const handler_1 = require("./handler");
const store_1 = require("../store");
const is_token_valid_1 = require("../utils/is-token-valid");
const pkce_1 = require("../utils/pkce");
const logger_1 = require("../../utils/logger");
class LarkAuthHandlerLocal extends handler_1.LarkAuthHandler {
    constructor() {
        super(...arguments);
        this.expressServer = null;
        this.timeoutId = null;
    }
    async startServer() {
        if (this.expressServer) {
            return;
        }
        return new Promise((resolve, reject) => {
            logger_1.logger.info(`[LarkAuthHandlerLocal] Starting server on ${this.options.host}:${this.options.port}`);
            this.expressServer = this.app.listen(this.options.port, this.options.host, (error) => {
                if (error) {
                    reject(error);
                }
                logger_1.logger.info(`[LarkAuthHandlerLocal] Server started on ${this.options.host}:${this.options.port}`);
                resolve(true);
            });
        });
    }
    async stopServer() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        return new Promise((resolve, reject) => {
            if (!this.expressServer) {
                resolve(true);
                return;
            }
            logger_1.logger.info(`[LarkAuthHandlerLocal] Stopping server`);
            this.expressServer.close((error) => {
                if (error) {
                    reject(error);
                }
                else {
                    logger_1.logger.info(`[LarkAuthHandlerLocal] Server stopped`);
                    resolve(true);
                }
                this.expressServer = null;
            });
        });
    }
    async callback(req, res) {
        if (!req.query.code || typeof req.query.code !== 'string') {
            logger_1.logger.error(`[LarkAuthHandlerLocal] callback: Failed to exchange authorization code: ${req.query.code}`);
            res.end('error, failed to exchange authorization code, please try again');
            return;
        }
        const codeVerifier = store_1.authStore.getCodeVerifier(LarkAuthHandlerLocal.LOCAL_CLIENT_ID);
        if (!codeVerifier) {
            logger_1.logger.error(`[LarkAuthHandlerLocal] callback: Code verifier not found`);
            res.end('error: code_verifier not found, please try again');
            return;
        }
        const token = await this.provider.exchangeAuthorizationCode({ client_id: LarkAuthHandlerLocal.LOCAL_CLIENT_ID, redirect_uris: [] }, req.query.code, codeVerifier, this.callbackUrl);
        store_1.authStore.removeCodeVerifier(LarkAuthHandlerLocal.LOCAL_CLIENT_ID);
        await store_1.authStore.storeLocalAccessToken(token.access_token, this.options.appId);
        logger_1.logger.info(`[LarkAuthHandlerLocal] callback: Successfully exchanged authorization code`);
        res.end('success, you can close this page now');
        setTimeout(async () => {
            try {
                await this.stopServer();
            }
            catch (error) {
                logger_1.logger.error(`[LarkAuthHandlerLocal] callback: Error stopping server: ${error}`);
            }
        }, 1000);
    }
    async refreshToken(accessToken) {
        const newToken = await super.refreshToken(accessToken);
        await store_1.authStore.storeLocalAccessToken(newToken.access_token, this.options.appId);
        return newToken;
    }
    async reAuthorize(accessToken, ignoreCheck = false) {
        var _a;
        const localAccessToken = await store_1.authStore.getLocalAccessToken(this.options.appId);
        const { valid } = await (0, is_token_valid_1.isTokenValid)(localAccessToken);
        if (ignoreCheck || accessToken === localAccessToken || !localAccessToken || !valid) {
            const scope = (_a = this.options.scope) === null || _a === void 0 ? void 0 : _a.join(' ');
            logger_1.logger.info(`[LarkAuthHandlerLocal] reAuthorize: Registering client`);
            await store_1.authStore.registerClient({
                client_id: LarkAuthHandlerLocal.LOCAL_CLIENT_ID,
                client_secret: LarkAuthHandlerLocal.LOCAL_CLIENT_ID,
                scope,
                redirect_uris: [this.callbackUrl],
            });
            await this.startServer();
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => this.stopServer(), 60 * 1000);
            const { codeVerifier, codeChallenge } = (0, pkce_1.generatePKCEPair)();
            store_1.authStore.storeCodeVerifier(LarkAuthHandlerLocal.LOCAL_CLIENT_ID, codeVerifier);
            const authorizeUrl = new URL(`http://${this.options.host}:${this.options.port}/authorize`);
            authorizeUrl.searchParams.set('client_id', LarkAuthHandlerLocal.LOCAL_CLIENT_ID);
            authorizeUrl.searchParams.set('response_type', 'code');
            authorizeUrl.searchParams.set('code_challenge', codeChallenge);
            authorizeUrl.searchParams.set('code_challenge_method', 'S256');
            authorizeUrl.searchParams.set('redirect_uri', this.callbackUrl);
            authorizeUrl.searchParams.set('state', 'reauthorize');
            if (scope) {
                authorizeUrl.searchParams.set('scope', scope);
            }
            return {
                accessToken: '',
                authorizeUrl: authorizeUrl.toString(),
            };
        }
        return { accessToken: localAccessToken, authorizeUrl: '' };
    }
}
exports.LarkAuthHandlerLocal = LarkAuthHandlerLocal;
LarkAuthHandlerLocal.LOCAL_CLIENT_ID = 'client_id_for_local_auth';
