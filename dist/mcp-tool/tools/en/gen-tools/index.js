"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenTools = void 0;
const acs_v1_1 = require("./zod/acs_v1");
const admin_v1_1 = require("./zod/admin_v1");
const aily_v1_1 = require("./zod/aily_v1");
const apaas_v1_1 = require("./zod/apaas_v1");
const application_v5_1 = require("./zod/application_v5");
const application_v6_1 = require("./zod/application_v6");
const approval_v4_1 = require("./zod/approval_v4");
const attendance_v1_1 = require("./zod/attendance_v1");
const auth_v3_1 = require("./zod/auth_v3");
const authen_v1_1 = require("./zod/authen_v1");
const baike_v1_1 = require("./zod/baike_v1");
const base_v2_1 = require("./zod/base_v2");
const bitable_v1_1 = require("./zod/bitable_v1");
const board_v1_1 = require("./zod/board_v1");
const calendar_v4_1 = require("./zod/calendar_v4");
const cardkit_v1_1 = require("./zod/cardkit_v1");
const compensation_v1_1 = require("./zod/compensation_v1");
const contact_v3_1 = require("./zod/contact_v3");
const corehr_v1_1 = require("./zod/corehr_v1");
const corehr_v2_1 = require("./zod/corehr_v2");
const directory_v1_1 = require("./zod/directory_v1");
const docs_v1_1 = require("./zod/docs_v1");
const docx_v1_1 = require("./zod/docx_v1");
const drive_v1_1 = require("./zod/drive_v1");
const drive_v2_1 = require("./zod/drive_v2");
const ehr_v1_1 = require("./zod/ehr_v1");
const event_v1_1 = require("./zod/event_v1");
const helpdesk_v1_1 = require("./zod/helpdesk_v1");
const hire_v1_1 = require("./zod/hire_v1");
const hire_v2_1 = require("./zod/hire_v2");
const human_authentication_v1_1 = require("./zod/human_authentication_v1");
const im_v1_1 = require("./zod/im_v1");
const im_v2_1 = require("./zod/im_v2");
const lingo_v1_1 = require("./zod/lingo_v1");
const mail_v1_1 = require("./zod/mail_v1");
const mdm_v1_1 = require("./zod/mdm_v1");
const mdm_v3_1 = require("./zod/mdm_v3");
const minutes_v1_1 = require("./zod/minutes_v1");
const moments_v1_1 = require("./zod/moments_v1");
const okr_v1_1 = require("./zod/okr_v1");
const optical_char_recognition_v1_1 = require("./zod/optical_char_recognition_v1");
const passport_v1_1 = require("./zod/passport_v1");
const payroll_v1_1 = require("./zod/payroll_v1");
const performance_v1_1 = require("./zod/performance_v1");
const performance_v2_1 = require("./zod/performance_v2");
const personal_settings_v1_1 = require("./zod/personal_settings_v1");
const report_v1_1 = require("./zod/report_v1");
const search_v2_1 = require("./zod/search_v2");
const security_and_compliance_v1_1 = require("./zod/security_and_compliance_v1");
const sheets_v3_1 = require("./zod/sheets_v3");
const speech_to_text_v1_1 = require("./zod/speech_to_text_v1");
const task_v1_1 = require("./zod/task_v1");
const task_v2_1 = require("./zod/task_v2");
const tenant_v2_1 = require("./zod/tenant_v2");
const translation_v1_1 = require("./zod/translation_v1");
const trust_party_v1_1 = require("./zod/trust_party_v1");
const vc_v1_1 = require("./zod/vc_v1");
const verification_v1_1 = require("./zod/verification_v1");
const wiki_v1_1 = require("./zod/wiki_v1");
const wiki_v2_1 = require("./zod/wiki_v2");
const workplace_v1_1 = require("./zod/workplace_v1");
exports.GenTools = [
    ...acs_v1_1.acsV1Tools,
    ...admin_v1_1.adminV1Tools,
    ...aily_v1_1.ailyV1Tools,
    ...apaas_v1_1.apaasV1Tools,
    ...application_v5_1.applicationV5Tools,
    ...application_v6_1.applicationV6Tools,
    ...approval_v4_1.approvalV4Tools,
    ...attendance_v1_1.attendanceV1Tools,
    ...auth_v3_1.authV3Tools,
    ...authen_v1_1.authenV1Tools,
    ...baike_v1_1.baikeV1Tools,
    ...base_v2_1.baseV2Tools,
    ...bitable_v1_1.bitableV1Tools,
    ...board_v1_1.boardV1Tools,
    ...calendar_v4_1.calendarV4Tools,
    ...cardkit_v1_1.cardkitV1Tools,
    ...compensation_v1_1.compensationV1Tools,
    ...contact_v3_1.contactV3Tools,
    ...corehr_v1_1.corehrV1Tools,
    ...corehr_v2_1.corehrV2Tools,
    ...directory_v1_1.directoryV1Tools,
    ...docs_v1_1.docsV1Tools,
    ...docx_v1_1.docxV1Tools,
    ...drive_v1_1.driveV1Tools,
    ...drive_v2_1.driveV2Tools,
    ...ehr_v1_1.ehrV1Tools,
    ...event_v1_1.eventV1Tools,
    ...helpdesk_v1_1.helpdeskV1Tools,
    ...hire_v1_1.hireV1Tools,
    ...hire_v2_1.hireV2Tools,
    ...human_authentication_v1_1.humanAuthenticationV1Tools,
    ...im_v1_1.imV1Tools,
    ...im_v2_1.imV2Tools,
    ...lingo_v1_1.lingoV1Tools,
    ...mail_v1_1.mailV1Tools,
    ...mdm_v1_1.mdmV1Tools,
    ...mdm_v3_1.mdmV3Tools,
    ...minutes_v1_1.minutesV1Tools,
    ...moments_v1_1.momentsV1Tools,
    ...okr_v1_1.okrV1Tools,
    ...optical_char_recognition_v1_1.opticalCharRecognitionV1Tools,
    ...passport_v1_1.passportV1Tools,
    ...payroll_v1_1.payrollV1Tools,
    ...performance_v1_1.performanceV1Tools,
    ...performance_v2_1.performanceV2Tools,
    ...personal_settings_v1_1.personalSettingsV1Tools,
    ...report_v1_1.reportV1Tools,
    ...search_v2_1.searchV2Tools,
    ...security_and_compliance_v1_1.securityAndComplianceV1Tools,
    ...sheets_v3_1.sheetsV3Tools,
    ...speech_to_text_v1_1.speechToTextV1Tools,
    ...task_v1_1.taskV1Tools,
    ...task_v2_1.taskV2Tools,
    ...tenant_v2_1.tenantV2Tools,
    ...translation_v1_1.translationV1Tools,
    ...trust_party_v1_1.trustPartyV1Tools,
    ...vc_v1_1.vcV1Tools,
    ...verification_v1_1.verificationV1Tools,
    ...wiki_v1_1.wikiV1Tools,
    ...wiki_v2_1.wikiV2Tools,
    ...workplace_v1_1.workplaceV1Tools,
];
