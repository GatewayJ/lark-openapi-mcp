"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseV2Tools = exports.baseV2AppRoleUpdate = exports.baseV2AppRoleList = exports.baseV2AppRoleCreate = void 0;
const zod_1 = require("zod");
exports.baseV2AppRoleCreate = {
    project: 'base',
    name: 'base.v2.appRole.create',
    sdkName: 'base.v2.appRole.create',
    path: '/open-apis/base/v2/apps/:app_token/roles',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Role-Create role-Create a role',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            role_name: zod_1.z.string().describe('Role name'),
            table_roles: zod_1.z
                .array(zod_1.z.object({
                table_perm: zod_1.z
                    .number()
                    .describe('Table perm Options:0(NoPerm No access),1(Read View only),2(Edit Can edit),4(Admin Can manage)'),
                table_name: zod_1.z
                    .string()
                    .describe('Table name. (This item and the table_id below must have at least one filled in)')
                    .optional(),
                table_id: zod_1.z
                    .string()
                    .describe('Table id. (This item and the table_name above must have at least one filled in)')
                    .optional(),
                rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('conditions value').optional(),
                    }))
                        .describe('Coditions')
                        .optional(),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                    other_perm: zod_1.z
                        .number()
                        .describe('other_permOther record permissions are only valid when table_perm is 2. When other_perm is equal to 1, all records that do not match rec_rule can be read. When other_perm is equal to 0, the range of records that can be read is specified by other_rec_rule. At this time, even if rec_rule and other_rec_rule are not matched, the records will be read statically. Options:0(NoPerm no access),1(Read)')
                        .optional(),
                })
                    .describe('Record filter rule')
                    .optional(),
                other_rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('conditions value').optional(),
                    }))
                        .describe('conditions')
                        .optional(),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                })
                    .describe('other_rec_ruleRecord filtering condition, which is meaningful when table_perm is 2 and rec_rule.other_perm is 0. For records that do not hit rec_rule, other_rec_rule is used to filter out the range of readable records.**Note**: At this time, records that do not hit either rec_rule or other_rec_rule are unreadable')
                    .optional(),
                field_perm: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('Permission of fields, only valid when `table_perm` is 2. The type is map, key is field name, value is permission of field.**Optional values are**:- `1`: View only- `2`: Can add records- `3`: Can edit records')
                    .optional(),
                allow_add_record: zod_1.z
                    .boolean()
                    .describe('Added record permission, only meaningful when the table_perm is 2, used to set whether the record can be added')
                    .optional(),
                allow_delete_record: zod_1.z
                    .boolean()
                    .describe('Delete record permission, meaningful only when the table_perm is 2, used to set whether the record can be deleted')
                    .optional(),
                view_perm: zod_1.z.number().describe('View permission Options:1(Read Can read),2(Edit Can edit)').optional(),
                view_rules: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('A readable view collection. This is only meaningful when view_perm is 1. If it is not set, all views are readable. If it is set, it means that only views in the collection are readable, and views outside the collection have no permission.The parameter type is a map, where the key is the view id and the value is the permission corresponding to the view. The value enumeration values ​​are:- `0`: No access- `1`: Read only')
                    .optional(),
                field_action_rules: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('Field point permission configuration, optional points are:`select_option_edit`: Option configuration point, configure whether to add, delete, or modify single-select and multiple-select option values`attachment_export`: Attachment operation permission point, configure whether to export attachmentsThis parameter type is a two-layer map structure, where the key is the field point permission and the value is the field permission set. The field permission set is also a map structure, where the key is the field name and the value is the field point permission:- `0`: No access- `1`: Can access')
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
            base_rule: zod_1.z
                .object({})
                .catchall(zod_1.z.any())
                .describe('base role`base_complex_edit`: Set whether you can create copies, download, and print multidimensional tables`copy`: Set whether you can copy the contents of multidimensional tablesThe parameter type is map, where key is the permission point name and value is the permission switch. The value enumeration values ​​are:- `0`: No access- `1`: Can access')
                .optional(),
        }),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique device identifier [app_token description]') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baseV2AppRoleList = {
    project: 'base',
    name: 'base.v2.appRole.list',
    sdkName: 'base.v2.appRole.list',
    path: '/open-apis/base/v2/apps/:app_token/roles',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Role-List roles-Get all roles according to app_token',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('page_size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ app_token: zod_1.z.string().describe('Base unique device identifier [app_token description]') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baseV2AppRoleUpdate = {
    project: 'base',
    name: 'base.v2.appRole.update',
    sdkName: 'base.v2.appRole.update',
    path: '/open-apis/base/v2/apps/:app_token/roles/:role_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Base-Advanced Permission-Role-Update role-Update a role',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            role_name: zod_1.z.string().describe('Role name'),
            table_roles: zod_1.z
                .array(zod_1.z.object({
                table_perm: zod_1.z
                    .number()
                    .describe('Table perm Options:0(NoPerm No access),1(Read View only),2(Edit Can edit),4(Admin Can manage)'),
                table_name: zod_1.z.string().describe('Table name').optional(),
                table_id: zod_1.z.string().describe('Table id').optional(),
                rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('conditions value').optional(),
                    }))
                        .describe('Coditions')
                        .optional(),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                    other_perm: zod_1.z
                        .number()
                        .describe('other_permOther record permissions are only valid when table_perm is 2. When other_perm is equal to 1, all records that do not match rec_rule can be read. When other_perm is equal to 0, the range of records that can be read is specified by other_rec_rule. At this time, even if rec_rule and other_rec_rule are not matched, the records will be read statically. Options:0(NoPerm no access),1(Read)')
                        .optional(),
                })
                    .describe('Record filter rule')
                    .optional(),
                other_rec_rule: zod_1.z
                    .object({
                    conditions: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('Field name'),
                        operator: zod_1.z
                            .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                            .describe('Operator Options:is(Is),isNot(Is not),contains(Contains),doesNotContain(Does not contain),isEmpty(Is empty),isNotEmpty(Is not empty)')
                            .optional(),
                        value: zod_1.z.array(zod_1.z.string()).describe('conditions value').optional(),
                    }))
                        .describe('conditions')
                        .optional(),
                    conjunction: zod_1.z.enum(['and', 'or']).describe('Conjunction Options:and(And),or(Or)').optional(),
                })
                    .describe('other_rec_ruleRecord filtering condition, which is meaningful when table_perm is 2 and rec_rule.other_perm is 0. For records that do not hit rec_rule, other_rec_rule is used to filter out the range of readable records.**Note**: At this time, records that do not hit either rec_rule or other_rec_rule are unreadable')
                    .optional(),
                field_perm: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('Permission of fields, only valid when `table_perm` is 2. The type is map, key is field name, value is permission of field.**Optional values are**:- `1`: View only- `2`: Can add records- `3`: Can edit records')
                    .optional(),
                allow_add_record: zod_1.z
                    .boolean()
                    .describe('Added record permission, only meaningful when the table_perm is 2, used to set whether the record can be added')
                    .optional(),
                allow_delete_record: zod_1.z
                    .boolean()
                    .describe('Delete record permission, meaningful only when the table_perm is 2, used to set whether the record can be deleted')
                    .optional(),
                view_perm: zod_1.z.number().describe('View permission Options:1(Read Can read),2(Edit Can edit)').optional(),
                view_rules: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('A readable view collection. This is only meaningful when view_perm is 1. If it is not set, all views are readable. If it is set, it means that only views in the collection are readable, and views outside the collection have no permission.The parameter type is a map, where the key is the view id and the value is the permission corresponding to the view. The value enumeration values ​​are:- `0`: No access- `1`: Read only')
                    .optional(),
                field_action_rules: zod_1.z
                    .object({})
                    .catchall(zod_1.z.any())
                    .describe('Field point permission configuration, optional points are:`select_option_edit`: Option configuration point, configure whether to add, delete, or modify single-select and multiple-select option values`attachment_export`: Attachment operation permission point, configure whether to export attachmentsThis parameter type is a two-layer map structure, where the key is the field point permission and the value is the field permission set. The field permission set is also a map structure, where the key is the field name and the value is the field point permission:- `0`: No access- `1`: Can access')
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
            base_rule: zod_1.z
                .object({})
                .catchall(zod_1.z.any())
                .describe('base role`base_complex_edit`: Set whether you can create copies, download, and print multidimensional tables`copy`: Set whether you can copy the contents of multidimensional tablesThe parameter type is map, where key is the permission point name and value is the permission switch. The value enumeration values ​​are:- `0`: No access- `1`: Can access')
                .optional(),
        }),
        path: zod_1.z.object({
            app_token: zod_1.z.string().describe('Base unique device identifier [app_token description]'),
            role_id: zod_1.z.string().describe('Role id'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baseV2Tools = [exports.baseV2AppRoleCreate, exports.baseV2AppRoleList, exports.baseV2AppRoleUpdate];
