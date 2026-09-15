"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ailyV1Tools = exports.ailyV1AppSkillStart = exports.ailyV1AppSkillList = exports.ailyV1AppSkillGet = exports.ailyV1AppDataAssetList = exports.ailyV1AppDataAssetGet = exports.ailyV1AppDataAssetDelete = exports.ailyV1AppDataAssetCreate = exports.ailyV1AppDataAssetTagList = exports.ailyV1AilySessionUpdate = exports.ailyV1AilySessionRunList = exports.ailyV1AilySessionRunGet = exports.ailyV1AilySessionRunCreate = exports.ailyV1AilySessionRunCancel = exports.ailyV1AilySessionGet = exports.ailyV1AilySessionDelete = exports.ailyV1AilySessionCreate = exports.ailyV1AilySessionAilyMessageList = exports.ailyV1AilySessionAilyMessageGet = exports.ailyV1AilySessionAilyMessageCreate = void 0;
const zod_1 = require("zod");
exports.ailyV1AilySessionAilyMessageCreate = {
    project: 'aily',
    name: 'aily.v1.ailySessionAilyMessage.create',
    sdkName: 'aily.v1.ailySessionAilyMessage.create',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/messages',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-message-Send aily message-The API is used to send a message to a Feishu smart partner application; each message belongs to an active session',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            idempotent_id: zod_1.z
                .string()
                .describe('Idempotent id, the same idempotent id in the same session counts as a message, valid period 72h'),
            content_type: zod_1.z
                .enum(['MDX', 'TEXT', 'CLIP', 'SmartCard', 'JSON'])
                .describe('Message content type Options:MDX(ContentTypeMDX MDX),TEXT(ContentTypeText TEXT),CLIP(ContentTypeClip GUI),SmartCard(ContentTypeSmartCard SmartCard),JSON(ContentTypeJSON JSON)'),
            content: zod_1.z.string().describe('Message content'),
            file_ids: zod_1.z.array(zod_1.z.string()).describe('List of file IDs contained in the message').optional(),
            quote_message_id: zod_1.z.string().describe('Referred message ID').optional(),
            mentions: zod_1.z
                .array(zod_1.z.object({
                entity_id: zod_1.z.string().describe('Entity ID').optional(),
                identity_provider: zod_1.z
                    .enum(['AILY', 'FEISHU'])
                    .describe('Identity provider Options:AILY(IdentityProviderAily Aily),FEISHU(IdentityProviderFeishu FEISHU)')
                    .optional(),
                key: zod_1.z.string().describe('Placeholder for @entity in message body').optional(),
                name: zod_1.z.string().describe('The name of the @entity').optional(),
                aily_id: zod_1.z.string().describe('ID under the Aily account system').optional(),
            }))
                .describe('@entity')
                .optional(),
        }),
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionAilyMessageGet = {
    project: 'aily',
    name: 'aily.v1.ailySessionAilyMessage.get',
    sdkName: 'aily.v1.ailySessionAilyMessage.get',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/messages/:aily_message_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-message-Get aily message-This API is used to obtain the detailed information of the message of a Feishu smart partner application; including the content of the message, the sender, and so on',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            aily_session_id: zod_1.z.string().describe('Session ID'),
            aily_message_id: zod_1.z.string().describe('Message ID'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionAilyMessageList = {
    project: 'aily',
    name: 'aily.v1.ailySessionAilyMessage.list',
    sdkName: 'aily.v1.ailySessionAilyMessage.list',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/messages',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-message-List aily messages-This API is used to list the details of the message under a session of a Feishu smart partner application; including the content of the message, the sender, etc',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Page size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            run_id: zod_1.z.string().describe('Run ID').optional(),
            with_partial_message: zod_1.z.boolean().describe('Return the message being generated').optional(),
        })
            .optional(),
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionCreate = {
    project: 'aily',
    name: 'aily.v1.ailySession.create',
    sdkName: 'aily.v1.ailySession.create',
    path: '/open-apis/aily/v1/sessions',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-session-Create session-This API is used to create a session with a Feishu smart partner application; when the session is created successfully, you can send messages, create and run',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            channel_context: zod_1.z.string().describe('Channel context').optional(),
            metadata: zod_1.z.string().describe('Other transparent information').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionDelete = {
    project: 'aily',
    name: 'aily.v1.ailySession.delete',
    sdkName: 'aily.v1.ailySession.delete',
    path: '/open-apis/aily/v1/sessions/:aily_session_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-aily-session-Delete session-This API is used to delete a session with a Feishu Smart Partner application',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionGet = {
    project: 'aily',
    name: 'aily.v1.ailySession.get',
    sdkName: 'aily.v1.ailySession.get',
    path: '/open-apis/aily/v1/sessions/:aily_session_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-session-Get session-This API is used to obtain detailed information about a session with a Feishu smart partner application, including the state of the session, channel context, creation time, and so on',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionRunCancel = {
    project: 'aily',
    name: 'aily.v1.ailySessionRun.cancel',
    sdkName: 'aily.v1.ailySessionRun.cancel',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id/cancel',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-run-Cancel run-This API is used to cancel the run of a Feishu Aily application',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID'), run_id: zod_1.z.string().describe('Run ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionRunCreate = {
    project: 'aily',
    name: 'aily.v1.ailySessionRun.create',
    sdkName: 'aily.v1.ailySessionRun.create',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/runs',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-run-Create run-This API is used to create a Run on a session of a Feishu Aily application',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            app_id: zod_1.z.string().describe('App ID'),
            skill_id: zod_1.z.string().describe('Skill ID').optional(),
            skill_input: zod_1.z.string().describe('When specifying a skill ID, you can also specify a skill input').optional(),
            metadata: zod_1.z.string().describe('Other transparent information').optional(),
        }),
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionRunGet = {
    project: 'aily',
    name: 'aily.v1.ailySessionRun.get',
    sdkName: 'aily.v1.ailySessionRun.get',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-run-Get run-This API is used to obtain detailed information about the Run of a Feishu Aily application, including the status of the run, the end time, and so on',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID'), run_id: zod_1.z.string().describe('Run ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionRunList = {
    project: 'aily',
    name: 'aily.v1.ailySessionRun.list',
    sdkName: 'aily.v1.ailySessionRun.list',
    path: '/open-apis/aily/v1/sessions/:aily_session_id/runs',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-run-List runs-This API is used to list the running details of a Feishu Aily application; including status, end time, and so on',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Page size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AilySessionUpdate = {
    project: 'aily',
    name: 'aily.v1.ailySession.update',
    sdkName: 'aily.v1.ailySession.update',
    path: '/open-apis/aily/v1/sessions/:aily_session_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-aily-session-Update session-This API is used to update information about a session with a Feishu Smart Partner application',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            channel_context: zod_1.z.string().describe('Channel context').optional(),
            metadata: zod_1.z.string().describe('Other transparent information').optional(),
        })
            .optional(),
        path: zod_1.z.object({ aily_session_id: zod_1.z.string().describe('Session ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppDataAssetTagList = {
    project: 'aily',
    name: 'aily.v1.appDataAssetTag.list',
    sdkName: 'aily.v1.appDataAssetTag.list',
    path: '/open-apis/aily/v1/apps/:app_id/data_asset_tags',
    httpMethod: 'GET',
    description: "[Feishu/Lark]-aily-Data Knowledge-Data Knowledge Management-List Data Knowledge Tag-List Aily's data knowledge tags",
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Paging parameters: paging size, default: 20, max: 100').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            keyword: zod_1.z.string().describe('Fuzzy matching classification name').optional(),
            data_asset_tag_ids: zod_1.z.array(zod_1.z.string()).describe('Fuzzy matching classification name').optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_id: zod_1.z.string().describe('AppID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppDataAssetCreate = {
    project: 'aily',
    name: 'aily.v1.appDataAsset.create',
    sdkName: 'aily.v1.appDataAsset.create',
    path: '/open-apis/aily/v1/apps/:app_id/data_assets',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-Data Knowledge-Data Knowledge Management-Create data knowledge-Add individual data knowledge in Aily',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            connect_type: zod_1.z
                .enum(['import', 'direct'])
                .describe('connection type Options:import(import mode),direct(Direct Connect Mode)'),
            source_type: zod_1.z
                .enum(['file', 'lark_wiki_space', 'lark_doc', 'lark_helpdesk'])
                .describe('data source type Options:file(File, only import mode is supported),lark_wiki_space(Lark Wiki Workspace, only supports direct connection mode),lark_doc(Feishu cloud documentation, import mode only supports docx.),lark_helpdesk(Feishu service desk, only supports direct connection mode)'),
            import_knowledge_setting: zod_1.z
                .object({
                chunk_setting: zod_1.z
                    .object({
                    rule_type: zod_1.z
                        .enum(['separator', 'intelligent'])
                        .describe('slicing rule Options:separator(By identifier),intelligent(Smart Slicing)'),
                    separate_type: zod_1.z
                        .enum(['paragraph', 'title'])
                        .describe('slice separator type Options:paragraph(Paragraph separators: "\\ n\\ n", "\\ n", spaces),title(Title separator ：######)')
                        .optional(),
                    size: zod_1.z
                        .number()
                        .describe('The maximum segment length (character), which must be filled in when slicing by identifier')
                        .optional(),
                    overlap: zod_1.z
                        .number()
                        .describe('The number of overlapping characters in the segment, which must be filled in when slicing by identifier, and cannot exceed the value of size')
                        .optional(),
                })
                    .describe('knowledge slice configuration')
                    .optional(),
                file: zod_1.z
                    .object({
                    title: zod_1.z.string().describe('File title').optional(),
                    token: zod_1.z
                        .string()
                        .describe('The token obtained by uploading the file. Choose one of content and content, and use the token first')
                        .optional(),
                    content: zod_1.z
                        .string()
                        .describe('File content. Choose one of the two, and the token will be used first. There is a length limit, and the token method will be used first for large files')
                        .optional(),
                    mime_type: zod_1.z
                        .string()
                        .describe('The MIME type corresponding to the file content must be filled in when using the token method')
                        .optional(),
                    url: zod_1.z.string().describe('URL of the file source').optional(),
                })
                    .describe('Knowledge Import - File')
                    .optional(),
                lark_doc: zod_1.z
                    .object({
                    type: zod_1.z
                        .enum(['doc', 'file', 'wiki', 'docx', 'folder'])
                        .describe('Cloud document type Options:doc(Lark documentation),file(Lark file),wiki(Lark wiki),docx(Lark Docx),folder(Lark Folder)'),
                    token: zod_1.z
                        .string()
                        .describe('Cloud document token, which can be obtained by searching for the [Search document] API'),
                    with_sub_docs: zod_1.z
                        .boolean()
                        .describe('Whether to include subdocuments, only wiki-type cloud documents support it')
                        .optional(),
                })
                    .describe('Knowledge Import - Feishu Cloud Documentation')
                    .optional(),
                lark_wiki_space: zod_1.z
                    .object({
                    space_id: zod_1.z.string().describe('Lark Wiki Workspace ID, which can be obtained by [Search Wiki] API'),
                    sub_docs: zod_1.z
                        .array(zod_1.z.object({
                        type: zod_1.z
                            .literal('wiki')
                            .describe('Cloud document type, only supports cloud documents in wikis Options:wiki(Feishu Wiki)'),
                        token: zod_1.z
                            .string()
                            .describe('Cloud document token, which can be obtained by searching for the [Search document] API'),
                        url: zod_1.z.string().describe('Cloud document link').optional(),
                    }))
                        .describe('When specifying a Wiki Workspace sub-node')
                        .optional(),
                    url: zod_1.z.string().describe('Wiki Workspace URL').optional(),
                })
                    .describe('Lark Wiki Workspace')
                    .optional(),
                lark_helpdesk: zod_1.z
                    .object({
                    helpdesk_id: zod_1.z
                        .string()
                        .describe('Lark Help Desk ID, which can be obtained through [Help Desk - Access guide]'),
                })
                    .describe('Lark Help Desk')
                    .optional(),
            })
                .describe('knowledge import configuration')
                .optional(),
            description: zod_1.z.object({}).catchall(zod_1.z.any()).describe('Data Knowledge Description Information').optional(),
        }),
        params: zod_1.z
            .object({
            tenant_type: zod_1.z
                .string()
                .describe('Application environment, enumeration values: `online` represents the online environment (default value), and `dev` represents the development environment currently only `dev` is supported')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe("The APPID of the application of the Aily can be obtained directly from the URL of the Aily's application. Get an example:/ai/{APPID}"),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppDataAssetDelete = {
    project: 'aily',
    name: 'aily.v1.appDataAsset.delete',
    sdkName: 'aily.v1.appDataAsset.delete',
    path: '/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id',
    httpMethod: 'DELETE',
    description: "[Feishu/Lark]-aily-Data Knowledge-Data Knowledge Management-Delete data knowledge-Delete Aily's data knowledge",
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            tenant_type: zod_1.z
                .string()
                .describe('Application environment, enumeration values: `online` represents the online environment (default value), and `dev` represents the development environment currently only `dev` is supported')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe("The APPID of the application of the Aily can be obtained directly from the URL of the Aily's application. Get an example:/ai/{APPID}"),
            data_asset_id: zod_1.z.string().describe('Data Knowledge ID'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppDataAssetGet = {
    project: 'aily',
    name: 'aily.v1.appDataAsset.get',
    sdkName: 'aily.v1.appDataAsset.get',
    path: '/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-Data Knowledge-Data Knowledge Management-Get individual data knowledge-Get individual data knowledge',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            with_data_asset_item: zod_1.z.boolean().describe('Does the result contain data and knowledge items').optional(),
            with_connect_status: zod_1.z
                .boolean()
                .describe('Does the result contain data knowledge connection status')
                .optional(),
            tenant_type: zod_1.z
                .string()
                .describe('Application environment, the default is online environment, dev represents development environment')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe("The APPID of the application of the Aily can be obtained directly from the URL of the Aily's application. Get an example:/ai/{APPID}"),
            data_asset_id: zod_1.z.string().describe('Data Knowledge ID'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppDataAssetList = {
    project: 'aily',
    name: 'aily.v1.appDataAsset.list',
    sdkName: 'aily.v1.appDataAsset.list',
    path: '/open-apis/aily/v1/apps/:app_id/data_assets',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-Data Knowledge-Data Knowledge Management-List Data Knowledges-Get the data knowledge list of the Aily',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Paging parameters: paging size, default: 20, max: 100').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            keyword: zod_1.z.string().describe('Fuzzy matching keywords').optional(),
            data_asset_ids: zod_1.z.array(zod_1.z.string()).describe('Filtering by Data Knowledge ID').optional(),
            data_asset_tag_ids: zod_1.z.array(zod_1.z.string()).describe('Filtering by data knowledge classification ID').optional(),
            with_data_asset_item: zod_1.z.boolean().describe('Does the result include data and knowledge items?').optional(),
            with_connect_status: zod_1.z.boolean().describe('Does the result contain data connection status?').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe("The APPID of the application of the Aily can be obtained directly from the URL of the Aily's application. Get an example:/ai/{APPID}"),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppSkillGet = {
    project: 'aily',
    name: 'aily.v1.appSkill.get',
    sdkName: 'aily.v1.appSkill.get',
    path: '/open-apis/aily/v1/apps/:app_id/skills/:skill_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-skill-Get Skill-This API is used to query the specific skill details of an Aily application',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe('The Aily application ID (spring_xxx__c) can be obtained from the browser address of the Aily application development page'),
            skill_id: zod_1.z
                .string()
                .describe('Skill ID; can be obtained from the browser address bar on the Skill Edit page (skill_xxx)'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppSkillList = {
    project: 'aily',
    name: 'aily.v1.appSkill.list',
    sdkName: 'aily.v1.appSkill.list',
    path: '/open-apis/aily/v1/apps/:app_id/skills',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-aily-skill-List Skill-This API is used to query the skill list of an Aily application',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z
                .number()
                .describe('The number of message records obtained in this request, the default is 20')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe('The Aily application ID (spring_xxx__c) can be obtained from the browser address of the Aily application development page'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1AppSkillStart = {
    project: 'aily',
    name: 'aily.v1.appSkill.start',
    sdkName: 'aily.v1.appSkill.start',
    path: '/open-apis/aily/v1/apps/:app_id/skills/:skill_id/start',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-aily-skill-Start Skill-The API is used to invoke a specific skill of an Aily application, supports specifying skill imported parameters; and returns the result of skill execution synchronously',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            global_variable: zod_1.z
                .object({
                query: zod_1.z
                    .string()
                    .describe('Message text that triggers skills that is, what the user enters in a conversation on channels such as the Feishu bot')
                    .optional(),
                files: zod_1.z
                    .array(zod_1.z.string())
                    .describe("File information that triggers skills (such as image files that need to be consumed such as OCR nodes)> If the skill does not require a file, the'files' parameter can be passed empty")
                    .optional(),
                channel: zod_1.z
                    .object({
                    variables: zod_1.z
                        .string()
                        .describe('Custom incoming variables; can be consumed in Workflow skills global variables')
                        .optional(),
                })
                    .describe('Channel information')
                    .optional(),
            })
                .describe('Global Variables for Skills')
                .optional(),
            input: zod_1.z.string().describe('Custom variables for skills').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_id: zod_1.z
                .string()
                .describe('The Aily application ID (spring_xxx__c) can be obtained from the browser address of the Aily application development page'),
            skill_id: zod_1.z
                .string()
                .describe('Skill ID; can be obtained from the browser address bar on the Skill Edit page (skill_xxx)'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.ailyV1Tools = [
    exports.ailyV1AilySessionAilyMessageCreate,
    exports.ailyV1AilySessionAilyMessageGet,
    exports.ailyV1AilySessionAilyMessageList,
    exports.ailyV1AilySessionCreate,
    exports.ailyV1AilySessionDelete,
    exports.ailyV1AilySessionGet,
    exports.ailyV1AilySessionRunCancel,
    exports.ailyV1AilySessionRunCreate,
    exports.ailyV1AilySessionRunGet,
    exports.ailyV1AilySessionRunList,
    exports.ailyV1AilySessionUpdate,
    exports.ailyV1AppDataAssetTagList,
    exports.ailyV1AppDataAssetCreate,
    exports.ailyV1AppDataAssetDelete,
    exports.ailyV1AppDataAssetGet,
    exports.ailyV1AppDataAssetList,
    exports.ailyV1AppSkillGet,
    exports.ailyV1AppSkillList,
    exports.ailyV1AppSkillStart,
];
