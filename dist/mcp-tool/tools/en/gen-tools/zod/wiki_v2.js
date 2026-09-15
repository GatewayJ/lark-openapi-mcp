"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wikiV2Tools = exports.wikiV2TaskGet = exports.wikiV2SpaceSettingUpdate = exports.wikiV2SpaceNodeUpdateTitle = exports.wikiV2SpaceNodeMoveDocsToWiki = exports.wikiV2SpaceNodeMove = exports.wikiV2SpaceNodeList = exports.wikiV2SpaceNodeCreate = exports.wikiV2SpaceNodeCopy = exports.wikiV2SpaceMemberList = exports.wikiV2SpaceMemberDelete = exports.wikiV2SpaceMemberCreate = exports.wikiV2SpaceList = exports.wikiV2SpaceGetNode = exports.wikiV2SpaceGet = exports.wikiV2SpaceCreate = void 0;
const zod_1 = require("zod");
exports.wikiV2SpaceCreate = {
    project: 'wiki',
    name: 'wiki.v2.space.create',
    sdkName: 'wiki.v2.space.create',
    path: '/open-apis/wiki/v2/spaces',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-Wiki space-Create Wiki space-This interface is used to create a Wiki space',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Wiki space name').optional(),
            description: zod_1.z.string().describe('Wiki space description').optional(),
            open_sharing: zod_1.z
                .enum(['open', 'closed'])
                .describe('Represents Wiki space sharing status Options:open(Open),closed(Closed)')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceGet = {
    project: 'wiki',
    name: 'wiki.v2.space.get',
    sdkName: 'wiki.v2.space.get',
    path: '/open-apis/wiki/v2/spaces/:space_id',
    httpMethod: 'GET',
    description: "[Feishu/Lark]-Docs-Wiki-Wiki space-Access to Wiki space information-This interface is used to query the information of the Wiki space according to the Wiki space ID.Space type:- Person Space: Managed by individuals. One person can only have one personal space, and no other administrators can be added.- Team Space: Managed by a team (multiple people), multiple administrators can be added.Space visibility:- Public Space: Visible to all users within the tenant and defaults to member permissions. Additional members cannot be added, but administrators can be added.- Private Space: Only visible to knowledge space administrators and members, administrators and members need to be added manually.Space sharing status:- Open: The wiki space has been published to web.- Closed: The wiki space hasn't been published to web",
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            lang: zod_1.z
                .enum(['zh', 'id', 'de', 'en', 'es', 'fr', 'it', 'pt', 'vi', 'ru', 'hi', 'th', 'ko', 'ja', 'zh-HK', 'zh-TW'])
                .describe('When querying **My Document Library**​​, specify the document library name display language to return. Options:zh(LangZH Simplified Chinese),id(LangID Indonesian),de(LangDE German),en(LangEN English),es(LangES Spanish),fr(LangFR French),it(LangIT Italian),pt(LangPT Portuguese),vi(LangVI Vietnamese),ru(LangRU Russian),hi(LangHI Hindi),th(LangTH Thai),ko(LangKO Korean),ja(LangJA Japanese),zh-HK(LangZHHK Traditional Chinese (Hong Kong, China)),zh-TW(LangZHTW Traditional Chinese (Taiwan, China))')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            space_id: zod_1.z
                .string()
                .describe('Wiki space ID <md-text type="field-name" >[How to get Wiki space ID]</md-text>')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceGetNode = {
    project: 'wiki',
    name: 'wiki.v2.space.getNode',
    sdkName: 'wiki.v2.space.getNode',
    path: '/open-apis/wiki/v2/spaces/get_node',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Wiki-node-Get Wiki node information-Get wiki node inforamtion',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            token: zod_1.z
                .string()
                .describe('The wiki node or the actual token of the corresponding cloud document.- **Wiki node token**: If the token in the URL link is preceded by "wiki", the token is the node token of the wiki.- **Actual cloud document token**: If the token in the URL link is preceded by "docx", "base", "sheets", or other non-"wiki" types, it indicates that the token is the actual token of the current cloud document.For more information, please refer to [Frequently Asked Questions about Documents - How to Retrieve Cloud Document Resource Tokens (IDs)].**Note**: When querying with a cloud document token, you need to pass the corresponding document type into the `obj_type` parameter'),
            obj_type: zod_1.z
                .enum(['doc', 'docx', 'sheet', 'mindnote', 'bitable', 'file', 'slides', 'wiki'])
                .describe('Options:doc(ObjTypeDoc doc),docx(ObjTypeDocx docx),sheet(ObjTypeSheet sheet),mindnote(ObjTypeMindNote mindnote),bitable(ObjTypeBitable bitable),file(ObjTypeFile file),slides(ObjTypeSlides slides),wiki(ObjTypeWiki wiki)')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceList = {
    project: 'wiki',
    name: 'wiki.v2.space.list',
    sdkName: 'wiki.v2.space.list',
    path: '/open-apis/wiki/v2/spaces',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Wiki-Wiki space-Get a list of Wiki spaces-This interface is used to get a list of Wiki spaces that have permission to access.This interface is a paging interface. Due to permission filtering, the return list may be empty, but the paging flag (has_more) is true, and can continue the paging request.For the description of each attribute of the Wiki space, please refer to [Access to Wiki space information]',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceMemberCreate = {
    project: 'wiki',
    name: 'wiki.v2.spaceMember.create',
    sdkName: 'wiki.v2.spaceMember.create',
    path: '/open-apis/wiki/v2/spaces/:space_id/members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-Space member-Add Wiki space members-Add Wiki space members',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_type: zod_1.z
                .string()
                .describe('"openchat" - group id "userid" - user id"email" - email "opendepartmentid" - department id"openid" - openid for application"unionid" - [unionid]'),
            member_id: zod_1.z.string().describe('Member id, which should match the member type above'),
            member_role: zod_1.z.string().describe('Role: "admin" -admin "member" -member'),
        }),
        params: zod_1.z
            .object({
            need_notification: zod_1.z
                .boolean()
                .describe('Whether to notify the other party after adding permissions')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('Wiki space id').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceMemberDelete = {
    project: 'wiki',
    name: 'wiki.v2.spaceMember.delete',
    sdkName: 'wiki.v2.spaceMember.delete',
    path: '/open-apis/wiki/v2/spaces/:space_id/members/:member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Wiki-Space member-Delete Wiki space members-This method is used to delete Wiki space members',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_type: zod_1.z
                .string()
                .describe('"openchat" - group id "userid" - user id"email" - email "opendepartmentid" - department id"openid" - openid for application"unionid" - [unionid]'),
            member_role: zod_1.z.string().describe('Role: "admin" -admin "member" -member'),
            type: zod_1.z
                .enum(['user', 'chat', 'department'])
                .describe('Wiki space collaborator type (Future Support) Options:user(User),chat(Chat),department(Department)')
                .optional(),
        }),
        path: zod_1.z.object({
            space_id: zod_1.z.string().describe('Wiki space id'),
            member_id: zod_1.z.string().describe('Member id, which should match the member type below'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceMemberList = {
    project: 'wiki',
    name: 'wiki.v2.spaceMember.list',
    sdkName: 'wiki.v2.spaceMember.list',
    path: '/open-apis/wiki/v2/spaces/:space_id/members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Wiki-Space member-Obtain Wiki space members-Obtain Wiki space members',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('Wiki Workspace ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeCopy = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.copy',
    sdkName: 'wiki.v2.spaceNode.copy',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/copy',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-node-Create a node copy-This interface is used for creating a copy of a node to a specified location',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            target_parent_token: zod_1.z
                .string()
                .describe('Target parent node token- Target Wiki space ID and target parent token cannot be empty at the same time')
                .optional(),
            target_space_id: zod_1.z
                .string()
                .describe('Target Wiki space id- Target Wiki space ID and target parent token cannot be empty at the same time')
                .optional(),
            title: zod_1.z
                .string()
                .describe('Copied new title. If blank, the new title is empty. If not, the original node title is used')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            space_id: zod_1.z.string().describe('[Wiki space id]').optional(),
            node_token: zod_1.z.string().describe('Node token').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeCreate = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.create',
    sdkName: 'wiki.v2.spaceNode.create',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-node-Create node-This interface is used to create [node] in the wiki space at given location',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            obj_type: zod_1.z
                .enum(['doc', 'sheet', 'mindnote', 'bitable', 'file', 'docx', 'slides'])
                .describe('Document type, for shortcuts, this field is the obj_type of the corresponding entity Options:doc(ObjTypeDoc Deprecated, please use `docx` to create documents. For more details, refer to [Scheduled offline of Docs 1.0 creation capability].),sheet(ObjTypeSheet Sheet),mindnote(ObjTypeMindNote Mindnote),bitable(ObjTypeBitable Bitable),file(ObjTypeFile File),docx(ObjTypeDocx Docx),slides(ObjTypeSlides Slides)'),
            parent_node_token: zod_1.z
                .string()
                .describe("Node's father token. If the node is at first level, this field is empty")
                .optional(),
            node_type: zod_1.z
                .enum(['origin', 'shortcut'])
                .describe('Node type Options:origin(NodeTypeEntity Entity),shortcut(NodeTypeShortCut Shortcut)'),
            origin_node_token: zod_1.z
                .string()
                .describe('The entity node_token corresponding to the shortcut needs to pass this value when the node is created as a shortcut')
                .optional(),
            title: zod_1.z.string().describe('The title of this document').optional(),
        }),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('[Wiki space id]').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeList = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.list',
    sdkName: 'wiki.v2.spaceNode.list',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Wiki-node-Get the list of child nodes in Wiki-This interface is used for pagination to get the list of child nodes of Wiki nodes.This interface is a paging interface. Due to permission filtering, the return list may be empty, but the paging flag (has_more) is true and can continue the paging request',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            parent_node_token: zod_1.z.string().describe('Parent token').optional(),
        })
            .optional(),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('[Wiki space id]').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeMove = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.move',
    sdkName: 'wiki.v2.spaceNode.move',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/move',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-node-Move node in Wiki-This method is used to move nodes within the Wiki and supports movement across the Wiki space',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            target_parent_token: zod_1.z.string().describe('Moved to parent token').optional(),
            target_space_id: zod_1.z.string().describe('Moved to Wiki space').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            space_id: zod_1.z.string().describe('Wiki space id'),
            node_token: zod_1.z.string().describe('Node tokens to migrate'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeMoveDocsToWiki = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.moveDocsToWiki',
    sdkName: 'wiki.v2.spaceNode.moveDocsToWiki',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes/move_docs_to_wiki',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-Docs-Move cloud document to Wiki-This interface allows to move existing cloud documents to the Wiki at given location',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            parent_wiki_token: zod_1.z.string().describe('Parent token of node').optional(),
            obj_type: zod_1.z
                .enum(['doc', 'sheet', 'bitable', 'mindnote', 'docx', 'file', 'slides'])
                .describe('Document type Options:doc(ObjTypeDoc Documentation),sheet(ObjTypeSheet Sheet),bitable(ObjTypeBitable Bitable),mindnote(ObjTypeMindNote Mindnote),docx(ObjTypeDocx Docx),file(ObjTypeFile File),slides(ObjTypeSlides Slides)'),
            obj_token: zod_1.z.string().describe('Document token'),
            apply: zod_1.z.boolean().describe('Whether to apply for moving in documents when there is no permission').optional(),
        }),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('[Wiki space id]') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceNodeUpdateTitle = {
    project: 'wiki',
    name: 'wiki.v2.spaceNode.updateTitle',
    sdkName: 'wiki.v2.spaceNode.updateTitle',
    path: '/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/update_title',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Wiki-node-Update title-This interface is used for updating node title',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ title: zod_1.z.string().describe('New title of the node') }),
        path: zod_1.z
            .object({
            space_id: zod_1.z.string().describe('Space ID').optional(),
            node_token: zod_1.z.string().describe('Node Token').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2SpaceSettingUpdate = {
    project: 'wiki',
    name: 'wiki.v2.spaceSetting.update',
    sdkName: 'wiki.v2.spaceSetting.update',
    path: '/open-apis/wiki/v2/spaces/:space_id/setting',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Wiki-Space settings-Update Wiki space settings-Update the public settings of the Wiki space according to space_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            create_setting: zod_1.z
                .string()
                .describe('Who can create space level page: "admin_and_member" = admin and member "admin" - admin only')
                .optional(),
            security_setting: zod_1.z
                .string()
                .describe('Readable user can create copy/print/export/copy: "allow" -allow "not_allow" -not allowed')
                .optional(),
            comment_setting: zod_1.z
                .string()
                .describe('Readable user can comment: "allow" -allow "not_allow" -not allowed')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ space_id: zod_1.z.string().describe('Wiki space id').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2TaskGet = {
    project: 'wiki',
    name: 'wiki.v2.task.get',
    sdkName: 'wiki.v2.task.get',
    path: '/open-apis/wiki/v2/tasks/:task_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Wiki-Docs-Retrieve the result of Wiki task-This method is used to retrieve the result of a wiki task',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({ task_type: zod_1.z.literal('move').describe('Task type Options:move(MoveDocsToWiki Task)') }),
        path: zod_1.z.object({ task_id: zod_1.z.string().describe('Task id').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.wikiV2Tools = [
    exports.wikiV2SpaceCreate,
    exports.wikiV2SpaceGet,
    exports.wikiV2SpaceGetNode,
    exports.wikiV2SpaceList,
    exports.wikiV2SpaceMemberCreate,
    exports.wikiV2SpaceMemberDelete,
    exports.wikiV2SpaceMemberList,
    exports.wikiV2SpaceNodeCopy,
    exports.wikiV2SpaceNodeCreate,
    exports.wikiV2SpaceNodeList,
    exports.wikiV2SpaceNodeMove,
    exports.wikiV2SpaceNodeMoveDocsToWiki,
    exports.wikiV2SpaceNodeUpdateTitle,
    exports.wikiV2SpaceSettingUpdate,
    exports.wikiV2TaskGet,
];
