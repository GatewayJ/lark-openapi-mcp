"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authV3Tools = exports.authV3AuthTenantAccessTokenInternal = exports.authV3AuthTenantAccessToken = exports.authV3AuthAppTicketResend = exports.authV3AuthAppAccessTokenInternal = exports.authV3AuthAppAccessToken = void 0;
const zod_1 = require("zod");
exports.authV3AuthAppAccessToken = {
    project: 'auth',
    name: 'auth.v3.auth.appAccessToken',
    sdkName: 'auth.v3.auth.appAccessToken',
    path: '/open-apis/auth/v3/app_access_token',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Get Access Tokens-Store applications get app_access_token',
    accessTokens: undefined,
    schema: {
        data: zod_1.z.object({ app_id: zod_1.z.string(), app_secret: zod_1.z.string(), app_ticket: zod_1.z.string() }),
    },
};
exports.authV3AuthAppAccessTokenInternal = {
    project: 'auth',
    name: 'auth.v3.auth.appAccessTokenInternal',
    sdkName: 'auth.v3.auth.appAccessTokenInternal',
    path: '/open-apis/auth/v3/app_access_token/internal',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Get Access Tokens-Get custom app app_access_token',
    accessTokens: undefined,
    schema: {
        data: zod_1.z.object({ app_id: zod_1.z.string(), app_secret: zod_1.z.string() }),
    },
};
exports.authV3AuthAppTicketResend = {
    project: 'auth',
    name: 'auth.v3.auth.appTicketResend',
    sdkName: 'auth.v3.auth.appTicketResend',
    path: '/open-apis/auth/v3/app_ticket/resend',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Get Access Tokens-Retrieve app_ticket',
    accessTokens: undefined,
    schema: {
        data: zod_1.z.object({ app_id: zod_1.z.string(), app_secret: zod_1.z.string() }),
    },
};
exports.authV3AuthTenantAccessToken = {
    project: 'auth',
    name: 'auth.v3.auth.tenantAccessToken',
    sdkName: 'auth.v3.auth.tenantAccessToken',
    path: '/open-apis/auth/v3/tenant_access_token',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Get Access Tokens-Store applications get tenant_access_token',
    accessTokens: undefined,
    schema: {
        data: zod_1.z.object({ app_access_token: zod_1.z.string(), tenant_key: zod_1.z.string() }),
    },
};
exports.authV3AuthTenantAccessTokenInternal = {
    project: 'auth',
    name: 'auth.v3.auth.tenantAccessTokenInternal',
    sdkName: 'auth.v3.auth.tenantAccessTokenInternal',
    path: '/open-apis/auth/v3/tenant_access_token/internal',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Get Access Tokens-Get custom app tenant_access_token',
    accessTokens: undefined,
    schema: {
        data: zod_1.z.object({ app_id: zod_1.z.string(), app_secret: zod_1.z.string() }),
    },
};
exports.authV3Tools = [
    exports.authV3AuthAppAccessToken,
    exports.authV3AuthAppAccessTokenInternal,
    exports.authV3AuthAppTicketResend,
    exports.authV3AuthTenantAccessToken,
    exports.authV3AuthTenantAccessTokenInternal,
];
