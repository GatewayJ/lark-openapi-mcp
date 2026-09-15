"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compensationV1Tools = exports.compensationV1PlanList = exports.compensationV1ItemList = exports.compensationV1ItemCategoryList = exports.compensationV1IndicatorList = exports.compensationV1ChangeReasonList = exports.compensationV1ArchiveQuery = void 0;
const zod_1 = require("zod");
exports.compensationV1ArchiveQuery = {
    project: 'compensation',
    name: 'compensation.v1.archive.query',
    sdkName: 'compensation.v1.archive.query',
    path: '/open-apis/compensation/v1/archives/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资档案-批量查询员工薪资档案-批量查询员工薪资档案',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            user_id_list: zod_1.z.array(zod_1.z.string()).describe('用户ID列表，获取方式可参考查询参数中的「user_id_type」字段'),
            tid_list: zod_1.z.array(zod_1.z.string()).describe('档案Tid列表').optional(),
            effective_start_date: zod_1.z.string().describe('生效开始时间').optional(),
            effective_end_date: zod_1.z.string().describe('生效结束时间').optional(),
        }),
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.compensationV1ChangeReasonList = {
    project: 'compensation',
    name: 'compensation.v1.changeReason.list',
    sdkName: 'compensation.v1.changeReason.list',
    path: '/open-apis/compensation/v1/change_reasons',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-定调薪-批量查询定调薪原因-批量查询定调薪原因',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        }),
    },
};
exports.compensationV1IndicatorList = {
    project: 'compensation',
    name: 'compensation.v1.indicator.list',
    sdkName: 'compensation.v1.indicator.list',
    path: '/open-apis/compensation/v1/indicators',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量查询薪资统计指标-批量查询薪资统计指标',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        }),
    },
};
exports.compensationV1ItemCategoryList = {
    project: 'compensation',
    name: 'compensation.v1.itemCategory.list',
    sdkName: 'compensation.v1.itemCategory.list',
    path: '/open-apis/compensation/v1/item_categories',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量获取薪资项分类信息-批量获取薪资项分类信息',
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
exports.compensationV1ItemList = {
    project: 'compensation',
    name: 'compensation.v1.item.list',
    sdkName: 'compensation.v1.item.list',
    path: '/open-apis/compensation/v1/items',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量查询薪资项-批量查询薪资项',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        }),
    },
};
exports.compensationV1PlanList = {
    project: 'compensation',
    name: 'compensation.v1.plan.list',
    sdkName: 'compensation.v1.plan.list',
    path: '/open-apis/compensation/v1/plans',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资方案-批量查询薪资方案-- 此接口将返回全部薪资方案信息，包括薪资方案 ID、生效日期、薪资项/薪资统计指标等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        }),
    },
};
exports.compensationV1Tools = [
    exports.compensationV1ArchiveQuery,
    exports.compensationV1ChangeReasonList,
    exports.compensationV1IndicatorList,
    exports.compensationV1ItemCategoryList,
    exports.compensationV1ItemList,
    exports.compensationV1PlanList,
];
