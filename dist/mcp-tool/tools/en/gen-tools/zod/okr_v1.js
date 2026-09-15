"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.okrV1Tools = exports.okrV1UserOkrList = exports.okrV1ReviewQuery = exports.okrV1ProgressRecordUpdate = exports.okrV1ProgressRecordGet = exports.okrV1ProgressRecordDelete = exports.okrV1ProgressRecordCreate = exports.okrV1PeriodPatch = exports.okrV1PeriodList = exports.okrV1PeriodCreate = exports.okrV1PeriodRuleList = exports.okrV1OkrBatchGet = void 0;
const zod_1 = require("zod");
exports.okrV1OkrBatchGet = {
    project: 'okr',
    name: 'okr.v1.okr.batchGet',
    sdkName: 'okr.v1.okr.batchGet',
    path: '/open-apis/okr/v1/okrs/batch_get',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-OKR-OKR content-Get OKR in bulk-Get OKR in batches based on OKR id',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('User ID type').optional(),
            okr_ids: zod_1.z.array(zod_1.z.string()).describe('OKR ID list, up to 10'),
            lang: zod_1.z
                .string()
                .describe("Request the language version of OKR (such as @'s name), lang = en_us/zh_cn, request Query")
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1PeriodRuleList = {
    project: 'okr',
    name: 'okr.v1.periodRule.list',
    sdkName: 'okr.v1.periodRule.list',
    path: '/open-apis/okr/v1/period_rules',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-OKR-Period rule-Get OKR period rules-Get a list of periodic rules for your tenant',
    accessTokens: ['tenant'],
    schema: {},
};
exports.okrV1PeriodCreate = {
    project: 'okr',
    name: 'okr.v1.period.create',
    sdkName: 'okr.v1.period.create',
    path: '/open-apis/okr/v1/periods',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-OKR-OKR Period-Create OKR period-Creare a OKR period according to given period rule',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            period_rule_id: zod_1.z.string().describe('Period rule id'),
            start_month: zod_1.z.string().describe('Period start year month'),
        }),
    },
};
exports.okrV1PeriodList = {
    project: 'okr',
    name: 'okr.v1.period.list',
    sdkName: 'okr.v1.period.list',
    path: '/open-apis/okr/v1/periods',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-OKR-OKR Period-Get the OKR cycle list-Get the OKR cycle list',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('Page size, default 10').optional(),
        })
            .optional(),
    },
};
exports.okrV1PeriodPatch = {
    project: 'okr',
    name: 'okr.v1.period.patch',
    sdkName: 'okr.v1.period.patch',
    path: '/open-apis/okr/v1/periods/:period_id',
    httpMethod: 'PATCH',
    description: "[Feishu/Lark]-OKR-OKR Period-Modify OKR period status-Modify a OKR period's status to 'Normal', 'Invalid' or 'Hidden'. This apply on every user in your tenant, please take caution",
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            status: zod_1.z
                .number()
                .describe('Period display status Options:1(normal_status Normal state),2(mark_invalid Mark failure),3(hidden_period Hidden period)'),
        }),
        path: zod_1.z.object({ period_id: zod_1.z.string().describe('Period id') }),
    },
};
exports.okrV1ProgressRecordCreate = {
    project: 'okr',
    name: 'okr.v1.progressRecord.create',
    sdkName: 'okr.v1.progressRecord.create',
    path: '/open-apis/okr/v1/progress_records',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-OKR-Progress record-Create OKR progress record-Create OKR progress record',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            source_title: zod_1.z.string().describe('Sources of progress'),
            source_url: zod_1.z.string().describe('Progress Source Link'),
            target_id: zod_1.z.string().describe('Target id, corresponding to target_type'),
            target_type: zod_1.z.number().describe('Target type Options:2(objective),3(key_result Key Result)'),
            content: zod_1.z
                .object({
                blocks: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .enum(['paragraph', 'gallery'])
                        .describe('Document element type Options:paragraph(Text paragraph),gallery(Picture)')
                        .optional(),
                    paragraph: zod_1.z
                        .object({
                        style: zod_1.z
                            .object({
                            list: zod_1.z
                                .object({
                                type: zod_1.z
                                    .enum(['number', 'bullet', 'checkBox', 'checkedBox', 'indent'])
                                    .describe('List type Options:number(Numbered list),bullet(Unordered list),checkBox(Task list),checkedBox(List of completed tasks),indent(Tab indentation)')
                                    .optional(),
                                indentLevel: zod_1.z
                                    .number()
                                    .describe('The indentation level of the list, support to specify the indentation of a line, except for the code block list support to set the indentation, support 1-16 indentation, the value range: [1,16]')
                                    .optional(),
                                number: zod_1.z
                                    .number()
                                    .describe('The line number used to specify the list, which is only effective for numbered list and code blocks. If indentation is set for numbered list, the line number may appear as letters or Roman numerals')
                                    .optional(),
                            })
                                .describe('Numbered list/unordered list/task list')
                                .optional(),
                        })
                            .describe('Paragraph style')
                            .optional(),
                        elements: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z
                                .enum(['textRun', 'docsLink', 'person'])
                                .describe('Element type Options:textRun(Text element),docsLink(Document link element),person(@User type element)')
                                .optional(),
                            textRun: zod_1.z
                                .object({
                                text: zod_1.z.string().describe('Specific text content').optional(),
                                style: zod_1.z
                                    .object({
                                    bold: zod_1.z.boolean().describe('Bold or not').optional(),
                                    strikeThrough: zod_1.z.boolean().describe('Whether to delete').optional(),
                                    backColor: zod_1.z
                                        .object({
                                        red: zod_1.z.number().describe('Red, value range [0,255]').optional(),
                                        green: zod_1.z.number().describe('Green, value range [0,255]').optional(),
                                        blue: zod_1.z.number().describe('Blue, value range [0,255]').optional(),
                                        alpha: zod_1.z.number().describe('Transparency, value range [0,1]').optional(),
                                    })
                                        .describe('Background color')
                                        .optional(),
                                    textColor: zod_1.z
                                        .object({
                                        red: zod_1.z.number().describe('Red, value range [0,255]').optional(),
                                        green: zod_1.z.number().describe('Green, value range [0,255]').optional(),
                                        blue: zod_1.z.number().describe('Blue, value range [0,255]').optional(),
                                        alpha: zod_1.z.number().describe('Transparency, value range [0,1]').optional(),
                                    })
                                        .describe('Font color')
                                        .optional(),
                                    link: zod_1.z
                                        .object({ url: zod_1.z.string().describe('Link address').optional() })
                                        .describe('Link address')
                                        .optional(),
                                })
                                    .describe('Styling of text content, support for BIUS, colors, etc')
                                    .optional(),
                            })
                                .describe('Text')
                                .optional(),
                            docsLink: zod_1.z
                                .object({
                                url: zod_1.z.string().describe('Feishu cloud document link address').optional(),
                                title: zod_1.z.string().describe('Feishu Cloud Document Title').optional(),
                            })
                                .describe('Feishu Cloud Document')
                                .optional(),
                            person: zod_1.z
                                .object({ openId: zod_1.z.string().describe('Employee OpenID').optional() })
                                .describe('@User')
                                .optional(),
                        }))
                            .describe('Paragraph elements form a paragraph')
                            .optional(),
                    })
                        .describe('Text paragraph')
                        .optional(),
                    gallery: zod_1.z
                        .object({
                        imageList: zod_1.z
                            .array(zod_1.z.object({
                            fileToken: zod_1.z
                                .string()
                                .describe('Image token, obtained through the upload image interface')
                                .optional(),
                            src: zod_1.z.string().describe('src').optional(),
                            width: zod_1.z.number().describe('Picture width in px').optional(),
                            height: zod_1.z.number().describe('Picture height, unit px').optional(),
                        }))
                            .describe('Picture elements')
                            .optional(),
                    })
                        .describe('Picture')
                        .optional(),
                }))
                    .describe('The document structure is arranged in rows, each row of content is a Block')
                    .optional(),
            })
                .describe('Details of progress, in rich text format'),
            source_url_pc: zod_1.z.string().describe('{}').optional(),
            source_url_mobile: zod_1.z.string().describe('{}').optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1ProgressRecordDelete = {
    project: 'okr',
    name: 'okr.v1.progressRecord.delete',
    sdkName: 'okr.v1.progressRecord.delete',
    path: '/open-apis/okr/v1/progress_records/:progress_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-OKR-Progress record-Delete OKR progress-Delete OKR progress',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ progress_id: zod_1.z.string().describe('progress id') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1ProgressRecordGet = {
    project: 'okr',
    name: 'okr.v1.progressRecord.get',
    sdkName: 'okr.v1.progressRecord.get',
    path: '/open-apis/okr/v1/progress_records/:progress_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-OKR-Progress record-Get OKR progress records-Obtain OKR progress record details according to ID',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ progress_id: zod_1.z.string().describe('OKR progress record ID to be queried').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1ProgressRecordUpdate = {
    project: 'okr',
    name: 'okr.v1.progressRecord.update',
    sdkName: 'okr.v1.progressRecord.update',
    path: '/open-apis/okr/v1/progress_records/:progress_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-OKR-Progress record-Update OKR progress-Update OKR progress',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            content: zod_1.z
                .object({
                blocks: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .enum(['paragraph', 'gallery'])
                        .describe('Document element type Options:paragraph(Text paragraph),gallery(Picture)')
                        .optional(),
                    paragraph: zod_1.z
                        .object({
                        style: zod_1.z
                            .object({
                            list: zod_1.z
                                .object({
                                type: zod_1.z
                                    .enum(['number', 'bullet', 'checkBox', 'checkedBox', 'indent'])
                                    .describe('List type Options:number(Numbered list),bullet(Unordered list),checkBox(Task list),checkedBox(List of completed tasks),indent(Tab indentation)')
                                    .optional(),
                                indentLevel: zod_1.z
                                    .number()
                                    .describe('The indentation level of the list, support to specify the indentation of a line, except for the code block list support to set the indentation, support 1-16 indentation, the value range: [1,16]')
                                    .optional(),
                                number: zod_1.z
                                    .number()
                                    .describe('The line number used to specify the list, which is only effective for numbered list and code blocks. If indentation is set for numbered list, the line number may appear as letters or Roman numerals')
                                    .optional(),
                            })
                                .describe('Numbered list/unordered list/task list')
                                .optional(),
                        })
                            .describe('Paragraph style')
                            .optional(),
                        elements: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z
                                .enum(['textRun', 'docsLink', 'person'])
                                .describe('Element type Options:textRun(Text element),docsLink(Document link element),person(@User type element)')
                                .optional(),
                            textRun: zod_1.z
                                .object({
                                text: zod_1.z.string().describe('Specific text content').optional(),
                                style: zod_1.z
                                    .object({
                                    bold: zod_1.z.boolean().describe('Bold or not').optional(),
                                    strikeThrough: zod_1.z.boolean().describe('Whether to delete').optional(),
                                    backColor: zod_1.z
                                        .object({
                                        red: zod_1.z.number().describe('Red, value range [0,255]').optional(),
                                        green: zod_1.z.number().describe('Green, value range [0,255]').optional(),
                                        blue: zod_1.z.number().describe('Blue, value range [0,255]').optional(),
                                        alpha: zod_1.z.number().describe('Transparency, value range [0,1]').optional(),
                                    })
                                        .describe('Background color')
                                        .optional(),
                                    textColor: zod_1.z
                                        .object({
                                        red: zod_1.z.number().describe('Red, value range [0,255]').optional(),
                                        green: zod_1.z.number().describe('Green, value range [0,255]').optional(),
                                        blue: zod_1.z.number().describe('Blue, value range [0,255]').optional(),
                                        alpha: zod_1.z.number().describe('Transparency, value range [0,1]').optional(),
                                    })
                                        .describe('Font color')
                                        .optional(),
                                    link: zod_1.z
                                        .object({ url: zod_1.z.string().describe('Link address').optional() })
                                        .describe('Link address')
                                        .optional(),
                                })
                                    .describe('Styling of text content, support for BIUS, colors, etc')
                                    .optional(),
                            })
                                .describe('Text')
                                .optional(),
                            docsLink: zod_1.z
                                .object({
                                url: zod_1.z.string().describe('Feishu cloud document link address').optional(),
                                title: zod_1.z.string().describe('Feishu Cloud Document Title').optional(),
                            })
                                .describe('Feishu Cloud Document')
                                .optional(),
                            person: zod_1.z
                                .object({ openId: zod_1.z.string().describe('Employee OpenID').optional() })
                                .describe('@User')
                                .optional(),
                        }))
                            .describe('Paragraph elements form a paragraph')
                            .optional(),
                    })
                        .describe('Text paragraph')
                        .optional(),
                    gallery: zod_1.z
                        .object({
                        imageList: zod_1.z
                            .array(zod_1.z.object({
                            fileToken: zod_1.z
                                .string()
                                .describe('Image token, obtained through the upload image interface')
                                .optional(),
                            src: zod_1.z.string().describe('src').optional(),
                            width: zod_1.z.number().describe('Picture width in px').optional(),
                            height: zod_1.z.number().describe('Picture height, unit px').optional(),
                        }))
                            .describe('Picture elements')
                            .optional(),
                    })
                        .describe('Picture')
                        .optional(),
                }))
                    .describe('The document structure is arranged in rows, each row of content is a Block')
                    .optional(),
            })
                .describe('Details of progress, in rich text format'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ progress_id: zod_1.z.string().describe('progress id') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1ReviewQuery = {
    project: 'okr',
    name: 'okr.v1.review.query',
    sdkName: 'okr.v1.review.query',
    path: '/open-apis/okr/v1/reviews/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-OKR-Review-Query review information-According to the cycle and user query review information',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('User ID type').optional(),
            user_ids: zod_1.z.array(zod_1.z.string()).describe('Target user id list, up to 5'),
            period_ids: zod_1.z.array(zod_1.z.string()).describe('period_id list, up to 5'),
        }),
    },
};
exports.okrV1UserOkrList = {
    project: 'okr',
    name: 'okr.v1.userOkr.list',
    sdkName: 'okr.v1.userOkr.list',
    path: '/open-apis/okr/v1/users/:user_id/okrs',
    httpMethod: 'GET',
    description: "[Feishu/Lark]-OKR-OKR content-Get the user's OKR list-Get OKR list based on user id",
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('User ID type').optional(),
            offset: zod_1.z
                .string()
                .describe('The offset of the request list (corresponding to the okr_list field of the response body), offset>=0'),
            limit: zod_1.z.string().describe('The length of the request list, 0 < limit < = 10, in the request Query'),
            lang: zod_1.z
                .string()
                .describe("Request the language version of OKR (such as @'s name), lang = en_us/zh_cn, request Query")
                .optional(),
            period_ids: zod_1.z.array(zod_1.z.string()).describe('period_id list, up to 10').optional(),
        }),
        path: zod_1.z.object({ user_id: zod_1.z.string().describe('Target user id').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.okrV1Tools = [
    exports.okrV1OkrBatchGet,
    exports.okrV1PeriodRuleList,
    exports.okrV1PeriodCreate,
    exports.okrV1PeriodList,
    exports.okrV1PeriodPatch,
    exports.okrV1ProgressRecordCreate,
    exports.okrV1ProgressRecordDelete,
    exports.okrV1ProgressRecordGet,
    exports.okrV1ProgressRecordUpdate,
    exports.okrV1ReviewQuery,
    exports.okrV1UserOkrList,
];
