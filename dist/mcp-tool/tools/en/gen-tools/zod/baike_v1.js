"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baikeV1Tools = exports.baikeV1EntityUpdate = exports.baikeV1EntitySearch = exports.baikeV1EntityMatch = exports.baikeV1EntityList = exports.baikeV1EntityHighlight = exports.baikeV1EntityGet = exports.baikeV1EntityExtract = exports.baikeV1EntityCreate = exports.baikeV1DraftUpdate = exports.baikeV1DraftCreate = exports.baikeV1ClassificationList = void 0;
const zod_1 = require("zod");
exports.baikeV1ClassificationList = {
    project: 'baike',
    name: 'baike.v1.classification.list',
    sdkName: 'baike.v1.classification.list',
    path: '/open-apis/baike/v1/classifications',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Classification-Classification list-Get Lingo classification data, Baike currently supports primary classification and sub-classification, temporarily does not support multi-level classification',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Page size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1DraftCreate = {
    project: 'baike',
    name: 'baike.v1.draft.create',
    sdkName: 'baike.v1.draft.create',
    path: '/open-apis/baike/v1/drafts',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Draft-Create draft-Drafts are separate definitions and are not bound to entity words. Creating drafts is not the same as creating entity words. Creating drafts may be creating entity words or updating entity words',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            id: zod_1.z
                .string()
                .describe('Entry ID (fill in when you need to update a certain entry, but not if you create a new entry)')
                .optional(),
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Value of name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z
                        .boolean()
                        .describe('Whether the corresponding name is highlighted in the message/cloud document'),
                    allow_search: zod_1.z.boolean().describe('Whether the corresponding name is displayed in the search results'),
                })
                    .describe('Name Display Scope'),
            }))
                .describe('Entry name'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Value of name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z
                        .boolean()
                        .describe('Whether the corresponding name is highlighted in the message/cloud document'),
                    allow_search: zod_1.z.boolean().describe('Whether the corresponding name is displayed in the search results'),
                })
                    .describe('Name Display Scope'),
            }))
                .describe('alias')
                .optional(),
            description: zod_1.z
                .string()
                .describe('Explanation of terms in plain text format. Note: There is at least one description and rich_text, otherwise an error will be reported: 1540001')
                .optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('Corresponding to the relevant information ID'),
                    title: zod_1.z
                        .string()
                        .describe('Description of relevant information, such as description of relevant contact person, title of relevant link')
                        .optional(),
                }))
                    .describe('Related contacts')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Corresponding to the relevant information ID') }))
                    .describe('Related public groups in related services')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z
                        .string()
                        .describe('Description of relevant information, such as description of relevant contact person, title of relevant link')
                        .optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Related Cloud Documentation')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Corresponding to the relevant information ID') }))
                    .describe('Related on-duty accounts in related services')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z
                        .string()
                        .describe('Description of relevant information, such as description of relevant contact person, title of relevant link')
                        .optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Related Links')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Related entry ID').optional() }))
                    .describe('Related terms')
                    .optional(),
                classifications: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('sub-category ID'),
                    father_id: zod_1.z.string().describe('Corresponding to the first-level classification ID').optional(),
                }))
                    .describe('Category to which the current entry belongs < br >Entries can only belong to sub-categories, and only one sub-category can be selected under each first-level category')
                    .optional(),
                images: zod_1.z
                    .array(zod_1.z.object({
                    token: zod_1.z
                        .string()
                        .describe('The picture token obtained after uploading the picture through the file interface'),
                }))
                    .describe('Uploaded image')
                    .optional(),
            })
                .describe('More related information')
                .optional(),
            outer_info: zod_1.z
                .object({
                provider: zod_1.z.string().describe('External system (cannot contain horizontal line "-")'),
                outer_id: zod_1.z
                    .string()
                    .describe('The unique ID corresponding to the entry in the external system (cannot contain a dash "-")'),
            })
                .describe('External System Linked Data')
                .optional(),
            rich_text: zod_1.z
                .string()
                .describe('Rich text format (when filling in rich text content, the description field will be invalid and may not be filled in), supported formats refer to the interpretation section in [Feishu Dictionary Guide]')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1DraftUpdate = {
    project: 'baike',
    name: 'baike.v1.draft.update',
    sdkName: 'baike.v1.draft.update',
    path: '/open-apis/baike/v1/drafts/:draft_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Draft-Update draft-Update draft content according to draft_id, approved drafts cannot be edited',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            id: zod_1.z.string().describe('Entity word Id').optional(),
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Key words'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Alias')
                .optional(),
            description: zod_1.z
                .string()
                .describe('Definition of entries in plain text format. Note: There must be at least one description and rich_text, otherwise an error will be reported: 1540001')
                .optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id'), title: zod_1.z.string().describe('Title').optional() }))
                    .describe('Related user information')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated group information')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Related Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated Duty Officer Information')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Associated link information')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('entity id').optional() }))
                    .describe('Entries with similar meaning or relevance can be set as related, and can be displayed as related entries in the entry')
                    .optional(),
                classifications: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('Classification ID'),
                    father_id: zod_1.z.string().describe('The ID of the parent classification').optional(),
                }))
                    .describe('Classification information (does not support passing in first-level classifications. Entries cannot belong to multiple sub-classifications under the same first-level classification at the same time, and sub-classifications under the first-level classification are mutually exclusive)')
                    .optional(),
                images: zod_1.z
                    .array(zod_1.z.object({ token: zod_1.z.string().describe('Image token uploaded through the file interface') }))
                    .describe('Uploaded related images')
                    .optional(),
            })
                .describe('Related data')
                .optional(),
            rich_text: zod_1.z.string().describe('Description information in rich text format').optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ draft_id: zod_1.z.string().describe('Draft Id') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityCreate = {
    project: 'baike',
    name: 'baike.v1.entity.create',
    sdkName: 'baike.v1.entity.create',
    path: '/open-apis/baike/v1/entities',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Create an exemption entry-Create the existing entries through this interface, do not need Lingo a moderator review can be written directly to the thesaurus, please use carefully [tenant moderator please review carefully]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Key words'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Alias')
                .optional(),
            description: zod_1.z
                .string()
                .describe('Definition of entries in plain text format. Note: There must be at least one description and rich_text, otherwise an error will be reported: 1540001')
                .optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id'), title: zod_1.z.string().describe('Title').optional() }))
                    .describe('Related user information')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated group information')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Related Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated Duty Officer Information')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Associated link information')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('entity id').optional() }))
                    .describe('Entries with similar meaning or relevance can be set as related, and can be displayed as related entries in the entry')
                    .optional(),
                classifications: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('Classification ID'),
                    father_id: zod_1.z.string().describe('The ID of the parent classification').optional(),
                }))
                    .describe('Classification information (does not support passing in first-level classifications. Entries cannot belong to multiple sub-classifications under the same first-level classification at the same time, and sub-classifications under the first-level classification are mutually exclusive)')
                    .optional(),
                images: zod_1.z
                    .array(zod_1.z.object({ token: zod_1.z.string().describe('Image token uploaded through the file interface') }))
                    .describe('Uploaded related images')
                    .optional(),
            })
                .describe('Related data')
                .optional(),
            outer_info: zod_1.z
                .object({
                provider: zod_1.z.string().describe('Data provider (can not include the horizontal line "-")'),
                outer_id: zod_1.z
                    .string()
                    .describe('External id is unique for each entry (cannot contain the horizontal line "-")'),
            })
                .describe('External id associated data')
                .optional(),
            rich_text: zod_1.z
                .string()
                .describe('Description information in rich text format**Note**: The rich text format needs to contain at least one `<p>` tag, otherwise the request will report an error')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityExtract = {
    project: 'baike',
    name: 'baike.v1.entity.extract',
    sdkName: 'baike.v1.entity.extract',
    path: '/open-apis/baike/v1/entities/extract',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Extract lingo entity words-Extract physical words in the text that could become Baike entries and recommend possible aliases (does not filter content where tenants have become Baike entries)',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            text: zod_1.z
                .string()
                .describe('The text that needs to be extracted for the Baike entity word (does not filter the content of the tenant that has become a Baike entry)')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityGet = {
    project: 'baike',
    name: 'baike.v1.entity.get',
    sdkName: 'baike.v1.entity.get',
    path: '/open-apis/baike/v1/entities/:entity_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Get entity-Pull the corresponding entity details through the entity id',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            provider: zod_1.z.string().describe('Data provider').optional(),
            outer_id: zod_1.z.string().describe('External unique id').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        path: zod_1.z.object({ entity_id: zod_1.z.string().describe('Entity word id').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityHighlight = {
    project: 'baike',
    name: 'baike.v1.entity.highlight',
    sdkName: 'baike.v1.entity.highlight',
    path: '/open-apis/baike/v1/entities/highlight',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Highlight entity-The user passes in a sentence and returns the position and corresponding Id of the entity word, allowing the user to highlight the entity word',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            text: zod_1.z
                .string()
                .describe('A sentence that requires the content of the entity word to be recognized (no more than 1000 words)'),
        }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityList = {
    project: 'baike',
    name: 'baike.v1.entity.list',
    sdkName: 'baike.v1.entity.list',
    path: '/open-apis/baike/v1/entities',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Get entities-Paging entity word data to support all entity word pulling within the tenant',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Page size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            provider: zod_1.z.string().describe('Data provider [can be used to filter data]').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityMatch = {
    project: 'baike',
    name: 'baike.v1.entity.match',
    sdkName: 'baike.v1.entity.match',
    path: '/open-apis/baike/v1/entities/match',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Match entity-Accurately match the keywords, full names, and alias attributes of entity words, and recall the corresponding IDs',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ word: zod_1.z.string().describe('Entity word main keyword, full name, alias full match') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntitySearch = {
    project: 'baike',
    name: 'baike.v1.entity.search',
    sdkName: 'baike.v1.entity.search',
    path: '/open-apis/baike/v1/entities/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Search entity-Passing in keywords, performing fuzzy matching to search for corresponding entity words',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            query: zod_1.z.string().describe('Search keywords').optional(),
            classification_filter: zod_1.z
                .object({
                include: zod_1.z.array(zod_1.z.string()).describe('Classification to be obtained').optional(),
                exclude: zod_1.z.array(zod_1.z.string()).describe('Classification to be excluded').optional(),
            })
                .describe('Classification Filter')
                .optional(),
            sources: zod_1.z
                .array(zod_1.z.number())
                .describe('Creation source of the entry, 1: user creation, 2: batch import, 3: official, 4: OpenAPI creation')
                .optional(),
            creators: zod_1.z.array(zod_1.z.string()).describe('creator').optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Page size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1EntityUpdate = {
    project: 'baike',
    name: 'baike.v1.entity.update',
    sdkName: 'baike.v1.entity.update',
    path: '/open-apis/baike/v1/entities/:entity_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Lingo-Entity-Update the exemption entry-Update the existing entries through this interface, do not need Lingo moderator review can be written directly to the thesaurus, please use carefully [tenant moderator please review carefully]',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Key words'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting'),
                    allow_search: zod_1.z.boolean().describe('Whether to allow search'),
                })
                    .describe('Display status'),
            }))
                .describe('Alias')
                .optional(),
            description: zod_1.z
                .string()
                .describe('Definition of entries in plain text format. Note: There must be at least one description and rich_text, otherwise an error will be reported: 1540001')
                .optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id'), title: zod_1.z.string().describe('Title').optional() }))
                    .describe('Related user information')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated group information')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Related Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated Duty Officer Information')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('Title').optional(),
                    url: zod_1.z.string().describe('Link address').optional(),
                }))
                    .describe('Associated link information')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('entity id').optional() }))
                    .describe('Entries with similar meaning or relevance can be set as related, and can be displayed as related entries in the entry')
                    .optional(),
                classifications: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('Classification ID'),
                    father_id: zod_1.z.string().describe('The ID of the parent classification').optional(),
                }))
                    .describe('Classification information (does not support passing in first-level classifications. Entries cannot belong to multiple sub-classifications under the same first-level classification at the same time, and sub-classifications under the first-level classification are mutually exclusive)')
                    .optional(),
                images: zod_1.z
                    .array(zod_1.z.object({ token: zod_1.z.string().describe('Image token uploaded through the file interface') }))
                    .describe('Uploaded related images')
                    .optional(),
            })
                .describe('Related data')
                .optional(),
            outer_info: zod_1.z
                .object({
                provider: zod_1.z.string().describe('Data provider (can not include the horizontal line "-")'),
                outer_id: zod_1.z
                    .string()
                    .describe('External id is unique for each entry (cannot contain the horizontal line "-")'),
            })
                .describe('External id associated data')
                .optional(),
            rich_text: zod_1.z.string().describe('Description information in rich text format').optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ entity_id: zod_1.z.string().describe('Entity word ID').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.baikeV1Tools = [
    exports.baikeV1ClassificationList,
    exports.baikeV1DraftCreate,
    exports.baikeV1DraftUpdate,
    exports.baikeV1EntityCreate,
    exports.baikeV1EntityExtract,
    exports.baikeV1EntityGet,
    exports.baikeV1EntityHighlight,
    exports.baikeV1EntityList,
    exports.baikeV1EntityMatch,
    exports.baikeV1EntitySearch,
    exports.baikeV1EntityUpdate,
];
