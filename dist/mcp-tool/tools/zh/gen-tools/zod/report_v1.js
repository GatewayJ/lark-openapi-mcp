"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportV1Tools = exports.reportV1TaskQuery = exports.reportV1RuleViewRemove = exports.reportV1RuleQuery = void 0;
const zod_1 = require("zod");
exports.reportV1RuleQuery = {
    project: 'report',
    name: 'report.v1.rule.query',
    sdkName: 'report.v1.rule.query',
    path: '/open-apis/report/v1/rules/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-汇报-规则-查询规则-查询规则',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            rule_name: zod_1.z.string().describe('规则名称'),
            include_deleted: zod_1.z
                .number()
                .describe('是否包括已删除，默认未删除 Options:0(Exclude 不包括已删除),1(Include 包括已删除)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        }),
    },
};
exports.reportV1RuleViewRemove = {
    project: 'report',
    name: 'report.v1.ruleView.remove',
    sdkName: 'report.v1.ruleView.remove',
    path: '/open-apis/report/v1/rules/:rule_id/views/remove',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-汇报-规则看板-移除规则看板-移除规则看板',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            user_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('列表为空删除规则下全用户视图，列表不为空删除指定用户视图，大小限制200')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ rule_id: zod_1.z.string().describe('汇报规则ID') }),
    },
};
exports.reportV1TaskQuery = {
    project: 'report',
    name: 'report.v1.task.query',
    sdkName: 'report.v1.task.query',
    path: '/open-apis/report/v1/tasks/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-汇报-任务-查询任务-查询任务',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            commit_start_time: zod_1.z.number().describe('提交开始时间时间戳'),
            commit_end_time: zod_1.z.number().describe('提交结束时间时间戳'),
            rule_id: zod_1.z.string().describe('汇报规则ID').optional(),
            user_id: zod_1.z.string().describe('用户ID').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果'),
            page_size: zod_1.z.number().describe('单次分页返回的条数'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.reportV1Tools = [exports.reportV1RuleQuery, exports.reportV1RuleViewRemove, exports.reportV1TaskQuery];
