"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdmV1Tools = exports.mdmV1UserAuthDataRelationUnbind = exports.mdmV1UserAuthDataRelationBind = void 0;
const zod_1 = require("zod");
exports.mdmV1UserAuthDataRelationBind = {
    project: 'mdm',
    name: 'mdm.v1.userAuthDataRelation.bind',
    sdkName: 'mdm.v1.userAuthDataRelation.bind',
    path: '/open-apis/mdm/v1/user_auth_data_relations/bind',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书主数据-数据维度-用户数据维度绑定-通过该接口，可为指定应用下的用户绑定一类数据维度，支持批量给多个用户同时增量授权',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            root_dimension_type: zod_1.z.string().describe('数据类型编码'),
            sub_dimension_types: zod_1.z.array(zod_1.z.string()).describe('数据编码列表'),
            authorized_user_ids: zod_1.z.array(zod_1.z.string()).describe('授权人的lark id'),
            uams_app_id: zod_1.z.string().describe('uams系统中应用id'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
    },
};
exports.mdmV1UserAuthDataRelationUnbind = {
    project: 'mdm',
    name: 'mdm.v1.userAuthDataRelation.unbind',
    sdkName: 'mdm.v1.userAuthDataRelation.unbind',
    path: '/open-apis/mdm/v1/user_auth_data_relations/unbind',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书主数据-数据维度-用户数据维度解绑-通过该接口，可为指定应用下的指定用户解除一类数据维度',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            root_dimension_type: zod_1.z.string().describe('数据类型编码'),
            sub_dimension_types: zod_1.z.array(zod_1.z.string()).describe('数据编码列表'),
            authorized_user_ids: zod_1.z.array(zod_1.z.string()).describe('授权人的lark id'),
            uams_app_id: zod_1.z.string().describe('uams系统中应用id'),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() })
            .optional(),
    },
};
exports.mdmV1Tools = [exports.mdmV1UserAuthDataRelationBind, exports.mdmV1UserAuthDataRelationUnbind];
