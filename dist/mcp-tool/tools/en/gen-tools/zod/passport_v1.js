"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportV1Tools = exports.passportV1SessionQuery = exports.passportV1SessionLogout = void 0;
const zod_1 = require("zod");
exports.passportV1SessionLogout = {
    project: 'passport',
    name: 'passport.v1.session.logout',
    sdkName: 'passport.v1.session.logout',
    path: '/open-apis/passport/v1/sessions/logout',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-Authenticate and Authorize-Login state management-Log out-This interface is used to log out of the user login state',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            idp_credential_id: zod_1.z
                .string()
                .describe('The unique identifier of the idp, required when logout_type = 2')
                .optional(),
            logout_type: zod_1.z
                .number()
                .describe('Used to identify the type of logout Options:1(UserID UserID),2(IdpCredentialID),3(SessionUUID Session uuid)'),
            terminal_type: zod_1.z
                .array(zod_1.z.number())
                .describe('Logout terminal_type, default all logout.- 1：pc- 2：web- 3：android- 4：iOS- 5：server- 6：old version mini program- 8：other mobile')
                .optional(),
            user_id: zod_1.z
                .string()
                .describe('User ID categories, is consistent with the query parameter user_id_type.required when logout_type = 1')
                .optional(),
            logout_reason: zod_1.z
                .number()
                .describe('Logout prompt, optional.- 34：You have changed your login password, please log in again.- 35：Your login status has expired, please log in again. - 36：Your password has expired. Please use the Forgot Password function on the login page to change your password and log in again')
                .optional(),
            sid: zod_1.z
                .string()
                .describe('The session that needs to be logged out accurately, required when logout_type = 3')
                .optional(),
        }),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
    },
};
exports.passportV1SessionQuery = {
    project: 'passport',
    name: 'passport.v1.session.query',
    sdkName: 'passport.v1.session.query',
    path: '/open-apis/passport/v1/sessions/query',
    httpMethod: 'POST',
    description: "[Feishu/Lark]-Authenticate and Authorize-Login state management-Obtain desensitized user login information in batches-This interface is used to query the user's login information",
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ user_ids: zod_1.z.array(zod_1.z.string()).describe('User ID').optional() }).optional(),
        params: zod_1.z
            .object({ user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id']).describe('User ID type').optional() })
            .optional(),
    },
};
exports.passportV1Tools = [exports.passportV1SessionLogout, exports.passportV1SessionQuery];
