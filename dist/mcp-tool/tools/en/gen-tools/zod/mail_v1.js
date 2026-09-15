"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailV1UserMailboxFolderDelete = exports.mailV1UserMailboxFolderCreate = exports.mailV1UserMailboxEventUnsubscribe = exports.mailV1UserMailboxEventSubscription = exports.mailV1UserMailboxEventSubscribe = exports.mailV1UserMailboxDelete = exports.mailV1UserMailboxAliasList = exports.mailV1UserMailboxAliasDelete = exports.mailV1UserMailboxAliasCreate = exports.mailV1PublicMailboxUpdate = exports.mailV1PublicMailboxRemoveToRecycleBin = exports.mailV1PublicMailboxPatch = exports.mailV1PublicMailboxMemberList = exports.mailV1PublicMailboxMemberGet = exports.mailV1PublicMailboxMemberDelete = exports.mailV1PublicMailboxMemberCreate = exports.mailV1PublicMailboxMemberClear = exports.mailV1PublicMailboxMemberBatchDelete = exports.mailV1PublicMailboxMemberBatchCreate = exports.mailV1PublicMailboxList = exports.mailV1PublicMailboxGet = exports.mailV1PublicMailboxDelete = exports.mailV1PublicMailboxCreate = exports.mailV1PublicMailboxAliasList = exports.mailV1PublicMailboxAliasDelete = exports.mailV1PublicMailboxAliasCreate = exports.mailV1MailgroupUpdate = exports.mailV1MailgroupPermissionMemberList = exports.mailV1MailgroupPermissionMemberGet = exports.mailV1MailgroupPermissionMemberDelete = exports.mailV1MailgroupPermissionMemberCreate = exports.mailV1MailgroupPermissionMemberBatchDelete = exports.mailV1MailgroupPermissionMemberBatchCreate = exports.mailV1MailgroupPatch = exports.mailV1MailgroupMemberList = exports.mailV1MailgroupMemberGet = exports.mailV1MailgroupMemberDelete = exports.mailV1MailgroupMemberCreate = exports.mailV1MailgroupMemberBatchDelete = exports.mailV1MailgroupMemberBatchCreate = exports.mailV1MailgroupManagerList = exports.mailV1MailgroupManagerBatchDelete = exports.mailV1MailgroupManagerBatchCreate = exports.mailV1MailgroupList = exports.mailV1MailgroupGet = exports.mailV1MailgroupDelete = exports.mailV1MailgroupCreate = exports.mailV1MailgroupAliasList = exports.mailV1MailgroupAliasDelete = exports.mailV1MailgroupAliasCreate = void 0;
exports.mailV1Tools = exports.mailV1UserQuery = exports.mailV1UserMailboxRuleUpdate = exports.mailV1UserMailboxRuleReorder = exports.mailV1UserMailboxRuleList = exports.mailV1UserMailboxRuleDelete = exports.mailV1UserMailboxRuleCreate = exports.mailV1UserMailboxMessageSend = exports.mailV1UserMailboxMessageList = exports.mailV1UserMailboxMessageGetByCard = exports.mailV1UserMailboxMessageGet = exports.mailV1UserMailboxMessageAttachmentDownloadUrl = exports.mailV1UserMailboxMailContactPatch = exports.mailV1UserMailboxMailContactList = exports.mailV1UserMailboxMailContactDelete = exports.mailV1UserMailboxMailContactCreate = exports.mailV1UserMailboxFolderPatch = exports.mailV1UserMailboxFolderList = void 0;
const zod_1 = require("zod");
exports.mailV1MailgroupAliasCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupAlias.create',
    sdkName: 'mail.v1.mailgroupAlias.create',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Alias-Create A Mailing List Alias-Creates a mailing list alias',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ email_alias: zod_1.z.string().describe('Alias address').optional() }).optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupAliasDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupAlias.delete',
    sdkName: 'mail.v1.mailgroupAlias.delete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases/:alias_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Alias-Delete A Mailing List Alias-Deletes a mailing list alias',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional(),
            alias_id: zod_1.z.string().describe('Mailing list alias email address').optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupAliasList = {
    project: 'mail',
    name: 'mail.v1.mailgroupAlias.list',
    sdkName: 'mail.v1.mailgroupAlias.list',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Alias-Obtain All Mailing List Aliases-Obtains all mailing list aliases',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroup.create',
    sdkName: 'mail.v1.mailgroup.create',
    path: '/open-apis/mail/v1/mailgroups',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Create Mail Group-Creates a mailing list',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Mailing list address').optional(),
            name: zod_1.z.string().describe('Mailing list name').optional(),
            description: zod_1.z.string().describe('Mailing list description').optional(),
            who_can_send_mail: zod_1.z
                .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
                .describe('Who can send emails to this mailing list Options:ANYONE(Anyone),ALL_INTERNAL_USERS(Organization members only),ALL_GROUP_MEMBERS(Mailing list members only),CUSTOM_MEMBERS(Specified members)')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroup.delete',
    sdkName: 'mail.v1.mailgroup.delete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Delete Mail Group-Deletes a mailing list',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupGet = {
    project: 'mail',
    name: 'mail.v1.mailgroup.get',
    sdkName: 'mail.v1.mailgroup.get',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Query The Specified Mail Group-Obtains the information of a mailing list',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupList = {
    project: 'mail',
    name: 'mail.v1.mailgroup.list',
    sdkName: 'mail.v1.mailgroup.list',
    path: '/open-apis/mail/v1/mailgroups',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Obtain Mailing Lists In Batch-Obtains mailing lists by pages',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            manager_user_id: zod_1.z
                .string()
                .describe('User ID of the mailing list administrator, which is used to obtain the mailing lists for which the user has the management permission')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupManagerBatchCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupManager.batchCreate',
    sdkName: 'mail.v1.mailgroupManager.batchCreate',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Manager-Create Mailing List Managers In Batch-Adds managers to a mailing list',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            mailgroup_manager_list: zod_1.z
                .array(zod_1.z.object({ user_id: zod_1.z.string().describe('Manager User ID').optional() }))
                .describe('Mail Group Manager List')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupManagerBatchDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupManager.batchDelete',
    sdkName: 'mail.v1.mailgroupManager.batchDelete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_delete',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Manager-Batch Delete Mail Group Managers-Batch delete mail group managers',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            mailgroup_manager_list: zod_1.z
                .array(zod_1.z.object({ user_id: zod_1.z.string().describe('Manager User ID').optional() }))
                .describe('Mail Group Manager List')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupManagerList = {
    project: 'mail',
    name: 'mail.v1.mailgroupManager.list',
    sdkName: 'mail.v1.mailgroupManager.list',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Manager-Obtain Mailing List Managers In Batch-Obtains the list of mailing list managers by pages',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupMemberBatchCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.batchCreate',
    sdkName: 'mail.v1.mailgroupMember.batchCreate',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Batch Create Mail Group Members-You can add multiple members to a mail group at a time',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            items: zod_1.z
                .array(zod_1.z.object({
                member_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the member in the mailing list（This is not required in the request body）')
                    .optional(),
                email: zod_1.z
                    .string()
                    .describe("Member's email address (this field has a value when member type is EXTERNAL_USER/MAIL_GROUP/OTHER_MEMBER)")
                    .optional(),
                user_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                    .optional(),
                department_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the department in the tenant (this field has a value when member type is DEPARTMENT)')
                    .optional(),
                type: zod_1.z
                    .enum([
                    'USER',
                    'DEPARTMENT',
                    'COMPANY',
                    'EXTERNAL_USER',
                    'MAIL_GROUP',
                    'PUBLIC_MAILBOX',
                    'OTHER_MEMBER',
                ])
                    .describe('Member type Options:USER(Internal user),DEPARTMENT(Department),COMPANY(All staff),EXTERNAL_USER(External user),MAIL_GROUP(Mailing list),PUBLIC_MAILBOX(Public Mailbox),OTHER_MEMBER(Internal member)')
                    .optional(),
            }))
                .describe('List of mailing group members added this time')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('The type of department ID used in this call Options:department_id(Identify departments with custom department_id),open_department_id(Identify departments by open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupMemberBatchDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.batchDelete',
    sdkName: 'mail.v1.mailgroupMember.batchDelete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_delete',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Batch Delete Mail Group Members-Multiple members of a mail group can be deleted in one request',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({ member_id_list: zod_1.z.array(zod_1.z.string()).describe('List of member IDs deleted by this call').optional() })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupMemberCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.create',
    sdkName: 'mail.v1.mailgroupMember.create',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Create A Mailing List Member-Adds a member to a mailing list',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z
                .string()
                .describe("Member's email address (this field has a value when member type is EXTERNAL_USER/MAIL_GROUP/OTHER_MEMBER)")
                .optional(),
            user_id: zod_1.z
                .string()
                .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                .optional(),
            department_id: zod_1.z
                .string()
                .describe('Unique identifier of the department in the tenant (this field has a value when member type is DEPARTMENT)')
                .optional(),
            type: zod_1.z
                .enum(['USER', 'DEPARTMENT', 'COMPANY', 'EXTERNAL_USER', 'MAIL_GROUP', 'PUBLIC_MAILBOX', 'OTHER_MEMBER'])
                .describe('Member type Options:USER(Internal user),DEPARTMENT(Department),COMPANY(All staff),EXTERNAL_USER(External user),MAIL_GROUP(Mailing list),PUBLIC_MAILBOX(Public Mailbox),OTHER_MEMBER(Internal member)')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupMemberDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.delete',
    sdkName: 'mail.v1.mailgroupMember.delete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Delete A Mailing List Member-Deletes a mailing list member',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional(),
            member_id: zod_1.z.string().describe('The unique ID of a member in this mail group').optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupMemberGet = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.get',
    sdkName: 'mail.v1.mailgroupMember.get',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Obtain Mailing List Member Information-Obtains the information of a mailing list member',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional(),
            member_id: zod_1.z.string().describe('Unique identifier of the member in the mailing list').optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupMemberList = {
    project: 'mail',
    name: 'mail.v1.mailgroupMember.list',
    sdkName: 'mail.v1.mailgroupMember.list',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Member-Obtain Mailing List Members In Batch-Obtains the list of mailing list members by pages',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupPatch = {
    project: 'mail',
    name: 'mail.v1.mailgroup.patch',
    sdkName: 'mail.v1.mailgroup.patch',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Modify Some Information Of Mail Group-Updates some fields of a mailing list. The fields not specified are not updated',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Mailing list address').optional(),
            name: zod_1.z.string().describe('Mailing list name').optional(),
            description: zod_1.z.string().describe('Mailing list description').optional(),
            who_can_send_mail: zod_1.z
                .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
                .describe('Who can send emails to this mailing list Options:ANYONE(Anyone),ALL_INTERNAL_USERS(Organization members only),ALL_GROUP_MEMBERS(Mailing list members only),CUSTOM_MEMBERS(Specified members)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberBatchCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.batchCreate',
    sdkName: 'mail.v1.mailgroupPermissionMember.batchCreate',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-Batch Create Mail Group Permission Members-A single request can add multiple permission members to a mail group',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            items: zod_1.z
                .array(zod_1.z.object({
                permission_member_id: zod_1.z
                    .string()
                    .describe('The unique identity of the member in the permission group (do not need to be filled in in the request body)')
                    .optional(),
                user_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                    .optional(),
                department_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the department in the tenant (this field has a value when member type is DEPARTMENT)')
                    .optional(),
                email: zod_1.z
                    .string()
                    .describe("The member's email address ( this field has a value when member type is MAIL_GROUP/PUBLIC_MAILBOX)")
                    .optional(),
                type: zod_1.z
                    .enum(['USER', 'DEPARTMENT', 'MAIL_GROUP', 'PUBLIC_MAILBOX'])
                    .describe('Member type Options:USER(Internal user),DEPARTMENT(Department),MAIL_GROUP(Mail Group),PUBLIC_MAILBOX(Public MailBox)')
                    .optional(),
            }))
                .describe('List of mail group permission members added this time')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('The type of department ID used in this call Options:department_id(Identify departments with custom department_id),open_department_id(Identify departments by open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberBatchDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.batchDelete',
    sdkName: 'mail.v1.mailgroupPermissionMember.batchDelete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_delete',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-Batch Delete Mail Group Permission Members-A single request can delete multiple permission members in a mail group',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            permission_member_id_list: zod_1.z.array(zod_1.z.string()).describe('List of permission member IDs deleted by this call'),
        }),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberCreate = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.create',
    sdkName: 'mail.v1.mailgroupPermissionMember.create',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-Create A Mail Group Permission Member-Adds a member with custom permission to the mailing list, who will then be able to send emails to this mailing list',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            user_id: zod_1.z
                .string()
                .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                .optional(),
            department_id: zod_1.z
                .string()
                .describe('Unique identifier of the department in the tenant (this field has a value when member type is DEPARTMENT)')
                .optional(),
            email: zod_1.z
                .string()
                .describe("The member's email address ( this field has a value when member type is MAIL_GROUP/PUBLIC_MAILBOX)")
                .optional(),
            type: zod_1.z
                .enum(['USER', 'DEPARTMENT', 'MAIL_GROUP', 'PUBLIC_MAILBOX'])
                .describe('Member type Options:USER(Internal user),DEPARTMENT(Department),MAIL_GROUP(Mail Group),PUBLIC_MAILBOX(Public MailBox)')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberDelete = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.delete',
    sdkName: 'mail.v1.mailgroupPermissionMember.delete',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-Delete A Mail Group Permission Member-Deletes a member with custom permission, who will then be unable to send emails to this mailing list',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            mailgroup_id: zod_1.z.string().describe('The unique ID or email address of a mail group').optional(),
            permission_member_id: zod_1.z.string().describe('The unique ID of a member in this permission group').optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberGet = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.get',
    sdkName: 'mail.v1.mailgroupPermissionMember.get',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-Get A Mail Group Permission Member-Obtains the information of a member who can send emails to mailing list addresses',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional(),
            permission_member_id: zod_1.z
                .string()
                .describe('Unique identifier of the member in the permissions group')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1MailgroupPermissionMemberList = {
    project: 'mail',
    name: 'mail.v1.mailgroupPermissionMember.list',
    sdkName: 'mail.v1.mailgroupPermissionMember.list',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Permission Member-List Permission Members Of A Mail Group-Obtains the list of members who can send emails to mailing list addresses by pages',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            department_id_type: zod_1.z
                .enum(['department_id', 'open_department_id'])
                .describe('Type of department ID used in this call Options:department_id(Identify the department with the custom department_id),open_department_id(Identify the department with open_department_id)')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1MailgroupUpdate = {
    project: 'mail',
    name: 'mail.v1.mailgroup.update',
    sdkName: 'mail.v1.mailgroup.update',
    path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Email-Mail Group-Mail Group Management-Modify All Information Of Mail Group-Updates all information of a mailing list',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Mailing list address').optional(),
            name: zod_1.z.string().describe('Mailing list name').optional(),
            description: zod_1.z.string().describe('Mailing list description').optional(),
            who_can_send_mail: zod_1.z
                .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
                .describe('Who can send emails to this mailing list Options:ANYONE(Anyone),ALL_INTERNAL_USERS(Organization members only),ALL_GROUP_MEMBERS(Mailing list members only),CUSTOM_MEMBERS(Specified members)')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({ mailgroup_id: zod_1.z.string().describe('Mailing list ID or mailing list address').optional() })
            .optional(),
    },
};
exports.mailV1PublicMailboxAliasCreate = {
    project: 'mail',
    name: 'mail.v1.publicMailboxAlias.create',
    sdkName: 'mail.v1.publicMailboxAlias.create',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Alias-Create A Public Mailbox Alias-Creates a public mailbox alias',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ email_alias: zod_1.z.string().describe('Alias address').optional() }).optional(),
        path: zod_1.z
            .object({ public_mailbox_id: zod_1.z.string().describe('Public mailbox ID or public mailbox address').optional() })
            .optional(),
    },
};
exports.mailV1PublicMailboxAliasDelete = {
    project: 'mail',
    name: 'mail.v1.publicMailboxAlias.delete',
    sdkName: 'mail.v1.publicMailboxAlias.delete',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases/:alias_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Alias-Delete A Public Mailbox Alias-Deletes a public mailbox alias',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z.string().describe('Public mailbox ID or public mailbox address').optional(),
            alias_id: zod_1.z.string().describe('Public mailbox alias').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxAliasList = {
    project: 'mail',
    name: 'mail.v1.publicMailboxAlias.list',
    sdkName: 'mail.v1.publicMailboxAlias.list',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Alias-Obtain All Public Mailbox Aliases-Obtains all public mailbox aliases',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({ public_mailbox_id: zod_1.z.string().describe('Public mailbox ID or public mailbox address').optional() })
            .optional(),
    },
};
exports.mailV1PublicMailboxCreate = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.create',
    sdkName: 'mail.v1.publicMailbox.create',
    path: '/open-apis/mail/v1/public_mailboxes',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Create A Public Mailbox-Creates a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Public mailbox address').optional(),
            name: zod_1.z.string().describe('Public mailbox name').optional(),
            geo: zod_1.z.string().describe('geo location of public mailbox').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxDelete = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.delete',
    sdkName: 'mail.v1.publicMailbox.delete',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Permanently Delete Public Mailbox Address-Releases a public mailbox address from the email recycle bin. This deletes a public mailbox address forever, which means the mailbox address cannot be recovered once deleted',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ public_mailbox_id: zod_1.z.string().describe('Public mailbox address to be released') }),
    },
};
exports.mailV1PublicMailboxGet = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.get',
    sdkName: 'mail.v1.publicMailbox.get',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Query The Specified Public Mailbox-Obtains public mailbox information',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxList = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.list',
    sdkName: 'mail.v1.publicMailbox.list',
    path: '/open-apis/mail/v1/public_mailboxes',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Check All Public Mailboxes-Obtains the list of public mailboxes by pages',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1PublicMailboxMemberBatchCreate = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.batchCreate',
    sdkName: 'mail.v1.publicMailboxMember.batchCreate',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Batch Create Public Mailbox Members-A single request can add multiple members to a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            items: zod_1.z
                .array(zod_1.z.object({
                member_id: zod_1.z
                    .string()
                    .describe('The unique identity of the member in the public mailbox (no need to fill in the request body)')
                    .optional(),
                user_id: zod_1.z
                    .string()
                    .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                    .optional(),
                type: zod_1.z.literal('USER').describe('Member type Options:USER(Internal user)').optional(),
            }))
                .describe('List of public mailbox members added by this call'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ public_mailbox_id: zod_1.z.string().describe('The unique ID or email address of a public mailbox') }),
    },
};
exports.mailV1PublicMailboxMemberBatchDelete = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.batchDelete',
    sdkName: 'mail.v1.publicMailboxMember.batchDelete',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_delete',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Batch Delete Public Mailbox Members-A single request can delete multiple members of a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            member_id_list: zod_1.z.array(zod_1.z.string()).describe('List of public mailbox member IDs deleted by this call'),
        }),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z.string().describe('The unique ID or email address of a public mailbox').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxMemberClear = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.clear',
    sdkName: 'mail.v1.publicMailboxMember.clear',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/clear',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Clear Public Mailbox Members-Deletes all members of a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxMemberCreate = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.create',
    sdkName: 'mail.v1.publicMailboxMember.create',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Create A Public Mailbox Member-Adds a member to a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            user_id: zod_1.z
                .string()
                .describe('Unique identifier of the user in the tenant (this field has a value when member type is USER)')
                .optional(),
            type: zod_1.z.literal('USER').describe('Member type Options:USER(Internal user)').optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxMemberDelete = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.delete',
    sdkName: 'mail.v1.publicMailboxMember.delete',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Delete A Public Mailbox Member-Deletes a member of a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
            member_id: zod_1.z.string().describe('Unique identifier of the member in the public mailbox').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxMemberGet = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.get',
    sdkName: 'mail.v1.publicMailboxMember.get',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-Get A Public Mailbox Member-Obtains the information of a public mailbox member',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
            member_id: zod_1.z.string().describe('Unique identifier of the member in the public mailbox').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxMemberList = {
    project: 'mail',
    name: 'mail.v1.publicMailboxMember.list',
    sdkName: 'mail.v1.publicMailboxMember.list',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Member-List Public Mailbox Members-Obtains the list of public mailbox members by pages',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z.string().describe('The unique ID or email address of a public mailbox').optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxPatch = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.patch',
    sdkName: 'mail.v1.publicMailbox.patch',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Modify Some Information Of Public Mailbox-Updates some fields of a public mailbox. The fields not specified are not updated',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Public mailbox address').optional(),
            name: zod_1.z.string().describe('Public mailbox name').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1PublicMailboxRemoveToRecycleBin = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.removeToRecycleBin',
    sdkName: 'mail.v1.publicMailbox.removeToRecycleBin',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/remove_to_recycle_bin',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Move Public Mailbox To The Recycle Bin-Move Public Mailbox To The Recycle Bin',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            to_mail_address: zod_1.z
                .string()
                .describe('Please provide the email address to receive the deleted emails. If left blank, the emails of the public mailbox will be deleted without being forwarded')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ public_mailbox_id: zod_1.z.string().describe('Public email address') }),
    },
};
exports.mailV1PublicMailboxUpdate = {
    project: 'mail',
    name: 'mail.v1.publicMailbox.update',
    sdkName: 'mail.v1.publicMailbox.update',
    path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Email-Public Mailbox-Public Mailbox Management-Modify All Information Of Public Mailbox-Updates all information of a public mailbox',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            email: zod_1.z.string().describe('Public mailbox address').optional(),
            name: zod_1.z.string().describe('Public mailbox name').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            public_mailbox_id: zod_1.z
                .string()
                .describe('Unique identifier of a public mailbox or the public mailbox address')
                .optional(),
        })
            .optional(),
    },
};
exports.mailV1UserMailboxAliasCreate = {
    project: 'mail',
    name: 'mail.v1.userMailboxAlias.create',
    sdkName: 'mail.v1.userMailboxAlias.create',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases',
    httpMethod: 'POST',
    description: "[Feishu/Lark]-Email-User Mailbox-Create A Member's Email Alias-Creates a member's email alias",
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ email_alias: zod_1.z.string().describe('Alias address').optional() }).optional(),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe("Member's email address").optional() }).optional(),
    },
};
exports.mailV1UserMailboxAliasDelete = {
    project: 'mail',
    name: 'mail.v1.userMailboxAlias.delete',
    sdkName: 'mail.v1.userMailboxAlias.delete',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases/:alias_id',
    httpMethod: 'DELETE',
    description: "[Feishu/Lark]-Email-User Mailbox-Delete A Member's Email Alias-Deletes a member's email alias",
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({
            user_mailbox_id: zod_1.z.string().describe("Member's email address").optional(),
            alias_id: zod_1.z.string().describe('Alias email address').optional(),
        })
            .optional(),
    },
};
exports.mailV1UserMailboxAliasList = {
    project: 'mail',
    name: 'mail.v1.userMailboxAlias.list',
    sdkName: 'mail.v1.userMailboxAlias.list',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases',
    httpMethod: 'GET',
    description: "[Feishu/Lark]-Email-User Mailbox-Obtain All Member's Email Aliases-Obtains all member's email aliases",
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().optional(),
        })
            .optional(),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe("Member's email address").optional() }).optional(),
    },
};
exports.mailV1UserMailboxDelete = {
    project: 'mail',
    name: 'mail.v1.userMailbox.delete',
    sdkName: 'mail.v1.userMailbox.delete',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id',
    httpMethod: 'DELETE',
    description: "[Feishu/Lark]-Email-User Mailbox-Release Address From Recycle Bin-Deletes a member's email address from the email recycle bin. This deletes a member's email address forever, which means the email address cannot be recovered once deleted. This API also allows you to transfer emails from the mailbox to be released to another mailbox",
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            transfer_mailbox: zod_1.z.string().describe('The email address that receives the transferred emails').optional(),
        })
            .optional(),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe('The email address to be released') }),
    },
};
exports.mailV1UserMailboxEventSubscribe = {
    project: 'mail',
    name: 'mail.v1.userMailboxEvent.subscribe',
    sdkName: 'mail.v1.userMailboxEvent.subscribe',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscribe',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Event-Subscribe Event-Subscribe Event',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({ event_type: zod_1.z.number().describe('Event type Options:1(Message Mail message related events)') }),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe('User email address, use me when using user_access_token') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxEventSubscription = {
    project: 'mail',
    name: 'mail.v1.userMailboxEvent.subscription',
    sdkName: 'mail.v1.userMailboxEvent.subscription',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscription',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Event-Get Subscription Status-Get Subscription Status',
    accessTokens: ['user'],
    schema: {
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe('User email address, use me when using user_access_token') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxEventUnsubscribe = {
    project: 'mail',
    name: 'mail.v1.userMailboxEvent.unsubscribe',
    sdkName: 'mail.v1.userMailboxEvent.unsubscribe',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/unsubscribe',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Event-Cancel Subscribe-Cancel Subscribe',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({ event_type: zod_1.z.number().describe('Event type Options:1(Message Mail message related events)') }),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe('User email address, use me when using user_access_token') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxFolderCreate = {
    project: 'mail',
    name: 'mail.v1.userMailboxFolder.create',
    sdkName: 'mail.v1.userMailboxFolder.create',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Mail Folder-Create Email Folder-Create Email Folder',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z.string().describe('Name'),
            parent_folder_id: zod_1.z
                .string()
                .describe('Parent folder ID, where a value of 0 indicates the root folder. The method for obtaining ID is shown in [List Email Folders]'),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxFolderDelete = {
    project: 'mail',
    name: 'mail.v1.userMailboxFolder.delete',
    sdkName: 'mail.v1.userMailboxFolder.delete',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Mail Folder-Delete Email Folder-Delete Email Folder',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
            folder_id: zod_1.z.string().describe('Folder ID. The method for obtaining ID is shown in [List Email Folders]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxFolderList = {
    project: 'mail',
    name: 'mail.v1.userMailboxFolder.list',
    sdkName: 'mail.v1.userMailboxFolder.list',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Mail Folder-List Email Folders-List Email Folders',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            folder_type: zod_1.z.number().describe('Folder type Options:1(System System Folder),2(User User folder)').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxFolderPatch = {
    project: 'mail',
    name: 'mail.v1.userMailboxFolder.patch',
    sdkName: 'mail.v1.userMailboxFolder.patch',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Email-Mail Folder-Update Email Folder-Update Email Folder',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Name').optional(),
            parent_folder_id: zod_1.z
                .string()
                .describe('Parent folder ID, where a value of 0 indicates the root folder. The method for obtaining ID is shown in [List Email Folders]')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
            folder_id: zod_1.z.string().describe('Folder ID. The method for obtaining ID is shown in [List Email Folders]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMailContactCreate = {
    project: 'mail',
    name: 'mail.v1.userMailboxMailContact.create',
    sdkName: 'mail.v1.userMailboxMailContact.create',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Email Contact-Create Email Contact-Create A Email Contact',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z.string().describe("Email Contact's Name"),
            company: zod_1.z.string().describe("Email Contact's Company").optional(),
            phone: zod_1.z.string().describe("Email Contact's Phone Number").optional(),
            mail_address: zod_1.z.string().describe("Email Contact's Mail Address").optional(),
            tag: zod_1.z.string().describe("Email Contact's Tag").optional(),
            remark: zod_1.z.string().describe("Email Contact's Remark").optional(),
            position: zod_1.z.string().describe("Email Contact's Position").optional(),
        }),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string() }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMailContactDelete = {
    project: 'mail',
    name: 'mail.v1.userMailboxMailContact.delete',
    sdkName: 'mail.v1.userMailboxMailContact.delete',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Email Contact-Delete Email Contact-Delete An Email Contact',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address or enter "me" to represent the current user making the API call'),
            mail_contact_id: zod_1.z.string().describe("Email Contact's ID. For the acquisition method, see [List Email Contacts]"),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMailContactList = {
    project: 'mail',
    name: 'mail.v1.userMailboxMailContact.list',
    sdkName: 'mail.v1.userMailboxMailContact.list',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Email Contact-List Email Contacts-List Email Contacts',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('paging size'),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning; when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMailContactPatch = {
    project: 'mail',
    name: 'mail.v1.userMailboxMailContact.patch',
    sdkName: 'mail.v1.userMailboxMailContact.patch',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id',
    httpMethod: 'PATCH',
    description: "[Feishu/Lark]-Email-Email Contact-Modify Email Contact's Info-When using the tenant_access_token, it is necessary to apply for data permissions for accessing email contacts resources",
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z.string().describe("Email Contact's Name"),
            company: zod_1.z.string().describe("Email Contact's Company").optional(),
            phone: zod_1.z.string().describe("Email Contact's Phone Number").optional(),
            mail_address: zod_1.z.string().describe("Email Contact's Mail Address").optional(),
            tag: zod_1.z.string().describe("Email Contact's Tag").optional(),
            remark: zod_1.z.string().describe("Email Contact's Remark").optional(),
            position: zod_1.z.string().describe("Email Contact's Position").optional(),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address or enter "me" to represent the current user making the API call'),
            mail_contact_id: zod_1.z.string().describe("Email Contact's ID. For the acquisition method, see [List Email Contacts]"),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMessageAttachmentDownloadUrl = {
    project: 'mail',
    name: 'mail.v1.userMailboxMessageAttachment.downloadUrl',
    sdkName: 'mail.v1.userMailboxMessageAttachment.downloadUrl',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id/attachments/download_url',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-User Message-Attachment-Get Attachment Download Links-Get Attachment Download Links',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({ attachment_ids: zod_1.z.array(zod_1.z.string()).describe('Attachment ID list') }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
            message_id: zod_1.z.string().describe('Message ID, the method for obtaining ID is shown in [List Emails]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMessageGet = {
    project: 'mail',
    name: 'mail.v1.userMailboxMessage.get',
    sdkName: 'mail.v1.userMailboxMessage.get',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-User Message-Get Email Details-Get Email Details',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
            message_id: zod_1.z.string().describe('Message ID, the method for obtaining ID is shown in [List Emails]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMessageGetByCard = {
    project: 'mail',
    name: 'mail.v1.userMailboxMessage.getByCard',
    sdkName: 'mail.v1.userMailboxMessage.getByCard',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/get_by_card',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-User Message-list mail of card-list mail of mail card',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            card_id: zod_1.z.string().describe('Mail card ID, available via [Receive message] events'),
            owner_id: zod_1.z
                .string()
                .describe('Mail card OwnerID, available via [Receive message] events (independent of `user_id_type`)'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMessageList = {
    project: 'mail',
    name: 'mail.v1.userMailboxMessage.list',
    sdkName: 'mail.v1.userMailboxMessage.list',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-User Message-List Emails-List Emails',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('page size'),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning; when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            folder_id: zod_1.z.string().describe('Folder ID. The method for obtaining ID is shown in [List Email Folders]'),
            only_unread: zod_1.z.boolean().describe('Only query unread emails').optional(),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxMessageSend = {
    project: 'mail',
    name: 'mail.v1.userMailboxMessage.send',
    sdkName: 'mail.v1.userMailboxMessage.send',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/send',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-User Message-Send Message-Send Message',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z
            .object({
            subject: zod_1.z.string().describe('Subject').optional(),
            to: zod_1.z
                .array(zod_1.z.object({
                mail_address: zod_1.z.string().describe('Mail address'),
                name: zod_1.z.string().describe('Name').optional(),
            }))
                .describe('Recipient')
                .optional(),
            cc: zod_1.z
                .array(zod_1.z.object({
                mail_address: zod_1.z.string().describe('Mail address'),
                name: zod_1.z.string().describe('Name').optional(),
            }))
                .describe('CC')
                .optional(),
            bcc: zod_1.z
                .array(zod_1.z.object({
                mail_address: zod_1.z.string().describe('Mail address'),
                name: zod_1.z.string().describe('Name').optional(),
            }))
                .describe('CC')
                .optional(),
            head_from: zod_1.z
                .object({ name: zod_1.z.string().describe('Name').optional() })
                .describe('Sender')
                .optional(),
            body_html: zod_1.z.string().describe('Body').optional(),
            body_plain_text: zod_1.z.string().describe('Body plain text').optional(),
            attachments: zod_1.z
                .array(zod_1.z.object({
                body: zod_1.z
                    .string()
                    .describe('The body of the attachment, encoded in base64url (maximum 37MB of supported files)'),
                filename: zod_1.z.string().describe('Attachment file name'),
            }))
                .describe('Mail Attachment List')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxRuleCreate = {
    project: 'mail',
    name: 'mail.v1.userMailboxRule.create',
    sdkName: 'mail.v1.userMailboxRule.create',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Auto Filter-Create Auto FIlter-Create Auto Filter',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            condition: zod_1.z
                .object({
                match_type: zod_1.z
                    .number()
                    .describe('Match type Options:1(MatchAll Meet all conditions),2(MatchAny Meet any condition)'),
                items: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .number()
                        .describe('Match condition left value Options:1(From Sender),2(To Recipient),3(Cc CC recipient),4(ToOrCc To or Cc recipient),6(Subject),7(Body),8(AttachmentName Attachment name),9(AttachmentType Attachment type),10(AnyAddress Any recipient),12(MatchAllMessage All mails),13(IsExternal Mail Is external),14(IsSpam Mail is spam),15(IsNotSpam Mail is not spam),16(HasAttachment Mail has attachment)'),
                    operator: zod_1.z
                        .number()
                        .describe('Match condition operator Options:1(Contains),2(DoesNotContains Does not contains),3(StartsWith Starts with),4(EndsWith Ends with),5(Is),6(IsNot Is not),7(IncludesMe Include me),10(IsEmpty Is empty)'),
                    input: zod_1.z.string().describe('Match condition right value').optional(),
                }))
                    .describe('Match rule list'),
            })
                .describe('Match condition'),
            action: zod_1.z
                .object({
                items: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .number()
                        .describe('Operation type Options:1(ArchiveMessage Archive),2(DeleteMessage Delete it),3(MarkAsRead Mark as read),4(MarkAsSpam Mark as spam),5(NeverMarkAsSpam Never mark as spam),8(ApplyLabel Label as (not support now)),9(Flag),10(NeverPushNotification No notification),11(MoveToFolder Move to user folder),12(AutoTransfer Automatically forward (not support now)),13(SendToChat Share to chat (not support now))'),
                    input: zod_1.z
                        .string()
                        .describe('When the type is "Move to folder," fill this field with the ID of the folder')
                        .optional(),
                }))
                    .describe('List of actions after matching rules'),
            })
                .describe('Action after match hit'),
            ignore_the_rest_of_rules: zod_1.z.boolean().describe('Is terminal filter'),
            name: zod_1.z.string().describe('Name'),
            is_enable: zod_1.z.boolean().describe('Is enable'),
        }),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string().describe('User email address, use me when using user_access_token') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxRuleDelete = {
    project: 'mail',
    name: 'mail.v1.userMailboxRule.delete',
    sdkName: 'mail.v1.userMailboxRule.delete',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Email-Auto Filter-Delete Auto Filter-Delete Auto Filter',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z.string(),
            rule_id: zod_1.z.string().describe('Rule ID. The method for obtaining ID is shown in [List Auto Filters]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxRuleList = {
    project: 'mail',
    name: 'mail.v1.userMailboxRule.list',
    sdkName: 'mail.v1.userMailboxRule.list',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Email-Auto Filter-List Auto FIlters-List Auto Filters',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxRuleReorder = {
    project: 'mail',
    name: 'mail.v1.userMailboxRule.reorder',
    sdkName: 'mail.v1.userMailboxRule.reorder',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/reorder',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Auto Filter-Reorder Auto Filters-Reorder Auto Filters',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            rule_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('Auto filter ID list. The method for obtaining ID is shown in [List Auto Filters]'),
        }),
        path: zod_1.z.object({ user_mailbox_id: zod_1.z.string() }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserMailboxRuleUpdate = {
    project: 'mail',
    name: 'mail.v1.userMailboxRule.update',
    sdkName: 'mail.v1.userMailboxRule.update',
    path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Email-Auto Filter-Update Auto FIlter-Update Auto Filter',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            condition: zod_1.z
                .object({
                match_type: zod_1.z
                    .number()
                    .describe('Match type Options:1(MatchAll Meet all conditions),2(MatchAny Meet any condition)'),
                items: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .number()
                        .describe('Match condition left value Options:1(From Sender),2(To Recipient),3(Cc CC recipient),4(ToOrCc To or CC recipient),6(Subject),7(Body),8(AttachmentName Attachment name),9(AttachmentType Attachment type),10(AnyAddress Any recipient),12(MatchAllMessage All mails),13(IsExternal Mail is external),14(IsSpam Mail is spam),15(IsNotSpam Mail is not spam),16(HasAttachment Mail has attachment)'),
                    operator: zod_1.z
                        .number()
                        .describe('Match condition operator Options:1(Contains),2(DoesNotContains Does not contains),3(StartsWith Starts with),4(EndsWith Ends with),5(Is),6(IsNot Is not),7(IncludesMe Include me),10(IsEmpty Is empty)'),
                    input: zod_1.z.string().describe('Match condition right value').optional(),
                }))
                    .describe('Match rule list'),
            })
                .describe('Match condition'),
            action: zod_1.z
                .object({
                items: zod_1.z
                    .array(zod_1.z.object({
                    type: zod_1.z
                        .number()
                        .describe('Operation type Options:1(ArchiveMessage Archive),2(DeleteMessage Delete it),3(MarkAsRead Mark as read),4(MarkAsSpam Mark as spam),5(NeverMarkAsSpam Never mark as spam),8(ApplyLabel Label as (not support now)),9(Flag),10(NeverPushNotification No notification),11(MoveToFolder Move to user folder),12(AutoTransfer Automatically forward (not support now)),13(SendToChat Share to chat (not support now))'),
                    input: zod_1.z
                        .string()
                        .describe('When the type is "Move to folder," fill this field with the ID of the folder')
                        .optional(),
                }))
                    .describe('List of actions after matching rules'),
            })
                .describe('Action after match hit'),
            ignore_the_rest_of_rules: zod_1.z.boolean().describe('Is terminal filter'),
            name: zod_1.z.string().describe('Name'),
            is_enable: zod_1.z.boolean().describe('Is enable'),
        }),
        path: zod_1.z.object({
            user_mailbox_id: zod_1.z
                .string()
                .describe('User email address, or enter me to represent the current calling interface user'),
            rule_id: zod_1.z.string().describe('Rule ID. The method for obtaining ID is shown in [List Auto Filters]'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.mailV1UserQuery = {
    project: 'mail',
    name: 'mail.v1.user.query',
    sdkName: 'mail.v1.user.query',
    path: '/open-apis/mail/v1/users/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Email-Email Address-Email Address Query-Using the query API, you can enter an email address to query the type and status corresponding to the email address',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ email_list: zod_1.z.array(zod_1.z.string()).describe('email list for query') }),
    },
};
exports.mailV1Tools = [
    exports.mailV1MailgroupAliasCreate,
    exports.mailV1MailgroupAliasDelete,
    exports.mailV1MailgroupAliasList,
    exports.mailV1MailgroupCreate,
    exports.mailV1MailgroupDelete,
    exports.mailV1MailgroupGet,
    exports.mailV1MailgroupList,
    exports.mailV1MailgroupManagerBatchCreate,
    exports.mailV1MailgroupManagerBatchDelete,
    exports.mailV1MailgroupManagerList,
    exports.mailV1MailgroupMemberBatchCreate,
    exports.mailV1MailgroupMemberBatchDelete,
    exports.mailV1MailgroupMemberCreate,
    exports.mailV1MailgroupMemberDelete,
    exports.mailV1MailgroupMemberGet,
    exports.mailV1MailgroupMemberList,
    exports.mailV1MailgroupPatch,
    exports.mailV1MailgroupPermissionMemberBatchCreate,
    exports.mailV1MailgroupPermissionMemberBatchDelete,
    exports.mailV1MailgroupPermissionMemberCreate,
    exports.mailV1MailgroupPermissionMemberDelete,
    exports.mailV1MailgroupPermissionMemberGet,
    exports.mailV1MailgroupPermissionMemberList,
    exports.mailV1MailgroupUpdate,
    exports.mailV1PublicMailboxAliasCreate,
    exports.mailV1PublicMailboxAliasDelete,
    exports.mailV1PublicMailboxAliasList,
    exports.mailV1PublicMailboxCreate,
    exports.mailV1PublicMailboxDelete,
    exports.mailV1PublicMailboxGet,
    exports.mailV1PublicMailboxList,
    exports.mailV1PublicMailboxMemberBatchCreate,
    exports.mailV1PublicMailboxMemberBatchDelete,
    exports.mailV1PublicMailboxMemberClear,
    exports.mailV1PublicMailboxMemberCreate,
    exports.mailV1PublicMailboxMemberDelete,
    exports.mailV1PublicMailboxMemberGet,
    exports.mailV1PublicMailboxMemberList,
    exports.mailV1PublicMailboxPatch,
    exports.mailV1PublicMailboxRemoveToRecycleBin,
    exports.mailV1PublicMailboxUpdate,
    exports.mailV1UserMailboxAliasCreate,
    exports.mailV1UserMailboxAliasDelete,
    exports.mailV1UserMailboxAliasList,
    exports.mailV1UserMailboxDelete,
    exports.mailV1UserMailboxEventSubscribe,
    exports.mailV1UserMailboxEventSubscription,
    exports.mailV1UserMailboxEventUnsubscribe,
    exports.mailV1UserMailboxFolderCreate,
    exports.mailV1UserMailboxFolderDelete,
    exports.mailV1UserMailboxFolderList,
    exports.mailV1UserMailboxFolderPatch,
    exports.mailV1UserMailboxMailContactCreate,
    exports.mailV1UserMailboxMailContactDelete,
    exports.mailV1UserMailboxMailContactList,
    exports.mailV1UserMailboxMailContactPatch,
    exports.mailV1UserMailboxMessageAttachmentDownloadUrl,
    exports.mailV1UserMailboxMessageGet,
    exports.mailV1UserMailboxMessageGetByCard,
    exports.mailV1UserMailboxMessageList,
    exports.mailV1UserMailboxMessageSend,
    exports.mailV1UserMailboxRuleCreate,
    exports.mailV1UserMailboxRuleDelete,
    exports.mailV1UserMailboxRuleList,
    exports.mailV1UserMailboxRuleReorder,
    exports.mailV1UserMailboxRuleUpdate,
    exports.mailV1UserQuery,
];
