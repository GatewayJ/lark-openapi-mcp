"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imBuiltinTools = exports.larkImBuiltinBatchSendTool = void 0;
const zod_1 = require("zod");
const passthrough_handler_1 = require("../../../../utils/passthrough-handler");
exports.larkImBuiltinBatchSendTool = {
    project: 'im',
    name: 'im.builtin.batchSend',
    accessTokens: ['tenant'],
    description: '[飞书/Lark] - 批量发送消息 - 支持给多个用户、部门批量发送消息，支持文本和卡片',
    schema: {
        data: zod_1.z.object({
            msg_type: zod_1.z
                .enum(['text', 'post', 'image', 'interactive', 'share_chat'])
                .describe('消息类型,如果 msg_type 取值为 text、image、post 或者 share_chat，则消息内容需要传入 content 参数内。如果 msg_type 取值为 interactive，则消息内容需要传入 card 参数内。富文本类型（post）的消息，不支持使用 md 标签。'),
            content: zod_1.z
                .any()
                .describe('消息内容，JSON 结构。该参数的取值与 msg_type 对应，例如 msg_type 取值为 text，则该参数需要传入文本类型的内容。')
                .optional(),
            card: zod_1.z
                .any()
                .describe('卡片内容，JSON 结构。该参数的取值与 msg_type 对应，仅当 msg_type 取值为 interactive 时，需要将卡片内容传入当前参数。当 msg_type 取值不为 interactive 时，消息内容需要传入到 content 参数。')
                .optional(),
            open_ids: zod_1.z.array(zod_1.z.string()).describe('接收者open_id列表').optional(),
            user_ids: zod_1.z.array(zod_1.z.string()).describe('接收者user_id列表').optional(),
            union_ids: zod_1.z.array(zod_1.z.string()).describe('接收者union_id列表').optional(),
            department_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('部门 ID 列表。列表内支持传入部门 department_id 和 open_department_id')
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
