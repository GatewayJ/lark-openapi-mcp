"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkOIDC2OAuthServerProvider = void 0;
const store_1 = require("../store");
const is_token_valid_1 = require("../utils/is-token-valid");
const pkce_1 = require("../utils/pkce");
const zod_1 = require("zod");
const http_instance_1 = require("../../utils/http-instance");
const logger_1 = require("../../utils/logger");
const LarkOIDCTokenSchema = zod_1.z.object({
    code: zod_1.z.number(),
    msg: zod_1.z.string().optional(),
    data: zod_1.z.object({
        access_token: zod_1.z.string(),
        token_type: zod_1.z.string(),
        refresh_token: zod_1.z.string().optional(),
        expires_in: zod_1.z.number().optional(),
        refresh_expires_in: zod_1.z.number().optional(),
        scope: zod_1.z.string().optional(),
    }),
});
class LarkOIDC2OAuthServerProvider {
    constructor(options) {
        this.skipLocalPkceValidation = true;
        const { domain } = options;
        this._endpoints = {
            appAccessTokenUrl: `${domain}/open-apis/auth/v3/app_access_token/internal`,
            authorizationUrl: `${domain}/open-apis/authen/v1/index`,
            tokenUrl: `${domain}/open-apis/authen/v1/oidc/access_token`,
            refreshTokenUrl: `${domain}/open-apis/authen/v1/oidc/refresh_access_token`,
            registrationUrl: `${domain}/open-apis/authen/v1/index`,
        };
        this._options = options;
    }
    get clientsStore() {
        return store_1.authStore;
    }
    async authorize(client, params, res) {
        const targetUrl = new URL(this._endpoints.authorizationUrl);
        const searchParams = new URLSearchParams({
            app_id: this._options.appId,
            redirect_uri: this._options.callbackUrl + '?redirect_uri=' + client.redirect_uris[0],
        });
        if (params.state) {
            searchParams.set('state', params.state);
        }
        if (params.codeChallenge) {
            store_1.authStore.storeCodeVerifier(`challenge_${client.client_id}`, params.codeChallenge);
        }
        targetUrl.search = searchParams.toString();
        logger_1.logger.info(`[LarkOIDC2OAuthServerProvider] Redirecting to authorization URL: ${targetUrl.toString()}`);
        res.redirect(targetUrl.toString());
    }
    async challengeForAuthorizationCode(_client, _authorizationCode) {
        return '';
    }
    async exchangeAuthorizationCode(client, authorizationCode, codeVerifier, _redirectUri) {
        var _a, _b, _c, _d, _e;
        if (codeVerifier) {
            const storedChallenge = store_1.authStore.getCodeVerifier(`challenge_${client.client_id}`);
            if (!storedChallenge) {
                logger_1.logger.error(`[LarkOIDC2OAuthServerProvider] exchangeAuthorizationCode: PKCE validation failed: code challenge not found`);
                throw new Error('PKCE validation failed: code challenge not found');
            }
            const expectedChallenge = (0, pkce_1.generateCodeChallenge)(codeVerifier);
            if (expectedChallenge !== storedChallenge) {
                logger_1.logger.error(`[LarkOIDC2OAuthServerProvider] exchangeAuthorizationCode: PKCE validation failed: code verifier does not match challenge`);
                throw new Error('PKCE validation failed: code verifier does not match challenge');
            }
            store_1.authStore.removeCodeVerifier(`challenge_${client.client_id}`);
        }
        const params = {
            grant_type: 'authorization_code',
            code: authorizationCode,
        };
        try {
            logger_1.logger.info(`[LarkOIDC2OAuthServerProvider] Exchanging authorization code for client ${client.client_id}; appId: ${this._options.appId}`);
            const appAccessTokenResponse = await http_instance_1.commonHttpInstance.post(this._endpoints.appAccessTokenUrl, { app_id: this._options.appId, app_secret: this._options.appSecret }, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
            const { app_access_token: appAccessToken } = appAccessTokenResponse.data;
            const response = await http_instance_1.commonHttpInstance.post(this._endpoints.tokenUrl, params, {
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: `Bearer ${appAccessToken}` },
            });
            const data = response.data;
            const parseResult = LarkOIDCTokenSchema.safeParse(data);
            if (!parseResult.success) {
                throw new Error(`Token parse failed: invalid response: ${data === null || data === void 0 ? void 0 : data.code}, ${data === null || data === void 0 ? void 0 : data.msg}`);
            }
            const token = parseResult.data;
            const expiresAt = token.data.expires_in ? token.data.expires_in + Date.now() / 1000 : undefined;
            await store_1.authStore.storeToken({
                clientId: client.client_id,
                token: token.data.access_token,
                scopes: ((_a = token.data.scope) === null || _a === void 0 ? void 0 : _a.split(' ')) || [],
                expiresAt,
                extra: {
                    refreshToken: token.data.refresh_token,
                    token,
                    appId: this._options.appId,
                    appSecret: this._options.appSecret,
                },
            });
            logger_1.logger.info(`[LarkOIDC2OAuthServerProvider] Successfully exchanged authorization code for client ${client.client_id}; appId: ${this._options.appId}; token: ${Boolean(token.data.access_token)}; refreshToken: ${Boolean(token.data.refresh_token)};expiresAt: ${expiresAt}`);
            return {
                access_token: token.data.access_token,
                token_type: token.data.token_type,
                expires_in: token.data.expires_in,
                scope: token.data.scope,
                refresh_token: token.data.refresh_token,
            };
        }
        catch (error) {
            logger_1.logger.error(`[LarkOIDC2OAuthServerProvider] exchangeAuthorizationCode: Token exchange failed: ${((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || error.status} ${((_c = error.response) === null || _c === void 0 ? void 0 : _c.data) || error.message}`);
            throw new Error(`Token exchange failed: ${((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || error.status} ${((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || error.message}`);
        }
    }
    async exchangeRefreshToken(client, refreshToken, _scopes) {
        var _a, _b, _c, _d, _e, _f, _g;
        const originalToken = await store_1.authStore.getTokenByRefreshToken(refreshToken);
        if (!originalToken) {
            logger_1.logger.error(`[LarkOIDC2OAuthServerProvider] exchangeRefreshToken: Refresh token is invalid`);
            throw new Error('refresh token is invalid');
        }
        const appId = ((_a = originalToken.extra) === null || _a === void 0 ? void 0 : _a.app_id) || this._options.appId;
        const appSecret = ((_b = originalToken.extra) === null || _b === void 0 ? void 0 : _b.app_secret) || this._options.appSecret;
        try {
            logger_1.logger.info(`[LarkOIDC2OAuthServerProvider] Refreshing token for client ${client.client_id}`);
            const appAccessTokenResponse = await http_instance_1.commonHttpInstance.post(this._endpoints.appAccessTokenUrl, { app_id: appId, app_secret: appSecret }, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
            const { app_access_token: appAccessToken } = appAccessTokenResponse.data;
            const response = await http_instance_1.commonHttpInstance.post(this._endpoints.refreshTokenUrl, { grant_type: 'refresh_token', refresh_token: refreshToken }, { headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: `Bearer ${appAccessToken}` } });
            const data = response.data;
            const parseResult = LarkOIDCTokenSchema.safeParse(data);
            if (!parseResult.success) {
                throw new Error(`Token parse failed: invalid response: ${data === null || data === void 0 ? void 0 : data.code}, ${data === null || data === void 0 ? void 0 : data.msg}`);
            }
            const token = parseResult.data;
            const expiresAt = token.data.expires_in ? token.data.expires_in + Date.now() / 1000 : undefined;
            await store_1.authStore.storeToken({
                clientId: client.client_id,
                token: token.data.access_token,
                scopes: ((_c = token.data.scope) === null || _c === void 0 ? void 0 : _c.split(' ')) || [],
                expiresAt,
                extra: { refreshToken: token.data.refresh_token, token, appId, appSecret },
            });
            logger_1.logger.info(`[LarkOIDC2OAuthServerProvider] Successfully refreshed token for client ${client.client_id}; appId: ${appId}; token: ${Boolean(token.data.access_token)}; refreshToken: ${Boolean(token.data.refresh_token)};expiresAt: ${expiresAt}`);
            return {
                access_token: token.data.access_token,
                token_type: token.data.token_type,
                expires_in: token.data.expires_in,
                scope: token.data.scope,
                refresh_token: token.data.refresh_token,
            };
        }
        catch (error) {
            logger_1.logger.error(`[LarkOIDC2OAuthServerProvider] exchangeRefreshToken: Token refresh failed: ${((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || error.status} ${((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || error.message}`);
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
exports.LarkOIDC2OAuthServerProvider = LarkOIDC2OAuthServerProvider;
