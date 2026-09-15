"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recallDeveloperDocument = void 0;
const http_instance_1 = require("../../../utils/http-instance");
const recallDeveloperDocument = async (query, options) => {
    try {
        const { domain, count = 3 } = options;
        // Get Feishu search API endpoint
        const searchEndpoint = `${domain}/document_portal/v1/recall`;
        const payload = {
            question: query,
        };
        // Send network request to Feishu search API
        const response = await http_instance_1.commonHttpInstance.post(searchEndpoint, payload, {
            timeout: 10000,
        });
        // Process search results
        let results = response.data.chunks || [];
        return results.slice(0, count);
    }
    catch (error) {
        throw error;
    }
};
exports.recallDeveloperDocument = recallDeveloperDocument;
