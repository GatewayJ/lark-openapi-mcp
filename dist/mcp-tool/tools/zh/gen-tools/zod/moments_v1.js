"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentsV1Tools = exports.momentsV1PostGet = void 0;
const zod_1 = require("zod");
exports.momentsV1PostGet = {
    project: 'moments',
    name: 'moments.v1.post.get',
    sdkName: 'moments.v1.post.get',
    path: '/open-apis/moments/v1/posts/:post_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-公司圈-帖子-查询帖子信息-通过 ID 查询帖子实体数据信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ post_id: zod_1.z.string().describe('帖子的ID，可从发布帖子接口返回数据或发布帖子事件中获取') }),
    },
};
exports.momentsV1Tools = [exports.momentsV1PostGet];
