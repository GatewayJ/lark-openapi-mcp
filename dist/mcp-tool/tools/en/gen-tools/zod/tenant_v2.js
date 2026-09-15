"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantV2Tools = exports.tenantV2TenantQuery = exports.tenantV2TenantProductAssignInfoQuery = void 0;
exports.tenantV2TenantProductAssignInfoQuery = {
    project: 'tenant',
    name: 'tenant.v2.tenantProductAssignInfo.query',
    sdkName: 'tenant.v2.tenantProductAssignInfo.query',
    path: '/open-apis/tenant/v2/tenant/assign_info_list/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Company Information-Tenant Product Assign Info-Obtain company assign information-Obtain the seat list to be allocated under the tenant, including seat name, subscription ID, quantity and validity period',
    accessTokens: ['tenant'],
    schema: {},
};
exports.tenantV2TenantQuery = {
    project: 'tenant',
    name: 'tenant.v2.tenant.query',
    sdkName: 'tenant.v2.tenant.query',
    path: '/open-apis/tenant/v2/tenant/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Company Information-Obtain company information-Obtains company information such as the company name and the company ID',
    accessTokens: ['tenant'],
    schema: {},
};
exports.tenantV2Tools = [exports.tenantV2TenantProductAssignInfoQuery, exports.tenantV2TenantQuery];
