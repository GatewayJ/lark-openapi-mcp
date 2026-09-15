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
    description: '[Feishu/Lark]-Report-Rule-Query rules-Query rules',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            rule_name: zod_1.z.string().describe('Rule name'),
            include_deleted: zod_1.z
                .number()
                .describe('Whether to include deleted, not deleted by default Options:0(Exclude Does not include deleted),1(Include Include deleted)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        }),
    },
};
exports.reportV1RuleViewRemove = {
    project: 'report',
    name: 'report.v1.ruleView.remove',
    sdkName: 'report.v1.ruleView.remove',
    path: '/open-apis/report/v1/rules/:rule_id/views/remove',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Report-Rule view-Remove rule board-Remove rule board',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            user_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('If the list is empty and, deletes the full user view under the rule. If the list is not empty, then deletes the specified user view. The size limit is 200')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ rule_id: zod_1.z.string().describe('Reporting tule ID') }),
    },
};
exports.reportV1TaskQuery = {
    project: 'report',
    name: 'report.v1.task.query',
    sdkName: 'report.v1.task.query',
    path: '/open-apis/report/v1/tasks/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Report-Task-Query tasks-Query tasks',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            commit_start_time: zod_1.z.number().describe('Commit start time timestamp'),
            commit_end_time: zod_1.z.number().describe('End of submission timestamp'),
            rule_id: zod_1.z.string().describe('Reporting rule ID').optional(),
            user_id: zod_1.z.string().describe('User ID').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning; when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups'),
            page_size: zod_1.z.number().describe('Number of items returned by a single page'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
    },
};
exports.reportV1Tools = [exports.reportV1RuleQuery, exports.reportV1RuleViewRemove, exports.reportV1TaskQuery];
