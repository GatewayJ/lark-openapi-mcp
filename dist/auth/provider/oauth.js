"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkOAuth2OAuthServerProvider = void 0;
const auth_js_1 = require("@modelcontextprotocol/sdk/shared/auth.js");
const store_1 = require("../store");
const is_token_valid_1 = require("../utils/is-token-valid");
const http_instance_1 = require("../../utils/http-instance");
const logger_1 = require("../../utils/logger");
class LarkOAuth2OAuthServerProvider {
    constructor(options) {
        this.skipLocalPkceValidation = true;
        const { domain } = options;
        this._endpoints = {
            authorizationUrl: `${domain}/open-apis/authen/v1/authorize`,
            tokenUrl: `${domain}/open-apis/authen/v2/oauth/token`,
            registrationUrl: `${domain}/open-apis/authen/v1/index`,
        };
        this._options = options;
    }
    get clientsStore() {
        return store_1.authStore;
    }
    async authorize(_client, params, res) {
        var _a;
        const targetUrl = new URL(this._endpoints.authorizationUrl);
        const searchParams = new URLSearchParams({
            client_id: this._options.appId,
            response_type: 'code',
            redirect_uri: this._options.callbackUrl + '?redirect_uri=' + _client.redirect_uris[0],
            code_challenge: params.codeChallenge,
            code_challenge_method: 'S256',
        });
        if (params.state) {
            searchParams.set('state', params.state);
        }
        if ((_a = params.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            searchParams.set('scope', params.scopes.join(' '));
        }
        targetUrl.search = searchParams.toString();
        logger_1.logger.info(`[LarkOAuth2OAuthServerProvider] Authorizing client ${_client.client_id} Redirecting to authorization URL: ${targetUrl.toString()}`);
        res.redirect(targetUrl.toString());
    }
    async challengeForAuthorizationCode(_client, _authorizationCode) {
        return '';
    }
    async exchangeAuthorizationCode(client, authorizationCode, codeVerifier, redirectUri) {
        var _a, _b, _c, _d, _e;
        const params = {
            grant_type: 'authorization_code',
            client_id: this._options.appId,
            client_secret: this._options.appSecret,
            code: authorizationCode,
            redirect_uri: this._options.callbackUrl + '?redirect_uri=' + redirectUri,
            code_verifier: codeVerifier,
        };
        try {
            logger_1.logger.info(`[LarkOAuth2OAuthServerProvider] Exchanging authorization code for client ${client.client_id}; appId: ${this._options.appId}`);
            const response = await http_instance_1.commonHttpInstance.post(this._endpoints.tokenUrl, params, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
            });
            const data = response.data;
            const parseResult = auth_js_1.OAuthTokensSchema.safeParse(data);
            if (!parseResult.success) {
                throw new Error(`Token parse failed: invalid response: ${data === null || data === void 0 ? void 0 : data.code}, ${data === null || data === void 0 ? void 0 : data.msg}`);
            }
            const token = parseResult.data;
            const expiresAt = token.expires_in ? token.expires_in + Date.now() / 1000 : undefined;
            await store_1.authStore.storeToken({
                clientId: client.client_id,
                token: token.access_token,
                scopes: ((_a = token.scope) === null || _a === void 0 ? void 0 : _a.split(' ')) || [],
                expiresAt,
                extra: {
                    token,
                    refreshToken: token.refresh_token,
                    appId: this._options.appId,
                    appSecret: this._options.appSecret,
                },
            });
            logger_1.logger.info(`[LarkOAuth2OAuthServerProvider] Successfully exchanged authorization code for client ${client.client_id}; appId: ${this._options.appId}; token: ${Boolean(token.access_token)}; refreshToken: ${Boolean(token.refresh_token)};expiresAt: ${expiresAt} `);
            return token;
        }
        catch (error) {
            logger_1.logger.error(`[LarkOAuth2OAuthServerProvider] Token exchange failed: ${((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || error.status} ${((_c = error.response) === null || _c === void 0 ? void 0 : _c.data) || error.message}`);
            throw new Error(`Token exchange failed: ${((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || error.status} ${((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || error.message}`);
        }
    }
    async exchangeRefreshToken(client, refreshToken, scopes) {
        var _a, _b, _c, _d, _e, _f, _g;
        const originalToken = await store_1.authStore.getTokenByRefreshToken(refreshToken);
        if (!originalToken) {
            logger_1.logger.error(`[LarkOAuth2OAuthServerProvider] refresh token is invalid, cannot get original token`);
            throw new Error('refresh token is invalid');
        }
        const appId = ((_a = originalToken.extra) === null || _a === void 0 ? void 0 : _a.app_id) || this._options.appId;
        const appSecret = ((_b = originalToken.extra) === null || _b === void 0 ? void 0 : _b.app_secret) || this._options.appSecret;
        const params = {
            grant_type: 'refresh_token',
            client_id: appId,
            client_secret: appSecret,
            refresh_token: refreshToken,
        };
        if (scopes === null || scopes === void 0 ? void 0 : scopes.length) {
            params.scope = scopes.join(' ');
        }
        try {
            logger_1.logger.info(`[LarkOAuth2OAuthServerProvider] Refreshing token for client ${client.client_id}; appId: ${appId}`);
            const response = await http_instance_1.commonHttpInstance.post(this._endpoints.tokenUrl, params, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
            });
            const data = response.data;
            const parseResult = auth_js_1.OAuthTokensSchema.safeParse(data);
            if (!parseResult.success) {
                throw new Error(`Token parse failed: invalid response: ${data === null || data === void 0 ? void 0 : data.code}, ${data === null || data === void 0 ? void 0 : data.msg}`);
            }
            const token = parseResult.data;
            const expiresAt = token.expires_in ? token.expires_in + Date.now() / 1000 : undefined;
            await store_1.authStore.storeToken({
                clientId: client.client_id,
                token: token.access_token,
                scopes: ((_c = token.scope) === null || _c === void 0 ? void 0 : _c.split(' ')) || [],
                expiresAt,
                extra: { refreshToken: token.refresh_token, token, appId, appSecret },
            });
            logger_1.logger.info(`[LarkOAuth2OAuthServerProvider] Successfully refreshed token for client ${client.client_id}; appId: ${appId}; token: ${Boolean(token.access_token)}; refreshToken: ${Boolean(token.refresh_token)};expiresAt: ${expiresAt}`);
            return token;
        }
        catch (error) {
            logger_1.logger.error(`[LarkOAuth2OAuthServerProvider] Token refresh failed: ${((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || error.status} ${((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || error.message}`);
            throw new Error(`Token refresh failed: ${((_f = error.response) === null || _f === void 0 ? void 0 : _f.status) || error.status} ${((_g = error.response) === null || _g === void 0 ? void 0 : _g.data) || error.message}`);
        }
    }
    async verifyAccessToken(token) {
        const { valid, token: storedToken } = await (0, is_token_valid_1.isTokenValid)(token);
        if (!valid) {
            return {
                token: (storedToken === null || storedToken === void 0 ? void 0 : storedToken.token) || '',
                clientId: (storedToken === null || storedToken === void 0 ? void 0 : storedToken.clientId) || '',
                scopes: (storedToken === null || storedToken === void 0 ? void 0 : storedToken.scopes) || [],
                expiresAt: (storedToken === null || storedToken === void 0 ? void 0 : storedToken.expiresAt) || 1,
                extra: (storedToken === null || storedToken === void 0 ? void 0 : storedToken.extra) || {},
            };
        }
        return storedToken;
    }
}
exports.LarkOAuth2OAuthServerProvider = LarkOAuth2OAuthServerProvider;
