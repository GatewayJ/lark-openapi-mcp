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
    description: '[Feishu/Lark]-工作台-我的常用-获取用户自定义常用的应用',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({
            language: zod_1.z
                .enum(['zh_cn', 'en_us', 'ja_jp'])
                .describe('应用信息的语言版本 Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记,不填表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.number().describe('单页需求最大个数（最大 100），不传默认10个').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.applicationV5ApplicationRecommend = {
    project: 'application',
    name: 'application.v5.application.recommend',
    sdkName: 'application.v5.application.recommend',
    path: '/open-apis/application/v5/applications/recommend',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-工作台-我的常用-获取管理员推荐的应用',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({
            language: zod_1.z
                .enum(['zh_cn', 'en_us', 'ja_jp'])
                .describe('应用信息的语言版本 Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
                .optional(),
            recommend_type: zod_1.z
                .enum(['user_unremovable', 'user_removable'])
                .describe('推荐应用类型，默认为用户不可移除的推荐应用列表 Options:user_unremovable(UserUnremovable 用户不可移除的推荐应用列表),user_removable(UserRemovable 用户可移除的推荐应用列表)')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记,不填表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.number().describe('单页需求最大个数（最大 100），不传默认10个').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.applicationV5Tools = [exports.applicationV5ApplicationFavourite, exports.applicationV5ApplicationRecommend];
