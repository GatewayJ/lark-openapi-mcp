"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hireV2Tools = exports.hireV2TalentGet = exports.hireV2InterviewRecordList = exports.hireV2InterviewRecordGet = void 0;
const zod_1 = require("zod");
exports.hireV2InterviewRecordGet = {
    project: 'hire',
    name: 'hire.v2.interviewRecord.get',
    sdkName: 'hire.v2.interviewRecord.get',
    path: '/open-apis/hire/v2/interview_records/:interview_record_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Hire-Candidate management-Delivery process-Interview-Get Interview Feedback Detail（new version）-Get interview feedback details',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ interview_record_id: zod_1.z.string().describe('Interview record ID') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.hireV2InterviewRecordList = {
    project: 'hire',
    name: 'hire.v2.interviewRecord.list',
    sdkName: 'hire.v2.interviewRecord.list',
    path: '/open-apis/hire/v2/interview_records',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Hire-Candidate management-Delivery process-Interview-Batch Get Interview Feedback Details（new version）-Batch get interview feedback',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            ids: zod_1.z.array(zod_1.z.string()).describe('List interview feedback by IDs, page param will not be used').optional(),
            page_size: zod_1.z.number().describe('Paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.hireV2TalentGet = {
    project: 'hire',
    name: 'hire.v2.talent.get',
    sdkName: 'hire.v2.talent.get',
    path: '/open-apis/hire/v2/talents/:talent_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Hire-Candidate management-Talent-Get talent details-Obtain talent information according to talent ID',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('User ID type').optional(),
        })
            .optional(),
        path: zod_1.z.object({ talent_id: zod_1.z.string().describe('Talent ID') }),
    },
};
exports.hireV2Tools = [exports.hireV2InterviewRecordGet, exports.hireV2InterviewRecordList, exports.hireV2TalentGet];
