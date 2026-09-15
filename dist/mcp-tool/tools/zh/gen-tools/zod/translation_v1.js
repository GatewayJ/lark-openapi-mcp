"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationV1Tools = exports.translationV1TextTranslate = exports.translationV1TextDetect = void 0;
const zod_1 = require("zod");
exports.translationV1TextDetect = {
    project: 'translation',
    name: 'translation.v1.text.detect',
    sdkName: 'translation.v1.text.detect',
    path: '/open-apis/translation/v1/text/detect',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-AI 能力-机器翻译-识别文本语种-机器翻译 (MT)，支持 100 多种语言识别，返回符合 ISO 639-1 标准',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ text: zod_1.z.string().describe('需要被识别语种的文本') }),
    },
};
exports.translationV1TextTranslate = {
    project: 'translation',
    name: 'translation.v1.text.translate',
    sdkName: 'translation.v1.text.translate',
    path: '/open-apis/translation/v1/text/translate',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-AI 能力-机器翻译-翻译文本-机器翻译 (MT)，支持以下语种互译："zh": 汉语；"zh-Hant": 繁体汉语；"en": 英语；"ja": 日语；"ru": 俄语；"de": 德语；"fr": 法语；"it": 意大利语；"pl": 波兰语；"th": 泰语；"hi": 印地语；"id": 印尼语；"es": 西班牙语；"pt": 葡萄牙语；"ko": 朝鲜语；"vi": 越南语；',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            source_language: zod_1.z.string().describe('源语言'),
            text: zod_1.z.string().describe('源文本，字符上限为 1,000'),
            target_language: zod_1.z.string().describe('目标语言'),
            glossary: zod_1.z
                .array(zod_1.z.object({ from: zod_1.z.string().describe('原文'), to: zod_1.z.string().describe('译文') }))
                .describe('请求级术语表，携带术语，仅在本次翻译中生效（最多能携带 128个术语词）')
                .optional(),
        }),
    },
};
exports.translationV1Tools = [exports.translationV1TextDetect, exports.translationV1TextTranslate];
