"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenV1Tools = exports.authenV1UserInfoGet = void 0;
const zod_1 = require("zod");
exports.authenV1UserInfoGet = {
    project: 'authen',
    name: 'authen.v1.userInfo.get',
    sdkName: 'authen.v1.userInfo.get',
    path: '/open-apis/authen/v1/user_info',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Authenticate and Authorize-Login state management-Get User Information-Get related user info via `user_access_token`',
    accessTokens: ['user'],
    schema: {
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.authenV1Tools = [exports.authenV1UserInfoGet];
