"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitableV1Tools = exports.bitableV1AppWorkflowUpdate = exports.bitableV1AppWorkflowList = exports.bitableV1AppUpdate = exports.bitableV1AppTableViewPatch = exports.bitableV1AppTableViewList = exports.bitableV1AppTableViewGet = exports.bitableV1AppTableViewDelete = exports.bitableV1AppTableViewCreate = exports.bitableV1AppTableRecordUpdate = exports.bitableV1AppTableRecordSearch = exports.bitableV1AppTableRecordList = exports.bitableV1AppTableRecordGet = exports.bitableV1AppTableRecordDelete = exports.bitableV1AppTableRecordCreate = exports.bitableV1AppTableRecordBatchUpdate = exports.bitableV1AppTableRecordBatchGet = exports.bitableV1AppTableRecordBatchDelete = exports.bitableV1AppTableRecordBatchCreate = exports.bitableV1AppTablePatch = exports.bitableV1AppTableList = exports.bitableV1AppTableFormPatch = exports.bitableV1AppTableFormGet = exports.bitableV1AppTableFormFieldPatch = exports.bitableV1AppTableFormFieldList = exports.bitableV1AppTableFieldUpdate = exports.bitableV1AppTableFieldList = exports.bitableV1AppTableFieldDelete = exports.bitableV1AppTableFieldCreate = exports.bitableV1AppTableDelete = exports.bitableV1AppTableCreate = exports.bitableV1AppTableBatchDelete = exports.bitableV1AppTableBatchCreate = exports.bitableV1AppRoleUpdate = exports.bitableV1AppRoleMemberList = exports.bitableV1AppRoleMemberDelete = exports.bitableV1AppRoleMemberCreate = exports.bitableV1AppRoleMemberBatchDelete = exports.bitableV1AppRoleMemberBatchCreate = exports.bitableV1AppRoleList = exports.bitableV1AppRoleDelete = exports.bitableV1AppRoleCreate = exports.bitableV1AppGet = exports.bitableV1AppDashboardList = exports.bitableV1AppDashboardCopy = exports.bitableV1AppCreate = exports.bitableV1AppCopy = void 0;
const zod_1 = require("zod");
exports.bitableV1AppCopy = {
    project: 'bitable',
    name: 'bitable.v1.app.copy',
    sdkName: 'bitable.v1.app.copy',
    path: '/open-apis/bitable/v1/apps/:app_token/copy',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-App-Copy App-Copy a base app, you can specify to copy to a folder with permissions',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Base App Name').optional(),
            folder_token: zod_1.z.string().describe('[Base App Folder Token]').optional(),
            without_content: zod_1.z
                .boolean()
                .describe('Whether to copy the Base content, take the value:* true: not copy* false: copy')
                .optional(),
            time_zone: zod_1.z.string().describe('Base App Time Zone, [More Detail]').optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppCreate = {
    project: 'bitable',
    name: 'bitable.v1.app.create',
    sdkName: 'bitable.v1.app.create',
    path: '/open-apis/bitable/v1/apps',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-App-Create a Base App-Create a base app in user-defined folder',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Base App Name').optional(),
            folder_token: zod_1.z
                .string()
                .describe('Base App Folder Token. The default value is empty, which means that the Base App is created at the root folder. For information on how to obtain folder_token, please refer to [How to obtain tokens related to cloud document resources]')
                .optional(),
            time_zone: zod_1.z.string().describe('Base App Time Zone, [More Detail]').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppDashboardCopy = {
    project: 'bitable',
    name: 'bitable.v1.appDashboard.copy',
    sdkName: 'bitable.v1.appDashboard.copy',
    path: '/open-apis/bitable/v1/apps/:app_token/dashboards/:block_id/copy',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Dashboards-Copy dashboards-This interface is used to duplicate a new dashboard from an existing dashboard',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ name: zod_1.z.string().describe('Dashboard Name') }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            block_id: zod_1.z.string().describe('Base block_id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppDashboardList = {
    project: 'bitable',
    name: 'bitable.v1.appDashboard.list',
    sdkName: 'bitable.v1.appDashboard.list',
    path: '/open-apis/bitable/v1/apps/:app_token/dashboards',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Dashboards-List dashboards-According to app_token, get all dashboards under app',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppGet = {
    project: 'bitable',
    name: 'bitable.v1.app.get',
    sdkName: 'bitable.v1.app.get',
    path: '/open-apis/bitable/v1/apps/:app_token',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-App-Get App Info-Get App information through app_token',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleCreate = {
    project: 'bitable',
    name: 'bitable.v1.appRole.create',
    sdkName: 'bitable.v1.appRole.create',
    path: '/open-apis/bitable/v1/apps/:app_token/roles',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Docs-Base-Role-Create role-Create a role',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            role_name: zod_1.z.string().describe('Role name'),
            table_roles: zod_1.z
                .array(zod_1.z.object({
                table_name: zod_1.z.string().describe('Table name').optional(),
                table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
                table_perm: zod_1.z
                    .number()
                    .describe('Table perm Options:0(NoPerm No permissions),1(Read View only),2(Edit Can edit records),4(Admin Can edit records and fields)'),
                rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('Option id').optional(),
                    }))
                        .describe('Coditions'),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                    other_perm: zod_1.z
                        .number()
                        .describe('Other perm Options:0(NoPerm Cannot view),1(Read View Only)')
                        .optional(),
                })
                    .describe('Record filter rule')
                    .optional(),
                field_perm: zod_1.z
                    .object({})
                    .describe('Permission of fields, only valid when `table_perm` is 2. The type is map, key is field name, value is permission of field.**Optional values are**:- `1`: View only- `2`: Can edit records')
                    .optional(),
                allow_add_record: zod_1.z
                    .boolean()
                    .describe('Added record permission, only meaningful when the table_perm is 2, used to set whether the record can be added')
                    .optional(),
                allow_delete_record: zod_1.z
                    .boolean()
                    .describe('Delete record permission, meaningful only when the table_perm is 2, used to set whether the record can be deleted')
                    .optional(),
            }))
                .describe('Table role'),
            block_roles: zod_1.z
                .array(zod_1.z.object({
                block_id: zod_1.z.string().describe('Block id, Such as dashboard block id in list dashboards method'),
                block_perm: zod_1.z.number().describe('Block perm Options:0(NoPerm No permissions),1(Read View only)'),
            }))
                .describe('Block role')
                .optional(),
        }),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleDelete = {
    project: 'bitable',
    name: 'bitable.v1.appRole.delete',
    sdkName: 'bitable.v1.appRole.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Role-Delete role-Delete a role',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            role_id: zod_1.z.string().describe('Role id').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleList = {
    project: 'bitable',
    name: 'bitable.v1.appRole.list',
    sdkName: 'bitable.v1.appRole.list',
    path: '/open-apis/bitable/v1/apps/:app_token/roles',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Docs-Base-Role-List roles-Get all roles according to app_token',
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
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleMemberBatchCreate = {
    project: 'bitable',
    name: 'bitable.v1.appRoleMember.batchCreate',
    sdkName: 'bitable.v1.appRoleMember.batchCreate',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Member-Batch create members-Add role members with custom permissions in bulk',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_list: zod_1.z
                .array(zod_1.z.object({
                type: zod_1.z
                    .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
                    .describe('member id type Options:open_id(OpenID member ID type is open_id),union_id(UnionID member ID type is union_id),user_id(UserID member ID type is user_id),chat_id(ChatID member ID type is chat_id),department_id(DepartmentID member ID type is department_id),open_department_id(OpenDepartmentID member ID type is open_department_id)')
                    .optional(),
                id: zod_1.z.string().describe('member ID'),
            }))
                .describe('List of member'),
        }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            role_id: zod_1.z.string().describe('Custom role ID'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleMemberBatchDelete = {
    project: 'bitable',
    name: 'bitable.v1.appRoleMember.batchDelete',
    sdkName: 'bitable.v1.appRoleMember.batchDelete',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_delete',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Member-Batch delete members-Batch delete role members',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            member_list: zod_1.z
                .array(zod_1.z.object({
                type: zod_1.z
                    .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
                    .describe('member id type Options:open_id(OpenID member ID type is open_id),union_id(UnionID member ID type is union_id),user_id(UserID member ID type is user_id),chat_id(ChatID member ID type is chat_id),department_id(DepartmentID member ID type is department_id),open_department_id(OpenDepartmentID member ID type is open_department_id)')
                    .optional(),
                id: zod_1.z.string().describe('member ID'),
            }))
                .describe('List of members'),
        }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            role_id: zod_1.z.string().describe('Custom role ID'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleMemberCreate = {
    project: 'bitable',
    name: 'bitable.v1.appRoleMember.create',
    sdkName: 'bitable.v1.appRoleMember.create',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Member-Create member-Create a member',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ member_id: zod_1.z.string().describe('Member id') }),
        params: zod_1.z
            .object({
            member_id_type: zod_1.z
                .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
                .describe('Member id type Options:open_id(OpenID open_id),union_id(UnionID union_id),user_id(UserID user_id),chat_id(ChatID chat_id),department_id(DepartmentID department_id. Before using this parameter, make sure the application has departmental visibility, refer to [configure application availability scope]),open_department_id(OpenDepartmentID open_department_id. Before using this parameter, make sure the application has departmental visibility, refer to [configure application availability scope])')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            role_id: zod_1.z.string().describe('Role id').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleMemberDelete = {
    project: 'bitable',
    name: 'bitable.v1.appRoleMember.delete',
    sdkName: 'bitable.v1.appRoleMember.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/:member_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Member-Delete member-Delete a member',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            member_id_type: zod_1.z
                .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
                .describe('Member id type Options:open_id(OpenID open_id),union_id(UnionID union_id),user_id(UserID user_id),chat_id(ChatID chat_id),department_id(DepartmentID department_id),open_department_id(OpenDepartmentID open_department_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            role_id: zod_1.z.string().describe('Role id').optional(),
            member_id: zod_1.z.string().describe('Member id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleMemberList = {
    project: 'bitable',
    name: 'bitable.v1.appRoleMember.list',
    sdkName: 'bitable.v1.appRoleMember.list',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Member-List members-Get all members according to app_token and role_id',
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
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            role_id: zod_1.z.string().describe('Role id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppRoleUpdate = {
    project: 'bitable',
    name: 'bitable.v1.appRole.update',
    sdkName: 'bitable.v1.appRole.update',
    path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Docs-Base-Role-Update role-Update a role',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            role_name: zod_1.z.string().describe('Role name'),
            table_roles: zod_1.z
                .array(zod_1.z.object({
                table_perm: zod_1.z
                    .number()
                    .describe('Table perm Options:0(NoPerm No permissions),1(Read View only),2(Edit Can edit records),4(Admin Can edit records and fields)'),
                table_name: zod_1.z.string().describe('Table name').optional(),
                table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
                rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('Option id').optional(),
                    }))
                        .describe('Coditions'),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                    other_perm: zod_1.z
                        .number()
                        .describe('Other perm Options:0(NoPerm Cannot view),1(Read View Only)')
                        .optional(),
                })
                    .describe('Record filter rule')
                    .optional(),
                field_perm: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('Permission of fields, only valid when `table_perm` is 2. The type is map, key is field name, value is permission of field.**Optional values are**:- `1`: View only- `2`: Can edit records')
                    .optional(),
                allow_add_record: zod_1.z
                    .boolean()
                    .describe('Added record permission, only meaningful when the table_perm is 2, used to set whether the record can be added')
                    .optional(),
                allow_delete_record: zod_1.z
                    .boolean()
                    .describe('Delete record permission, meaningful only when the table_perm is 2, used to set whether the record can be deleted')
                    .optional(),
            }))
                .describe('Table role'),
            block_roles: zod_1.z
                .array(zod_1.z.object({
                block_id: zod_1.z.string().describe('Block id, Such as dashboard block id in list dashboards method'),
                block_perm: zod_1.z.number().describe('Block perm Options:0(NoPerm No permissions),1(Read View only)'),
            }))
                .describe('Block role')
                .optional(),
        }),
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            role_id: zod_1.z.string().describe('Role id').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableBatchCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTable.batchCreate',
    sdkName: 'bitable.v1.appTable.batchCreate',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Table-Batch create table-Batch create table',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            tables: zod_1.z
                .array(zod_1.z.object({
                name: zod_1.z
                    .string()
                    .describe('Name for the table. This field is required.Please note:1. The first and last spaces in the name will be removed.2. If the name is empty or the same as the old name, the interface will still return success, but the name will not be changed')
                    .optional(),
            }))
                .describe('tables')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableBatchDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTable.batchDelete',
    sdkName: 'bitable.v1.appTable.batchDelete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/batch_delete',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Table-Batch delete table-Batch delete table',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            table_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('Base data table unique device identifier,Currently supports up to 50 data tables in one operation[table_id description]')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTable.create',
    sdkName: 'bitable.v1.appTable.create',
    path: '/open-apis/bitable/v1/apps/:app_token/tables',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Table-Create table-Add a new table in Base, supporting the input of table name, view name, and fields',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            table: zod_1.z
                .object({
                name: zod_1.z
                    .string()
                    .describe('Name for the table.Please note:1. The first and last spaces in the name will be removed')
                    .optional(),
                default_view_name: zod_1.z
                    .string()
                    .describe('Name of the default table viewPlease note:1. The first and last spaces in the name will be removed.2. The characters [ ] are not allowed to be included')
                    .optional(),
                fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('Field name'),
                    type: zod_1.z
                        .number()
                        .describe('Field type Options:1(Text Multiline),2(Number),3(SingleSelect Single option),4(MultiSelect Multiple options),5(DateTime Date),7(Checkbox),11(User Person),13(PhoneNumber),15(Url Link),17(Attachment),18(Link One-way link),20(Formula),21(DuplexLink Two-way link),22(Location),23(GroupChat group),1001(CreatedTime Date created),1002(ModifiedTime Last modified date),1003(CreatedUser Created by),1004(ModifiedUser Modified by),1005(AutoSerial)'),
                    ui_type: zod_1.z
                        .enum([
                        'Text',
                        'Barcode',
                        'Number',
                        'Progress',
                        'Currency',
                        'Rating',
                        'SingleSelect',
                        'MultiSelect',
                        'DateTime',
                        'Checkbox',
                        'User',
                        'GroupChat',
                        'Phone',
                        'Url',
                        'Attachment',
                        'SingleLink',
                        'Formula',
                        'DuplexLink',
                        'Location',
                        'CreatedTime',
                        'ModifiedTime',
                        'CreatedUser',
                        'ModifiedUser',
                        'AutoNumber',
                    ])
                        .describe('Field Property, ref: [Field edit development guide] Options:Text(multiline text),Barcode(barcode),Number(number),Progress(progress),Currency(currency),Rating(score),SingleSelect(radio),MultiSelect(multiple choice),DateTime(date),Checkbox(checkbox),User(Personnel),GroupChat(group),Phone(Phone number),Url(Hyperlink),Attachment(Attachment),SingleLink(one-way association),Formula(formula),DuplexLink(Two-way link),Location(Geographical location),CreatedTime(Creation time),ModifiedTime(Last update time),CreatedUser(creator),ModifiedUser(Modifier),AutoNumber(Automatic numbering)')
                        .optional(),
                    property: zod_1.z
                        .object({
                        options: zod_1.z
                            .array(zod_1.z.object({
                            name: zod_1.z.string().describe('Option name').optional(),
                            id: zod_1.z.string().describe('Option ID, not allowed to specify ID at creation time').optional(),
                            color: zod_1.z.number().describe('Option color').optional(),
                        }))
                            .describe('Whether to disable synchronization, if true, it means that synchronization of the description content to the problem description of the form is prohibited (only valid when fields are added or modified)')
                            .optional(),
                        formatter: zod_1.z.string().describe('Display format of numbers and formula fields').optional(),
                        date_formatter: zod_1.z
                            .string()
                            .describe('The display format of the date, creation time, and last updated time fields')
                            .optional(),
                        auto_fill: zod_1.z
                            .boolean()
                            .describe('New records in the date field are automatically filled in Creation time')
                            .optional(),
                        multiple: zod_1.z
                            .boolean()
                            .describe('Multiple members are allowed to be added in the personnel field, and multiple records are allowed in one-way association and two-way association')
                            .optional(),
                        table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
                        table_name: zod_1.z
                            .string()
                            .describe('The name of the associated data table in the one-way association, two-way association field')
                            .optional(),
                        back_field_name: zod_1.z
                            .string()
                            .describe('The name of the corresponding bidirectional association field in the associated data table in the bidirectional association field')
                            .optional(),
                        auto_serial: zod_1.z
                            .object({
                            type: zod_1.z
                                .enum(['custom', 'auto_increment_number'])
                                .describe('Automatic numbering type Options:custom(Custom number),auto_increment_number(AutoIncrementNumber Autoincrement number)'),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                type: zod_1.z
                                    .enum(['system_number', 'fixed_text', 'created_time'])
                                    .describe('Optional rule item types for auto-numbering Options:system_number(SystemNumber Incremental digits, value range 1-9),fixed_text(FixedText Fixed characters, maximum length: 20),created_time(CreatedTime Creation time, supports formats "yyyyMMdd", "yyyyMM", "yyyy", "MMdd", "MM", "dd")'),
                                value: zod_1.z
                                    .string()
                                    .describe('Values corresponding to auto-numbered optional rule item types'),
                            }))
                                .describe('List of auto-numbering rules')
                                .optional(),
                        })
                            .describe('Automatic numbering type')
                            .optional(),
                        location: zod_1.z
                            .object({
                            input_type: zod_1.z
                                .enum(['only_mobile', 'not_limit'])
                                .describe('Geolocation input restrictions Options:only_mobile(OnlyMobile Only allow uploads on mobile ends),not_limit(NotLimit Unlimited)'),
                        })
                            .describe('Geolocation input method')
                            .optional(),
                        formula_expression: zod_1.z.string().describe('Expression of formula field').optional(),
                        allowed_edit_modes: zod_1.z
                            .object({
                            manual: zod_1.z.boolean().describe('Whether to allow manual entry').optional(),
                            scan: zod_1.z.boolean().describe('Whether to allow mobile end entry').optional(),
                        })
                            .describe('Editing modes supported by the field')
                            .optional(),
                        min: zod_1.z.number().describe('Minimum data range for fields such as progress, score, etc').optional(),
                        max: zod_1.z.number().describe('Maximum data range for fields such as progress, score, etc').optional(),
                        range_customize: zod_1.z
                            .boolean()
                            .describe('Whether fields such as progress support custom ranges')
                            .optional(),
                        currency_code: zod_1.z.string().describe('Currency').optional(),
                        rating: zod_1.z
                            .object({ symbol: zod_1.z.string().describe('Symbol display for rating fields').optional() })
                            .describe('Relevant settings for scoring fields')
                            .optional(),
                    })
                        .describe('Field description')
                        .optional(),
                    description: zod_1.z
                        .object({
                        disable_sync: zod_1.z
                            .boolean()
                            .describe('Whether to disable synchronization, if true, it means that synchronization of the description content to the problem description of the form is prohibited (only valid when fields are added or modified)')
                            .optional(),
                        text: zod_1.z.string().describe('Field description content').optional(),
                    })
                        .describe('Field description')
                        .optional(),
                }))
                    .describe('Initial fields of the data table. To learn how to fill in the fields, refer to the [Field Editing Guide].**Note**:- If the `default_view_name` field is passed, the `fields` field must also be passed.- If the `default_view_name` field is not passed, the `fields` field is optional.- If neither the `default_view_name` field nor the `fields` field is passed, an empty data table containing only the index field will be created.- The first field of the data table is the index field. The index field only supports the following types: - 1: Multi-line text - 2: Number - 5: Date - 13: Phone number - 15: Hyperlink - 20: Formula - 22: Geographic location')
                    .optional(),
            })
                .describe('table')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTable.delete',
    sdkName: 'bitable.v1.appTable.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-Table-Delete Table-Delete a table',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFieldCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTableField.create',
    sdkName: 'bitable.v1.appTableField.create',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Field-Create field-Create a field',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            field_name: zod_1.z
                .string()
                .describe('Field NamePlease note: 1. The first and last spaces in the name will be removed'),
            type: zod_1.z
                .number()
                .describe('Field Type Options:1(Text Multiline),2(Number),3(SingleSelect Single option),4(MultiSelect Multiple options),5(DateTime Date),7(Checkbox),11(User Person),13(PhoneNumber),15(Url Link),17(Attachment),18(Link One-way link),20(Formula),21(DuplexLink Two-way link),22(Location),23(GroupChat group),1001(CreatedTime Date created),1002(ModifiedTime Last modified date),1003(CreatedUser Created by),1004(ModifiedUser Modified by),1005(AutoSerial)'),
            property: zod_1.z
                .object({
                options: zod_1.z
                    .array(zod_1.z.object({
                    name: zod_1.z.string().describe('Option name').optional(),
                    id: zod_1.z.string().describe('Option ID, not allowed to specify ID at creation time').optional(),
                    color: zod_1.z.number().describe('Option color').optional(),
                }))
                    .describe('Option information for radio and multi-select fields')
                    .optional(),
                formatter: zod_1.z.string().describe('Display format of numbers and formula fields').optional(),
                date_formatter: zod_1.z
                    .string()
                    .describe('The display format of the date, creation time, and last updated time fields')
                    .optional(),
                auto_fill: zod_1.z
                    .boolean()
                    .describe('New records in the date field are automatically filled in Creation time')
                    .optional(),
                multiple: zod_1.z
                    .boolean()
                    .describe('Multiple members are allowed to be added in the personnel field, and multiple records are allowed in one-way association and two-way association')
                    .optional(),
                table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
                back_field_name: zod_1.z
                    .string()
                    .describe('The name of the corresponding bidirectional association field in the associated data table in the bidirectional association field')
                    .optional(),
                auto_serial: zod_1.z
                    .object({
                    type: zod_1.z
                        .enum(['custom', 'auto_increment_number'])
                        .describe('Automatic numbering type Options:custom(Custom number),auto_increment_number(AutoIncrementNumber Autoincrement number)'),
                    options: zod_1.z
                        .array(zod_1.z.object({
                        type: zod_1.z
                            .enum(['system_number', 'fixed_text', 'created_time'])
                            .describe('Optional rule item types for auto-numbering Options:system_number(SystemNumber Incremental digits, value range 1-9),fixed_text(FixedText Fixed characters, maximum length: 20),created_time(CreatedTime Creation time, supports formats "yyyyMMdd", "yyyyMM", "yyyy", "MMdd", "MM", "dd")'),
                        value: zod_1.z.string().describe('Values corresponding to auto-numbered optional rule item types'),
                    }))
                        .describe('List of auto-numbering rules')
                        .optional(),
                })
                    .describe('Automatic numbering type')
                    .optional(),
                location: zod_1.z
                    .object({
                    input_type: zod_1.z
                        .enum(['only_mobile', 'not_limit'])
                        .describe('Geolocation input restrictions Options:only_mobile(OnlyMobile Only allow uploads on mobile ends),not_limit(NotLimit Unlimited)'),
                })
                    .describe('Geolocation input method')
                    .optional(),
                formula_expression: zod_1.z.string().describe('Expression of formula field').optional(),
                allowed_edit_modes: zod_1.z
                    .object({
                    manual: zod_1.z.boolean().describe('Whether to allow manual entry').optional(),
                    scan: zod_1.z.boolean().describe('Whether to allow mobile end entry').optional(),
                })
                    .describe('Editing modes supported by the field')
                    .optional(),
                min: zod_1.z.number().describe('Minimum data range for fields such as progress, score, etc').optional(),
                max: zod_1.z.number().describe('Maximum data range for fields such as progress, score, etc').optional(),
                range_customize: zod_1.z.boolean().describe('Whether fields such as progress support custom ranges').optional(),
                currency_code: zod_1.z.string().describe('Currency Currency').optional(),
                rating: zod_1.z
                    .object({ symbol: zod_1.z.string().describe('Symbol display for rating fields').optional() })
                    .describe('Relevant settings for scoring fields')
                    .optional(),
                type: zod_1.z
                    .object({
                    data_type: zod_1.z
                        .number()
                        .describe('Set the data type of the formula field Options:1(Text),2(Number),3(SingleSelect),4(MultiSelect),5(DateTime),7(Checkbox),11(User),13(PhoneNumber),15(Url),17(Attachment),18(Link),20(Formula),21(DuplexLink),22(Location),23(GroupChat),1001(CreatedTime),1002(ModifiedTime),1003(CreatedUser),1004(ModifiedUser),1005(AutoSerial)'),
                    ui_property: zod_1.z
                        .object({
                        currency_code: zod_1.z.string().describe('Currency').optional(),
                        formatter: zod_1.z.string().describe('Display format of numbers and formula fields').optional(),
                        range_customize: zod_1.z
                            .boolean()
                            .describe('Whether fields such as progress support custom ranges')
                            .optional(),
                        min: zod_1.z.number().describe('Minimum data range for fields such as progress, score, etc').optional(),
                        max: zod_1.z.number().describe('Maximum data range for fields such as progress, score, etc').optional(),
                        date_formatter: zod_1.z
                            .string()
                            .describe('The display format of the date, creation time, and last updated time fields')
                            .optional(),
                        rating: zod_1.z
                            .object({ symbol: zod_1.z.string().describe('Symbol display for rating fields').optional() })
                            .describe('Relevant settings for scoring fields')
                            .optional(),
                    })
                        .describe('Field Property, ref: [Field edit development guide]')
                        .optional(),
                    ui_type: zod_1.z
                        .enum(['Number', 'Progress', 'Currency', 'Rating', 'DateTime'])
                        .describe('The type of display of the formula field on the interface, such as the progress field, which is a display form of numbers Options:Number(Number),Progress(Progress),Currency(Currency),Rating(Rating),DateTime(DateTime)')
                        .optional(),
                })
                    .describe('Set the type of the formula field')
                    .optional(),
            })
                .describe('Field Property, ref: [Field edit development guide]')
                .optional(),
            description: zod_1.z
                .object({
                disable_sync: zod_1.z
                    .boolean()
                    .describe('Whether to disable synchronization, if true, it means that synchronization of the description content to the problem description of the form is prohibited (only valid when fields are added or modified)')
                    .optional(),
                text: zod_1.z.string().describe('Field description content').optional(),
            })
                .describe('Field description')
                .optional(),
            ui_type: zod_1.z
                .enum([
                'Text',
                'Email',
                'Barcode',
                'Number',
                'Progress',
                'Currency',
                'Rating',
                'SingleSelect',
                'MultiSelect',
                'DateTime',
                'Checkbox',
                'User',
                'GroupChat',
                'Phone',
                'Url',
                'Attachment',
                'SingleLink',
                'Formula',
                'DuplexLink',
                'Location',
                'CreatedTime',
                'ModifiedTime',
                'CreatedUser',
                'ModifiedUser',
                'AutoNumber',
            ])
                .describe('The type of display of the field on the interface, such as the progress field, which is a display form of numbers Options:Text(multiline text),Email(Email),Barcode(barcode),Number(number),Progress(progress),Currency(currency),Rating(score),SingleSelect(radio),MultiSelect(multiple choice),DateTime(date),Checkbox(checkbox),User(Personnel),GroupChat(group),Phone(Phone number),Url(Hyperlink),Attachment(Attachment),SingleLink(one-way association),Formula(formula),DuplexLink(bidirectional association),Location(Geographical location),CreatedTime(Creation time),ModifiedTime(Last update time),CreatedUser(founder),ModifiedUser(Modifier),AutoNumber(Automatic numbering)')
                .optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('The format is a standard uuidv4, the unique identifier of the operation, used for idempotent update operations. This value is null to indicate that a new request will be initiated, and this value is non-null to indicate idempotent update operations')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFieldDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTableField.delete',
    sdkName: 'bitable.v1.appTableField.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-Field-Delete field-Delete a field',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            field_id: zod_1.z.string().describe('Base unique field identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFieldList = {
    project: 'bitable',
    name: 'bitable.v1.appTableField.list',
    sdkName: 'bitable.v1.appTableField.list',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Field-List fields-Get all fields according to app_token and table_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
            text_field_as_array: zod_1.z
                .boolean()
                .describe('Control the return format of field description (multi-line text format) data, true means return in array rich text form')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('paging size').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFieldUpdate = {
    project: 'bitable',
    name: 'bitable.v1.appTableField.update',
    sdkName: 'bitable.v1.appTableField.update',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Base-Field-Update field-Update a field',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            field_name: zod_1.z
                .string()
                .describe('Field NamePlease note: 1. The first and last spaces in the name will be removed'),
            type: zod_1.z
                .number()
                .describe('Field Type Options:1(Text Multiline),2(Number),3(SingleSelect Single option),4(MultiSelect Multiple options),5(DateTime Date),7(Checkbox),11(User Person),13(PhoneNumber),15(Url Link),17(Attachment),18(Link One-way link),20(Formula),21(DuplexLink Two-way link),22(Location),23(GroupChat group),1001(CreatedTime Date created),1002(ModifiedTime Last modified date),1003(CreatedUser Created by),1004(ModifiedUser Modified by),1005(AutoSerial)'),
            property: zod_1.z
                .object({
                options: zod_1.z
                    .array(zod_1.z.object({
                    name: zod_1.z.string().describe('Option name').optional(),
                    id: zod_1.z.string().describe('Option ID, not allowed to specify ID at creation time').optional(),
                    color: zod_1.z.number().describe('Option color').optional(),
                }))
                    .describe('Option information for radio and multi-select fields')
                    .optional(),
                formatter: zod_1.z.string().describe('Display format of numbers and formula fields').optional(),
                date_formatter: zod_1.z
                    .string()
                    .describe('The display format of the date, creation time, and last updated time fields')
                    .optional(),
                auto_fill: zod_1.z
                    .boolean()
                    .describe('New records in the date field are automatically filled in Creation time')
                    .optional(),
                multiple: zod_1.z
                    .boolean()
                    .describe('Multiple members are allowed to be added in the personnel field, and multiple records are allowed in one-way association and two-way association')
                    .optional(),
                table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
                table_name: zod_1.z
                    .string()
                    .describe('The name of the associated data table in the one-way association, two-way association field')
                    .optional(),
                back_field_name: zod_1.z
                    .string()
                    .describe('The name of the corresponding bidirectional association field in the associated data table in the bidirectional association field')
                    .optional(),
                auto_serial: zod_1.z
                    .object({
                    type: zod_1.z
                        .enum(['custom', 'auto_increment_number'])
                        .describe('Automatic numbering type Options:custom(Custom number),auto_increment_number(AutoIncrementNumber Autoincrement number)'),
                    options: zod_1.z
                        .array(zod_1.z.object({
                        type: zod_1.z
                            .enum(['system_number', 'fixed_text', 'created_time'])
                            .describe('Optional rule item types for auto-numbering Options:system_number(SystemNumber Incremental digits, value range 1-9),fixed_text(FixedText Fixed characters, maximum length: 20),created_time(CreatedTime Creation time, supports formats "yyyyMMdd", "yyyyMM", "yyyy", "MMdd", "MM", "dd")'),
                        value: zod_1.z.string().describe('Values corresponding to auto-numbered optional rule item types'),
                    }))
                        .describe('List of auto-numbering rules')
                        .optional(),
                })
                    .describe('Automatic numbering type')
                    .optional(),
                location: zod_1.z
                    .object({
                    input_type: zod_1.z
                        .enum(['only_mobile', 'not_limit'])
                        .describe('Geolocation input restrictions Options:only_mobile(OnlyMobile Only allow uploads on mobile ends),not_limit(NotLimit Unlimited)'),
                })
                    .describe('Geolocation input method')
                    .optional(),
                formula_expression: zod_1.z.string().describe('Expression of formula field').optional(),
                allowed_edit_modes: zod_1.z
                    .object({
                    manual: zod_1.z.boolean().describe('Whether to allow manual entry').optional(),
                    scan: zod_1.z.boolean().describe('Whether to allow mobile end entry').optional(),
                })
                    .describe('Editing modes supported by the field')
                    .optional(),
                min: zod_1.z.number().describe('Minimum data range for fields such as progress, score, etc').optional(),
                max: zod_1.z.number().describe('Maximum data range for fields such as progress, score, etc').optional(),
                range_customize: zod_1.z.boolean().describe('Whether fields such as progress support custom ranges').optional(),
                currency_code: zod_1.z.string().describe('Currency Currency').optional(),
                rating: zod_1.z
                    .object({ symbol: zod_1.z.string().describe('Symbol display for rating fields').optional() })
                    .describe('Relevant settings for scoring fields')
                    .optional(),
                type: zod_1.z
                    .object({
                    data_type: zod_1.z
                        .number()
                        .describe('Set the data type of the formula field Options:1(Text),2(Number),3(SingleSelect),4(MultiSelect),5(DateTime),7(Checkbox),11(User),13(PhoneNumber),15(Url),17(Attachment),18(Link),20(Formula),21(DuplexLink),22(Location),23(GroupChat),1001(CreatedTime),1002(ModifiedTime),1003(CreatedUser),1004(ModifiedUser),1005(AutoSerial)'),
                    ui_property: zod_1.z
                        .object({
                        currency_code: zod_1.z.string().describe('Currency').optional(),
                        formatter: zod_1.z.string().describe('Display format of numbers and formula fields').optional(),
                        range_customize: zod_1.z
                            .boolean()
                            .describe('Whether fields such as progress support custom ranges')
                            .optional(),
                        min: zod_1.z.number().describe('Minimum data range for fields such as progress, score, etc').optional(),
                        max: zod_1.z.number().describe('Maximum data range for fields such as progress, score, etc').optional(),
                        date_formatter: zod_1.z
                            .string()
                            .describe('The display format of the date, creation time, and last updated time fields')
                            .optional(),
                        rating: zod_1.z
                            .object({ symbol: zod_1.z.string().describe('Symbol display for rating fields').optional() })
                            .describe('Relevant settings for scoring fields')
                            .optional(),
                    })
                        .describe('Field Property, ref: [Field edit development guide]')
                        .optional(),
                    ui_type: zod_1.z
                        .enum(['Number', 'Progress', 'Currency', 'Rating', 'DateTime'])
                        .describe('The type of display of the formula field on the interface, such as the progress field, which is a display form of numbers Options:Number(Number),Progress(Progress),Currency(Currency),Rating(Rating),DateTime(DateTime)')
                        .optional(),
                })
                    .describe('Set the type of the formula field')
                    .optional(),
            })
                .describe('Field Property, ref: [Field edit development guide]')
                .optional(),
            description: zod_1.z
                .object({
                disable_sync: zod_1.z
                    .boolean()
                    .describe('Whether to disable synchronization, if true, it means that synchronization of the description content to the problem description of the form is prohibited (only valid when fields are added or modified)')
                    .optional(),
                text: zod_1.z.string().describe('Field description content').optional(),
            })
                .describe('Field description')
                .optional(),
            ui_type: zod_1.z
                .enum([
                'Text',
                'Email',
                'Barcode',
                'Number',
                'Progress',
                'Currency',
                'Rating',
                'SingleSelect',
                'MultiSelect',
                'DateTime',
                'Checkbox',
                'User',
                'GroupChat',
                'Phone',
                'Url',
                'Attachment',
                'SingleLink',
                'Formula',
                'DuplexLink',
                'Location',
                'CreatedTime',
                'ModifiedTime',
                'CreatedUser',
                'ModifiedUser',
                'AutoNumber',
            ])
                .describe('The type of display of the field on the interface, such as the progress field, which is a display form of numbers Options:Text(multiline text),Email(Email),Barcode(barcode),Number(number),Progress(progress),Currency(currency),Rating(score),SingleSelect(radio),MultiSelect(multiple choice),DateTime(date),Checkbox(checkbox),User(Personnel),GroupChat(group),Phone(Phone number),Url(Hyperlinke),Attachment(Annex),SingleLink(one-way association),Formula(formula),DuplexLink(bidirectional association),Location(Geographical location),CreatedTime(Creation time),ModifiedTime(Last update time),CreatedUser(founder),ModifiedUser(Modifier),AutoNumber(Automatic numbering)')
                .optional(),
        }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            field_id: zod_1.z.string().describe('Base unique field identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFormFieldList = {
    project: 'bitable',
    name: 'bitable.v1.appTableFormField.list',
    sdkName: 'bitable.v1.appTableFormField.list',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Form-List form fields-Give all form fields according to app_token, table_id and form_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            form_id: zod_1.z.string().describe('form id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFormFieldPatch = {
    project: 'bitable',
    name: 'bitable.v1.appTableFormField.patch',
    sdkName: 'bitable.v1.appTableFormField.patch',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields/:field_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Base-Form-Patch form fields-Update a form field',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            pre_field_id: zod_1.z
                .string()
                .describe('The previous form field ID is used to support adjusting the order of form fields, and the position is determined by the field_id of the previous form field if the pre_field_id is an empty string, it means that it should be ranked first')
                .optional(),
            title: zod_1.z.string().describe('Form field title').optional(),
            description: zod_1.z.string().describe('Form field description').optional(),
            required: zod_1.z.boolean().describe('Required').optional(),
            visible: zod_1.z.boolean().describe('Visible').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            form_id: zod_1.z.string().describe('form id'),
            field_id: zod_1.z.string().describe('Base unique field identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFormGet = {
    project: 'bitable',
    name: 'bitable.v1.appTableForm.get',
    sdkName: 'bitable.v1.appTableForm.get',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Form-List form-Give form according to app_token, table_id and form_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            form_id: zod_1.z.string().describe('form id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableFormPatch = {
    project: 'bitable',
    name: 'bitable.v1.appTableForm.patch',
    sdkName: 'bitable.v1.appTableForm.patch',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Base-Form-Patch form-Update a form',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Form name').optional(),
            description: zod_1.z.string().describe('Form description').optional(),
            shared: zod_1.z.boolean().describe('Whether to enable sharing').optional(),
            shared_limit: zod_1.z
                .enum(['off', 'tenant_editable', 'anyone_editable'])
                .describe('Share scope restrictions Options:off(Only invited people can fill in),tenant_editable(TenantEditable People who get the link within the organization can fill in),anyone_editable(AnyoneEditable People who get the link on the Internet can fill in)')
                .optional(),
            submit_limit_once: zod_1.z.boolean().describe('Fill in the number of times limit once').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            form_id: zod_1.z.string().describe('form id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableList = {
    project: 'bitable',
    name: 'bitable.v1.appTable.list',
    sdkName: 'bitable.v1.appTable.list',
    path: '/open-apis/bitable/v1/apps/:app_token/tables',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Table-List all tables-According to app_token, get all tables under app',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('paging size').optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTablePatch = {
    project: 'bitable',
    name: 'bitable.v1.appTable.patch',
    sdkName: 'bitable.v1.appTable.patch',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Base-Table-Update data table-This interface is used to update the basic information of the data table, including the name of the data table, etc',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z
                .string()
                .describe('The new name for the data table. Please note: 1. The first and last spaces in the name will be removed. 2. If the name is empty or the same as the old name, the interface will still return success, but the name will not be changed')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordBatchCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.batchCreate',
    sdkName: 'bitable.v1.appTableRecord.batchCreate',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Create records-Create records,up to 500 lines at a time',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            records: zod_1.z
                .array(zod_1.z.object({
                fields: zod_1.z.object({}).catchall(zod_1.z.any()).describe('fields'),
                shared_url: zod_1.z.string().describe('shared link').optional(),
                record_url: zod_1.z.string().describe('record link').optional(),
            }))
                .describe('records'),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            client_token: zod_1.z
                .string()
                .describe('The format is a standard uuidv4, the unique identifier of the operation, used for idempotent update operations. This value is null to indicate that a new request will be initiated, and this value is non-null to indicate idempotent update operations')
                .optional(),
            ignore_consistency_check: zod_1.z
                .boolean()
                .describe('Whether to ignore consistency checks for read and write operations. The default value is `false`, meaning the system will ensure that the data read and written is consistent. Optional values:- **true**: Ignore read/write consistency checks to improve performance, but this may cause data on some nodes to be out of sync, resulting in temporary inconsistency.- **false**: Enable read/write consistency checks to ensure data consistency during read and write operations')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordBatchDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.batchDelete',
    sdkName: 'bitable.v1.appTableRecord.batchDelete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_delete',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Delete records-Delete records,up to 500 lines at a time',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ records: zod_1.z.array(zod_1.z.string()).describe('records') }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordBatchGet = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.batchGet',
    sdkName: 'bitable.v1.appTableRecord.batchGet',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_get',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Batch get records-Batch get records by record ids',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            record_ids: zod_1.z.array(zod_1.z.string()).describe('record id list. See [Query records]'),
            user_id_type: zod_1.z.enum(['user_id', 'union_id', 'open_id']).describe('User ID type').optional(),
            with_shared_url: zod_1.z
                .boolean()
                .describe('Controls whether to return the recorded share link, true means return the share link')
                .optional(),
            automatic_fields: zod_1.z
                .boolean()
                .describe('Controls whether to return automatically calculated fields, true means return')
                .optional(),
        }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordBatchUpdate = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.batchUpdate',
    sdkName: 'bitable.v1.appTableRecord.batchUpdate',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Update records-Update records,up to 500 lines at a time',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            records: zod_1.z
                .array(zod_1.z.object({
                fields: zod_1.z.object({}).catchall(zod_1.z.any()).describe('fields'),
                record_id: zod_1.z.string().describe('Base unique record identifier').optional(),
                shared_url: zod_1.z.string().describe('shared link').optional(),
                record_url: zod_1.z.string().describe('record link').optional(),
            }))
                .describe('records'),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            ignore_consistency_check: zod_1.z
                .boolean()
                .describe('Whether to ignore consistency checks for read and write operations. The default value is `false`, meaning the system will ensure that the data read and written is consistent. Optional values:- **true**: Ignore read/write consistency checks to improve performance, but this may cause data on some nodes to be out of sync, resulting in temporary inconsistency.- **false**: Enable read/write consistency checks to ensure data consistency during read and write operations')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.create',
    sdkName: 'bitable.v1.appTableRecord.create',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Create a record-Create a record',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            fields: zod_1.z
                .object({})
                .catchall(zod_1.z.any())
                .describe("To add new records to the data table, you need to first specify the fields in the table (i.e., specify the columns) and then pass the correctly formatted data as a record.**Note**:The supported field types and their descriptions are as follows:- Text: Enter a value in string format- Number: Enter a value in number format- Single choice: Enter an option value; for new option values, a new option will be created- Multiple choices: Enter multiple option values; for new option values, multiple new options will be created if multiple identical new option values are entered- Date: Enter a timestamp in milliseconds- Checkbox: Enter true or false- Barcode- Person: Enter the user's [open_id], [union_id] or [user_id]; the type must match the type specified by user_id_type- Phone number: Enter text content- Hyperlink: Refer to the following example, text is the text value, link is the URL link- Attachment: Enter the attachment token; you need to first call the [upload material] or [fragmented upload material] interface to upload the attachment to this Base- One-way association: Enter the record ID of the associated table- Two-way association: Enter the record ID of the associated table- Location: Enter the latitude and longitude coordinatesFor the data structure of different types of fields, please refer to the [Base record data structure overview]"),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            client_token: zod_1.z
                .string()
                .describe('The format is a standard uuidv4, the unique identifier of the operation, used for idempotent update operations. This value is null to indicate that a new request will be initiated, and this value is non-null to indicate idempotent update operations')
                .optional(),
            ignore_consistency_check: zod_1.z
                .boolean()
                .describe('Whether to ignore consistency checks for read and write operations. The default value is `false`, meaning the system will ensure that the data read and written is consistent. Optional values:- **true**: Ignore read/write consistency checks to improve performance, but this may cause data on some nodes to be out of sync, resulting in temporary inconsistency.- **false**: Enable read/write consistency checks to ensure data consistency during read and write operations')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.delete',
    sdkName: 'bitable.v1.appTableRecord.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-Record-Delete a record-Delete a record',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            record_id: zod_1.z.string().describe('Base unique record identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordGet = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.get',
    sdkName: 'bitable.v1.appTableRecord.get',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Docs-Base-Get records-Get records',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            text_field_as_array: zod_1.z
                .boolean()
                .describe('indicate the structure of value of text field in response')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            display_formula_ref: zod_1.z
                .boolean()
                .describe('Control whether formulas, lookup reference fields return their original values')
                .optional(),
            with_shared_url: zod_1.z.boolean().describe('Controls whether to return a link to the record').optional(),
            automatic_fields: zod_1.z
                .boolean()
                .describe('Controls whether to return automatically calculated information, such as `created_by`/`created_time`/`last_modified_by`/`last_modified_time`')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            record_id: zod_1.z.string().describe('Base unique record identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordList = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.list',
    sdkName: 'bitable.v1.appTableRecord.list',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Docs-Base-List records-list records,Up to 500 lines at a time, paging is supported（Currently, the return of search reference fields are not supported. The search reference field can be converted into a formula field. The search reference is essentially a lookup formula）',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
            filter: zod_1.z.string().describe('filter').optional(),
            sort: zod_1.z.string().describe('sort').optional(),
            field_names: zod_1.z.string().describe('field_names').optional(),
            text_field_as_array: zod_1.z
                .boolean()
                .describe('indicate the structure of value of text field in response')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            display_formula_ref: zod_1.z
                .boolean()
                .describe('Control whether formulas, lookup reference fields return their original values')
                .optional(),
            automatic_fields: zod_1.z
                .boolean()
                .describe('Controls whether to return automatically calculated information, such as `created_by`/`created_time`/`last_modified_by`/`last_modified_time`')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('paging size').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordSearch = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.search',
    sdkName: 'bitable.v1.appTableRecord.search',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Record-Search records-This api is used to query existing records in the table. A maximum of 500 rows of records can be queried at a time, and paging is supported',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
            field_names: zod_1.z.array(zod_1.z.string()).describe('field_names').optional(),
            sort: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('field_name').optional(),
                desc: zod_1.z.boolean().describe('desc').optional(),
            }))
                .describe('Data validation rules')
                .optional(),
            filter: zod_1.z
                .object({
                conjunction: zod_1.z
                    .enum(['and', 'or'])
                    .describe('Conjunction. This parameter is required and please ignore the "No" in the Required column Options:and(ConjunctionAnd meeting all of the conditions),or(ConjunctionOr meeting any of the conditions)')
                    .optional(),
                conditions: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('field_name'),
                    operator: zod_1.z
                        .enum([
                        'is',
                        'isNot',
                        'contains',
                        'doesNotContain',
                        'isEmpty',
                        'isNotEmpty',
                        'isGreater',
                        'isGreaterEqual',
                        'isLess',
                        'isLessEqual',
                        'like',
                        'in',
                    ])
                        .describe('operator Options:is(OperatorIs is),isNot(OperatorIsNot is not. This value does not support date fields. To learn how to query date fields, refer to [Date Field Entry Guide].),contains(OperatorContains contains. This value does not support date fields.),doesNotContain(OperatorDoesNotContain does not contain. This value does not support date fields.),isEmpty(OperatorIsEmpty is empty),isNotEmpty(OperatorIsNotEmpty is not empty),isGreater(OperatorIsGreater greater than.),isGreaterEqual(OperatorIsGreaterEqual greater than or equal to. This value does not support date fields.),isLess(OperatorIsLess less than),isLessEqual(OperatorIsLessEqual less than or equal to. This value does not support date fields.),like(OperatorLike LIKE operator. Not supported yet),in(OperatorIn IN operator. Not supported yet)'),
                    value: zod_1.z.array(zod_1.z.string()).describe('value[Record filter development guide]').optional(),
                }))
                    .describe('conditions')
                    .optional(),
            })
                .describe('Refer to the [Record Filter Parameter Filling Guide] to learn how to fill in the filter')
                .optional(),
            automatic_fields: zod_1.z
                .boolean()
                .describe('Whether to automatically calculate and return the four types of fields: creation time (`created_time`), modification time (`last_modified_time`), creator (`created_by`), and modifier (`last_modified_by`). The default is false, indicating they will not be returned')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('Page size. The maximum value is 500').optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableRecordUpdate = {
    project: 'bitable',
    name: 'bitable.v1.appTableRecord.update',
    sdkName: 'bitable.v1.appTableRecord.update',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Base-Record-Update a record-Update a record',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ fields: zod_1.z.object({}).catchall(zod_1.z.any()).describe('fields') }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
            ignore_consistency_check: zod_1.z
                .boolean()
                .describe('Whether to ignore consistency checks for read and write operations. The default value is `false`, meaning the system will ensure that the data read and written is consistent. Optional values:- **true**: Ignore read/write consistency checks to improve performance, but this may cause data on some nodes to be out of sync, resulting in temporary inconsistency.- **false**: Enable read/write consistency checks to ensure data consistency during read and write operations')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier'),
            table_id: zod_1.z.string().describe('Base unique table identifier'),
            record_id: zod_1.z.string().describe('Base unique record identifier'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableViewCreate = {
    project: 'bitable',
    name: 'bitable.v1.appTableView.create',
    sdkName: 'bitable.v1.appTableView.create',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-View-Add View-Add a view to the data table',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            view_name: zod_1.z.string().describe('View name'),
            view_type: zod_1.z
                .enum(['grid', 'kanban', 'gallery', 'gantt', 'form'])
                .describe('View type Options:grid(Grid view),kanban(Kanban view),gallery(Gallery view),gantt(Gantt view),form(Form view)')
                .optional(),
        }),
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableViewDelete = {
    project: 'bitable',
    name: 'bitable.v1.appTableView.delete',
    sdkName: 'bitable.v1.appTableView.delete',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Base-View-Delete View-Delete views from data tables',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableViewGet = {
    project: 'bitable',
    name: 'bitable.v1.appTableView.get',
    sdkName: 'bitable.v1.appTableView.get',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-View-Get View-This interface gets existing views based on view_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableViewList = {
    project: 'bitable',
    name: 'bitable.v1.appTableView.list',
    sdkName: 'bitable.v1.appTableView.list',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-View-List Views-Get all views of the data table based on app_token and table_id',
    accessTokens: ['tenant', 'user'],
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
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppTableViewPatch = {
    project: 'bitable',
    name: 'bitable.v1.appTableView.patch',
    sdkName: 'bitable.v1.appTableView.patch',
    path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Base-View-Update View-This interface is used to incrementally modify view information',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            view_name: zod_1.z.string().describe('View name').optional(),
            property: zod_1.z
                .object({
                filter_info: zod_1.z
                    .object({
                    conjunction: zod_1.z
                        .enum(['and', 'or'])
                        .describe('Relationship of Multiple Filter Criteria Options:and(And),or(Or)'),
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_id: zod_1.z.string().describe('Base unique field identifier'),
                        operator: zod_1.z
                            .enum([
                            'is',
                            'isNot',
                            'contains',
                            'doesNotContain',
                            'isEmpty',
                            'isNotEmpty',
                            'isGreater',
                            'isGreaterEqual',
                            'isLess',
                            'isLessEqual',
                        ])
                            .describe('Type of filter operation Options:is(Equal to),isNot(Does not equal),contains(Include),doesNotContain(Not included),isEmpty(Is empty),isNotEmpty(Not empty),isGreater(Greater than),isGreaterEqual(Greater than or equal to),isLess(Less than),isLessEqual(Less than or equal to)'),
                        value: zod_1.z.string().describe('Filter value').optional(),
                    }))
                        .describe('Filter Criteria'),
                })
                    .describe('Filter conditions')
                    .optional(),
                hidden_fields: zod_1.z.array(zod_1.z.string()).describe('List of hidden field IDs').optional(),
                hierarchy_config: zod_1.z
                    .object({ field_id: zod_1.z.string().describe('Base unique field identifier').optional() })
                    .describe('Table view hierarchy settings')
                    .optional(),
            })
                .describe('View properties')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            table_id: zod_1.z.string().describe('Base unique table identifier').optional(),
            view_id: zod_1.z.string().describe('Base unique view identifier').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppUpdate = {
    project: 'bitable',
    name: 'bitable.v1.app.update',
    sdkName: 'bitable.v1.app.update',
    path: '/open-apis/bitable/v1/apps/:app_token',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Base-App-Update App Name-Update app information according to app_token',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z.string().describe('Base App Name').optional(),
            is_advanced: zod_1.z.boolean().describe('Is advanced').optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppWorkflowList = {
    project: 'bitable',
    name: 'bitable.v1.appWorkflow.list',
    sdkName: 'bitable.v1.appWorkflow.list',
    path: '/open-apis/bitable/v1/apps/:app_token/workflows',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Automation-List automations-This interface is used to list the automations of base',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            page_size: zod_1.z.number().describe('paging size').optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique App identifier').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1AppWorkflowUpdate = {
    project: 'bitable',
    name: 'bitable.v1.appWorkflow.update',
    sdkName: 'bitable.v1.appWorkflow.update',
    path: '/open-apis/bitable/v1/apps/:app_token/workflows/:workflow_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Base-Automation-update workflow-This interface can be used to update Workflow status',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ status: zod_1.z.string().describe('automated state') }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique App identifier').optional(),
            workflow_id: zod_1.z.string().describe('workflow_id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.bitableV1Tools = [
    exports.bitableV1AppCopy,
    exports.bitableV1AppCreate,
    exports.bitableV1AppDashboardCopy,
    exports.bitableV1AppDashboardList,
    exports.bitableV1AppGet,
    exports.bitableV1AppRoleCreate,
    exports.bitableV1AppRoleDelete,
    exports.bitableV1AppRoleList,
    exports.bitableV1AppRoleMemberBatchCreate,
    exports.bitableV1AppRoleMemberBatchDelete,
    exports.bitableV1AppRoleMemberCreate,
    exports.bitableV1AppRoleMemberDelete,
    exports.bitableV1AppRoleMemberList,
    exports.bitableV1AppRoleUpdate,
    exports.bitableV1AppTableBatchCreate,
    exports.bitableV1AppTableBatchDelete,
    exports.bitableV1AppTableCreate,
    exports.bitableV1AppTableDelete,
    exports.bitableV1AppTableFieldCreate,
    exports.bitableV1AppTableFieldDelete,
    exports.bitableV1AppTableFieldList,
    exports.bitableV1AppTableFieldUpdate,
    exports.bitableV1AppTableFormFieldList,
    exports.bitableV1AppTableFormFieldPatch,
    exports.bitableV1AppTableFormGet,
    exports.bitableV1AppTableFormPatch,
    exports.bitableV1AppTableList,
    exports.bitableV1AppTablePatch,
    exports.bitableV1AppTableRecordBatchCreate,
    exports.bitableV1AppTableRecordBatchDelete,
    exports.bitableV1AppTableRecordBatchGet,
    exports.bitableV1AppTableRecordBatchUpdate,
    exports.bitableV1AppTableRecordCreate,
    exports.bitableV1AppTableRecordDelete,
    exports.bitableV1AppTableRecordGet,
    exports.bitableV1AppTableRecordList,
    exports.bitableV1AppTableRecordSearch,
    exports.bitableV1AppTableRecordUpdate,
    exports.bitableV1AppTableViewCreate,
    exports.bitableV1AppTableViewDelete,
    exports.bitableV1AppTableViewGet,
    exports.bitableV1AppTableViewList,
    exports.bitableV1AppTableViewPatch,
    exports.bitableV1AppUpdate,
    exports.bitableV1AppWorkflowList,
    exports.bitableV1AppWorkflowUpdate,
];
