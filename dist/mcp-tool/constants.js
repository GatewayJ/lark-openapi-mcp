"use strict";
/**
 * Commonly used tools in MCP
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.presetTools = exports.defaultToolNames = exports.presetCalendarToolNames = exports.presetTaskToolNames = exports.presetDocToolNames = exports.presetBaseRecordBatchToolNames = exports.presetBaseToolNames = exports.presetBaseCommonToolNames = exports.presetImToolNames = exports.presetContactToolNames = exports.presetLightToolNames = exports.PresetName = void 0;
var PresetName;
(function (PresetName) {
    /**
     * Default preset including IM, Bitable, Doc and Contact tools
     */
    PresetName["LIGHT"] = "preset.light";
    /**
     * Default preset including IM, Bitable, Doc and Contact tools
     */
    PresetName["DEFAULT"] = "preset.default";
    /**
     * IM related tools for chat and message operations
     */
    PresetName["IM_DEFAULT"] = "preset.im.default";
    /**
     * Base preset for base operations
     */
    PresetName["BASE_DEFAULT"] = "preset.base.default";
    /**
     * Base tools with batch operations
     */
    PresetName["BASE_BATCH"] = "preset.base.batch";
    /**
     * Document related tools for content and permission operations
     */
    PresetName["DOC_DEFAULT"] = "preset.doc.default";
    /**
     * Task management related tools
     */
    PresetName["TASK_DEFAULT"] = "preset.task.default";
    /**
     * Calendar event management tools
     */
    PresetName["CALENDAR_DEFAULT"] = "preset.calendar.default";
})(PresetName || (exports.PresetName = PresetName = {}));
exports.presetLightToolNames = [
    'im.v1.message.list',
    'im.v1.message.create',
    'im.v1.chat.search',
    'contact.v3.user.batchGetId',
    'docx.v1.document.rawContent',
    'docx.builtin.import',
    'docx.builtin.search',
    'wiki.v2.space.getNode',
    'bitable.v1.appTableRecord.search',
    'bitable.v1.appTableRecord.batchCreate',
];
exports.presetContactToolNames = ['contact.v3.user.batchGetId'];
exports.presetImToolNames = [
    'im.v1.chat.create',
    'im.v1.chat.list',
    'im.v1.chatMembers.get',
    'im.v1.message.create',
    'im.v1.message.list',
];
exports.presetBaseCommonToolNames = [
    'bitable.v1.app.create',
    'bitable.v1.appTable.create',
    'bitable.v1.appTable.list',
    'bitable.v1.appTableField.list',
    'bitable.v1.appTableRecord.search',
];
exports.presetBaseToolNames = [
    ...exports.presetBaseCommonToolNames,
    'bitable.v1.appTableRecord.create',
    'bitable.v1.appTableRecord.update',
];
exports.presetBaseRecordBatchToolNames = [
    ...exports.presetBaseCommonToolNames,
    'bitable.v1.appTableRecord.batchCreate',
    'bitable.v1.appTableRecord.batchUpdate',
];
exports.presetDocToolNames = [
    'docx.v1.document.rawContent',
    'docx.builtin.import',
    'docx.builtin.search',
    'drive.v1.permissionMember.create',
    'wiki.v2.space.getNode',
    'wiki.v1.node.search',
];
exports.presetTaskToolNames = [
    'task.v2.task.create',
    'task.v2.task.patch',
    'task.v2.task.addMembers',
    'task.v2.task.addReminders',
];
exports.presetCalendarToolNames = [
    'calendar.v4.calendarEvent.create',
    'calendar.v4.calendarEvent.patch',
    'calendar.v4.calendarEvent.get',
    'calendar.v4.freebusy.list',
    'calendar.v4.calendar.primary',
];
exports.defaultToolNames = [
    ...exports.presetImToolNames,
    ...exports.presetBaseToolNames,
    ...exports.presetDocToolNames,
    ...exports.presetContactToolNames,
];
exports.presetTools = {
    [PresetName.LIGHT]: exports.presetLightToolNames,
    [PresetName.DEFAULT]: exports.defaultToolNames,
    [PresetName.IM_DEFAULT]: exports.presetImToolNames,
    [PresetName.BASE_DEFAULT]: exports.presetBaseToolNames,
    [PresetName.BASE_BATCH]: exports.presetBaseRecordBatchToolNames,
    [PresetName.DOC_DEFAULT]: exports.presetDocToolNames,
    [PresetName.TASK_DEFAULT]: exports.presetTaskToolNames,
    [PresetName.CALENDAR_DEFAULT]: exports.presetCalendarToolNames,
};
