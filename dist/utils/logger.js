"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = exports.LogLevel = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const version_1 = require("./version");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor() {
        this.level = LogLevel.WARN;
        this.initLogFile = () => {
            if (!fs_1.default.existsSync(constants_1.ENV_PATHS.log)) {
                fs_1.default.mkdirSync(constants_1.ENV_PATHS.log, { recursive: true });
            }
        };
        this.cleanHistoryLogFile = () => {
            try {
                // clean old log files, 7 days ago
                const logFiles = fs_1.default
                    .readdirSync(constants_1.ENV_PATHS.log)
                    .filter((file) => file.startsWith(Logger.logFilePrefix) && file.endsWith('.log'));
                const logFilesToDelete = logFiles.filter((file) => {
                    const fileDate = file.split('-')[1].split('.')[0];
                    const fileDateObj = new Date(fileDate);
                    return fileDateObj < new Date(Date.now() - Logger.logFilesToKeep * 24 * 60 * 60 * 1000);
                });
                for (const file of logFilesToDelete) {
                    try {
                        fs_1.default.unlinkSync(path_1.default.join(constants_1.ENV_PATHS.log, file));
                    }
                    catch (error) {
                        console.error(`Failed to delete log file: ${error}`);
                    }
                }
            }
            catch (error) {
                console.error(`Failed to clean history log file: ${error}`);
            }
        };
        this.setLevel = (level) => {
            this.level = level;
        };
        this.log = (message) => {
            try {
                fs_1.default.appendFileSync(path_1.default.join(constants_1.ENV_PATHS.log, this.logFileName), `[${new Date().toISOString()}] [${version_1.currentVersion}] [${process.pid}] ${message}\n`);
            }
            catch (error) {
                console.error(`Failed to write log: ${error} ${message}`);
            }
        };
        this.debug = (message) => {
            if (this.level < LogLevel.DEBUG) {
                return;
            }
            this.log(`[DEBUG] ${message}`);
        };
        this.info = (message) => {
            if (this.level < LogLevel.INFO) {
                return;
            }
            this.log(`[INFO] ${message}`);
        };
        this.warn = (message) => {
            if (this.level < LogLevel.WARN) {
                return;
            }
            console.error(`[WARN] ${message}`);
            this.log(`[WARN] ${message}`);
        };
        this.error = (message) => {
            if (this.level < LogLevel.ERROR) {
                return;
            }
            console.error(`[ERROR] ${message}`);
            this.log(`[ERROR]  ${message}`);
        };
        this.initLogFile();
        this.cleanHistoryLogFile();
    }
    get logFileName() {
        return `${Logger.logFilePrefix}${new Date().toISOString().split('T')[0]}.log`;
    }
}
exports.Logger = Logger;
Logger.logFilesToKeep = 7;
Logger.logFilePrefix = 'lark-mcp-';
exports.logger = new Logger();
