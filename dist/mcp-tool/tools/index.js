"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllToolsZh = exports.AllTools = void 0;
const builtin_tools_1 = require("./en/builtin-tools");
const builtin_tools_2 = require("./zh/builtin-tools");
const gen_tools_1 = require("./en/gen-tools");
const gen_tools_2 = require("./zh/gen-tools");
exports.AllTools = [...gen_tools_1.GenTools, ...builtin_tools_1.BuiltinTools];
exports.AllToolsZh = [...gen_tools_2.GenTools, ...builtin_tools_2.BuiltinTools];
