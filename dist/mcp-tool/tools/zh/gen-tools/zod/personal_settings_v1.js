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
    description: '[Feishu/Lark]-个人设置-系统状态-批量关闭系统状态-批量关闭用户系统状态可用',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            user_list: zod_1.z
                .array(zod_1.z.string())
                .describe('用户ID列表，传入的ID类型由user_id_type决定，推荐使用 OpenID，获取方式可参考文档[如何获取 Open ID]'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ system_status_id: zod_1.z.string().describe('系统状态ID[获取系统状态ID]').optional() }).optional(),
    },
};
exports.personalSettingsV1SystemStatusBatchOpen = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.batchOpen',
    sdkName: 'personal_settings.v1.systemStatus.batchOpen',
    path: '/open-apis/personal_settings/v1/system_statuses/:system_status_id/batch_open',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-个人设置-系统状态-批量开启系统状态-批量开启用户系统状态可用',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            user_list: zod_1.z
                .array(zod_1.z.object({
                user_id: zod_1.z
                    .string()
                    .describe('用户ID，传入的ID类型由user_id_type决定，推荐使用 OpenID，获取方式可参考文档[如何获取 Open ID]'),
                end_time: zod_1.z.string().describe('结束时间，传入的应为秒单位的时间戳，距当前的时间跨度不能超过365天'),
            }))
                .describe('开启列表'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ system_status_id: zod_1.z.string().describe('系统状态ID[获取系统状态ID]').optional() }).optional(),
    },
};
exports.personalSettingsV1SystemStatusCreate = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.create',
    sdkName: 'personal_settings.v1.systemStatus.create',
    path: '/open-apis/personal_settings/v1/system_statuses',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-个人设置-系统状态-创建系统状态-创建租户维度的系统状态',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            title: zod_1.z
                .string()
                .describe('系统状态名称，名称字符数要在1到20范围内。不同系统状态的title不能重复。 **注意：** - 1中文=2英文=2其他语言字符=2字符'),
            i18n_title: zod_1.z
                .object({
                zh_cn: zod_1.z.string().describe('中文名').optional(),
                en_us: zod_1.z.string().describe('英文名').optional(),
                ja_jp: zod_1.z.string().describe('日文名').optional(),
            })
                .describe('系统状态国际化名称，名称字符数要在1到20范围内。不同系统状态之间i18n_title中任何一种title都不能重复。 **注意：** - 1中文=2英文=2其他语言字符=2字符')
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
                .describe('图标[**了解icon_key可选值**] Options:GeneralDoNotDisturb(GeneralDoNotDisturb),GeneralInMeetingBusy(GeneralInMeetingBusy),Coffee(Coffee),GeneralBusinessTrip(GeneralBusinessTrip),GeneralWorkFromHome(GeneralWorkFromHome),StatusEnjoyLife(StatusEnjoyLife),GeneralTravellingCar(GeneralTravellingCar),StatusBus(StatusBus),StatusInFlight(StatusInFlight),Typing(Typing),EatingFood(EatingFood),SICK(SICK),GeneralSun(GeneralSun),GeneralMoonRest(GeneralMoonRest),StatusReading(StatusReading),Status_PrivateMessage(Status_PrivateMessage),StatusFlashOfInspiration(StatusFlashOfInspiration),GeneralVacation(GeneralVacation)'),
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
                .describe('颜色 Options:BLUE(蓝色),GRAY(灰色),INDIGO(靛青色),WATHET(浅蓝色),GREEN(绿色),TURQUOISE(绿松石色),YELLOW(黄色),LIME(酸橙色),RED(红色),ORANGE(橙色),PURPLE(紫色),VIOLET(紫罗兰色),CARMINE(胭脂红色)')
                .optional(),
            priority: zod_1.z
                .number()
                .describe('优先级，数值越小，客户端展示的优先级越高。不同系统状态的优先级不能一样')
                .optional(),
            sync_setting: zod_1.z
                .object({
                is_open_by_default: zod_1.z.boolean().describe('是否默认开启').optional(),
                title: zod_1.z
                    .string()
                    .describe('同步设置名称，名称字符数要在1到30范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                    .optional(),
                i18n_title: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('中文名').optional(),
                    en_us: zod_1.z.string().describe('英文名').optional(),
                    ja_jp: zod_1.z.string().describe('日文名').optional(),
                })
                    .describe('同步设置国际化名称，名称字符数要在1到30范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                    .optional(),
                explain: zod_1.z
                    .string()
                    .describe('同步设置解释文案，解释字符数要在1到60范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                    .optional(),
                i18n_explain: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('中文名').optional(),
                    en_us: zod_1.z.string().describe('英文名').optional(),
                    ja_jp: zod_1.z.string().describe('日文名').optional(),
                })
                    .describe('同步设置国际化解释文案，解释字符数要在1到60范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                    .optional(),
            })
                .describe('同步设置')
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
    description: '[Feishu/Lark]-个人设置-系统状态-删除系统状态-删除租户维度的系统状态',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ system_status_id: zod_1.z.string().describe('系统状态ID[获取系统状态ID]').optional() }).optional(),
    },
};
exports.personalSettingsV1SystemStatusList = {
    project: 'personal_settings',
    name: 'personal_settings.v1.systemStatus.list',
    sdkName: 'personal_settings.v1.systemStatus.list',
    path: '/open-apis/personal_settings/v1/system_statuses',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-个人设置-系统状态-获取系统状态-获取租户下所有系统状态',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('分页大小').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
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
    description: '[Feishu/Lark]-个人设置-系统状态-修改系统状态-修改租户维度系统状态',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            system_status: zod_1.z
                .object({
                title: zod_1.z
                    .string()
                    .describe('系统状态名称，名称字符数要在1到20范围内。不同系统状态的title不能重复。 **注意：** - 1中文=2英文=2其他语言字符=2字符'),
                i18n_title: zod_1.z
                    .object({
                    zh_cn: zod_1.z.string().describe('中文名').optional(),
                    en_us: zod_1.z.string().describe('英文名').optional(),
                    ja_jp: zod_1.z.string().describe('日文名').optional(),
                })
                    .describe('系统状态国际化名称，名称字符数要在1到20范围内。不同系统状态之间i18n_title中任何一种title都不能重复。 **注意：** - 1中文=2英文=2其他语言字符=2字符')
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
                    .describe('图标[**了解icon_key可选值**] Options:GeneralDoNotDisturb(GeneralDoNotDisturb),GeneralInMeetingBusy(GeneralInMeetingBusy),Coffee(Coffee),GeneralBusinessTrip(GeneralBusinessTrip),GeneralWorkFromHome(GeneralWorkFromHome),StatusEnjoyLife(StatusEnjoyLife),GeneralTravellingCar(GeneralTravellingCar),StatusBus(StatusBus),StatusInFlight(StatusInFlight),Typing(Typing),EatingFood(EatingFood),SICK(SICK),GeneralSun(GeneralSun),GeneralMoonRest(GeneralMoonRest),StatusReading(StatusReading),Status_PrivateMessage(Status_PrivateMessage),StatusFlashOfInspiration(StatusFlashOfInspiration),GeneralVacation(GeneralVacation)'),
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
                    .describe('颜色 Options:BLUE(蓝色),GRAY(灰色),INDIGO(靛青色),WATHET(浅蓝色),GREEN(绿色),TURQUOISE(绿松石色),YELLOW(黄色),LIME(酸橙色),RED(红色),ORANGE(橙色),PURPLE(紫色),VIOLET(紫罗兰色),CARMINE(胭脂红色)')
                    .optional(),
                priority: zod_1.z
                    .number()
                    .describe('优先级，数值越小，客户端展示的优先级越高。不同系统状态的优先级不能一样')
                    .optional(),
                sync_setting: zod_1.z
                    .object({
                    is_open_by_default: zod_1.z.boolean().describe('是否默认开启').optional(),
                    title: zod_1.z
                        .string()
                        .describe('同步设置名称，名称字符数要在1到30范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                        .optional(),
                    i18n_title: zod_1.z
                        .object({
                        zh_cn: zod_1.z.string().describe('中文名').optional(),
                        en_us: zod_1.z.string().describe('英文名').optional(),
                        ja_jp: zod_1.z.string().describe('日文名').optional(),
                    })
                        .describe('同步设置国际化名称，名称字符数要在1到30范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                        .optional(),
                    explain: zod_1.z
                        .string()
                        .describe('同步设置解释文案，解释字符数要在1到60范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                        .optional(),
                    i18n_explain: zod_1.z
                        .object({
                        zh_cn: zod_1.z.string().describe('中文名').optional(),
                        en_us: zod_1.z.string().describe('英文名').optional(),
                        ja_jp: zod_1.z.string().describe('日文名').optional(),
                    })
                        .describe('同步设置国际化解释文案，解释字符数要在1到60范围内。**注意：** - 1中文=2英文=2其他语言字符=2字符')
                        .optional(),
                })
                    .describe('同步设置')
                    .optional(),
            })
                .describe('系统状态'),
            update_fields: zod_1.z
                .array(zod_1.z
                .enum(['TITLE', 'I18N_TITLE', 'ICON', 'COLOR', 'PRIORITY', 'SYNC_SETTING'])
                .describe('Options:TITLE(系统状态名称),I18N_TITLE(系统状态国际化名称),ICON(图标),COLOR(颜色),PRIORITY(PRIOTIRT 优先级),SYNC_SETTING(同步设置)'))
                .describe('需要更新的字段'),
        }),
        path: zod_1.z.object({ system_status_id: zod_1.z.string().describe('系统状态ID[获取系统状态ID]').optional() }).optional(),
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
