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
    description: '[Feishu/Lark]-security_and_compliance-OpenAPI Audit Log-Obtain OpenAPI audit log-This api is used to obtain OpenAPI audit log',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            api_keys: zod_1.z.array(zod_1.z.string()).describe('Feishu OpenAPI definition, reference: [API list]').optional(),
            start_time: zod_1.z.number().describe('Starting timestamp in seconds').optional(),
            end_time: zod_1.z.number().describe('Termination timestamp in seconds').optional(),
            app_id: zod_1.z
                .string()
                .describe('The unique identifier of the application calling OpenAPI, can be obtained by going to [Developer Console] > Application details page > Certificate and Basic Information')
                .optional(),
            page_size: zod_1.z.number().describe('paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
    },
};
exports.securityAndComplianceV1Tools = [exports.securityAndComplianceV1OpenapiLogListData];
