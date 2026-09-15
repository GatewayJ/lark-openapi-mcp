"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acsV1Tools = exports.acsV1VisitorDelete = exports.acsV1VisitorCreate = exports.acsV1UserPatch = exports.acsV1UserList = exports.acsV1UserGet = exports.acsV1RuleExternalGet = exports.acsV1RuleExternalDeviceBind = exports.acsV1RuleExternalDelete = exports.acsV1RuleExternalCreate = exports.acsV1DeviceList = exports.acsV1AccessRecordList = void 0;
const zod_1 = require("zod");
exports.acsV1AccessRecordList = {
    project: 'acs',
    name: 'acs.v1.accessRecord.list',
    sdkName: 'acs.v1.accessRecord.list',
    path: '/open-apis/acs/v1/access_records',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Smart Access Control-Access Record-Get access record list',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().optional(),
            page_token: zod_1.z.string().optional(),
            from: zod_1.z.number().describe('Record start time, in seconds'),
            to: zod_1.z.number().describe('Record the end time, in seconds,Limit: to-from < 30 days'),
            device_id: zod_1.z.string().describe('Device ID, Used to access recognition records of a specified device').optional(),
            user_id_type: zod_1.z.enum(['user_id', 'union_id', 'open_id']).describe('User ID type').optional(),
        }),
    },
};
exports.acsV1DeviceList = {
    project: 'acs',
    name: 'acs.v1.device.list',
    sdkName: 'acs.v1.device.list',
    path: '/open-apis/acs/v1/devices',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Smart Access Control-Device-Get device list',
    accessTokens: ['tenant'],
    schema: {},
};
exports.acsV1RuleExternalCreate = {
    project: 'acs',
    name: 'acs.v1.ruleExternal.create',
    sdkName: 'acs.v1.ruleExternal.create',
    path: '/open-apis/acs/v1/rule_external',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Smart Access Control-Rule-Create or update rule-rule create or update rule',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            rule: zod_1.z
                .object({
                id: zod_1.z.string().describe('rule id').optional(),
                name: zod_1.z.string().describe('rule name').optional(),
                devices: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('device id').optional(),
                    name: zod_1.z.string().describe('device name').optional(),
                }))
                    .describe('devices included')
                    .optional(),
                user_count: zod_1.z.string().describe('employees num').optional(),
                users: zod_1.z
                    .array(zod_1.z.object({
                    user_type: zod_1.z
                        .number()
                        .describe('user type Options:1(user employee),2(department),10(tenant all staff),11(guest visitor)'),
                    user_id: zod_1.z.string().describe('user id').optional(),
                    user_name: zod_1.z.string().describe('user name').optional(),
                    phone_num: zod_1.z.string().describe('phone num').optional(),
                    department_id: zod_1.z.string().describe('department id').optional(),
                }))
                    .describe('employees list')
                    .optional(),
                visitor_count: zod_1.z.string().describe('visitors num').optional(),
                visitors: zod_1.z
                    .array(zod_1.z.object({
                    user_type: zod_1.z
                        .number()
                        .describe('user type Options:1(user employee),2(department),10(tenant all staff),11(guest visitor)'),
                    user_id: zod_1.z.string().describe('visitor id').optional(),
                    user_name: zod_1.z.string().describe('visitor name').optional(),
                    phone_num: zod_1.z.string().describe('phone num').optional(),
                    department_id: zod_1.z.string().describe('department id').optional(),
                }))
                    .describe('visitors list')
                    .optional(),
                remind_face: zod_1.z.boolean().describe('is remind face entry').optional(),
                opening_time: zod_1.z
                    .object({
                    valid_day: zod_1.z
                        .object({ start_day: zod_1.z.number().describe('start date'), end_day: zod_1.z.number().describe('end date') })
                        .describe('valid date')
                        .optional(),
                    weekdays: zod_1.z.array(zod_1.z.number()).describe('valid week').optional(),
                    day_times: zod_1.z
                        .array(zod_1.z.object({
                        start_hhmm: zod_1.z.number().describe('start time'),
                        end_hhmm: zod_1.z.number().describe('end time'),
                    }))
                        .describe('valid time')
                        .optional(),
                })
                    .describe('opening time period')
                    .optional(),
                is_temp: zod_1.z.boolean().describe('is temporary rule').optional(),
            })
                .describe('rule info'),
        }),
        params: zod_1.z
            .object({
            rule_id: zod_1.z.string().describe('rule id,create if null,update if no null').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1RuleExternalDelete = {
    project: 'acs',
    name: 'acs.v1.ruleExternal.delete',
    sdkName: 'acs.v1.ruleExternal.delete',
    path: '/open-apis/acs/v1/rule_external',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Smart Access Control-Rule-Delete rule-rule delete',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z.object({ rule_id: zod_1.z.string() }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1RuleExternalDeviceBind = {
    project: 'acs',
    name: 'acs.v1.ruleExternal.deviceBind',
    sdkName: 'acs.v1.ruleExternal.deviceBind',
    path: '/open-apis/acs/v1/rule_external/device_bind',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Smart Access Control-Rule-Device bind rule-device bind rules',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            device_id: zod_1.z.string().describe('device id'),
            rule_ids: zod_1.z.array(zod_1.z.string()).describe('rule list'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1RuleExternalGet = {
    project: 'acs',
    name: 'acs.v1.ruleExternal.get',
    sdkName: 'acs.v1.ruleExternal.get',
    path: '/open-apis/acs/v1/rule_external',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Smart Access Control-Rule-Get rule info-rule info get',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({
            device_id: zod_1.z.string().optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1UserGet = {
    project: 'acs',
    name: 'acs.v1.user.get',
    sdkName: 'acs.v1.user.get',
    path: '/open-apis/acs/v1/users/:user_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Smart Access Control-User Management-Get individual user information',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['user_id', 'union_id', 'open_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ user_id: zod_1.z.string().describe('User ID') }),
    },
};
exports.acsV1UserList = {
    project: 'acs',
    name: 'acs.v1.user.list',
    sdkName: 'acs.v1.user.list',
    path: '/open-apis/acs/v1/users',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Smart Access Control-User Management-Get user list',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().optional(),
            page_token: zod_1.z.string().optional(),
            user_id_type: zod_1.z.enum(['user_id', 'union_id', 'open_id']).describe('User ID type').optional(),
        })
            .optional(),
    },
};
exports.acsV1UserPatch = {
    project: 'acs',
    name: 'acs.v1.user.patch',
    sdkName: 'acs.v1.user.patch',
    path: '/open-apis/acs/v1/users/:user_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Smart Access Control-User Management-Modify parts of user information',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ feature: zod_1.z.object({ card: zod_1.z.number().optional() }).optional() }).optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['user_id', 'union_id', 'open_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ user_id: zod_1.z.string().describe('User ID') }),
    },
};
exports.acsV1VisitorCreate = {
    project: 'acs',
    name: 'acs.v1.visitor.create',
    sdkName: 'acs.v1.visitor.create',
    path: '/open-apis/acs/v1/visitors',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Smart Access Control-Visitor-Add visitor-visitor add',
    accessTokens: ['user'],
    schema: {
        data: zod_1.z.object({
            user: zod_1.z
                .object({
                user_type: zod_1.z
                    .number()
                    .describe('user type Options:1(user employee),2(department),10(tenant all staff),11(guest visitor)'),
                user_id: zod_1.z.string().describe('visitor id').optional(),
                user_name: zod_1.z.string().describe('visitor name').optional(),
                phone_num: zod_1.z.string().describe('phone num').optional(),
                department_id: zod_1.z.string().describe('department id').optional(),
            })
                .describe('visitor info'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1VisitorDelete = {
    project: 'acs',
    name: 'acs.v1.visitor.delete',
    sdkName: 'acs.v1.visitor.delete',
    path: '/open-apis/acs/v1/visitors/:visitor_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Smart Access Control-Visitor-Delete visitor-visitor delete',
    accessTokens: ['user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ visitor_id: zod_1.z.string().describe('visitor id') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.acsV1Tools = [
    exports.acsV1AccessRecordList,
    exports.acsV1DeviceList,
    exports.acsV1RuleExternalCreate,
    exports.acsV1RuleExternalDelete,
    exports.acsV1RuleExternalDeviceBind,
    exports.acsV1RuleExternalGet,
    exports.acsV1UserGet,
    exports.acsV1UserList,
    exports.acsV1UserPatch,
    exports.acsV1VisitorCreate,
    exports.acsV1VisitorDelete,
];
