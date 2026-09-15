"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsV1Tools = exports.docsV1ContentGet = void 0;
const zod_1 = require("zod");
exports.docsV1ContentGet = {
    project: 'docs',
    name: 'docs.v1.content.get',
    sdkName: 'docs.v1.content.get',
    path: '/open-apis/docs/v1/content',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Common-Get docs content-You can obtain the docs content. Currently, only upgraded document content in markdown format is supported',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            doc_token: zod_1.z
                .string()
                .describe('The unique identification of the docs. Click [here] to learn how to get `doc_token`'),
            doc_type: zod_1.z.literal('docx').describe('Docs type Options:docx(Upgraded Document)'),
            content_type: zod_1.z.literal('markdown').describe('Content type Options:markdown(Markdown format)'),
            lang: zod_1.z
                .enum(['zh', 'en', 'ja'])
                .describe('Specifies the language of the user name when the @user element exists in the docs. Default `zh` Options:zh(Chinese),en(English),ja(Japanese)')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.docsV1Tools = [exports.docsV1ContentGet];
