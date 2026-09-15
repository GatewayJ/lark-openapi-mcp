"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wikiV1Tools = exports.wikiV1NodeSearch = void 0;
const zod_1 = require("zod");
exports.wikiV1NodeSearch = {
    project: 'wiki',
    name: 'wiki.v1.node.search',
    sdkName: 'wiki.v1.node.search',
    path: '/open-apis/wiki/v1/nodes/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-Search Wiki',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({ query: zod_1.z.string(), space_id: zod_1.z.string().optional(), node_id: zod_1.z.string().optional() }),
        params: zod_1.z.object({ page_token: zod_1.z.string().optional(), page_size: zod_1.z.number().optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV1Tools = [exports.wikiV1NodeSearch];
