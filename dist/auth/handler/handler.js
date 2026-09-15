"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkAuthHandler = void 0;
const bearerAuth_js_1 = require("@modelcontextprotocol/sdk/server/auth/middleware/bearerAuth.js");
const router_js_1 = require("@modelcontextprotocol/sdk/server/auth/router.js");
const provider_1 = require("../provider");
const store_1 = require("../store");
const pkce_1 = require("../utils/pkce");
const logger_1 = require("../../utils/logger");
class LarkAuthHandler {
    get callbackUrl() {
        return `http://${this.options.host}:${this.options.port}/callback`;
    }
    get issuerUrl() {
        return `http://${this.options.host}:${this.options.port}`;
    }
    constructor(app, options) {
        var _a;
        this.app = app;
        this.setupRoutes = () => {
            logger_1.logger.info(`[LarkAuthHandler] setupRoutes: issuerUrl: ${this.issuerUrl}`);
            this.app.use((0, router_js_1.mcpAuthRouter)({ provider: this.provider, issuerUrl: new URL(this.issuerUrl) }));
            this.app.get('/callback', (req, res) => this.callback(req, res));
        };
        const { port, host, domain, appId, appSecret } = options;
        if (!port || !host || !domain || !appId || !appSecret) {
            throw new Error('[Lark MCP]  appId, and appSecret are required');
        }
        this.options = options;
        const params = {
            domain,
            host,
            port,
            appId,
            appSecret,
            callbackUrl: this.callbackUrl,
        };
        if (!((_a = this.options.scope) === null || _a === void 0 ? void 0 : _a.length)) {
            this.provider = new provider_1.LarkOIDC2OAuthServerProvider(params);
        }
        else {
            this.provider = new provider_1.LarkOAuth2OAuthServerProvider(params);
        }
    }
    async callback(req, res) {
        const redirectUri = req.query.redirect_uri;
        const finalRedirectUri = new URL(redirectUri);
        finalRedirectUri.searchParams.set('code', req.query.code);
        finalRedirectUri.searchParams.set('state', req.query.state);
        res.redirect(finalRedirectUri.toString());
        if (req.query.state === 'reauthorize') {
            if (!req.query.code || typeof req.query.code !== 'string') {
                logger_1.logger.error(`[LarkAuthHandler] Failed to exchange authorization code: ${req.query.code}`);
                res.end('error, failed to exchange authorization code, please try again');
                return;
            }
            const codeVerifier = store_1.authStore.getCodeVerifier('reauthorize');
            if (!codeVerifier) {
                logger_1.logger.error(`[LarkAuthHandler] Code verifier not found`);
                res.end('error: code_verifier not found, please try again');
                return;
            }
            await this.provider.exchangeAuthorizationCode({ client_id: 'LOCAL', redirect_uris: [] }, req.query.code, codeVerifier, this.callbackUrl);
            store_1.authStore.removeCodeVerifier('reauthorize');
            logger_1.logger.info(`[LarkAuthHandler] callback: Successfully exchanged authorization code`);
            res.end('success, you can close this page now');
        }
    }
    authenticateRequest(req, res, next) {
        (0, bearerAuth_js_1.requireBearerAuth)({ verifier: this.provider, requiredScopes: [] })(req, res, next);
    }
    async refreshToken(accessToken) {
        var _a, _b;
        const token = await store_1.authStore.getToken(accessToken);
        if (!token) {
            logger_1.logger.error(`[LarkAuthHandler] refreshToken: No local access token found`);
            throw new Error('No local access token found');
        }
        if (!((_a = token.extra) === null || _a === void 0 ? void 0 : _a.refreshToken)) {
            logger_1.logger.error(`[LarkAuthHandler] refreshToken: No refresh token found`);
            throw new Error('No refresh token found');
        }
        const newToken = await this.provider.exchangeRefreshToken({ client_id: token.clientId, redirect_uris: [this.callbackUrl] }, (_b = token.extra) === null || _b === void 0 ? void 0 : _b.refreshToken, token.scopes);
        logger_1.logger.info(`[LarkAuthHandler] refreshToken: Successfully refreshed token`);
        await store_1.authStore.removeToken(accessToken);
        return newToken;
    }
    async reAuthorize(accessToken) {
        if (!accessToken) {
            logger_1.logger.error(`[LarkAuthHandler] reAuthorize: Invalid access token, please reconnect the mcp server`);
            throw new Error('Invalid access token, please reconnect the mcp server');
        }
        const token = await store_1.authStore.getToken(accessToken);
        if (!token) {
            logger_1.logger.error(`[LarkAuthHandler] reAuthorize: Invalid access token, please reconnect the mcp server`);
            throw new Error('Invalid access token, please reconnect the mcp server');
        }
        const { clientId } = token;
        const { codeVerifier, codeChallenge } = (0, pkce_1.generatePKCEPair)();
        store_1.authStore.storeCodeVerifier('reauthorize', codeVerifier);
        const authorizeUrl = new URL(`http://${this.options.host}:${this.options.port}/authorize`);
        authorizeUrl.searchParams.set('client_id', clientId);
        authorizeUrl.searchParams.set('response_type', 'code');
        authorizeUrl.searchParams.set('code_challenge', codeChallenge);
        authorizeUrl.searchParams.set('code_challenge_method', 'S256');
        authorizeUrl.searchParams.set('redirect_uri', this.callbackUrl);
        authorizeUrl.searchParams.set('state', 'reauthorize');
        if (this.options.scope) {
            authorizeUrl.searchParams.set('scope', this.options.scope.join(' '));
        }
        return {
            accessToken: '',
            authorizeUrl: authorizeUrl.toString(),
        };
    }
}
exports.LarkAuthHandler = LarkAuthHandler;
