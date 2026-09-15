"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.docxBuiltinTools = exports.larkDocxBuiltinImportTool = exports.larkDocxBuiltinSearchTool = void 0;
const lark = __importStar(require("@larksuiteoapi/node-sdk"));
const stream_1 = require("stream");
const zod_1 = require("zod");
const passthrough_handler_1 = require("../../../../utils/passthrough-handler");
exports.larkDocxBuiltinSearchTool = {
    project: 'docx',
    name: 'docx.builtin.search',
    accessTokens: ['user'],
    description: '[Feishu/Lark]-Docs-Document-Search Document-Search cloud documents, only supports user_access_token',
    schema: {
        data: zod_1.z.object({
            search_key: zod_1.z.string().describe('Search keyword'),
            count: zod_1.z
                .number()
                .describe('Specify the number of files returned in the search. Value range is [0,50].')
                .optional(),
            offset: zod_1.z
                .number()
                .describe('Specifies the search offset. The minimum value is 0, which means no offset. The sum of this parameter and the number of returned files must not be greater than or equal to 200 (i.e., offset + count < 200).')
                .optional(),
            owner_ids: zod_1.z.array(zod_1.z.string()).describe('Open ID of the file owner').optional(),
            chat_ids: zod_1.z.array(zod_1.z.string()).describe('ID of the group where the file is located').optional(),
            docs_types: zod_1.z
                .array(zod_1.z.enum(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file']))
                .describe('File types, supports the following enumerations: doc: old version document; sheet: spreadsheet; slides: slides; bitable: multi-dimensional table; mindnote: mind map; file: file')
                .optional(),
        }),
        useUAT: zod_1.z
            .boolean()
            .describe('Whether to use user identity for the request, false means using application identity')
            .optional(),
    },
    customHandler: async (client, params, options) => {
        var _a;
        try {
            const { userAccessToken, credential, context } = options || {};
            const requestCredential = credential || (context === null || context === void 0 ? void 0 : context.credential);
            if (!userAccessToken && !requestCredential) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'User access token is not configured' }) }],
                };
            }
            const requestOptions = requestCredential
                ? (0, passthrough_handler_1.withRequestCredential)(requestCredential)
                : lark.withUserAccessToken(userAccessToken);
            const response = await client.request({
                method: 'POST',
                url: '/open-apis/suite/docs-api/search/object',
                data: params.data,
            }, requestOptions);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify((_a = response.data) !== null && _a !== void 0 ? _a : response),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(error.response.data),
                    },
                ],
            };
        }
    },
};
exports.larkDocxBuiltinImportTool = {
    project: 'docx',
    name: 'docx.builtin.import',
    accessTokens: ['user', 'tenant'],
    description: '[Feishu/Lark]-Docs-Document-Import Document-Import cloud document, maximum 20MB',
    schema: {
        data: zod_1.z
            .object({
            markdown: zod_1.z.string().describe('Markdown file content'),
            file_name: zod_1.z.string().describe('File name').max(27).optional(),
        })
            .describe('Request body'),
        useUAT: zod_1.z.boolean().describe('Use user identity for the request, otherwise use application identity').optional(),
    },
    customHandler: async (client, params, options) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        try {
            const { userAccessToken, credential, context } = options || {};
            const requestCredential = credential || (context === null || context === void 0 ? void 0 : context.credential);
            const requestOptions = requestCredential
                ? (0, passthrough_handler_1.withRequestCredential)(requestCredential)
                : userAccessToken && params.useUAT
                    ? lark.withUserAccessToken(userAccessToken)
                    : undefined;
            const file = stream_1.Readable.from(params.data.markdown);
            const data = {
                file_name: 'docx.md',
                parent_type: 'ccm_import_open',
                parent_node: '/',
                size: Buffer.byteLength(params.data.markdown),
                file,
                extra: JSON.stringify({ obj_type: 'docx', file_extension: 'md' }),
            };
            const response = requestOptions
                ? await client.drive.media.uploadAll({ data }, requestOptions)
                : await client.drive.media.uploadAll({ data });
            if (!(response === null || response === void 0 ? void 0 : response.file_token)) {
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({ msg: 'Document import failed, please check the markdown file content' }),
                        },
                    ],
                };
            }
            const importData = {
                file_extension: 'md',
                file_name: params.data.file_name,
                file_token: response === null || response === void 0 ? void 0 : response.file_token,
                type: 'docx',
                point: {
                    mount_type: 1,
                    mount_key: '',
                },
            };
            const importResponse = requestOptions
                ? await client.drive.importTask.create({ data: importData }, requestOptions)
                : await client.drive.importTask.create({ data: importData });
            const taskId = (_a = importResponse.data) === null || _a === void 0 ? void 0 : _a.ticket;
            if (!taskId) {
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({ msg: 'Document import failed, please check the markdown file content' }),
                        },
                    ],
                };
            }
            for (let i = 0; i < 5; i++) {
                const taskResponse = requestOptions
                    ? await client.drive.importTask.get({ path: { ticket: taskId } }, requestOptions)
                    : await client.drive.importTask.get({ path: { ticket: taskId } });
                if (((_c = (_b = taskResponse.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.job_status) === 0) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify((_d = taskResponse.data) !== null && _d !== void 0 ? _d : taskResponse),
                            },
                        ],
                    };
                }
                else if (((_f = (_e = taskResponse.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.job_status) !== 1 && ((_h = (_g = taskResponse.data) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.job_status) !== 2) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify(taskResponse.data),
                            },
                        ],
                    };
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({ msg: 'Document import failed, please try again later' }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(((_j = error === null || error === void 0 ? void 0 : error.response) === null || _j === void 0 ? void 0 : _j.data) || error),
                    },
                ],
            };
        }
    },
};
exports.docxBuiltinTools = [exports.larkDocxBuiltinSearchTool, exports.larkDocxBuiltinImportTool];
