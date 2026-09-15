"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventV1Tools = exports.eventV1OutboundIpList = void 0;
const zod_1 = require("zod");
exports.eventV1OutboundIpList = {
    project: 'event',
    name: 'event.v1.outboundIp.list',
    sdkName: 'event.v1.outboundIp.list',
    path: '/open-apis/event/v1/outbound_ip',
    httpMethod: 'GET',
    description: "[Feishu/Lark]-Events and callbacks-Event subscriptions-Get event's outbound IP-When Feishu Open Platform pushes events to the callback address configured by the application, it is sent out through a specific IP, and the application can get all relevant IP addresses through this interface",
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({ page_size: zod_1.z.number().optional(), page_token: zod_1.z.string().optional() }).optional(),
    },
};
exports.eventV1Tools = [exports.eventV1OutboundIpList];
