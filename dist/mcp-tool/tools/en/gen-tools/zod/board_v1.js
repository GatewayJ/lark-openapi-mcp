"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardV1Tools = exports.boardV1WhiteboardNodeList = void 0;
const zod_1 = require("zod");
exports.boardV1WhiteboardNodeList = {
    project: 'board',
    name: 'board.v1.whiteboardNode.list',
    sdkName: 'board.v1.whiteboardNode.list',
    path: '/open-apis/board/v1/whiteboards/:whiteboard_id/nodes',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-Docs-Board-nodes-list nodes-Obtain all nodes of a board',
    accessTokens: ['tenant', 'user'],
    schema: {
        path: zod_1.z.object({ whiteboard_id: zod_1.z.string().describe('The unique identification of the board') }),
        useUAT: zod_1.z.boolean().describe('Use user access token, otherwise use tenant access token').optional(),
    },
};
exports.boardV1Tools = [exports.boardV1WhiteboardNodeList];
