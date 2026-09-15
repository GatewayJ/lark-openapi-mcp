"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driveV1Tools = exports.driveV1PermissionPublicPatch = exports.driveV1PermissionPublicPasswordUpdate = exports.driveV1PermissionPublicPasswordDelete = exports.driveV1PermissionPublicPasswordCreate = exports.driveV1PermissionPublicGet = exports.driveV1PermissionMemberUpdate = exports.driveV1PermissionMemberTransferOwner = exports.driveV1PermissionMemberList = exports.driveV1PermissionMemberDelete = exports.driveV1PermissionMemberCreate = exports.driveV1PermissionMemberBatchCreate = exports.driveV1PermissionMemberAuth = exports.driveV1MetaBatchQuery = exports.driveV1MediaUploadPrepare = exports.driveV1MediaUploadFinish = exports.driveV1MediaBatchGetTmpDownloadUrl = exports.driveV1ImportTaskGet = exports.driveV1ImportTaskCreate = exports.driveV1FileViewRecordList = exports.driveV1FileVersionList = exports.driveV1FileVersionGet = exports.driveV1FileVersionDelete = exports.driveV1FileVersionCreate = exports.driveV1FileUploadPrepare = exports.driveV1FileUploadFinish = exports.driveV1FileTaskCheck = exports.driveV1FileSubscriptionPatch = exports.driveV1FileSubscriptionGet = exports.driveV1FileSubscriptionCreate = exports.driveV1FileSubscribe = exports.driveV1FileStatisticsGet = exports.driveV1FileMove = exports.driveV1FileList = exports.driveV1FileGetSubscribe = exports.driveV1FileDeleteSubscribe = exports.driveV1FileDelete = exports.driveV1FileCreateShortcut = exports.driveV1FileCreateFolder = exports.driveV1FileCopy = exports.driveV1FileCommentReplyUpdate = exports.driveV1FileCommentReplyList = exports.driveV1FileCommentReplyDelete = exports.driveV1FileCommentPatch = exports.driveV1FileCommentList = exports.driveV1FileCommentGet = exports.driveV1FileCommentCreate = exports.driveV1FileCommentBatchQuery = exports.driveV1ExportTaskGet = exports.driveV1ExportTaskCreate = void 0;
const zod_1 = require("zod");
exports.driveV1ExportTaskCreate = {
    project: 'drive',
    name: 'drive.v1.exportTask.create',
    sdkName: 'drive.v1.exportTask.create',
    path: '/open-apis/drive/v1/export_tasks',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-导出云文档-创建导出任务-该接口用于创建导出文件的任务，并返回导出任务 ID。导出文件指将飞书文档、电子表格、多维表格导出为本地文件，包括 Word、Excel、PDF、CSV 格式。该接口为异步接口，需要继续调用[查询导出任务结果]接口获取导出结果。了解完整的导出步骤，参考[导出云文档概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            file_extension: zod_1.z
                .enum(['docx', 'pdf', 'xlsx', 'csv'])
                .describe('将云文档导出为本地文件后，本地文件的扩展名。了解各类云文档支持导出的文件格式，参考[导出云文档概述]。 Options:docx(Microsoft Word 格式),pdf(PDF 格式),xlsx(Microsoft Excel 格式),csv(CSV 格式)'),
            token: zod_1.z.string().describe('要导出的云文档的 token。获取方式参考 [如何获取云文档相关 token]'),
            type: zod_1.z
                .enum(['doc', 'sheet', 'bitable', 'docx'])
                .describe('要导出的云文档的类型 。可通过云文档的链接判断。 Options:doc(旧版飞书文档。支持导出扩展名为 docx 和 pdf 的文件。已不推荐使用。),sheet(飞书电子表格。支持导出扩展名为 xlsx 和 csv 的文件。),bitable(飞书多维表格。支持导出扩展名为 xlsx 和 csv 格式的文件。),docx(新版飞书文档。支持导出扩展名为 docx 和 pdf 格式的文件。)'),
            sub_id: zod_1.z
                .string()
                .describe('导出飞书电子表格或多维表格为 CSV 文件时，需传入电子表格工作表的 ID 或多维表格数据表的 ID：- 电子表格可调用[获取工作表] 接口获取返回的 `sheet_id` 的值作为该参数的值- 多维表格可调用[列出数据表]接口获取返回的 `table_id` 的值作为该参数的值')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1ExportTaskGet = {
    project: 'drive',
    name: 'drive.v1.exportTask.get',
    sdkName: 'drive.v1.exportTask.get',
    path: '/open-apis/drive/v1/export_tasks/:ticket',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件-导出云文档-查询导出任务结果-根据[创建导出任务]返回的导出任务 ID（ticket）轮询导出任务结果，并返回导出文件的 token。你可使用该 token 继续调用[下载导出文件]接口将导出的产物下载到本地。了解完整的导出文件步骤，参考[导出飞书云文档概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('要导出的云文档的 token。获取方式参考[如何获取云文档相关 token]。你可参考以下请求示例了解如何使用查询参数'),
        }),
        path: zod_1.z.object({ ticket: zod_1.z.string().describe('导出任务 ID。调用[创建导出任务] 获取') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentBatchQuery = {
    project: 'drive',
    name: 'drive.v1.fileComment.batchQuery',
    sdkName: 'drive.v1.fileComment.batchQuery',
    path: '/open-apis/drive/v1/files/:file_token/comments/batch_query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-评论-批量获取评论-该接口用于根据评论 ID 列表批量获取云文档评论信息，包括评论和回复 ID、回复的内容、评论人和回复人的用户 ID 等。支持返回全局评论以及局部评论（可通过 is_whole 字段区分）',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            comment_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('需要获取数据的评论 ID ，可通过调用获取云文档所有评论接口获取 comment_id'),
        }),
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档类型，已不推荐使用),docx(新版文档类型),sheet(电子表格类型),file(文件类型),slides(幻灯片)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档 Token').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentCreate = {
    project: 'drive',
    name: 'drive.v1.fileComment.create',
    sdkName: 'drive.v1.fileComment.create',
    path: '/open-apis/drive/v1/files/:file_token/comments',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-评论-添加全文评论-在文档中添加一条全局评论，不支持局部评论',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            reply_list: zod_1.z
                .object({
                replies: zod_1.z
                    .array(zod_1.z.object({
                    content: zod_1.z
                        .object({
                        elements: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z
                                .enum(['text_run', 'docs_link', 'person'])
                                .describe('回复内容的元素类型 Options:text_run(普通文本),docs_link(云文档链接),person(at 联系人)'),
                            text_run: zod_1.z
                                .object({ text: zod_1.z.string().describe('添加普通文本') })
                                .describe('普通文本')
                                .optional(),
                            docs_link: zod_1.z
                                .object({ url: zod_1.z.string().describe('添加云文档链接') })
                                .describe('云文档链接')
                                .optional(),
                            person: zod_1.z
                                .object({ user_id: zod_1.z.string().describe('添加用户的 user_id 以@用户') })
                                .describe('at 联系人')
                                .optional(),
                        }))
                            .describe('回复内容的元素列表'),
                    })
                        .describe('回复内容'),
                }))
                    .describe('回复列表'),
            })
                .describe('评论里的回复列表')
                .optional(),
        })
            .optional(),
        params: zod_1.z.object({
            file_type: zod_1.z.enum(['doc', 'docx']).describe('云文档类型 Options:doc(旧版文档，已不推荐使用),docx(新版文档)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档 Token可以通过浏览器该文档的 URL 栏上直接获取文档 Token') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentGet = {
    project: 'drive',
    name: 'drive.v1.fileComment.get',
    sdkName: 'drive.v1.fileComment.get',
    path: '/open-apis/drive/v1/files/:file_token/comments/:comment_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-评论-获取全文评论-获取云文档中的某条全文评论，不支持局部评论',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'docx'])
                .describe('云文档类型 Options:doc(旧版文档，已不推荐使用),sheet(表格),file(文件),docx(新版文档)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档 Token'), comment_id: zod_1.z.string().describe('评论 ID') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentList = {
    project: 'drive',
    name: 'drive.v1.fileComment.list',
    sdkName: 'drive.v1.fileComment.list',
    path: '/open-apis/drive/v1/files/:file_token/comments',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-评论-获取云文档所有评论-该接口用于根据云文档 Token 分页获取文档所有评论信息，包括评论和回复 ID、回复的内容、评论人和回复人的用户 ID 等。该接口支持返回全局评论以及局部评论（可通过 is_whole 字段区分）。默认每页返回 50 个评论',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档类型，已不推荐使用),docx(新版文档类型),sheet(电子表格类型),file(文件类型),slides(幻灯片)'),
            is_whole: zod_1.z.boolean().describe('是否全文评论').optional(),
            is_solved: zod_1.z.boolean().describe('是否已解决（可选）').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.number().describe('分页大小，默认每页返回 50 个评论').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('云文档的 token。获取方式参考 [如何获取云文档相关 token]') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentPatch = {
    project: 'drive',
    name: 'drive.v1.fileComment.patch',
    sdkName: 'drive.v1.fileComment.patch',
    path: '/open-apis/drive/v1/files/:file_token/comments/:comment_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-云文档-评论-解决/恢复评论-解决或恢复云文档中的评论',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ is_solved: zod_1.z.boolean().describe('评论解决标志') }),
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档，已不推荐使用),docx(新版文档),sheet(表格),file(文件),slides(幻灯片)'),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档token'), comment_id: zod_1.z.string().describe('评论ID') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentReplyDelete = {
    project: 'drive',
    name: 'drive.v1.fileCommentReply.delete',
    sdkName: 'drive.v1.fileCommentReply.delete',
    path: '/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-评论-删除回复-删除云文档中的某条回复',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档，已不推荐使用),docx(新版文档),sheet(表格),file(文件),slides(幻灯片)'),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('文档 Token'),
            comment_id: zod_1.z.string().describe('评论 ID'),
            reply_id: zod_1.z.string().describe('回复 ID'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentReplyList = {
    project: 'drive',
    name: 'drive.v1.fileCommentReply.list',
    sdkName: 'drive.v1.fileCommentReply.list',
    path: '/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-评论-获取回复信息-该接口用于根据评论 ID，获取该条评论对应的回复信息，包括回复 ID、回复内容、回复人的用户 ID 等',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档，已不推荐使用),docx(新版文档类型),sheet(电子表格类型),file(文件夹类型),slides(幻灯片)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档 Token'), comment_id: zod_1.z.string().describe('评论 ID') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCommentReplyUpdate = {
    project: 'drive',
    name: 'drive.v1.fileCommentReply.update',
    sdkName: 'drive.v1.fileCommentReply.update',
    path: '/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-云文档-评论-更新回复的内容-更新云文档中的某条回复的内容',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            content: zod_1.z
                .object({
                elements: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .enum(['text_run', 'docs_link', 'person'])
                        .describe('回复的内容元素 Options:text_run(普通文本),docs_link(at 云文档链接),person(at 联系人)'),
                    text_run: zod_1.z
                        .object({ text: zod_1.z.string().describe('回复 普通文本') })
                        .describe('文本内容')
                        .optional(),
                    docs_link: zod_1.z
                        .object({ url: zod_1.z.string().describe('回复 at 云文档') })
                        .describe('添加云文档链接')
                        .optional(),
                    person: zod_1.z
                        .object({ user_id: zod_1.z.string().describe('添加用户的 user_id 以@用户') })
                        .describe('添加用户的 user_id')
                        .optional(),
                }))
                    .describe('回复的内容'),
            })
                .describe('回复内容'),
        }),
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档，已不推荐使用),docx(新版文档),sheet(表格),file(文件),slides(幻灯片)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('文档 Token'),
            comment_id: zod_1.z.string().describe('评论 ID'),
            reply_id: zod_1.z.string().describe('回复 ID'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCopy = {
    project: 'drive',
    name: 'drive.v1.file.copy',
    sdkName: 'drive.v1.file.copy',
    path: '/open-apis/drive/v1/files/:file_token/copy',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-复制文件-将用户云空间中的文件复制至其它文件夹下。该接口为异步接口',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z.string().describe('复制的新文件的名称**数据校验规则**：最大长度为 `256` 字节'),
            type: zod_1.z
                .enum(['file', 'doc', 'sheet', 'bitable', 'docx', 'mindnote', 'slides'])
                .describe('被复制的源文件的类型。必须与 `file_token` 对应的源文件实际类型一致。**注意**：该参数为必填，请忽略左侧必填列的“否”。若该参数值为空或与实际文件类型不匹配，接口将返回失败。 Options:file(文件类型),doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格类型),bitable(多维表格类型),docx(新版文档类型),mindnote(思维笔记类型),slides(幻灯片类型)')
                .optional(),
            folder_token: zod_1.z
                .string()
                .describe('目标文件夹的 token。若传入根文件夹 token，表示复制的新文件将被创建在云空间根目录。了解如何获取文件夹 token，参考[文件夹概述]'),
            extra: zod_1.z
                .array(zod_1.z.object({ key: zod_1.z.string().describe('自定义属性键对象'), value: zod_1.z.string().describe('自定义属性值对象') }))
                .describe('自定义请求附加参数，用于实现特殊的复制语义')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z
            .object({
            file_token: zod_1.z.string().describe('被复制的源文件的 token。了解如何获取文件 token，参考[文件概述]').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCreateFolder = {
    project: 'drive',
    name: 'drive.v1.file.createFolder',
    sdkName: 'drive.v1.file.createFolder',
    path: '/open-apis/drive/v1/files/create_folder',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件夹-新建文件夹-该接口用于在用户云空间指定文件夹中创建一个空文件夹',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z.string().describe('文件夹名称**长度限制**： 1~256 个字节'),
            folder_token: zod_1.z
                .string()
                .describe('父文件夹的 token。参数为空字符串时，表示在根目录下创建文件夹。你可参考[获取文件夹中的文件清单]获取某个文件夹的 token。了解更多，参考[文件夹概述]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileCreateShortcut = {
    project: 'drive',
    name: 'drive.v1.file.createShortcut',
    sdkName: 'drive.v1.file.createShortcut',
    path: '/open-apis/drive/v1/files/create_shortcut',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-创建文件快捷方式-创建指定文件的快捷方式到云空间的其它文件夹中',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            parent_token: zod_1.z.string().describe('目标父文件夹的 token，获取方式见[文件夹概述]'),
            refer_entity: zod_1.z
                .object({
                refer_token: zod_1.z.string().describe('源文件的 token。获取方式见[文件概述]'),
                refer_type: zod_1.z
                    .enum(['file', 'docx', 'bitable', 'doc', 'sheet', 'mindnote', 'slides'])
                    .describe('源文件的类型 Options:file(文件),docx(新版文档),bitable(多维表格),doc(旧版文档),sheet(电子表格),mindnote(思维笔记),slides(幻灯片类型)'),
            })
                .describe('源文件的信息'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileDelete = {
    project: 'drive',
    name: 'drive.v1.file.delete',
    sdkName: 'drive.v1.file.delete',
    path: '/open-apis/drive/v1/files/:file_token',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-云空间-文件-删除文件或文件夹-删除用户在云空间内的文件或者文件夹。文件或文件夹被删除后，会进入回收站中',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['file', 'docx', 'bitable', 'folder', 'doc', 'sheet', 'mindnote', 'shortcut', 'slides'])
                .describe('被删除文件的类型 Options:file(文件类型),docx(新版文档类型),bitable(多维表格类型),folder(文件夹类型),doc(文档类型),sheet(电子表格类型),mindnote(思维笔记类型),shortcut(快捷方式类型),slides(幻灯片)'),
        }),
        path: zod_1.z
            .object({
            file_token: zod_1.z
                .string()
                .describe('需要删除的文件或文件夹 token。了解如何获取文件 token，参考[文件概述]。了解如何获取文件夹 token，参考[文件夹概述]')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileDeleteSubscribe = {
    project: 'drive',
    name: 'drive.v1.file.deleteSubscribe',
    sdkName: 'drive.v1.file.deleteSubscribe',
    path: '/open-apis/drive/v1/files/:file_token/delete_subscribe',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-云空间-事件-取消云文档事件订阅-该接口用于取消订阅云文档的通知事件。了解事件订阅的配置流程和使用场景，参考[事件概述]。了解云文档支持的事件类型，参考[事件列表]',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'bitable', 'file', 'folder', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档。已不推荐使用),docx(新版文档),sheet(电子表格),bitable(多维表格),file(文件),folder(文件夹),slides(幻灯片)'),
            event_type: zod_1.z
                .string()
                .describe('事件类型，`file_type` 为 `folder`（文件夹）时必填 `file.created_in_folder_v1`')
                .optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('云文档的 token。了解如何获取各类云文档的token，参考[云空间常见问题]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileGetSubscribe = {
    project: 'drive',
    name: 'drive.v1.file.getSubscribe',
    sdkName: 'drive.v1.file.getSubscribe',
    path: '/open-apis/drive/v1/files/:file_token/get_subscribe',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-事件-查询云文档事件订阅状态-该接口用于查询云文档事件的订阅状态。了解事件订阅的配置流程和使用场景，参考[事件概述]。了解云文档支持的事件类型，参考[事件列表]',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'bitable', 'file', 'folder', 'slides'])
                .describe('文档类型 Options:doc(旧版文档。已不推荐使用),docx(新版文档),sheet(电子表格),bitable(多维表格),file(文件),folder(文件夹),slides(幻灯片)'),
            event_type: zod_1.z
                .string()
                .describe('事件类型，`file_type` 为 `folder `（文件夹）时必填 `file.created_in_folder_v1`')
                .optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('云文档的 token。了解如何获取各类云文档的 token，参考[云空间常见问题]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileList = {
    project: 'drive',
    name: 'drive.v1.file.list',
    sdkName: 'drive.v1.file.list',
    path: '/open-apis/drive/v1/files',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件夹-获取文件夹中的文件清单-该接口用于获取用户云空间指定文件夹中文件信息清单。文件的信息包括名称、类型、token、创建时间、所有者 ID 等',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('指定每页显示的数据项的数量。若获取根目录下的清单，将返回全部数据').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            folder_token: zod_1.z
                .string()
                .describe('文件夹的 token。不填写或填空字符串，将获取用户云空间根目录下的清单，且不支持分页。了解如何获取文件夹 token，参考[文件夹概述]')
                .optional(),
            order_by: zod_1.z
                .enum(['EditedTime', 'CreatedTime'])
                .describe('定义清单中文件的排序方式 Options:EditedTime(按编辑时间排序),CreatedTime(按创建时间排序)')
                .optional(),
            direction: zod_1.z
                .enum(['ASC', 'DESC'])
                .describe('定义清单中文件的排序规则 Options:ASC(按升序排序),DESC(按降序排序)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileMove = {
    project: 'drive',
    name: 'drive.v1.file.move',
    sdkName: 'drive.v1.file.move',
    path: '/open-apis/drive/v1/files/:file_token/move',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-移动文件或文件夹-将文件或者文件夹移动到用户云空间的其他位置',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            type: zod_1.z
                .enum(['file', 'docx', 'bitable', 'doc', 'sheet', 'mindnote', 'folder', 'slides'])
                .describe('文件类型。该参数为必填，请忽略左侧必填列的“否”。如果该值为空或者与文件实际类型不匹配，接口会返回失败。 Options:file(普通文件类型),docx(新版文档类型),bitable(多维表格类型),doc(文档类型),sheet(电子表格类型),mindnote(思维笔记类型),folder(文件夹类型),slides(幻灯片类型)')
                .optional(),
            folder_token: zod_1.z.string().describe('目标文件夹的 token。了解如何获取文件夹 token，参考[文件夹概述]').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            file_token: zod_1.z
                .string()
                .describe('需要移动的文件或文件夹 token。了解如何获取文件 token，参考[文件概述]。了解如何获取文件夹 token，参考[文件夹概述]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileStatisticsGet = {
    project: 'drive',
    name: 'drive.v1.fileStatistics.get',
    sdkName: 'drive.v1.fileStatistics.get',
    path: '/open-apis/drive/v1/files/:file_token/statistics',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件-获取文件统计信息-此接口用于获取各类文件的流量统计信息和互动信息，包括阅读人数、阅读次数和点赞数',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'sheet', 'mindnote', 'bitable', 'wiki', 'file', 'docx'])
                .describe('文件类型 Options:doc(旧版文档),sheet(电子表格),mindnote(思维笔记),bitable(多维表格),wiki(知识库文档),file(文件),docx(新版文档)'),
        }),
        path: zod_1.z
            .object({ file_token: zod_1.z.string().describe('文件 token。了解如何获取文件 token，参考[文件概述]').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileSubscribe = {
    project: 'drive',
    name: 'drive.v1.file.subscribe',
    sdkName: 'drive.v1.file.subscribe',
    path: '/open-apis/drive/v1/files/:file_token/subscribe',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-事件-订阅云文档事件-订阅云文档的各类通知事件。调用该接口并在开发者后台添加事件后，当云文档发生指定事件时，系统会向配置的地址发送事件',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'bitable', 'file', 'folder', 'slides'])
                .describe('云文档类型 Options:doc(旧版文档。已不推荐使用),docx(新版文档),sheet(电子表格),bitable(多维表格),file(文件),folder(文件夹),slides(幻灯片)'),
            event_type: zod_1.z
                .string()
                .describe('事件类型。- 若 `file_type` 为 `folder`，需要填写该字段，且字段必须填写为 `file.created_in_folder_v1`，表示订阅[文件夹下文件创建]事件- 若 `file_type` 不为 `folder`，请勿填写该字段。对于文档、电子表格、多维表格等云文档类型，目前仅支持订阅所有相关的云文档事件，暂不支持只订阅该云文档类型下的某个或某些事件')
                .optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('云文档的 token。了解如何获取各类云文档的 token，参考[云空间常见问题]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileSubscriptionCreate = {
    project: 'drive',
    name: 'drive.v1.fileSubscription.create',
    sdkName: 'drive.v1.fileSubscription.create',
    path: '/open-apis/drive/v1/files/:file_token/subscriptions',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云文档助手-订阅-创建订阅-订阅文档中的变更事件，当前支持文档评论订阅，订阅后文档评论更新会有“云文档助手”推送给订阅的用户',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            subscription_id: zod_1.z.string().describe('订阅关系ID').optional(),
            subscription_type: zod_1.z.literal('comment_update').describe('订阅类型 Options:comment_update(评论更新)'),
            is_subcribe: zod_1.z.boolean().describe('是否订阅').optional(),
            file_type: zod_1.z.enum(['doc', 'docx', 'wiki']).describe('文档类型 Options:doc(文档),docx(新版文档),wiki(知识库wiki)'),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文档token') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileSubscriptionGet = {
    project: 'drive',
    name: 'drive.v1.fileSubscription.get',
    sdkName: 'drive.v1.fileSubscription.get',
    path: '/open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云文档助手-订阅-获取订阅状态-根据订阅ID获取该订阅的状态',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            file_type: zod_1.z
                .enum(['doc', 'docx', 'wiki'])
                .describe('文档类型 Options:doc(Docs 旧版文档),docx(Upgraded Docs 新版文档),wiki(云空间)'),
        }),
        path: zod_1.z
            .object({
            file_token: zod_1.z.string().describe('文档token').optional(),
            subscription_id: zod_1.z.string().describe('订阅关系ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileSubscriptionPatch = {
    project: 'drive',
    name: 'drive.v1.fileSubscription.patch',
    sdkName: 'drive.v1.fileSubscription.patch',
    path: '/open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-云文档-云文档助手-订阅-更新订阅状态-根据订阅ID更新订阅状态',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            is_subscribe: zod_1.z.boolean().describe('是否订阅'),
            file_type: zod_1.z.enum(['doc', 'docx', 'wiki']).describe('文档类型 Options:doc(文档),docx(新版文档),wiki(知识库wiki)'),
        }),
        path: zod_1.z
            .object({
            file_token: zod_1.z.string().describe('文档token').optional(),
            subscription_id: zod_1.z.string().describe('订阅关系ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileTaskCheck = {
    project: 'drive',
    name: 'drive.v1.file.taskCheck',
    sdkName: 'drive.v1.file.taskCheck',
    path: '/open-apis/drive/v1/files/task_check',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件夹-查询异步任务状态-查询异步任务的状态信息。目前支持查询删除文件夹和移动文件夹的异步任务',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            task_id: zod_1.z
                .string()
                .describe('异步任务的 ID。目前支持查询删除文件夹和移动文件夹的异步任务。可通过调用[删除文件夹]或[移动文件夹]获取任务 ID'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileUploadFinish = {
    project: 'drive',
    name: 'drive.v1.file.uploadFinish',
    sdkName: 'drive.v1.file.uploadFinish',
    path: '/open-apis/drive/v1/files/upload_finish',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-上传文件-分片上传文件-分片上传文件-完成上传-调用[上传分片]接口将分片全部上传完毕后，你需调用本接口触发完成上传。否则将上传失败。了解完整的上传文件流程，参考[上传文件概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            upload_id: zod_1.z.string().describe('分片上传事务 ID。通过调用[分片上传文件-预上传]接口获取'),
            block_num: zod_1.z.number().describe('分片的数量。通过调用[分片上传文件-预上传]接口获取'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileUploadPrepare = {
    project: 'drive',
    name: 'drive.v1.file.uploadPrepare',
    sdkName: 'drive.v1.file.uploadPrepare',
    path: '/open-apis/drive/v1/files/upload_prepare',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-上传文件-分片上传文件-分片上传文件-预上传-发送初始化请求，以获取上传事务 ID 和分片策略，为[上传分片]做准备。平台固定以 4MB 的大小对文件进行分片。了解完整的上传文件流程，参考[上传文件概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            file_name: zod_1.z.string().describe('文件的名称'),
            parent_type: zod_1.z
                .literal('explorer')
                .describe('上传点的类型。取固定值 explorer，表示将文件上传至云空间中。 Options:explorer(云空间)'),
            parent_node: zod_1.z.string().describe('云空间中文件夹的 token。了解如何获取文件夹 token，参考[文件夹概述]'),
            size: zod_1.z.number().describe('文件的大小，单位为字节'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileVersionCreate = {
    project: 'drive',
    name: 'drive.v1.fileVersion.create',
    sdkName: 'drive.v1.fileVersion.create',
    path: '/open-apis/drive/v1/files/:file_token/versions',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文档版本-创建文档版本-创建文档版本。文档支持在线文档或电子表格。该接口为异步接口',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z
                .string()
                .describe('创建的版本文档的标题。最大长度 1024 个 Unicode 码点。通常情况下，一个英文或中文字符对应一个码点，但是某些特殊符号可能会对应多个码点。例如，家庭组合「👨‍👩‍👧」这个表情符号对应 5 个码点。**注意**：该参数必填，请忽略左侧必填列显示的“否”')
                .optional(),
            obj_type: zod_1.z
                .enum(['docx', 'sheet'])
                .describe('源文档的类型**注意**：该参数必填，请忽略左侧必填列显示的“否”。 Options:docx(新版文档),sheet(电子表格)')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('源文档的 token，获取方式参考 [如何获取云文档相关 token]') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileVersionDelete = {
    project: 'drive',
    name: 'drive.v1.fileVersion.delete',
    sdkName: 'drive.v1.fileVersion.delete',
    path: '/open-apis/drive/v1/files/:file_token/versions/:version_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-云空间-文档版本-删除文档版本-删除基于在线文档或电子表格创建的版本',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            obj_type: zod_1.z.enum(['docx', 'sheet']).describe('源文档的类型 Options:docx(新版文档),sheet(电子表格)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('当前版本对应的源文档的 token。获取方式参考[如何获取云文档相关 token]'),
            version_id: zod_1.z.string().describe('版本文档版本标识'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileVersionGet = {
    project: 'drive',
    name: 'drive.v1.fileVersion.get',
    sdkName: 'drive.v1.fileVersion.get',
    path: '/open-apis/drive/v1/files/:file_token/versions/:version_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文档版本-获取文档版本信息-该接口用于获取文档或电子表格指定版本的信息，包括标题、标识、创建者、创建时间等',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            obj_type: zod_1.z.enum(['docx', 'sheet']).describe('源文档的类型 Options:docx(新版文档),sheet(电子表格)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({
            file_token: zod_1.z.string().describe('源文档的 token。获取方式参考 [如何获取云文档相关 token]'),
            version_id: zod_1.z.string().describe('版本文档的版本标识'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileVersionList = {
    project: 'drive',
    name: 'drive.v1.fileVersion.list',
    sdkName: 'drive.v1.fileVersion.list',
    path: '/open-apis/drive/v1/files/:file_token/versions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文档版本-获取文档版本列表-获取文档或电子表格的版本列表',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            obj_type: zod_1.z.enum(['docx', 'sheet']).describe('源文档的类型 Options:docx(新版文档),sheet(电子表格)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('源文档的 token。获取方式参考 [如何获取云文档相关 token]') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1FileViewRecordList = {
    project: 'drive',
    name: 'drive.v1.fileViewRecord.list',
    sdkName: 'drive.v1.fileViewRecord.list',
    path: '/open-apis/drive/v1/files/:file_token/view_records',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件-获取文件访问记录-获取文档、电子表格、多维表格等文件的历史访问记录，包括访问者的 ID、姓名、头像和最近访问时间',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            file_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'bitable', 'mindnote', 'wiki', 'file'])
                .describe('文件类型 Options:doc(旧版文档),docx(新版文档),sheet(电子表格),bitable(多维表格),mindnote(思维笔记),wiki(知识库文档),file(文件)'),
            viewer_id_type: zod_1.z
                .enum(['user_id', 'union_id', 'open_id'])
                .describe('返回的访问者 ID 的类型。**当值为`user_id`时，字段权限要求**：<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm> Options:user_id(标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？]),union_id(标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？]),open_id(标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID])')
                .optional(),
        }),
        path: zod_1.z.object({ file_token: zod_1.z.string().describe('文件 token。获取方式参考[文件概述]') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1ImportTaskCreate = {
    project: 'drive',
    name: 'drive.v1.importTask.create',
    sdkName: 'drive.v1.importTask.create',
    path: '/open-apis/drive/v1/import_tasks',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-导入文件-创建导入任务-该接口用于创建导入文件的任务，并返回导入任务 ID。导入文件指将本地文件如 Word、TXT、Markdown、Excel 等格式的文件导入为某种格式的飞书在线云文档。该接口为异步接口，需要继续调用[查询导入任务结果]接口获取导入结果。了解完整的导入文件步骤，参考[导入文件概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            file_extension: zod_1.z
                .string()
                .describe('要导入的文件的扩展名。了解支持的文件格式，参考[导入文件概述]。**注意**：此处填写的文件扩展名需与实际文件的后缀名保持严格一致。请注意区分后缀为 “markdown”、“md”、“mark” 的 Markdown 文件，并在填写相关参数时保持后缀名一致。否则将返回 1069910 错误码'),
            file_token: zod_1.z
                .string()
                .describe('要导入文件的 token。创建任务前，你需先调用[上传素材]或[上传文件]接口获取源文件的 token。了解更多，参考[导入文件概述]'),
            type: zod_1.z
                .string()
                .describe('目标云文档格式。不同文件支持的云文档格式不同。详情参考[导入文件概述]。可选值如下所示：- `docx`：新版文档- `sheet`：电子表格- `bitable`：多维表格'),
            file_name: zod_1.z.string().describe('导入后的在线云文档名称。参数为空时，使用上传本地文件时的文件名').optional(),
            point: zod_1.z
                .object({
                mount_type: zod_1.z
                    .number()
                    .describe('挂载类型。取固定值 1，表示将该云文档挂载至云空间下。 Options:1(Space 挂载到云空间)'),
                mount_key: zod_1.z
                    .string()
                    .describe('云文档挂载的文件夹的 token，即云空间下文件夹的 token。空表示云空间根目录。了解如何获取文件夹 token，参考[文件夹概述]'),
            })
                .describe('挂载点（导入后的云文档所在位置）'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1ImportTaskGet = {
    project: 'drive',
    name: 'drive.v1.importTask.get',
    sdkName: 'drive.v1.importTask.get',
    path: '/open-apis/drive/v1/import_tasks/:ticket',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-文件-导入文件-查询导入任务结果-根据[创建导入任务]返回的导入任务 ID（ticket）轮询导入结果。了解完整的导入文件步骤，参考[导入文件概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ ticket: zod_1.z.string().describe('导入任务 ID。调用[创建导入任务] 获取') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1MediaBatchGetTmpDownloadUrl = {
    project: 'drive',
    name: 'drive.v1.media.batchGetTmpDownloadUrl',
    sdkName: 'drive.v1.media.batchGetTmpDownloadUrl',
    path: '/open-apis/drive/v1/medias/batch_get_tmp_download_url',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-云空间-素材-获取素材临时下载链接-该接口用于获取云文档中素材的临时下载链接。链接的有效期为 24 小时，过期失效',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            file_tokens: zod_1.z
                .array(zod_1.z.string())
                .describe('素材文件的 token。获取方式如下所示：* 新版文档：通过[获取文档所有块]接口获取指定文件块（File Block）或图片块（Image Block）的 token，即为素材 token。* 电子表格：通过[读取多个范围]接口获取指定附件的 `fileToken`，即为素材的 token。* 多维表格：通过[列出记录]接口获取指定附件的 `file_token`，即为素材的 token。如需一次获取多个素材的下载链接，可多次传递本参数及素材的 token 值，格式如下：`https://{url}?file_tokens={token1}&file_tokens={token2}`其中：- `file_tokens` 是参数名，可以多次传递- `token1` 和 `token2` 为素材的实际 token 值- 一次最多可传递 5 个素材的 token，但在 API 调试台仅支持传一个 token'),
            extra: zod_1.z
                .string()
                .describe('拓展信息，如拥有高级权限的多维表格在下载素材时，需要添加额外的扩展信息作为 URL 查询参数鉴权。详情参考[extra 参数说明]。未正确填写该参数的接口将返回 403 的 HTTP 状态码')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1MediaUploadFinish = {
    project: 'drive',
    name: 'drive.v1.media.uploadFinish',
    sdkName: 'drive.v1.media.uploadFinish',
    path: '/open-apis/drive/v1/medias/upload_finish',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-素材-上传素材-分片上传素材-完成上传-调用[上传分片]接口将分片全部上传完毕后，你需调用本接口触发完成上传。了解完整的分片上传素材流程，参考[素材概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            upload_id: zod_1.z.string().describe('分片上传事务 ID。通过调用[分片上传素材（预上传）]接口获取'),
            block_num: zod_1.z.number().describe('分片数量。通过调用[分片上传素材（预上传）]接口获取'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1MediaUploadPrepare = {
    project: 'drive',
    name: 'drive.v1.media.uploadPrepare',
    sdkName: 'drive.v1.media.uploadPrepare',
    path: '/open-apis/drive/v1/medias/upload_prepare',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-素材-上传素材-分片上传素材-预上传-发送初始化请求，以获取上传事务 ID 和分片策略，为[上传素材分片]做准备。平台固定以 4MB 的大小对素材进行分片。了解完整的分片上传素材流程，参考[素材概述]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            file_name: zod_1.z.string().describe('素材的文件名称'),
            parent_type: zod_1.z
                .enum([
                'doc_image',
                'docx_image',
                'sheet_image',
                'doc_file',
                'docx_file',
                'sheet_file',
                'vc_virtual_background',
                'bitable_image',
                'bitable_file',
                'moments',
                'ccm_import_open',
            ])
                .describe('上传点的类型。你可根据上传的文件类型与云文档类型确定上传点类型。例如，要将一张图片插入到新版文档（文件类型为 `docx`）中，需指定上传点为 `docx_image`；要将一个附件上传到新版文档中，需指定上传点为 `docx_file`。 Options:doc_image(旧版文档图片),docx_image(新版文档图片),sheet_image(电子表格图片),doc_file(文档文件),docx_file(新版文档文件),sheet_file(电子表格文件),vc_virtual_background(vc 虚拟背景（灰度中，暂未开放）),bitable_image(多维表格图片),bitable_file(多维表格文件),moments(同事圈（灰度中，暂未开放）),ccm_import_open(云文档导入文件)'),
            parent_node: zod_1.z
                .string()
                .describe('上传点的 token，即要上传的云文档的 token，用于指定素材将要上传到的云文档或位置。参考 [素材概述] 了解上传点类型与上传点 token 的对应关系'),
            size: zod_1.z.number().describe('文件的大小，单位为字节'),
            extra: zod_1.z
                .string()
                .describe('以下场景的上传点需通过该参数传入素材所在云文档的 token。extra 参数的格式为`"{\\"drive_route_token\\":\\"素材所在云文档的 token\\"}"`。详情参考[素材概述-extra 参数说明]')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1MetaBatchQuery = {
    project: 'drive',
    name: 'drive.v1.meta.batchQuery',
    sdkName: 'drive.v1.meta.batchQuery',
    path: '/open-apis/drive/v1/metas/batch_query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-云空间-文件-获取文件元数据-该接口用于根据文件 token 获取其元数据，包括标题、所有者、创建时间、密级、访问链接等数据',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            request_docs: zod_1.z
                .array(zod_1.z.object({
                doc_token: zod_1.z.string().describe('文件的 token，获取方式见[文件概述]'),
                doc_type: zod_1.z
                    .enum(['doc', 'sheet', 'bitable', 'mindnote', 'file', 'wiki', 'docx', 'folder', 'synced_block'])
                    .describe('文件的类型 Options:doc(飞书文档),sheet(飞书电子表格),bitable(飞书多维表格),mindnote(飞书思维笔记),file(飞书文件),wiki(飞书知识库),docx(飞书新版文档),folder(飞书文件夹),synced_block(SyncedBlock 文档同步块（灰度中）)'),
            }))
                .describe('请求的文件的 token 和类型。一次请求中不可超过 200 个'),
            with_url: zod_1.z.boolean().describe('是否获取文件的访问链接').optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberAuth = {
    project: 'drive',
    name: 'drive.v1.permissionMember.auth',
    sdkName: 'drive.v1.permissionMember.auth',
    path: '/open-apis/drive/v1/permissions/:token/members/auth',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-权限-成员-判断用户云文档权限-判断当前请求的应用或用户是否具有指定云文档的指定权限，权限包括阅读、编辑、分享、评论、导出等权限',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
            action: zod_1.z
                .enum(['view', 'edit', 'share', 'comment', 'export', 'copy', 'print', 'manage_public'])
                .describe('需要判断的权限 Options:view(阅读),edit(编辑),share(分享),comment(评论),export(导出),copy(拷贝),print(打印),manage_public(ManagePublic 管理权限设置)'),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberBatchCreate = {
    project: 'drive',
    name: 'drive.v1.permissionMember.batchCreate',
    sdkName: 'drive.v1.permissionMember.batchCreate',
    path: '/open-apis/drive/v1/permissions/:token/members/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-权限-成员-批量增加协作者权限-为指定云文档批量添加多个协作者，协作者可以是用户、群组、部门、用户组等',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            members: zod_1.z
                .array(zod_1.z.object({
                member_type: zod_1.z
                    .enum(['email', 'openid', 'unionid', 'openchat', 'opendepartmentid', 'userid', 'groupid', 'wikispaceid'])
                    .describe('协作者 ID 类型，与协作者 ID （member_id）的类型需要保持一致。 Options:email(飞书邮箱),openid(open_id 开放平台 Open ID - 获取应用 OpenID，参考[如何获取应用 open_id] - 获取用户 OpenID，参考[如何获取不同的用户 ID]),unionid(union_id 开放平台 Union ID。获取方式参考[如何获取不同的用户 ID]),openchat(open_chat 开放平台群组 ID。获取方式参考[群 ID 说明]),opendepartmentid(open_department_id 开放平台部门 ID。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。获取方式参考[部门资源介绍]),userid(user_id 用户 ID。获取方式参考[如何获取不同的用户 ID]),groupid(group_id 自定义用户组 ID。获取方式参考[用户组资源介绍]),wikispaceid(wiki_space_id 知识空间 ID。仅知识库文档支持该参数，当需要操作知识库文档里的「知识库成员」类型协作者时传该参数。获取方式参考[知识库概述])'),
                member_id: zod_1.z.string().describe('协作者 ID，该 ID 的类型与 member_type 指定的值需要保持一致'),
                perm: zod_1.z
                    .enum(['view', 'edit', 'full_access'])
                    .describe('协作者对应的权限角色。 **注意：** 妙记还不支持可管理角色 Options:view(可阅读角色),edit(可编辑角色),full_access(可管理角色)'),
                perm_type: zod_1.z
                    .enum(['container', 'single_page'])
                    .describe('协作者的权限角色类型。当云文档类型为 wiki 即知识库节点时，该参数有效 Options:container(当前页面及子页面),single_page(仅当前页面，当且仅当在知识库文档中该参数有效)')
                    .optional(),
                type: zod_1.z
                    .enum([
                    'user',
                    'chat',
                    'department',
                    'group',
                    'wiki_space_member',
                    'wiki_space_viewer',
                    'wiki_space_editor',
                ])
                    .describe('协作者类型。**注意**：当 `member_type` 参数为 `wikispaceid` 时，该参数必填。**默认值**："" Options:user(用户),chat(群组),department(组织架构),group(用户组),wiki_space_member(知识库成员。在知识库启用了成员分组功能后不支持该参数),wiki_space_viewer(知识库可阅读成员。仅在知识库启用了成员分组功能后才支持该参数),wiki_space_editor(知识库可编辑成员。仅在知识库启用了成员分组功能后才支持该参数)')
                    .optional(),
            }))
                .describe('本次要增加权限的协作者列表'),
        }),
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'folder', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),folder(文件夹。使用 <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag> 调用时，需确保文件夹所有者为应用或应用拥有文件夹的可管理权限，你需要将应用作为群机器人添加至群内，然后授予该群组可管理权限。详细步骤参考[如何为应用开通云文档相关资源的权限]),mindnote(思维笔记),minutes(妙记。目前妙记还不支持 full_access 权限角色),slides(幻灯片)'),
            need_notification: zod_1.z
                .boolean()
                .describe('添加权限后是否通知对方。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。可选值：- true：通知对方- false：不通知')
                .optional(),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考 [如何获取云文档相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberCreate = {
    project: 'drive',
    name: 'drive.v1.permissionMember.create',
    sdkName: 'drive.v1.permissionMember.create',
    path: '/open-apis/drive/v1/permissions/:token/members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-权限-成员-增加协作者权限-为指定云文档添加协作者，协作者可以是用户、群组、部门、用户组等',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_type: zod_1.z
                .enum(['email', 'openid', 'unionid', 'openchat', 'opendepartmentid', 'userid', 'groupid', 'wikispaceid'])
                .describe('协作者 ID 类型，与协作者 ID 需要对应 Options:email(飞书邮箱),openid(open_id 开放平台 Open ID - 获取应用 OpenID，参考[如何获取应用 open_id] - 获取用户 OpenID，参考[如何获取不同的用户 ID]),unionid(union_id 开放平台 Union ID。获取方式参考[如何获取不同的用户 ID]),openchat(open_chat 开放平台群组 ID。获取方式参考[群 ID 说明]),opendepartmentid(open_department_id 开放平台部门 ID。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时，该参数有效。获取方式参考[部门资源介绍]),userid(user_id 用户 ID。获取方式参考[如何获取不同的用户 ID]),groupid(group_id 自定义用户组 ID。获取方式参考[用户组资源介绍]),wikispaceid(wiki_space_id 知识空间 ID。仅知识库文档支持该参数，当需要操作知识库文档里的「知识库成员」类型协作者时传该参数。获取方式参考[知识库概述])'),
            member_id: zod_1.z.string().describe('协作者 ID，该 ID 的类型与 member_type 指定的值需要保持一致'),
            perm: zod_1.z
                .enum(['view', 'edit', 'full_access'])
                .describe('协作者对应的权限角色。 Options:view(可阅读角色),edit(可编辑角色),full_access(可管理角色。暂不支持妙记。)'),
            perm_type: zod_1.z
                .enum(['container', 'single_page'])
                .describe('协作者的权限角色类型。当云文档类型为 wiki 即知识库节点时，该参数有效。 Options:container(当前页面及子页面),single_page(仅当前页面，当且仅当在知识库文档中该参数有效)')
                .optional(),
            type: zod_1.z
                .enum(['user', 'chat', 'department', 'group', 'wiki_space_member', 'wiki_space_viewer', 'wiki_space_editor'])
                .describe('协作者类型。**注意**：当 `member_type` 参数为 `wikispaceid` 时，该参数必填，且必须在 `wiki_space_member`、`wiki_space_viewer`、`wiki_space_editor` 中选择。**默认值**："" Options:user(用户),chat(群组),department(组织架构),group(用户组),wiki_space_member(知识库成员。即知识库 **成员设置** 中的成员角色。若在知识库 **成员设置** 页面中，成员分为了 **可编辑成员** 和 **可阅读成员**，则不再支持该参数。你需选择下方参数),wiki_space_viewer(知识库可阅读成员组。仅当知识库成员分为 **可编辑成员** 和 **可阅读成员** 时，支持该参数。),wiki_space_editor(知识库可编辑成员组。仅当知识库成员分为 **可编辑成员** 和 **可阅读成员** 时，支持该参数)')
                .optional(),
        }),
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'folder', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),folder(文件夹。使用 <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag> 调用时，需确保文件夹所有者为应用或应用拥有文件夹的可管理权限，你需要将应用作为群机器人添加至群内，然后授予该群组可管理权限。详细步骤参考[如何为应用开通云文档相关资源的权限]),mindnote(思维笔记),minutes(妙记。目前妙记还不支持 full_access 权限角色),slides(幻灯片)'),
            need_notification: zod_1.z
                .boolean()
                .describe('添加权限后是否通知对方。可选值：- true：通知对方- false：不通知注意：仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时，该参数有效')
                .optional(),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberDelete = {
    project: 'drive',
    name: 'drive.v1.permissionMember.delete',
    sdkName: 'drive.v1.permissionMember.delete',
    path: '/open-apis/drive/v1/permissions/:token/members/:member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-权限-成员-移除云文档协作者权限-通过云文档 token 和协作者 ID 移除指定云文档协作者的权限',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            type: zod_1.z
                .enum(['user', 'chat', 'department', 'group', 'wiki_space_member', 'wiki_space_viewer', 'wiki_space_editor'])
                .describe('协作者类型**注意**：当 `member_type` 参数为 `wikispaceid` 时必须传该参数**默认值**："" Options:user(用户),chat(群组),department(组织架构),group(用户组),wiki_space_member(知识库成员。在知识库启用了成员分组功能后不支持该参数),wiki_space_viewer(知识库可阅读成员。仅在知识库启用了成员分组功能后才支持该参数),wiki_space_editor(知识库可编辑成员。仅在知识库启用了成员分组功能后才支持该参数)')
                .optional(),
            perm_type: zod_1.z
                .enum(['container', 'single_page'])
                .describe('协作者的权限角色类型。当云文档类型为 wiki 即知识库节点时，该参数有效。 Options:container(当前页面及子页面),single_page(仅当前页面，当且仅当在知识库文档中该参数有效)')
                .optional(),
        })
            .optional(),
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'folder', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),folder(文件夹。使用 <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag> 调用时，需确保文件夹所有者为应用或应用拥有文件夹的可管理权限，你需要将应用作为群机器人添加至群内，然后授予该群组可管理权限。详细步骤参考[如何为应用开通云文档相关资源的权限]),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
            member_type: zod_1.z
                .enum(['email', 'openid', 'openchat', 'opendepartmentid', 'userid', 'unionid', 'groupid', 'wikispaceid'])
                .describe('协作者 ID 类型，与协作者 ID （member_id）需要对应。 Options:email(邮箱地址),openid(开放平台 Open ID - 获取应用 OpenID，参考[如何获取应用 open_id] - 获取用户 OpenID，参考[如何获取不同的用户 ID]),openchat(OpenChatID 开放平台群组 ID。获取方式参考[群 ID 说明]),opendepartmentid(开放平台部门 ID。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。获取方式参考[部门资源介绍]),userid(用户 ID。获取方式参考[如何获取不同的用户 ID]),unionid(开放平台 Union ID。获取方式参考[如何获取不同的用户 ID]),groupid(自定义用户组 ID。获取方式参考[用户组资源介绍]),wikispaceid(知识空间 ID。仅知识库文档支持该参数，当需要操作知识库文档里的「知识库成员」类型协作者时传该参数。获取方式参考[知识库概述])'),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
            member_id: zod_1.z.string().describe('协作者 ID，与协作者 ID 类型（member_type）需要对应'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberList = {
    project: 'drive',
    name: 'drive.v1.permissionMember.list',
    sdkName: 'drive.v1.permissionMember.list',
    path: '/open-apis/drive/v1/permissions/:token/members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-云文档-权限-成员-获取云文档协作者-获取指定云文档的协作者，支持查询人、群、组织架构、用户组、知识库成员五种类型的协作者',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
            fields: zod_1.z
                .string()
                .describe('指定返回的协作者字段信息，如无指定则默认不返回。**可选值有：** - `name`：协作者名- `type`：协作者类型- `avatar`：头像- `external_label`：外部标签**注意**：- 你可以使用特殊值`*`指定返回目前支持的所有字段- 你可以使用`,`分隔若干个你想指定返回的字段，如：`name,avatar`- 按需指定返回字段接口性能更好')
                .optional(),
            perm_type: zod_1.z
                .enum(['container', 'single_page'])
                .describe('协作者的权限角色类型。当云文档类型为 wiki 即知识库节点时，该参数有效。**默认值**：container Options:container(当前页面及子页面),single_page(仅当前页面，当且仅当在知识库文档中该参数有效)')
                .optional(),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberTransferOwner = {
    project: 'drive',
    name: 'drive.v1.permissionMember.transferOwner',
    sdkName: 'drive.v1.permissionMember.transferOwner',
    path: '/open-apis/drive/v1/permissions/:token/members/transfer_owner',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-权限-成员-转移云文档所有者-转移指定云文档的所有者',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_type: zod_1.z
                .enum(['email', 'openid', 'userid'])
                .describe('文件所有者的 ID 类型 Options:email(飞书邮箱),openid(open_id 开放平台 Open ID。参考[如何获取不同的用户 ID]),userid(user_id 用户 ID。获取方式参考[如何获取不同的用户 ID])'),
            member_id: zod_1.z.string().describe('文件所有者的 ID，与文件所有者的 ID 类型需要对应'),
        }),
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides', 'folder'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片),folder(文件夹)'),
            need_notification: zod_1.z
                .boolean()
                .describe('是否需要通知新的文件所有者。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。可选值：- `true`：通知对方- `false`：不通知')
                .optional(),
            remove_old_owner: zod_1.z
                .boolean()
                .describe('转移后是否需要移除原云文档所有者的权限。可选值：- `true`：移除原所有者权限- `false`：不移除原所有者权限')
                .optional(),
            stay_put: zod_1.z
                .boolean()
                .describe('在个人文件夹下的云文档是否仍留在原所有者个人文件夹下。可选值：- `true`：云文档留在原位置不变- `false`：系统会将该内容移至新所有者的空间下**注意**：仅当云文档在个人文件夹下时参数生效')
                .optional(),
            old_owner_perm: zod_1.z
                .string()
                .describe('为原云文档所有者保留的具体权限。可选值：- `view`：可阅读角色- `edit`：可编辑角色- `full_access`：可管理角色**注意**：仅当 `remove_old_owner` 为 `false` 时，此参数才会生效')
                .optional(),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionMemberUpdate = {
    project: 'drive',
    name: 'drive.v1.permissionMember.update',
    sdkName: 'drive.v1.permissionMember.update',
    path: '/open-apis/drive/v1/permissions/:token/members/:member_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-云文档-权限-成员-更新协作者权限-更新指定云文档中指定协作者的权限，包括可阅读、可编辑、可管理权限',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_type: zod_1.z
                .enum(['email', 'openid', 'unionid', 'openchat', 'opendepartmentid', 'userid', 'groupid', 'wikispaceid'])
                .describe('协作者 ID 类型，与协作者 ID 需要对应。 Options:email(飞书邮箱),openid(open_id 开放平台 Open ID - 获取应用 OpenID，参考[如何获取应用 open_id] - 获取用户 OpenID，参考[如何获取不同的用户 ID]),unionid(union_id 开放平台 Union ID。获取方式参考[如何获取不同的用户 ID]),openchat(open_chat 开放平台群组 ID。获取方式参考[群 ID 说明]),opendepartmentid(open_department_id 开放平台部门 ID。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。获取方式参考[部门资源介绍]),userid(user_id 用户 ID。获取方式参考[如何获取不同的用户 ID]),groupid(group_id 自定义用户组 ID。获取方式参考[用户组资源介绍]),wikispaceid(wiki_space_id 知识空间 ID。仅知识库文档支持该参数，当需要操作知识库文档里的「知识库成员」类型协作者时传该参数。获取方式参考[知识库概述])'),
            perm: zod_1.z
                .enum(['view', 'edit', 'full_access'])
                .describe('协作者对应的权限角色。 **注意：** 妙记还不支持可管理角色 Options:view(可阅读角色),edit(可编辑角色),full_access(可管理角色)'),
            perm_type: zod_1.z
                .enum(['container', 'single_page'])
                .describe('协作者的权限角色类型 Options:container(当前页面及子页面),single_page(仅当前页面，当且仅当在知识库文档中该参数有效)')
                .optional(),
            type: zod_1.z
                .enum(['user', 'chat', 'department', 'group', 'wiki_space_member', 'wiki_space_viewer', 'wiki_space_editor'])
                .describe('协作者类型**注意**：当 `member_type` 参数为 `wikispaceid` 时必须传该参数**默认值**："" Options:user(用户),chat(群组),department(组织架构),group(用户组),wiki_space_member(知识库成员 - **注意**：在知识库启用了成员分组功能后不支持该参数),wiki_space_viewer(知识库可阅读成员 - **注意**：仅在知识库启用了成员分组功能后才支持该参数),wiki_space_editor(知识库可编辑成员 - **注意**：仅在知识库启用了成员分组功能后才支持该参数)')
                .optional(),
        }),
        params: zod_1.z.object({
            need_notification: zod_1.z
                .boolean()
                .describe('添加权限后是否通知对方。仅当使用 <md-tag mode="inline" type="token-user">user_access_token</md-tag> 调用时有效。可选值：- true：通知对方- false：不通知')
                .optional(),
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
            member_id: zod_1.z.string().describe('协作者 ID，该 ID 的类型与 member_type 指定的值需要保持一致'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionPublicGet = {
    project: 'drive',
    name: 'drive.v1.permissionPublic.get',
    sdkName: 'drive.v1.permissionPublic.get',
    path: '/open-apis/drive/v1/permissions/:token/public',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-云文档-权限设置 v1-获取云文档权限设置-获取指定云文档的权限设置，包括是否允许内容被分享到组织外、谁可以查看、添加、移除协作者等设置',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionPublicPasswordCreate = {
    project: 'drive',
    name: 'drive.v1.permissionPublicPassword.create',
    sdkName: 'drive.v1.permissionPublicPassword.create',
    path: '/open-apis/drive/v1/permissions/:token/public/password',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-云文档-权限-密码-启用云文档密码-启用指定云文档的密码。密码启用后，组织外用户需要密码访问，组织内用户无需密码可直接访问',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙计（暂不支持）),slides(幻灯片)'),
        }),
        path: zod_1.z
            .object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionPublicPasswordDelete = {
    project: 'drive',
    name: 'drive.v1.permissionPublicPassword.delete',
    sdkName: 'drive.v1.permissionPublicPassword.delete',
    path: '/open-apis/drive/v1/permissions/:token/public/password',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-云文档-权限-密码-停用云文档密码-停用指定云文档的密码。密码停用后，组织外用户访问文档将无需输入密码',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙计（暂不支持）),slides(幻灯片)'),
        }),
        path: zod_1.z
            .object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionPublicPasswordUpdate = {
    project: 'drive',
    name: 'drive.v1.permissionPublicPassword.update',
    sdkName: 'drive.v1.permissionPublicPassword.update',
    path: '/open-apis/drive/v1/permissions/:token/public/password',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-云文档-权限-密码-刷新云文档密码-刷新指定云文档的密码。密码刷新后，旧密码将失效，并生成新密码',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙计（暂不支持）),slides(幻灯片)'),
        }),
        path: zod_1.z
            .object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1PermissionPublicPatch = {
    project: 'drive',
    name: 'drive.v1.permissionPublic.patch',
    sdkName: 'drive.v1.permissionPublic.patch',
    path: '/open-apis/drive/v1/permissions/:token/public',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-历史版本（不推荐）-云文档-权限设置 v1-更新云文档权限设置-更新指定云文档的权限设置，包括是否允许内容被分享到组织外、谁可以查看、添加、移除协作者、谁可以复制内容等设置',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            external_access: zod_1.z
                .boolean()
                .describe('是否允许内容被分享到组织外。当云文档类型为 wiki 时，不支持传入该参数。**可选值有：** - `true`: 允许- `false`: 不允许')
                .optional(),
            security_entity: zod_1.z
                .enum(['anyone_can_view', 'anyone_can_edit', 'only_full_access'])
                .describe('谁可以复制内容、创建副本、打印、下载 Options:anyone_can_view(AnyoneCanView 拥有可阅读权限的用户),anyone_can_edit(AnyoneCanEdit 拥有可编辑权限的用户),only_full_access(OnlyFullAccess 拥有可管理权限（包括我）的用户)')
                .optional(),
            comment_entity: zod_1.z
                .enum(['anyone_can_view', 'anyone_can_edit'])
                .describe('谁可以评论 Options:anyone_can_view(AnyoneCanView 拥有可阅读权限的用户),anyone_can_edit(AnyoneCanEdit 拥有可编辑权限的用户)')
                .optional(),
            share_entity: zod_1.z
                .enum(['anyone', 'same_tenant', 'only_full_access'])
                .describe('谁可以查看、添加、移除协作者。当云文档类型为 wiki 时，不支持传入该参数。 Options:anyone(所有可阅读或编辑此文档的用户),same_tenant(SameTenant 组织内所有可阅读或编辑此文档的用户),only_full_access(OnlyFullAccess 拥有可管理权限（包括我）的用户)')
                .optional(),
            link_share_entity: zod_1.z
                .enum(['tenant_readable', 'tenant_editable', 'anyone_readable', 'anyone_editable', 'closed'])
                .describe('链接分享设置。 Options:tenant_readable(TenantReadable 组织内获得链接的人可阅读),tenant_editable(TenantEditable 组织内获得链接的人可编辑),anyone_readable(AnyoneReadable 互联网上获得链接的任何人可阅读。当云文档类型为 wiki 时，不支持传入该值),anyone_editable(AnyoneEditable 互联网上获得链接的任何人可编辑。当云文档类型为 wiki 时，不支持传入该值),closed(关闭链接分享)')
                .optional(),
            invite_external: zod_1.z
                .boolean()
                .describe('是否允许非「可管理权限」的人分享到组织外。当云文档类型为 wiki 时，不支持该参数。**可选值有：** - `true`: 允许- `false`: 不允许')
                .optional(),
        })
            .optional(),
        params: zod_1.z.object({
            type: zod_1.z
                .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
                .describe('云文档类型，需要与云文档的 token 相匹配。 Options:doc(旧版文档。了解更多，参考[新旧版本文档说明]。),sheet(电子表格),file(云空间文件),wiki(知识库节点。该枚举值不支持以下设置： - `external_access`: 允许内容被分享到组织外 - `share_entity`: 谁可以添加协作者 - `invite_external`: 允许非「可管理权限」的人分享到组织外 - `link_share_entity`: 链接分享设置 - `anyone_readable`: 互联网上获得链接的人可阅读 - `anyone_editable`: 互联网上获得链接的人可编辑),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)'),
        }),
        path: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('云文档的 token，需要与 type 参数指定的云文档类型相匹配。可参考[如何获取云文档资源相关 token]'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.driveV1Tools = [
    exports.driveV1ExportTaskCreate,
    exports.driveV1ExportTaskGet,
    exports.driveV1FileCommentBatchQuery,
    exports.driveV1FileCommentCreate,
    exports.driveV1FileCommentGet,
    exports.driveV1FileCommentList,
    exports.driveV1FileCommentPatch,
    exports.driveV1FileCommentReplyDelete,
    exports.driveV1FileCommentReplyList,
    exports.driveV1FileCommentReplyUpdate,
    exports.driveV1FileCopy,
    exports.driveV1FileCreateFolder,
    exports.driveV1FileCreateShortcut,
    exports.driveV1FileDelete,
    exports.driveV1FileDeleteSubscribe,
    exports.driveV1FileGetSubscribe,
    exports.driveV1FileList,
    exports.driveV1FileMove,
    exports.driveV1FileStatisticsGet,
    exports.driveV1FileSubscribe,
    exports.driveV1FileSubscriptionCreate,
    exports.driveV1FileSubscriptionGet,
    exports.driveV1FileSubscriptionPatch,
    exports.driveV1FileTaskCheck,
    exports.driveV1FileUploadFinish,
    exports.driveV1FileUploadPrepare,
    exports.driveV1FileVersionCreate,
    exports.driveV1FileVersionDelete,
    exports.driveV1FileVersionGet,
    exports.driveV1FileVersionList,
    exports.driveV1FileViewRecordList,
    exports.driveV1ImportTaskCreate,
    exports.driveV1ImportTaskGet,
    exports.driveV1MediaBatchGetTmpDownloadUrl,
    exports.driveV1MediaUploadFinish,
    exports.driveV1MediaUploadPrepare,
    exports.driveV1MetaBatchQuery,
    exports.driveV1PermissionMemberAuth,
    exports.driveV1PermissionMemberBatchCreate,
    exports.driveV1PermissionMemberCreate,
    exports.driveV1PermissionMemberDelete,
    exports.driveV1PermissionMemberList,
    exports.driveV1PermissionMemberTransferOwner,
    exports.driveV1PermissionMemberUpdate,
    exports.driveV1PermissionPublicGet,
    exports.driveV1PermissionPublicPasswordCreate,
    exports.driveV1PermissionPublicPasswordDelete,
    exports.driveV1PermissionPublicPasswordUpdate,
    exports.driveV1PermissionPublicPatch,
];
