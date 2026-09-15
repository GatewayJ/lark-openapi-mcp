"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityAndComplianceV1Tools = exports.securityAndComplianceV1OpenapiLogListData = void 0;
const zod_1 = require("zod");
exports.securityAndComplianceV1OpenapiLogListData = {
    project: 'security_and_compliance',
    name: 'security_and_compliance.v1.openapiLog.listData',
    sdkName: 'security_and_compliance.v1.openapiLog.listData',
    path: '/open-apis/security_and_compliance/v1/openapi_logs/list_data',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-安全合规-OpenAPI审计日志-获取OpenAPI审计日志数据-该接口用于获取OpenAPI审计日志数据',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            api_keys: zod_1.z.array(zod_1.z.string()).describe('飞书开放平台定义的API，参考：[API列表]').optional(),
            start_time: zod_1.z.number().describe('以秒为单位的起始时间戳').optional(),
            end_time: zod_1.z.number().describe('以秒为单位的终止时间戳').optional(),
            app_id: zod_1.z
                .string()
                .describe('调用OpenAPI的应用唯一标识，可以前往 [开发者后台] > 应用详情页 > 凭证与基础信息中获取 app_id')
                .optional(),
            page_size: zod_1.z.number().describe('分页大小').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        })
            .optional(),
    },
};
exports.securityAndComplianceV1Tools = [exports.securityAndComplianceV1OpenapiLogListData];
