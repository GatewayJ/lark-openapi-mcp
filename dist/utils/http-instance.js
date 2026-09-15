"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oapiHttpInstance = exports.commonHttpInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const proxy_agent_1 = require("proxy-agent");
const constants_1 = require("./constants");
const proxyAgent = new proxy_agent_1.ProxyAgent();
const traceMiddleware = (request) => {
    if (request.headers) {
        request.headers['User-Agent'] = constants_1.USER_AGENT;
    }
    return request;
};
exports.commonHttpInstance = axios_1.default.create({ proxy: false, httpAgent: proxyAgent, httpsAgent: proxyAgent });
exports.commonHttpInstance.interceptors.request.use(traceMiddleware, undefined, { synchronous: true });
exports.oapiHttpInstance = axios_1.default.create({ proxy: false, httpAgent: proxyAgent, httpsAgent: proxyAgent });
exports.oapiHttpInstance.interceptors.request.use(traceMiddleware, undefined, { synchronous: true });
exports.oapiHttpInstance.interceptors.response.use((response) => response.data);
