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
    description: '[Feishu/Lark]-AI-Machine Translation-Text language recognition-Machine translation (MT), supporting recognition of over 100 languages. The return value is ISO 639-1 compliant',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ text: zod_1.z.string().describe('Text whose language is to be recognized') }),
    },
};
exports.translationV1TextTranslate = {
    project: 'translation',
    name: 'translation.v1.text.translate',
    sdkName: 'translation.v1.text.translate',
    path: '/open-apis/translation/v1/text/translate',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-AI-Machine Translation-Translate text-The following languages are supported for translation: "Zh": Chinese ; "Zh-Hant": Traditional Chinese ; "En": English; " Ja ": Japanese ; " Ru ": Russian ; " de ": German ; " Fr ": French ; "It": Italian ; " pl ": Polish ; " Th ": Thai ; "Hi": Hindi ; "Id": Indonesian ; " es ": Spanish ; " Pt ": Portuguese ; " Ko ": Korean ; " vi ": Vietnamese',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            source_language: zod_1.z.string().describe('Source language'),
            text: zod_1.z.string().describe('Source text, character limit is 1,000'),
            target_language: zod_1.z.string().describe('Target language'),
            glossary: zod_1.z
                .array(zod_1.z.object({ from: zod_1.z.string().describe('Associated text'), to: zod_1.z.string().describe('Translation') }))
                .describe('Request level glossary with at most 128 terms, valid only in this translation')
                .optional(),
        }),
    },
};
exports.translationV1Tools = [exports.translationV1TextDetect, exports.translationV1TextTranslate];
