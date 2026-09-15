"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanAuthenticationV1Tools = exports.humanAuthenticationV1IdentityCreate = void 0;
const zod_1 = require("zod");
exports.humanAuthenticationV1IdentityCreate = {
    project: 'human_authentication',
    name: 'human_authentication.v1.identity.create',
    sdkName: 'human_authentication.v1.identity.create',
    path: '/open-apis/human_authentication/v1/identities',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Identity Authentication-Upload Identity Information-This interface is used to upload the identity information for real-name authentication. Before arousing active living body authentication, this interface needs to be used for real-name authentication',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            identity_name: zod_1.z.string().describe('Name'),
            identity_code: zod_1.z.string().describe('User identification number'),
            mobile: zod_1.z.string().describe('Mobile phone').optional(),
        }),
        params: zod_1.z.object({
            user_id: zod_1.z
                .string()
                .describe('The unique identifier of the user(For the ID type used, see the next parameter description, the difference and acquisition of different ID types, refer to the document: [How to obtain User ID, Open ID and Union ID?])'),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional(),
        }),
    },
};
exports.humanAuthenticationV1Tools = [exports.humanAuthenticationV1IdentityCreate];
