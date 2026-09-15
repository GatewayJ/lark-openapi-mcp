"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationV5Tools = exports.applicationV5ApplicationRecommend = exports.applicationV5ApplicationFavourite = void 0;
const zod_1 = require("zod");
exports.applicationV5ApplicationFavourite = {
    project: 'application',
    name: 'application.v5.application.favourite',
    sdkName: 'application.v5.application.favourite',
    path: '/open-apis/application/v5/applications/favourite',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Workplace-My favorite-获取用户常用的应用',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({
            language: zod_1.z
                .enum(['zh_cn', 'en_us', 'ja_jp'])
                .describe('Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
                .optional(),
            page_token: zod_1.z.string().optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.applicationV5ApplicationRecommend = {
    project: 'application',
    name: 'application.v5.application.recommend',
    sdkName: 'application.v5.application.recommend',
    path: '/open-apis/application/v5/applications/recommend',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Workplace-My favorite-获取企业推荐的应用',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({
            language: zod_1.z
                .enum(['zh_cn', 'en_us', 'ja_jp'])
                .describe('Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
                .optional(),
            recommend_type: zod_1.z
                .enum(['user_unremovable', 'user_removable'])
                .describe('Options:user_unremovable(UserUnremovable 用户不可移除的推荐应用列表),user_removable(UserRemovable 用户可移除的推荐应用列表)')
                .optional(),
            page_token: zod_1.z.string().optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.applicationV5Tools = [exports.applicationV5ApplicationFavourite, exports.applicationV5ApplicationRecommend];
