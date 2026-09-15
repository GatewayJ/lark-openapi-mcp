"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecallTool = void 0;
const zod_1 = require("zod");
const request_1 = require("./request");
const searchParamsSchema = {
    query: zod_1.z.string().describe("user input"),
};
exports.RecallTool = {
    name: "openplatform_developer_document_recall",
    description: "Recall for relevant documents in all of the Feishu/Lark Open Platform Developer Documents based on user input.",
    schema: searchParamsSchema,
    handler: async (params, options) => {
        const { query } = params;
        try {
            const results = await (0, request_1.recallDeveloperDocument)(query, options);
            // Return results
            return {
                content: [
                    {
                        type: "text",
                        text: results.length ? `Find ${results.length} results:\n${results.join("\n\n")}` : "No results found",
                    }
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: "text",
                        text: `Search failed:${error instanceof Error ? error.message : 'Unknown error'}`,
                    },
                ],
            };
        }
    }
};
