"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalSettingsV1Tools = exports.personalSettingsV1SystemStatusPatch = exports.personalSettingsV1SystemStatusList = exports.personalSettingsV1SystemStatusDelete = exports.personalSettingsV1SystemStatusCreate = exports.personalSettingsV1SystemStatusBatchOpen = exports.personalSettingsV1SystemStatusBatchClose = void 0;
const zod_1 = require("zod");
exports.personalSettingsV1SystemStatusBatchClose = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.batchClose',
    sdkName: 'personal_settings.v1.systemStatus.batchClose',
    path: '/open-apis/personal_settings/v1/system_statuses/:system_status_id/batch_close',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Personal Settings-System status-Batch close system status-Batch close user system status available',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            user_list: zod_1.z
                .array(zod_1.z.string())
                .describe('List of user IDs, the incoming ID type is determined by the user_id_type, OpenID is recommended, and the way to get it can be found in the document [How to get Open ID]'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({ system_status_id: zod_1.z.string().describe('System Status ID[Get system status ID]').optional() })
            .optional(),
    },
};
exports.personalSettingsV1SystemStatusBatchOpen = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.batchOpen',
    sdkName: 'personal_settings.v1.systemStatus.batchOpen',
    path: '/open-apis/personal_settings/v1/system_statuses/:system_status_id/batch_open',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Personal Settings-System status-Batch open system status-Batch open user system status is available',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            user_list: zod_1.z
                .array(zod_1.z.object({
                user_id: zod_1.z
                    .string()
                    .describe('UserID, the ID type is determined by user_id_type. Open ID is recommended here. For details, refer to [How to get Open ID]'),
                end_time: zod_1.z.string().describe('End time'),
            }))
                .describe('User list'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({ system_status_id: zod_1.z.string().describe('System stauts ID[Get system status ID]').optional() })
            .optional(),
    },
};
exports.personalSettingsV1SystemStatusCreate = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.create',
    sdkName: 'personal_settings.v1.systemStatus.create',
    path: '/open-apis/personal_settings/v1/system_statuses',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Personal Settings-System status-Create system status-Create a system status with a tenant-wide dimension',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            title: zod_1.z
                .string()
                .describe('System status title, the number of characters in the title should be in the range of 1 to 20. Titles of different system statuses cannot be repeated.**Notice:** - one Chinese character=two English character=two other language character'),
            i18n_title: zod_1.z
                .object({
                zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                en_us: zod_1.z.string().describe('English name').optional(),
                ja_jp: zod_1.z.string().describe('Japanese name').optional(),
            })
                .describe('System status i18n title, the number of characters in the title should be in the range of 1 to 20. Any title in i18n_title cannot be repeated between different system statuses.**Notice** - one Chinese character=two English character=two other language character')
                .optional(),
            icon_key: zod_1.z
                .enum([
                'GeneralDoNotDisturb',
                'GeneralInMeetingBusy',
                'Coffee',
                'GeneralBusinessTrip',
                'GeneralWorkFromHome',
                'StatusEnjoyLife',
                'GeneralTravellingCar',
                'StatusBus',
                'StatusInFlight',
                'Typing',
                'EatingFood',
                'SICK',
                'GeneralSun',
                'GeneralMoonRest',
                'StatusReading',
                'Status_PrivateMessage',
                'StatusFlashOfInspiration',
                'GeneralVacation',
            ])
                .describe('Icon[**Icon optional value**] Options:GeneralDoNotDisturb(GeneralDoNotDisturb),GeneralInMeetingBusy(GeneralInMeetingBusy),Coffee(Coffee),GeneralBusinessTrip(GeneralBusinessTrip),GeneralWorkFromHome(GeneralWorkFromHome),StatusEnjoyLife(StatusEnjoyLife),GeneralTravellingCar(GeneralTravellingCar),StatusBus(StatusBus),StatusInFlight(StatusInFlight),Typing(Typing),EatingFood(EatingFood),SICK(SICK),GeneralSun(GeneralSun),GeneralMoonRest(GeneralMoonRest),StatusReading(StatusReading),Status_PrivateMessage(Status_PrivateMessage),StatusFlashOfInspiration(StatusFlashOfInspiration),GeneralVacation(GeneralVacation)'),
            color: zod_1.z
                .enum([
                'BLUE',
                'GRAY',
                'INDIGO',
                'WATHET',
                'GREEN',
                'TURQUOISE',
                'YELLOW',
                'LIME',
                'RED',
                'ORANGE',
                'PURPLE',
                'VIOLET',
                'CARMINE',
            ])
                .describe('Color Options:BLUE(BLUE),GRAY(GRAY),INDIGO(INDIGO),WATHET(WATHET),GREEN(GREEN),TURQUOISE(TURQUOISE),YELLOW(YELLOW),LIME(LIME),RED(RED),ORANGE(ORANGE),PURPLE(PURPLE),VIOLET(VIOLET),CARMINE(CARMINE)')
                .optional(),
            priority: zod_1.z
                .number()
                .describe('The smaller the value, the higher the priority of the display. Different system status cannot have the same priority')
                .optional(),
            sync_setting: zod_1.z
                .object({
                is_open_by_default: zod_1.z.boolean().describe('Is open by default').optional(),
                title: zod_1.z
                    .string()
                    .describe('System status sync title, the number of characters in the title should be in the range of 1 to 30.**Notice:** - one Chinese character=two English character=two other language character')
                    .optional(),
                i18n_title: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                    en_us: zod_1.z.string().describe('English name').optional(),
                    ja_jp: zod_1.z.string().describe('Japanese name').optional(),
                })
                    .describe('System status sync i18n title, the number of characters in the title should be in the range of 1 to 30.**Notice:** - one Chinese character=two English character=two other language character')
                    .optional(),
                explain: zod_1.z
                    .string()
                    .describe('System status sync explain, the number of characters in the explain should be in the range of 1 to 60.**Notice:** - one Chinese character=two English character=two other language character')
                    .optional(),
                i18n_explain: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                    en_us: zod_1.z.string().describe('English name').optional(),
                    ja_jp: zod_1.z.string().describe('Japanese name').optional(),
                })
                    .describe('System status sync i18n explain, the number of characters in the explain should be in the range of 1 to 60.**Notice:** - one Chinese character=two English character=two other language character')
                    .optional(),
            })
                .describe('Sync setting')
                .optional(),
        }),
    },
};
exports.personalSettingsV1SystemStatusDelete = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.delete',
    sdkName: 'personal_settings.v1.systemStatus.delete',
    path: '/open-apis/personal_settings/v1/system_statuses/:system_status_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Personal Settings-System status-Delete system status-Delete a system status of the full-tenant dimension',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z
            .object({ system_status_id: zod_1.z.string().describe('System stauts ID[Get system status ID]').optional() })
            .optional(),
    },
};
exports.personalSettingsV1SystemStatusList = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.list',
    sdkName: 'personal_settings.v1.systemStatus.list',
    path: '/open-apis/personal_settings/v1/system_statuses',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Personal Settings-System status-List system status-List system statuses with a tenant-wide dimension',
    accessTokens: ['tenant'],
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
    },
};
exports.personalSettingsV1SystemStatusPatch = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.patch',
    sdkName: 'personal_settings.v1.systemStatus.patch',
    path: '/open-apis/personal_settings/v1/system_statuses/:system_status_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Personal Settings-System status-Patch system status-Patch a system state with a tenant-wide dimension',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            system_status: zod_1.z
                .object({
                title: zod_1.z
                    .string()
                    .describe('System status title, the number of characters in the title should be in the range of 1 to 20. Titles of different system statuses cannot be repeated.**Notice:** - one Chinese character=two English character=two other language character'),
                i18n_title: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                    en_us: zod_1.z.string().describe('English name').optional(),
                    ja_jp: zod_1.z.string().describe('Japanese name').optional(),
                })
                    .describe('System status i18n title, the number of characters in the title should be in the range of 1 to 20. Any title in i18n_title cannot be repeated between different system statuses.**Notice** - one Chinese character=two English character=two other language character')
                    .optional(),
                icon_key: zod_1.z
                    .enum([
                    'GeneralDoNotDisturb',
                    'GeneralInMeetingBusy',
                    'Coffee',
                    'GeneralBusinessTrip',
                    'GeneralWorkFromHome',
                    'StatusEnjoyLife',
                    'GeneralTravellingCar',
                    'StatusBus',
                    'StatusInFlight',
                    'Typing',
                    'EatingFood',
                    'SICK',
                    'GeneralSun',
                    'GeneralMoonRest',
                    'StatusReading',
                    'Status_PrivateMessage',
                    'StatusFlashOfInspiration',
                    'GeneralVacation',
                ])
                    .describe('Icon[**Icon optional value**] Options:GeneralDoNotDisturb(GeneralDoNotDisturb),GeneralInMeetingBusy(GeneralInMeetingBusy),Coffee(Coffee),GeneralBusinessTrip(GeneralBusinessTrip),GeneralWorkFromHome(GeneralWorkFromHome),StatusEnjoyLife(StatusEnjoyLife),GeneralTravellingCar(GeneralTravellingCar),StatusBus(StatusBus),StatusInFlight(StatusInFlight),Typing(Typing),EatingFood(EatingFood),SICK(SICK),GeneralSun(GeneralSun),GeneralMoonRest(GeneralMoonRest),StatusReading(StatusReading),Status_PrivateMessage(Status_PrivateMessage),StatusFlashOfInspiration(StatusFlashOfInspiration),GeneralVacation(GeneralVacation)'),
                color: zod_1.z
                    .enum([
                    'BLUE',
                    'GRAY',
                    'INDIGO',
                    'WATHET',
                    'GREEN',
                    'TURQUOISE',
                    'YELLOW',
                    'LIME',
                    'RED',
                    'ORANGE',
                    'PURPLE',
                    'VIOLET',
                    'CARMINE',
                ])
                    .describe('Color Options:BLUE(BLUE),GRAY(GRAY),INDIGO(INDIGO),WATHET(WATHET),GREEN(GREEN),TURQUOISE(TURQUOISE),YELLOW(YELLOW),LIME(LIME),RED(RED),ORANGE(ORANGE),PURPLE(PURPLE),VIOLET(VIOLET),CARMINE(CARMINE)')
                    .optional(),
                priority: zod_1.z
                    .number()
                    .describe('The smaller the value, the higher the priority of the display. Different system status cannot have the same priority')
                    .optional(),
                sync_setting: zod_1.z
                    .object({
                    is_open_by_default: zod_1.z.boolean().describe('Is open by default').optional(),
                    title: zod_1.z
                        .string()
                        .describe('System status sync title, the number of characters in the title should be in the range of 1 to 30.**Notice:** - one Chinese character=two English character=two other language character')
                        .optional(),
                    i18n_title: zod_1.z
                        .object({
                        zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                        en_us: zod_1.z.string().describe('English name').optional(),
                        ja_jp: zod_1.z.string().describe('Japanese name').optional(),
                    })
                        .describe('System status sync i18n title, the number of characters in the title should be in the range of 1 to 30.**Notice:** - one Chinese character=two English character=two other language character')
                        .optional(),
                    explain: zod_1.z
                        .string()
                        .describe('System status sync explain, the number of characters in the explain should be in the range of 1 to 60.**Notice:** - one Chinese character=two English character=two other language character')
                        .optional(),
                    i18n_explain: zod_1.z
                        .object({
                        zh_cn: zod_1.z.string().describe('Chinese name').optional(),
                        en_us: zod_1.z.string().describe('English name').optional(),
                        ja_jp: zod_1.z.string().describe('Japanese name').optional(),
                    })
                        .describe('System status sync i18n explain, the number of characters in the explain should be in the range of 1 to 60.**Notice:** - one Chinese character=two English character=two other language character')
                        .optional(),
                })
                    .describe('Sync setting')
                    .optional(),
            })
                .describe('System status'),
            update_fields: zod_1.z
                .array(zod_1.z
                .enum(['TITLE', 'I18N_TITLE', 'ICON', 'COLOR', 'PRIORITY', 'SYNC_SETTING'])
                .describe('Options:TITLE(System Status Name),I18N_TITLE(System Status Internationalized Name),ICON(icon),COLOR(color),PRIORITY(PRIOTIRT priority),SYNC_SETTING(Sync settings)'))
                .describe('Fields that need to be updated'),
        }),
        path: zod_1.z
            .object({ system_status_id: zod_1.z.string().describe('System stauts ID[Get system status ID]').optional() })
            .optional(),
    },
};
exports.personalSettingsV1Tools = [
    exports.personalSettingsV1SystemStatusBatchClose,
    exports.personalSettingsV1SystemStatusBatchOpen,
    exports.personalSettingsV1SystemStatusCreate,
    exports.personalSettingsV1SystemStatusDelete,
    exports.personalSettingsV1SystemStatusList,
    exports.personalSettingsV1SystemStatusPatch,
];
