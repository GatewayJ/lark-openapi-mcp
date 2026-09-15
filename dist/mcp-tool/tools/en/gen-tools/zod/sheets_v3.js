"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheetsV3Tools = exports.sheetsV3SpreadsheetSheetReplace = exports.sheetsV3SpreadsheetSheetQuery = exports.sheetsV3SpreadsheetSheetMoveDimension = exports.sheetsV3SpreadsheetSheetGet = exports.sheetsV3SpreadsheetSheetFloatImageQuery = exports.sheetsV3SpreadsheetSheetFloatImagePatch = exports.sheetsV3SpreadsheetSheetFloatImageGet = exports.sheetsV3SpreadsheetSheetFloatImageDelete = exports.sheetsV3SpreadsheetSheetFloatImageCreate = exports.sheetsV3SpreadsheetSheetFind = exports.sheetsV3SpreadsheetSheetFilterUpdate = exports.sheetsV3SpreadsheetSheetFilterGet = exports.sheetsV3SpreadsheetSheetFilterDelete = exports.sheetsV3SpreadsheetSheetFilterCreate = exports.sheetsV3SpreadsheetSheetFilterViewQuery = exports.sheetsV3SpreadsheetSheetFilterViewPatch = exports.sheetsV3SpreadsheetSheetFilterViewGet = exports.sheetsV3SpreadsheetSheetFilterViewDelete = exports.sheetsV3SpreadsheetSheetFilterViewCreate = exports.sheetsV3SpreadsheetSheetFilterViewConditionUpdate = exports.sheetsV3SpreadsheetSheetFilterViewConditionQuery = exports.sheetsV3SpreadsheetSheetFilterViewConditionGet = exports.sheetsV3SpreadsheetSheetFilterViewConditionDelete = exports.sheetsV3SpreadsheetSheetFilterViewConditionCreate = exports.sheetsV3SpreadsheetPatch = exports.sheetsV3SpreadsheetGet = exports.sheetsV3SpreadsheetCreate = void 0;
const zod_1 = require("zod");
exports.sheetsV3SpreadsheetCreate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheet.create',
    sdkName: 'sheets.v3.spreadsheet.create',
    path: '/open-apis/sheets/v3/spreadsheets',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-spreadsheet-Create a spreadsheet-Use this API to create an online spreadsheet under the specified directory. The table title can be customized. Creating forms with content is not supported',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            title: zod_1.z.string().describe('Spreadsheet title').optional(),
            folder_token: zod_1.z
                .string()
                .describe('Folder token. You can get the folder token in two ways:- URL of the folder: https://sample.feishu.cn/drive/folder/==fldbcO1UuPz8VwnpPx5a92abcef==- Call the open platform interface to get it: - Call the [get my space (root folder) metadata] interface to get the root directory (i.e. root folder) token. - Continue to call the [get list of files in folder] interface to get the token for the folder in the root directory.**Note**: To create a spreadsheet in the knowledge base, you need to call the [Create knowledge space node] API and select the table (sheet) type')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheet.get',
    sdkName: 'sheets.v3.spreadsheet.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-spreadsheet-Get spreadsheet information-This interface is used to obtain basic information for the spreadsheet, including the owner of the spreadsheet, URL links, and other related details',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Table token. Refer to the [Spreadsheet Overview] to obtain the token')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetPatch = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheet.patch',
    sdkName: 'sheets.v3.spreadsheet.patch',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Sheets-spreadsheet-Modify spreadsheet properties-This interface is used to modify the properties of the spreadsheet. Currently, modifying spreadsheet titles is supported',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            title: zod_1.z
                .string()
                .describe('Table title. When the parameter is empty, the title will be "Untitled spreadsheet" or content corresponding to the local language environment')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Table token. Refer to the [Spreadsheet Overview] to obtain the token')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewConditionCreate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterViewCondition.create',
    sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.create',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-filter view-Create Filter Condition-::: noteFor filter conditions, see [User guide for using filter conditions in the filter view]:::This API is used to create filter conditions for a column in the range of a filter view',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            condition_id: zod_1.z.string().describe('Set filter condition column, using a letter designation').optional(),
            filter_type: zod_1.z.string().describe('Filter type').optional(),
            compare_type: zod_1.z.string().describe('Comparison type').optional(),
            expected: zod_1.z.array(zod_1.z.string()).describe('Filter parameter').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewConditionDelete = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterViewCondition.delete',
    sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.delete',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-filter view-Delete Filter Condition-This API is used to delete filter conditions for a specified column in the range of a filter view',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
            condition_id: zod_1.z.string().describe('Letter designation of a column in the range').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewConditionGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterViewCondition.get',
    sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-filter view-Obtain Filter Condition-::: noteFor filter condition explanations, see [User guide for using filter conditions in the filter view]:::This API is used to obtain the filter conditions of a specified column in the filter view',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
            condition_id: zod_1.z
                .string()
                .describe('Letter designation of column for which to query filter conditions')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewConditionQuery = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterViewCondition.query',
    sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.query',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-filter view-Query Filter Condition-::: noteFor filter condition explanations, see [User guide for using filter conditions in the filter view]:::This API is used to query all filter conditions of a filter view. All filter conditions in the range of the filter view are returned',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewConditionUpdate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterViewCondition.update',
    sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.update',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-filter view-Update Filter Condition-::: noteFor filter condition parameters, see [User guide for using filter conditions in the filter view]:::This API is used to update filter conditions for a column in the range of a filter view. The condition ID is the letter designation of the column',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            filter_type: zod_1.z.string().describe('Filter type').optional(),
            compare_type: zod_1.z.string().describe('Comparison type').optional(),
            expected: zod_1.z.array(zod_1.z.string()).describe('Filter parameter').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
            condition_id: zod_1.z.string().describe('Column letter designation').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewCreate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterView.create',
    sdkName: 'sheets.v3.spreadsheetSheetFilterView.create',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views',
    httpMethod: 'POST',
    description: "[Feishu/Lark]-Docs-Sheets-Filter view-Create Filter View-::: noteFor range settings, see: [User guide for using filter conditions in the filter view]:::This API is used to create a filter view based on passed in parameters. The ID and name fields are optional and default values are generated if none are provided. The range field is required. IDs are 10 characters long and composed of numbers and upper and lowercase English letters. Names can't exceed 100 characters. A single sheet can have up to 150 filter views",
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
            filter_view_name: zod_1.z.string().describe('Filter view name').optional(),
            range: zod_1.z.string().describe('Filter view range').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewDelete = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterView.delete',
    sdkName: 'sheets.v3.spreadsheetSheetFilterView.delete',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-Delete Filter View-This API is used to delete the filter view corresponding to the specified ID',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterView.get',
    sdkName: 'sheets.v3.spreadsheetSheetFilterView.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-Obtain Filter View-This API is used to obtain the name and range of a specified filter view ID',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewPatch = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterView.patch',
    sdkName: 'sheets.v3.spreadsheetSheetFilterView.patch',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
    httpMethod: 'PATCH',
    description: "[Feishu/Lark]-Docs-Sheets-Filter view-Update Filter View-::: noteFor range settings, see: [User guide for using filter conditions in the filter view]:::This API is used to update the filter view name or range. The name can't exceed 100 characters and must be unique within the sheet. The range can't exceed the maximum range of the sheet",
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            filter_view_name: zod_1.z.string().describe('Filter view name').optional(),
            range: zod_1.z.string().describe('Filter view range').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            filter_view_id: zod_1.z.string().describe('Filter view ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterViewQuery = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilterView.query',
    sdkName: 'sheets.v3.spreadsheetSheetFilterView.query',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Filter view-Query Filter View-This API is used to query the basic information of all filter views in a sheet, including their IDs, names, and ranges',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterCreate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilter.create',
    sdkName: 'sheets.v3.spreadsheetSheetFilter.create',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Filter-Create Filter-::: noteFor parameter values, see [Filter guide]:::This API is used to create a filter in a sheet',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            range: zod_1.z.string().describe('Range'),
            col: zod_1.z.string().describe('Column with set filter conditions'),
            condition: zod_1.z
                .object({
                filter_type: zod_1.z.string().describe('Filter type'),
                compare_type: zod_1.z.string().describe('Comparison type').optional(),
                expected: zod_1.z.array(zod_1.z.string()).describe('Filter parameter'),
            })
                .describe('Filter conditions'),
        }),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterDelete = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilter.delete',
    sdkName: 'sheets.v3.spreadsheetSheetFilter.delete',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Sheets-Filter-Delete Filter-This API is used to delete the filter of a sheet',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilter.get',
    sdkName: 'sheets.v3.spreadsheetSheetFilter.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Filter-Obtain Filter-This API is used to obtain the filter details for a sheet',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFilterUpdate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFilter.update',
    sdkName: 'sheets.v3.spreadsheetSheetFilter.update',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Docs-Sheets-Filter-Update Filter-::: noteFor parameter values, see [Filter guide]:::This API is used to update column filter conditions in the sheet range',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            col: zod_1.z.string().describe('Column with updated filter conditions'),
            condition: zod_1.z
                .object({
                filter_type: zod_1.z.string().describe('Filter type'),
                compare_type: zod_1.z.string().describe('Comparison type').optional(),
                expected: zod_1.z.array(zod_1.z.string()).describe('Filter parameter'),
            })
                .describe('Filter conditions'),
        }),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFind = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheet.find',
    sdkName: 'sheets.v3.spreadsheetSheet.find',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Cell-Find cells-Search cell locations that match specified conditions in a certain range of the sheet. The range and find fields are required in the request body',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            find_condition: zod_1.z
                .object({
                range: zod_1.z.string().describe('Search range, [glossary range]'),
                match_case: zod_1.z
                    .boolean()
                    .describe('Whether it is case insensitive- `true`: Ignore differences in case of letters in a string- `false`: case sensitive')
                    .optional(),
                match_entire_cell: zod_1.z
                    .boolean()
                    .describe('Whether to match the entire cell- `true`: exact match- `false`: partial match')
                    .optional(),
                search_by_regex: zod_1.z
                    .boolean()
                    .describe('Whether it is regular expression matching- `true`: regular match- `false`: not regular match')
                    .optional(),
                include_formulas: zod_1.z
                    .boolean()
                    .describe('Whether to search formula content- `true`: search formula only- `false`: Search cell contents only')
                    .optional(),
            })
                .describe('Search conditions'),
            find: zod_1.z.string().describe('Found string'),
        }),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Sheet token,[how to get related cloud document resources]((https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN))')
                .optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID, [how to get worksheet id]').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFloatImageCreate = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFloatImage.create',
    sdkName: 'sheets.v3.spreadsheetSheetFloatImage.create',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Floating image-Create Floating Image-::: noteFor information about the settings of a floating image, see [Floating image guide].:::This API is used to create a floating image based on the parameters passed in. Float_image_token ([obtained after uploading an image to a spreadsheet]) and range (only one cell) are required parameters. Float_image_id is optional, and a default ID is generated if this field is not specified. IDs are 10 characters long and composed of numbers (0-9) and upper and lowercase English letters. A spreadsheet cannot have duplicate images, and the total of floating images and cell images cannot exceed 4,000. The width and height specify the display width and height of an image, which are optional. If not specified, the image is displayed according to its actual width and height. offset_x and offset_y specify the offset of the image from the top-left corner of the cell where it is located. These two parameters are optional and default to 0',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            float_image_id: zod_1.z.string().describe('Floating image ID').optional(),
            float_image_token: zod_1.z
                .string()
                .describe('Floating image token. This field is required for image creation, but not for updates. The token is obtained when you upload an image to a spreadsheet')
                .optional(),
            range: zod_1.z
                .string()
                .describe('The position of the cell where the top-left corner of the floating image is located. You can only specify a single cell')
                .optional(),
            width: zod_1.z.number().describe('Floating image width, which is greater than or equal to 20 px').optional(),
            height: zod_1.z.number().describe('Floating image height, which is greater than or equal to 20 px').optional(),
            offset_x: zod_1.z
                .number()
                .describe('The horizontal offset of the top-left corner of a floating image from the top-left corner of the cell where it is located, which must be greater than or equal to 0 and less than the height of the cell')
                .optional(),
            offset_y: zod_1.z
                .number()
                .describe('The vertical offset of the top-left corner of a floating image from the top-left corner of the cell where it is located, which must be greater than or equal to 0 and less than the height of the cell')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFloatImageDelete = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFloatImage.delete',
    sdkName: 'sheets.v3.spreadsheetSheetFloatImage.delete',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Docs-Sheets-Floating image-Delete Floating Image-This API is used to delete the floating image with the specified float_image_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            float_image_id: zod_1.z.string().describe('Floating image ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFloatImageGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFloatImage.get',
    sdkName: 'sheets.v3.spreadsheetSheetFloatImage.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Floating image-Obtain Floating Image-::: noteFor information about floating images, see [Floating image guide]:::This API is used to obtain floating image information based on a float_image_id',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            float_image_id: zod_1.z.string().describe('Floating image ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFloatImagePatch = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFloatImage.patch',
    sdkName: 'sheets.v3.spreadsheetSheetFloatImage.patch',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-Docs-Sheets-Floating image-Update Floating Image-::: noteFor information about how to update a floating image, see [Floating image guide].:::This API is used to update the position and size parameters of an existing floating image, including range, width, height, offset_x, and offset_y. This operation cannot update float_image_id or float_image_token',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            float_image_token: zod_1.z
                .string()
                .describe('Floating image token. This field is required for image creation, but not for updates. The token is obtained when you upload an image to a spreadsheet')
                .optional(),
            range: zod_1.z
                .string()
                .describe('The position of the cell where the top-left corner of the floating image is located. You can only specify a single cell')
                .optional(),
            width: zod_1.z.number().describe('Floating image width, which is greater than or equal to 20 px').optional(),
            height: zod_1.z.number().describe('Floating image height, which is greater than or equal to 20 px').optional(),
            offset_x: zod_1.z
                .number()
                .describe('The horizontal offset of the top-left corner of a floating image from the top-left corner of the cell where it is located, which must be greater than or equal to 0 and less than the height of the cell')
                .optional(),
            offset_y: zod_1.z
                .number()
                .describe('The vertical offset of the top-left corner of a floating image from the top-left corner of the cell where it is located, which must be greater than or equal to 0 and less than the height of the cell')
                .optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
            float_image_id: zod_1.z.string().describe('Floating image ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetFloatImageQuery = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheetFloatImage.query',
    sdkName: 'sheets.v3.spreadsheetSheetFloatImage.query',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-Floating image-Query Floating Image-::: noteFor information about floating images, see [Floating image guide]:::This API returns information on all floating images in a sheet',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetGet = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheet.get',
    sdkName: 'sheets.v3.spreadsheetSheet.get',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-sheet-Query a sheet-This interface is used to query worksheet information by worksheet ID, including the title, index, and whether the sheet is hidden',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Spreadsheet token. Ways to get: - Through the URL of the sheet: https://sample.feishu.cn/sheets/==shtcnmBAyGehy8abcef==- Through the [List items in folder] API (https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)'),
            sheet_id: zod_1.z.string().describe('The ID of the worksheet'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetMoveDimension = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheet.moveDimension',
    sdkName: 'sheets.v3.spreadsheetSheet.moveDimension',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Row Column-Move rows or columns-This API is used to move rows and columns. After rows and columns are moved to a target location, the rows and columns already at the target location are shifted right or down',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            source: zod_1.z
                .object({
                major_dimension: zod_1.z.string().describe('Row or column. values: - ROWS- COLUMNS').optional(),
                start_index: zod_1.z
                    .number()
                    .describe('Start row or column number. Counts from 0. If `startIndex` is 3, move from row or column 4. Contains the fourth row or column')
                    .optional(),
                end_index: zod_1.z
                    .number()
                    .describe("End row or column number. Counts from 0. If `endIndex` is 7, move from row or column 8. The 8th row or column is not contained.Example: When 'majorDimension' is' ROWS', 'startIndex' is 3, and 'endIndex' is 7, the 4th, 5th, 6th, and 7th rows are moved for a total of 4 rows")
                    .optional(),
            })
                .describe('Source location parameter')
                .optional(),
            destination_index: zod_1.z.number().describe('Row or column number of the target location').optional(),
        })
            .optional(),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Sheet token, For details, see [Spreadsheet overview]').optional(),
            sheet_id: zod_1.z.string().describe('Sheet ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetQuery = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheet.query',
    sdkName: 'sheets.v3.spreadsheetSheet.query',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Sheets-sheet-Get a sheet-This interface is used to get all worksheets and their properties under the spreadsheet, including ID, title, index, and whether the worksheet is hidden',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Spreadsheet token. Ways to get: - Through the URL of the sheet: https://sample.feishu.cn/sheets/==shtcnmBAyGehy8abcef==- Through the [List items in folder]')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3SpreadsheetSheetReplace = {
    project: 'sheets',
    name: 'sheets.v3.spreadsheetSheet.replace',
    sdkName: 'sheets.v3.spreadsheetSheet.replace',
    path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Docs-Sheets-Cell-Replace cells-Find data that matches specified conditions in a certain range of the sheet, replace the values, and return the location of the successfully replaced cell. You can replace up to 5,000 cells at a time. If the number of matching cells exceeds the limit, narrow the range before the action. The range, find, and replacement fields are required in the request body',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            find_condition: zod_1.z
                .object({
                range: zod_1.z.string().describe('Search range, [glossary range]'),
                match_case: zod_1.z
                    .boolean()
                    .describe('Whether it is case insensitive- `true`: Ignore differences in case of letters in a string- `false`: case sensitive')
                    .optional(),
                match_entire_cell: zod_1.z
                    .boolean()
                    .describe('Whether to match the entire cell- `true`: exact match- `false`: partial match')
                    .optional(),
                search_by_regex: zod_1.z
                    .boolean()
                    .describe('Whether it is regular expression matching- `true`: regular match- `false`: not regular match')
                    .optional(),
                include_formulas: zod_1.z
                    .boolean()
                    .describe('Whether to search formula content- `true`: search formula only- `false`: Search cell contents only')
                    .optional(),
            })
                .describe('Search conditions'),
            find: zod_1.z.string().describe('Found string'),
            replacement: zod_1.z.string().describe('Replaced string'),
        }),
        path: zod_1.z
            .object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token').optional(),
            sheet_id: zod_1.z.string().describe('Sheet id').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.sheetsV3Tools = [
    exports.sheetsV3SpreadsheetCreate,
    exports.sheetsV3SpreadsheetGet,
    exports.sheetsV3SpreadsheetPatch,
    exports.sheetsV3SpreadsheetSheetFilterViewConditionCreate,
    exports.sheetsV3SpreadsheetSheetFilterViewConditionDelete,
    exports.sheetsV3SpreadsheetSheetFilterViewConditionGet,
    exports.sheetsV3SpreadsheetSheetFilterViewConditionQuery,
    exports.sheetsV3SpreadsheetSheetFilterViewConditionUpdate,
    exports.sheetsV3SpreadsheetSheetFilterViewCreate,
    exports.sheetsV3SpreadsheetSheetFilterViewDelete,
    exports.sheetsV3SpreadsheetSheetFilterViewGet,
    exports.sheetsV3SpreadsheetSheetFilterViewPatch,
    exports.sheetsV3SpreadsheetSheetFilterViewQuery,
    exports.sheetsV3SpreadsheetSheetFilterCreate,
    exports.sheetsV3SpreadsheetSheetFilterDelete,
    exports.sheetsV3SpreadsheetSheetFilterGet,
    exports.sheetsV3SpreadsheetSheetFilterUpdate,
    exports.sheetsV3SpreadsheetSheetFind,
    exports.sheetsV3SpreadsheetSheetFloatImageCreate,
    exports.sheetsV3SpreadsheetSheetFloatImageDelete,
    exports.sheetsV3SpreadsheetSheetFloatImageGet,
    exports.sheetsV3SpreadsheetSheetFloatImagePatch,
    exports.sheetsV3SpreadsheetSheetFloatImageQuery,
    exports.sheetsV3SpreadsheetSheetGet,
    exports.sheetsV3SpreadsheetSheetMoveDimension,
    exports.sheetsV3SpreadsheetSheetQuery,
    exports.sheetsV3SpreadsheetSheetReplace,
];
