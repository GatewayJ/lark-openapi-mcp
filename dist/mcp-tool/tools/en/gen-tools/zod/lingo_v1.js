"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lingoV1Tools = exports.lingoV1RepoList = exports.lingoV1EntityUpdate = exports.lingoV1EntitySearch = exports.lingoV1EntityMatch = exports.lingoV1EntityList = exports.lingoV1EntityHighlight = exports.lingoV1EntityGet = exports.lingoV1EntityDelete = exports.lingoV1EntityCreate = exports.lingoV1DraftUpdate = exports.lingoV1DraftCreate = exports.lingoV1ClassificationList = void 0;
const zod_1 = require("zod");
exports.lingoV1ClassificationList = {
    project: 'lingo',
    name: 'lingo.v1.classification.list',
    sdkName: 'lingo.v1.classification.list',
    path: '/open-apis/lingo/v1/classifications',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Lingo-Classification-Classification list-Get Lingo classification data, Baike currently supports primary classification and sub-classification, temporarily does not support multi-level classification',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            repo_id: zod_1.z
                .string()
                .describe('repo id (it will be organization repo by default when not passing it)')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1DraftCreate = {
    project: 'lingo',
    name: 'lingo.v1.draft.create',
    sdkName: 'lingo.v1.draft.create',
    path: '/open-apis/lingo/v1/drafts',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Lingo-draft-Create draft-Draft is not an entry, but an application to create a new entry or update an existing entry through the API.After the dictionary administrator approves it, the draft will become a new entry or overwrite an existing entry',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            id: zod_1.z
                .string()
                .describe('Entry ID (fill in when you need to update a certain entry, but not if you create a new entry)')
                .optional(),
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('The display scope of the name'),
            }))
                .describe('Entry name'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Value of name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('The display scope of the name'),
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
                    .describe('Related entry information')
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
                    .describe('Uploaded related pictures')
                    .optional(),
            })
                .describe('More related information')
                .optional(),
            outer_info: zod_1.z
                .object({
                provider: zod_1.z.string().describe('Data provider (cannot contain a dash "-")'),
                outer_id: zod_1.z
                    .string()
                    .describe('Unique identifier, which can be used to bind with the content of other platforms. It needs to be guaranteed to correspond uniquely to the encyclopedia entry (cannot contain the horizontal line "-")'),
            })
                .describe('External System Linked Data')
                .optional(),
            rich_text: zod_1.z
                .string()
                .describe('Rich text format (when filling in rich text content, the description field will be invalid and may not be filled in), the supported formats refer to the paraphrasing section in the [Enterprise Encyclopedia Guide]')
                .optional(),
            i18n_descs: zod_1.z
                .array(zod_1.z.object({
                language: zod_1.z.number().describe('language type Options:1(ZH_CN Chinese),2(EN_US English),3(JA_JP Japanese)'),
                description: zod_1.z.string().describe('plain text interpretation').optional(),
                rich_text: zod_1.z.string().describe('Rich Text Description').optional(),
            }))
                .describe('Internationalization of terms')
                .optional(),
        }),
        params: zod_1.z
            .object({
            repo_id: zod_1.z
                .string()
                .describe('repo id (you need to pass it in when creating an draft in the specified repo, and it will be created to the organization repo by default when not passing it)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1DraftUpdate = {
    project: 'lingo',
    name: 'lingo.v1.draft.update',
    sdkName: 'lingo.v1.draft.update',
    path: '/open-apis/lingo/v1/drafts/:draft_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Lingo-draft-Update draft-The draft content is updated according to the draft_id, and the approved draft cannot be edited',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            id: zod_1.z
                .string()
                .describe('Entry ID (fill in when you need to update a certain entry, but not if you create a new entry)')
                .optional(),
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
            }))
                .describe('Entry name'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
            }))
                .describe('alias')
                .optional(),
            description: zod_1.z.string().describe('Detailed description').optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID'), title: zod_1.z.string().describe('title').optional() }))
                    .describe('Associated user information')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID') }))
                    .describe('Associated group information')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Associated Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID') }))
                    .describe('Associated Duty Information')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Associated link information')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Related other entries id').optional() }))
                    .describe('Related entry information')
                    .optional(),
                classifications: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().describe('sub-category ID'),
                    father_id: zod_1.z.string().describe('Corresponding to the first-level classification ID').optional(),
                }))
                    .describe('Category to which the current entry belongs < br >Entries can only belong to sub-categories, and only one sub-category can be selected under each first-level category')
                    .optional(),
                images: zod_1.z
                    .array(zod_1.z.object({ token: zod_1.z.string().describe('Image token uploaded through the file interface') }))
                    .describe('Uploaded related pictures')
                    .optional(),
            })
                .describe('Relevant data')
                .optional(),
            rich_text: zod_1.z.string().describe('Description information in rich text format').optional(),
            i18n_descs: zod_1.z
                .array(zod_1.z.object({
                language: zod_1.z.number().describe('language type Options:1(ZH_CN Chinese),2(EN_US English),3(JA_JP Japanese)'),
                description: zod_1.z.string().describe('plain text interpretation').optional(),
                rich_text: zod_1.z.string().describe('Rich Text Description').optional(),
            }))
                .describe('Internationalization of terms')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ draft_id: zod_1.z.string().describe('Draft Id') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1EntityCreate = {
    project: 'lingo',
    name: 'lingo.v1.entity.create',
    sdkName: 'lingo.v1.entity.create',
    path: '/open-apis/lingo/v1/entities',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Lingo-entity-Create an exemption entry-Create the existing entries through this interface, do not need Lingo a moderator review can be written directly to the thesaurus, please use carefully [tenant moderator please review carefully',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
            }))
                .describe('Entry name'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
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
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID'), title: zod_1.z.string().describe('title').optional() }))
                    .describe('Related contacts')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID') }))
                    .describe('Associated group information')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Associated Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data ID') }))
                    .describe('Related on-duty accounts in related services')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Associated link information')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Related other entries id').optional() }))
                    .describe('Related entry information')
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
                .describe('More related information')
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
            i18n_descs: zod_1.z
                .array(zod_1.z.object({
                language: zod_1.z.number().describe('language type Options:1(ZH_CN Chinese),2(EN_US English),3(JA_JP Japanese)'),
                description: zod_1.z.string().describe('plain text interpretation').optional(),
                rich_text: zod_1.z.string().describe('Rich Text Description').optional(),
            }))
                .describe('Internationalization of terms')
                .optional(),
        }),
        params: zod_1.z
            .object({
            repo_id: zod_1.z
                .string()
                .describe('repo id (you need to pass it in when creating an entry in the specified repo, and it will be created to the organization repo by default when not passing it)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
    },
};
exports.lingoV1EntityDelete = {
    project: 'lingo',
    name: 'lingo.v1.entity.delete',
    sdkName: 'lingo.v1.entity.delete',
    path: '/open-apis/lingo/v1/entities/:entity_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-Lingo-entity-Delete the exemption entry-Delete the existing entries by entity_id, do not need Lingo moderator review, please use carefully [tenant moderator please review carefully]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            provider: zod_1.z
                .string()
                .describe('External system (when using, you need to fix the entry ID in the path as: enterprise_0, and the provider and outer_id)')
                .optional(),
            outer_id: zod_1.z
                .string()
                .describe('The unique ID corresponding to the entry in the external system (when using it, you need to fix the entry ID in the path as: enterprise_0, and the provider and outer_id)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ entity_id: zod_1.z.string().describe('Entry ID') }),
    },
};
exports.lingoV1EntityGet = {
    project: 'lingo',
    name: 'lingo.v1.entity.get',
    sdkName: 'lingo.v1.entity.get',
    path: '/open-apis/lingo/v1/entities/:entity_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Lingo-entity-Get entity-Pull the corresponding entity details through the entity id',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            provider: zod_1.z.string().describe('Data provider').optional(),
            outer_id: zod_1.z.string().describe('External unique id').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        path: zod_1.z.object({ entity_id: zod_1.z.string().describe('Entry ID').optional() }).optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1EntityHighlight = {
    project: 'lingo',
    name: 'lingo.v1.entity.highlight',
    sdkName: 'lingo.v1.entity.highlight',
    path: '/open-apis/lingo/v1/entities/highlight',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Lingo-entity-Highlight entity-The user passes in a sentence and returns the position and corresponding Id of the entity word, allowing the user to highlight the entity word',
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
exports.lingoV1EntityList = {
    project: 'lingo',
    name: 'lingo.v1.entity.list',
    sdkName: 'lingo.v1.entity.list',
    path: '/open-apis/lingo/v1/entities',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Lingo-entity-Get entities-Paging entity word data to support all entity word pulling within the tenant',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('paging size').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            provider: zod_1.z.string().describe('Data provider [can be used to filter data]').optional(),
            repo_id: zod_1.z
                .string()
                .describe('repo_id (organization repo data is returned by default when not passed)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1EntityMatch = {
    project: 'lingo',
    name: 'lingo.v1.entity.match',
    sdkName: 'lingo.v1.entity.match',
    path: '/open-apis/lingo/v1/entities/match',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Lingo-entity-Match entity-Accurately match the keyword with the entry name and alias, and return the corresponding entry ID',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({ word: zod_1.z.string().describe('Entity word main keyword, full name, alias full match') }),
        params: zod_1.z
            .object({
            repo_id: zod_1.z
                .string()
                .describe('repo_id (search in the organization repo by default when not passing)')
                .optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1EntitySearch = {
    project: 'lingo',
    name: 'lingo.v1.entity.search',
    sdkName: 'lingo.v1.entity.search',
    path: '/open-apis/lingo/v1/entities/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Lingo-entity-Search entity-Passing in keywords, performing fuzzy matching to search for corresponding entity words',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            query: zod_1.z.string().describe('Search keywords').optional(),
            classification_filter: zod_1.z
                .object({
                include: zod_1.z.array(zod_1.z.string()).describe('Classification to be obtained').optional(),
                exclude: zod_1.z.array(zod_1.z.string()).describe('Categories to be excluded').optional(),
            })
                .describe('Category Filter')
                .optional(),
            sources: zod_1.z
                .array(zod_1.z.number())
                .describe('Creation source of the entry, 1: user initiative creation, 2: batch import, 3: official word, 4: OpenAPI creation')
                .optional(),
            creators: zod_1.z.array(zod_1.z.string()).describe('creator').optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            page_size: zod_1.z.number().describe('Number of entries returned per page').optional(),
            page_token: zod_1.z
                .string()
                .describe('Page identifier. It is not filled in the first request, indicating traversal from the beginning when there will be more groups, the new page_token will be returned at the same time, and the next traversal can use the page_token to get more groups')
                .optional(),
            repo_id: zod_1.z
                .string()
                .describe('repo_id (search in the organization repo by default when not passing)')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1EntityUpdate = {
    project: 'lingo',
    name: 'lingo.v1.entity.update',
    sdkName: 'lingo.v1.entity.update',
    path: '/open-apis/lingo/v1/entities/:entity_id',
    httpMethod: 'PUT',
    description: '[Feishu/Lark]-Lingo-entity-Update the exemption entry-Update the existing entries through this interface, do not need Lingo moderator review can be written directly to the thesaurus, please use carefully [tenant moderator please review carefully]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            main_keys: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('Content'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
            }))
                .describe('Entry name'),
            aliases: zod_1.z
                .array(zod_1.z.object({
                key: zod_1.z.string().describe('name'),
                display_status: zod_1.z
                    .object({
                    allow_highlight: zod_1.z.boolean().describe('Whether to allow highlighting in scenes such as IM and Doc'),
                    allow_search: zod_1.z.boolean().describe('Is it allowed to be searched in Feishu?'),
                })
                    .describe('display status'),
            }))
                .describe('alias')
                .optional(),
            description: zod_1.z
                .string()
                .describe('Definition of entries in plain text format. Note: There must be at least one description and rich_text, otherwise an error will be reported: 1540001')
                .optional(),
            related_meta: zod_1.z
                .object({
                users: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id'), title: zod_1.z.string().describe('title').optional() }))
                    .describe('Related user information')
                    .optional(),
                chats: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Related public groups in related services')
                    .optional(),
                docs: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Related Document Information')
                    .optional(),
                oncalls: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Data id') }))
                    .describe('Associated Duty Officer Information')
                    .optional(),
                links: zod_1.z
                    .array(zod_1.z.object({
                    title: zod_1.z.string().describe('title').optional(),
                    url: zod_1.z.string().describe('link address').optional(),
                }))
                    .describe('Related Links')
                    .optional(),
                abbreviations: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('Related other entries id').optional() }))
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
            i18n_descs: zod_1.z
                .array(zod_1.z.object({
                language: zod_1.z.number().describe('language type Options:1(ZH_CN Chinese),2(EN_US English),3(JA_JP Japanese)'),
                description: zod_1.z.string().describe('plain text interpretation').optional(),
                rich_text: zod_1.z.string().describe('Rich Text Description').optional(),
            }))
                .describe('Internationalization of terms')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
        path: zod_1.z.object({ entity_id: zod_1.z.string().describe('Entry ID').optional() }).optional(),
    },
};
exports.lingoV1RepoList = {
    project: 'lingo',
    name: 'lingo.v1.repo.list',
    sdkName: 'lingo.v1.repo.list',
    path: '/open-apis/lingo/v1/repos',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Lingo-repo-repo list-get the list of lingo repos that you have permission to access. To obtain as an application, you need to add an application on the lingo admin console; If obtaining as a user, the user needs to have visible permissions for the repo',
    accessTokens: ['tenant', 'user'],
    schema: {
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.lingoV1Tools = [
    exports.lingoV1ClassificationList,
    exports.lingoV1DraftCreate,
    exports.lingoV1DraftUpdate,
    exports.lingoV1EntityCreate,
    exports.lingoV1EntityDelete,
    exports.lingoV1EntityGet,
    exports.lingoV1EntityHighlight,
    exports.lingoV1EntityList,
    exports.lingoV1EntityMatch,
    exports.lingoV1EntitySearch,
    exports.lingoV1EntityUpdate,
    exports.lingoV1RepoList,
];
