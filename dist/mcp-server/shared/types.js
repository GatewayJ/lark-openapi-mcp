"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpServerOptionSchema = void 0;
const zod_1 = require("zod");
exports.mcpServerOptionSchema = zod_1.z.object({
    tools: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    language: zod_1.z.enum(['zh', 'en']).optional(),
    toolNameCase: zod_1.z.enum(['snake', 'camel']).optional(),
    tokenMode: zod_1.z.enum(['auto', 'user_access_token', 'tenant_access_token']).optional(),
    credentialMode: zod_1.z.enum(['standalone', 'passthrough']).optional(),
});
