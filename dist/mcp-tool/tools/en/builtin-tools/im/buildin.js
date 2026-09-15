"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imBuiltinTools = exports.larkImBuiltinBatchSendTool = void 0;
const zod_1 = require("zod");
const passthrough_handler_1 = require("../../../../utils/passthrough-handler");
exports.larkImBuiltinBatchSendTool = {
    project: 'im',
    name: 'im.builtin.batchSend',
    accessTokens: ['tenant'],
    description: '[Feishu/Lark] - Batch send messages - Supports batch sending messages to multiple users and departments, supports text and card',
    schema: {
        data: zod_1.z.object({
            msg_type: zod_1.z
                .enum(['text', 'post', 'image', 'interactive', 'share_chat'])
                .describe('Message type. If msg_type is text, image, post, or share_chat, the message content should be passed in the content parameter. If msg_type is interactive, the message content should be passed in the card parameter. Rich text type (post) messages do not support md tags.'),
            content: zod_1.z
                .any()
                .describe('Message content, JSON structure. The value of this parameter corresponds to msg_type. For example, if msg_type is text, this parameter should be the text content.')
                .optional(),
            card: zod_1.z
                .any()
                .describe('Card content, JSON structure. The value of this parameter corresponds to msg_type. Only when msg_type is interactive, the card content should be passed in this parameter. When msg_type is not interactive, the message content should be passed in the content parameter.')
                .optional(),
            open_ids: zod_1.z.array(zod_1.z.string()).describe('List of recipient open_ids').optional(),
            user_ids: zod_1.z.array(zod_1.z.string()).describe('List of recipient user_ids').optional(),
            union_ids: zod_1.z.array(zod_1.z.string()).describe('List of recipient union_ids').optional(),
            department_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('List of department IDs. The list supports both department_id and open_department_id')
                .optional(),
        }),
    },
    customHandler: async (client, params, options) => {
        var _a, _b, _c;
        try {
            const { data } = params;
            const requestCredential = (options === null || options === void 0 ? void 0 : options.credential) || ((_a = options === null || options === void 0 ? void 0 : options.context) === null || _a === void 0 ? void 0 : _a.credential);
            const requestParams = {
                method: 'POST',
                url: '/open-apis/message/v4/batch_send',
                data,
            };
            const response = requestCredential
                ? await client.request(requestParams, (0, passthrough_handler_1.withRequestCredential)(requestCredential))
                : await client.request(requestParams);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify((_b = response.data) !== null && _b !== void 0 ? _b : response),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) || error),
                    },
                ],
            };
        }
    },
};
exports.imBuiltinTools = [exports.larkImBuiltinBatchSendTool];
