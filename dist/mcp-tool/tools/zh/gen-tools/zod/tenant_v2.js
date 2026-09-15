"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantV2Tools = exports.tenantV2TenantQuery = exports.tenantV2TenantProductAssignInfoQuery = void 0;
exports.tenantV2TenantProductAssignInfoQuery = {
    project: 'tenant',
    name: 'tenant.v2.tenantProductAssignInfo.query',
    sdkName: 'tenant.v2.tenantProductAssignInfo.query',
    path: '/open-apis/tenant/v2/tenant/assign_info_list/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-企业信息-企业席位信息-获取企业席位信息接口-获取租户下待分配的席位列表，包含席位名称、席位ID、数量及对应有效期',
    accessTokens: ['tenant'],
    schema: {},
};
exports.tenantV2TenantQuery = {
    project: 'tenant',
    name: 'tenant.v2.tenant.query',
    sdkName: 'tenant.v2.tenant.query',
    path: '/open-apis/tenant/v2/tenant/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-企业信息-获取企业信息-获取企业名称、企业编号等企业信息',
    accessTokens: ['tenant'],
    schema: {},
};
exports.tenantV2Tools = [exports.tenantV2TenantProductAssignInfoQuery, exports.tenantV2TenantQuery];
