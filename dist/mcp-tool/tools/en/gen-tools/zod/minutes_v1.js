"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesV1Tools = exports.minutesV1MinuteStatisticsGet = exports.minutesV1MinuteMediaGet = exports.minutesV1MinuteGet = void 0;
const zod_1 = require("zod");
exports.minutesV1MinuteGet = {
    project: 'minutes',
    name: 'minutes.v1.minute.get',
    sdkName: 'minutes.v1.minute.get',
    path: '/open-apis/minutes/v1/minutes/:minute_token',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Minutes-Minutes Meta-Get minutes meta-Through this api, you can get a basic overview of Lark Minutes, including `owner_id`, `create_time`, title, cover picture, duration and URL',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({
            minute_token: zod_1.z
                .string()
                .describe('The unique identifier for Minutes. It can be obtained from the URL link of the Minutes, usually the last string of characters: https://sample.feishu.cn/minutes/==obcnq3b9jl72l83w4f14xxxx=='),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.minutesV1MinuteMediaGet = {
    project: 'minutes',
    name: 'minutes.v1.minuteMedia.get',
    sdkName: 'minutes.v1.minuteMedia.get',
    path: '/open-apis/minutes/v1/minutes/:minute_token/media',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Minutes-Minutes audio or video file-Download minutes audio or video file-Get the audio or video file of minutes',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            minute_token: zod_1.z
                .string()
                .describe('The unique identifier for Minutes. It can be obtained from the URL link of the Minutes, usually the last string of characters: https://sample.feishu.cn/minutes/==obcnq3b9jl72l83w4f14xxxx=='),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.minutesV1MinuteStatisticsGet = {
    project: 'minutes',
    name: 'minutes.v1.minuteStatistics.get',
    sdkName: 'minutes.v1.minuteStatistics.get',
    path: '/open-apis/minutes/v1/minutes/:minute_token/statistics',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Minutes-Minutes statistics-Get minutes statistics-Through this API, you can get access statistics of Feishu Minutes, including PV, UV, visited user id, visited user timestamp',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({
            minute_token: zod_1.z
                .string()
                .describe('The unique identifier for Minutes. It can be obtained from the URL link of the Minutes, usually the last string of characters: https://sample.feishu.cn/minutes/==obcnq3b9jl72l83w4f14xxxx=='),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.minutesV1Tools = [exports.minutesV1MinuteGet, exports.minutesV1MinuteMediaGet, exports.minutesV1MinuteStatisticsGet];
