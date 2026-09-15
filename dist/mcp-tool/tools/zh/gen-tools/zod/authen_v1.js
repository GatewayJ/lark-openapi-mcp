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
    description: '[Feishu/Lark]-认证及授权-登录态管理-获取用户信息-通过 `user_access_token` 获取相关用户信息',
    accessTokens: ['user'],
    schema: {
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.authenV1Tools = [exports.authenV1UserInfoGet];
