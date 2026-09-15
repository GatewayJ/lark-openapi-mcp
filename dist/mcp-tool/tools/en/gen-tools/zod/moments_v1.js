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
    description: '[Feishu/Lark]-Moments-Post-Query post information-Query post entity data information by post id',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({
            post_id: zod_1.z
                .string()
                .describe('Post ID, which can be got from the data returned by the "Publish moment" interface or the "Moment posted" event'),
        }),
    },
};
exports.momentsV1Tools = [exports.momentsV1PostGet];
