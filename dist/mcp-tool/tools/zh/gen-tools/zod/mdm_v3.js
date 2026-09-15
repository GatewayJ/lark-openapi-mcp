"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdmV3Tools = exports.mdmV3CountryRegionList = exports.mdmV3BatchCountryRegionGet = void 0;
const zod_1 = require("zod");
exports.mdmV3BatchCountryRegionGet = {
    project: 'mdm',
    name: 'mdm.v3.batchCountryRegion.get',
    sdkName: 'mdm.v3.batchCountryRegion.get',
    path: '/open-apis/mdm/v3/batch_country_region',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书主数据-基础数据-国家/地区-根据主数据编码批量查询国家/地区-通过mdmcode批量查询国家/地区信息。资源介绍请参考[概述]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            fields: zod_1.z.array(zod_1.z.string()).describe('需要的查询字段集'),
            ids: zod_1.z.array(zod_1.z.string()).describe('主数据编码集'),
            languages: zod_1.z
                .array(zod_1.z.string().describe('语言'))
                .describe('希望返回的语言种类，支持格式如下：- 中文：zh-CN- 英文：en-US- 日文：ja-JP对于多语文本字段，传入特定语言，将会返回对应语言文本'),
        }),
    },
};
exports.mdmV3CountryRegionList = {
    project: 'mdm',
    name: 'mdm.v3.countryRegion.list',
    sdkName: 'mdm.v3.countryRegion.list',
    path: '/open-apis/mdm/v3/country_regions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书主数据-基础数据-国家/地区-分页批量查询国家/地区-分页批量查询国家/地区。资源介绍请参考[概述]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            filter: zod_1.z
                .object({
                logic: zod_1.z.string().describe('逻辑关系同一层级的多个expression由logic参数决定使用“与/或”条件0=and，1=or'),
                expressions: zod_1.z
                    .array(zod_1.z.object({
                    field: zod_1.z.string().describe('字段名'),
                    operator: zod_1.z
                        .string()
                        .describe('运算符。0=等于，1=不等于，2=大于，3=大于等于，4=小于，5=小于等于，6=属于任意，7=不属于任意，8=匹配，9=前缀匹配，10=后缀匹配，11=为空，12=不为空'),
                    value: zod_1.z
                        .object({
                        string_value: zod_1.z.string().describe('字符串值').optional(),
                        bool_value: zod_1.z.boolean().describe('布尔值').optional(),
                        int_value: zod_1.z.string().describe('整型值').optional(),
                        string_list_value: zod_1.z.array(zod_1.z.string()).describe('字符串列表值').optional(),
                        int_list_value: zod_1.z.array(zod_1.z.string()).describe('整型列表值').optional(),
                    })
                        .describe('字段值'),
                }))
                    .describe('过滤条件')
                    .optional(),
            })
                .describe('过滤参数')
                .optional(),
            common: zod_1.z.object({}).describe('此参数可忽略').optional(),
        })
            .optional(),
        params: zod_1.z.object({
            languages: zod_1.z
                .array(zod_1.z.string().describe('语言'))
                .describe('希望返回的语言种类，支持格式如下：- 中文：zh-CN- 英文：en-US- 日文：ja-JP对于多语文本字段，传入特定语言，将会返回对应语言文本'),
            fields: zod_1.z.array(zod_1.z.string()).describe('需要的查询字段集'),
            limit: zod_1.z.number().describe('查询页大小').optional(),
            offset: zod_1.z.number().describe('查询起始位置').optional(),
            return_count: zod_1.z.boolean().describe('是否返回总数').optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
        }),
    },
};
exports.mdmV3Tools = [exports.mdmV3BatchCountryRegionGet, exports.mdmV3CountryRegionList];
