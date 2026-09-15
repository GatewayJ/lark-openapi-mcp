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
    description: '[Feishu/Lark]-招聘-候选人管理-投递流程-面试-获取面试评价详细信息（新版）-获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
        path: zod_1.z.object({ interview_record_id: zod_1.z.string().describe('面试评价 ID，可通过[获取面试信息]接口获取') }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.hireV2InterviewRecordList = {
    project: 'hire',
    name: 'hire.v2.interviewRecord.list',
    sdkName: 'hire.v2.interviewRecord.list',
    path: '/open-apis/hire/v2/interview_records',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-招聘-候选人管理-投递流程-面试-批量获取面试评价详细信息（新版）-批量获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            ids: zod_1.z
                .array(zod_1.z.string())
                .describe('面试评价 ID 列表，可通过[获取面试信息]接口获取，使用该筛选项时不会分页')
                .optional(),
            page_size: zod_1.z.number().describe('分页大小**注意**：若不传该参数，则默认根据 `ids` 参数获取数据').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.hireV2TalentGet = {
    project: 'hire',
    name: 'hire.v2.talent.get',
    sdkName: 'hire.v2.talent.get',
    path: '/open-apis/hire/v2/talents/:talent_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-招聘-候选人管理-人才-获取人才详情-根据人才 ID 获取人才详情，包含人才加入文件夹列表、标签、人才库、备注以及屏蔽名单等信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
        })
            .optional(),
        path: zod_1.z.object({ talent_id: zod_1.z.string().describe('人才 ID，可通过[获取人才列表]接口获取') }),
    },
};
exports.hireV2Tools = [exports.hireV2InterviewRecordGet, exports.hireV2InterviewRecordList, exports.hireV2TalentGet];
