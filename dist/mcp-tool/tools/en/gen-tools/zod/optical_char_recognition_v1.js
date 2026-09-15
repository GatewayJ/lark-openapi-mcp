"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opticalCharRecognitionV1Tools = exports.opticalCharRecognitionV1ImageBasicRecognize = void 0;
const zod_1 = require("zod");
exports.opticalCharRecognitionV1ImageBasicRecognize = {
    project: 'optical_char_recognition',
    name: 'optical_char_recognition.v1.image.basicRecognize',
    sdkName: 'optical_char_recognition.v1.image.basicRecognize',
    path: '/open-apis/optical_char_recognition/v1/image/basic_recognize',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-AI-Optical character recognition-Recognize text in pictures-Basic picture recognition interface, recognize the text in the picture, and return the text list by area.File size must be less than 5M',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ image: zod_1.z.string().describe('Picture data after base64').optional() }).optional(),
    },
};
exports.opticalCharRecognitionV1Tools = [exports.opticalCharRecognitionV1ImageBasicRecognize];
