"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanAuthenticationV1Tools = exports.humanAuthenticationV1IdentityCreate = void 0;
const zod_1 = require("zod");
exports.humanAuthenticationV1IdentityCreate = {
    project: 'human_authentication',
    name: 'human_authentication.v1.identity.create',
    sdkName: 'human_authentication.v1.identity.create',
    path: '/open-apis/human_authentication/v1/identities',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-实名认证-录入身份信息-该接口用于录入实名认证的身份信息，在唤起有源活体认证前，需要使用该接口进行实名认证',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            identity_name: zod_1.z.string().describe('姓名'),
            identity_code: zod_1.z.string().describe('身份证号'),
            mobile: zod_1.z.string().describe('手机号').optional(),
        }),
        params: zod_1.z.object({
            user_id: zod_1.z
                .string()
                .describe('用户的唯一标识（使用的ID类型见下一参数描述，不同ID类型的区别和获取，参考文档：[如何获得 User ID、Open ID 和 Union ID？]）'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
    },
};
exports.humanAuthenticationV1Tools = [exports.humanAuthenticationV1IdentityCreate];
