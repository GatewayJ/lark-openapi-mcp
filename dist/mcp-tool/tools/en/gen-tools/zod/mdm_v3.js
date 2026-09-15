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
    description: '[Feishu/Lark]-Feishu Master Data Management-Common Data-country region-batch get major by id-Batch Get Country Region By ID',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            fields: zod_1.z.array(zod_1.z.string()).describe('Required query field set'),
            ids: zod_1.z.array(zod_1.z.string()).describe('Master Data CodeSet'),
            languages: zod_1.z
                .array(zod_1.z.string())
                .describe('The language type you want to return, the supported format is as follows:-Chinese: zh-CN-English: en-US-Japanese: ja-JPFor multilingual text fields, if a specific language is passed in, the corresponding language text will be returned'),
        }),
    },
};
exports.mdmV3CountryRegionList = {
    project: 'mdm',
    name: 'mdm.v3.countryRegion.list',
    sdkName: 'mdm.v3.countryRegion.list',
    path: '/open-apis/mdm/v3/country_regions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Feishu Master Data Management-Common Data-country region-Pagination Batch Query Country Region-Paging batch query country region',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            filter: zod_1.z
                .object({
                logic: zod_1.z
                    .string()
                    .describe('LogicMultiple expressions at the same level are determined by the logic parameter using "and/or" conditions.0=and, 1=or'),
                expressions: zod_1.z
                    .array(zod_1.z.object({
                    field: zod_1.z.string().describe('field name'),
                    operator: zod_1.z
                        .string()
                        .describe('Operator0=equal, 1=not equal, 2=greater than, 3=greater than or equal to, 4=less than, 5=less than or equal to, 6=any, 7=not any, 8=match, 9=prefix match, 10=suffix Match, 11=null, 12=not null'),
                    value: zod_1.z
                        .object({
                        string_value: zod_1.z.string().describe('string value').optional(),
                        bool_value: zod_1.z.boolean().describe('Boolean').optional(),
                        int_value: zod_1.z.string().describe('shaping value').optional(),
                        string_list_value: zod_1.z.array(zod_1.z.string()).describe('String list value').optional(),
                        int_list_value: zod_1.z.array(zod_1.z.string()).describe('integer list value').optional(),
                    })
                        .describe('field value'),
                }))
                    .describe('filter condition')
                    .optional(),
            })
                .describe('Filter parameters')
                .optional(),
            common: zod_1.z.object({}).describe('This parameter can be ignored').optional(),
        })
            .optional(),
        params: zod_1.z.object({
            languages: zod_1.z
                .array(zod_1.z.string())
                .describe('The language type you want to return, the supported format is as follows:-Chinese: zh-CN-English: en-US-Japanese: ja-JPFor multilingual text fields, if a specific language is passed in, the corresponding language text will be returned'),
            fields: zod_1.z.array(zod_1.z.string()).describe('Required query field set'),
            limit: zod_1.z.number().describe('query page size').optional(),
            offset: zod_1.z.number().describe('query start location').optional(),
            return_count: zod_1.z.boolean().describe('Whether to return the total').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning; when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        }),
    },
};
exports.mdmV3Tools = [exports.mdmV3BatchCountryRegionGet, exports.mdmV3CountryRegionList];
