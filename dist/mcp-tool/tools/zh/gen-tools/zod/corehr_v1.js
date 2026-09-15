"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corehrV1JobFamilyList = exports.corehrV1JobFamilyGet = exports.corehrV1JobFamilyDelete = exports.corehrV1JobFamilyCreate = exports.corehrV1JobDataPatch = exports.corehrV1JobDataList = exports.corehrV1JobDataGet = exports.corehrV1JobDataDelete = exports.corehrV1JobDataCreate = exports.corehrV1JobChangeCreate = exports.corehrV1EmploymentPatch = exports.corehrV1EmploymentDelete = exports.corehrV1EmploymentCreate = exports.corehrV1EmployeeTypePatch = exports.corehrV1EmployeeTypeList = exports.corehrV1EmployeeTypeGet = exports.corehrV1EmployeeTypeDelete = exports.corehrV1EmployeeTypeCreate = exports.corehrV1DepartmentPatch = exports.corehrV1DepartmentList = exports.corehrV1DepartmentGet = exports.corehrV1DepartmentDelete = exports.corehrV1DepartmentCreate = exports.corehrV1CustomFieldQuery = exports.corehrV1CustomFieldListObjectApiName = exports.corehrV1CustomFieldGetByParam = exports.corehrV1CurrencyList = exports.corehrV1CurrencyGet = exports.corehrV1CountryRegionList = exports.corehrV1CountryRegionGet = exports.corehrV1ContractPatch = exports.corehrV1ContractList = exports.corehrV1ContractGet = exports.corehrV1ContractDelete = exports.corehrV1ContractCreate = exports.corehrV1CompensationStandardMatch = exports.corehrV1CompanyPatch = exports.corehrV1CompanyList = exports.corehrV1CompanyGet = exports.corehrV1CompanyDelete = exports.corehrV1CompanyCreate = exports.corehrV1CommonDataMetaDataEditEnumOption = exports.corehrV1CommonDataMetaDataAddEnumOption = exports.corehrV1CommonDataIdConvert = exports.corehrV1AuthorizationUpdateRoleAssign = exports.corehrV1AuthorizationRemoveRoleAssign = exports.corehrV1AuthorizationQuery = exports.corehrV1AuthorizationGetByParam = exports.corehrV1AuthorizationAddRoleAssign = exports.corehrV1AssignedUserSearch = void 0;
exports.corehrV1WorkingHoursTypeDelete = exports.corehrV1WorkingHoursTypeCreate = exports.corehrV1TransferTypeQuery = exports.corehrV1TransferReasonQuery = exports.corehrV1SubregionList = exports.corehrV1SubregionGet = exports.corehrV1SubdivisionList = exports.corehrV1SubdivisionGet = exports.corehrV1SecurityGroupQuery = exports.corehrV1SecurityGroupList = exports.corehrV1ProcessFormVariableDataGet = exports.corehrV1PreHirePatch = exports.corehrV1PreHireList = exports.corehrV1PreHireGet = exports.corehrV1PreHireDelete = exports.corehrV1PersonPatch = exports.corehrV1PersonGet = exports.corehrV1PersonDelete = exports.corehrV1PersonCreate = exports.corehrV1OffboardingSubmit = exports.corehrV1OffboardingSearch = exports.corehrV1OffboardingQuery = exports.corehrV1NationalIdTypePatch = exports.corehrV1NationalIdTypeList = exports.corehrV1NationalIdTypeGet = exports.corehrV1NationalIdTypeDelete = exports.corehrV1NationalIdTypeCreate = exports.corehrV1LocationList = exports.corehrV1LocationGet = exports.corehrV1LocationDelete = exports.corehrV1LocationCreate = exports.corehrV1LeaveWorkCalendarDate = exports.corehrV1LeaveWorkCalendar = exports.corehrV1LeaveLeaveTypes = exports.corehrV1LeaveLeaveRequestHistory = exports.corehrV1LeaveLeaveBalances = exports.corehrV1LeaveCalendarByScope = exports.corehrV1LeaveGrantingRecordDelete = exports.corehrV1LeaveGrantingRecordCreate = exports.corehrV1JobPatch = exports.corehrV1JobList = exports.corehrV1JobGet = exports.corehrV1JobDelete = exports.corehrV1JobCreate = exports.corehrV1JobLevelPatch = exports.corehrV1JobLevelList = exports.corehrV1JobLevelGet = exports.corehrV1JobLevelDelete = exports.corehrV1JobLevelCreate = exports.corehrV1JobFamilyPatch = void 0;
exports.corehrV1Tools = exports.corehrV1WorkingHoursTypePatch = exports.corehrV1WorkingHoursTypeList = exports.corehrV1WorkingHoursTypeGet = void 0;
const zod_1 = require("zod");
exports.corehrV1AssignedUserSearch = {
    project: 'corehr',
    name: 'corehr.v1.assignedUser.search',
    sdkName: 'corehr.v1.assignedUser.search',
    path: '/open-apis/corehr/v1/assigned_users/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-获取组织类角色授权列表-查询组织类角色的授权信息，返回的授权列表中包含被授权的用户ID和被授权的管理维度等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            role_id: zod_1.z.string().describe('角色 ID，仅支持组织类角色， 角色 ID 可通过[批量获取角色列表]接口获取'),
            management_scope_list: zod_1.z
                .array(zod_1.z.object({
                management_dimension: zod_1.z
                    .string()
                    .describe('管理维度可选值有：- department：部门- work_location：工作地点- company：公司- social_security_location：社保城市'),
                obj_id: zod_1.z.string().describe('被授权部门/工作地点/公司/社保城市 ID'),
            }))
                .describe('管理范围信息'),
            search_method: zod_1.z
                .string()
                .describe('查找方式可选值有：- 1：只查找指定 部门/工作地点/公司/社保城市，如无授权信息则返回为空- 2：当指定的 部门/工作地点/公司/社保城市 无授权信息，向上查找第一个授权记录并直接返回'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小，最大100'),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        })
            .optional(),
    },
};
exports.corehrV1AuthorizationAddRoleAssign = {
    project: 'corehr',
    name: 'corehr.v1.authorization.addRoleAssign',
    sdkName: 'corehr.v1.authorization.addRoleAssign',
    path: '/open-apis/corehr/v1/authorizations/add_role_assign',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-为用户授权角色-为用户授权角色及管理范围 对已被授权某个角色的用户继续授权，将在原授权的数据范围基础上追加数据范围',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            assigned_organization_items: zod_1.z
                .array(zod_1.z
                .array(zod_1.z.object({
                org_key: zod_1.z.string().describe('管理对象key'),
                org_ids: zod_1.z.array(zod_1.z.string()).describe('管理对象id列表').optional(),
                org_codes: zod_1.z.array(zod_1.z.string()).describe('管理对象code列表').optional(),
            }))
                .describe('指定管理对象'))
                .describe('被授权角色的授权范围。你需要按照请求体示例构造结构体。 它是一个二维数组，你可以使用它来授权具有多个管理维度的角色，例如属地 HRBP。 - ==org_key==：管理维度。可选项有 - 部门：==department== - 工作地点：==work_location== - 公司：==company== - 成本中心：==organization_id_strand== - 社保城市：==social_security_location== - 入职地点：==onboarding_location== - 薪资组：==pay_group== - 人才池：==talent_pool== - 自定义组织：可在「[飞书人事]-设置-组织设置」中相应的自定义组织目录下查看对应的组织类型编码，例如==custom_org_01==、==custom_org_02==、==custom_org_03==、==custom_org_04==、==custom_org_05==- ==org_ids==：组织 ID。组织 ID 和组织编码只需要填写一个- ==org_codes==：组织编码。组织 ID 和组织编码只需要填写一个'),
        }),
        params: zod_1.z.object({
            employment_id: zod_1.z
                .string()
                .describe('被授权用户的 ID，ID类型与user_id_type的取值意义一致。默认为飞书人事中的 ==employment_id==。 > 如果你需要不同类型的ID进行转换，可以使用 [ID转换服务] 换取 ==employment_id=='),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            role_id: zod_1.z
                .string()
                .describe('被授权角色的 ID，一次仅可授权一个角色。你可以使用 [批量获取角色列表] 获取，或者在角色详情中获取（URL 末的数字）'),
        }),
    },
};
exports.corehrV1AuthorizationGetByParam = {
    project: 'corehr',
    name: 'corehr.v1.authorization.getByParam',
    sdkName: 'corehr.v1.authorization.getByParam',
    path: '/open-apis/corehr/v1/authorizations/get_by_param',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-查询单个用户授权-查询[飞书人事管理后台]里 -「设置」-「权限设置」中的单个用户授权信息。授权信息中包括员工ID、被授权的角色等信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            employment_id: zod_1.z
                .string()
                .describe('被授权用户的 ID，ID类型与user_id_type的取值意义一致。默认为飞书人事中的 ==employment_id==。 > 如果你需要不同类型的ID进行转换，可以使用 [ID转换服务] 换取 ==employment_id=='),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        }),
    },
};
exports.corehrV1AuthorizationQuery = {
    project: 'corehr',
    name: 'corehr.v1.authorization.query',
    sdkName: 'corehr.v1.authorization.query',
    path: '/open-apis/corehr/v1/authorizations/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-批量查询用户授权-批量查询[飞书人事管理后台] -「设置」-「权限设置」中的用户授权信息。授权列表信息中包括员工ID、被授权的角色等信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            employment_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('员工ID列表，最大100个（不传则默认查询全部员工）。ID类型与user_id_type的取值意义一致。默认为飞书人事中的 ==employment_id==。 > 如果你需要不同类型的ID进行转换，可以使用 [ID转换服务] 换取 ==employment_id==')
                .optional(),
            role_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('角色 ID 列表，最大 100 个。当传该参数时，会根据rold_id过滤，只返回包含该角色的授权信息。>你可以使用 [批量获取角色列表] 获取，或者在角色详情中获取（URL 末的数字）')
                .optional(),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('每页获取记录数量，最大20(不传该参数，默认为20)').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            updated_at_gte: zod_1.z.string().describe('授权时间大于').optional(),
            updated_at_lte: zod_1.z.string().describe('授权时间小于').optional(),
        })
            .optional(),
    },
};
exports.corehrV1AuthorizationRemoveRoleAssign = {
    project: 'corehr',
    name: 'corehr.v1.authorization.removeRoleAssign',
    sdkName: 'corehr.v1.authorization.removeRoleAssign',
    path: '/open-apis/corehr/v1/authorizations/remove_role_assign',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-移除用户被授权的角色-移除用户被授权的指定角色及授权范围，已经存在授权可通过[查询单个用户授权]获得。或者在[飞书人事管理后台]里 -「设置」-「权限设置」中的查看已有用户授权信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            employment_id: zod_1.z
                .string()
                .describe('用户的 ID，ID类型与user_id_type的取值意义一致。默认为飞书人事中的 ==employment_id==。 > 如果你需要不同类型的ID进行转换，可以使用 [ID转换服务] 换取 ==employment_id=='),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            role_id: zod_1.z
                .string()
                .describe('移除的角色的 ID，一次仅可移除一个角色。>你可以使用 [批量获取角色列表] 获取，或者在飞书人事角色详情页的url中获取（URL 末的数字）role_id'),
        }),
    },
};
exports.corehrV1AuthorizationUpdateRoleAssign = {
    project: 'corehr',
    name: 'corehr.v1.authorization.updateRoleAssign',
    sdkName: 'corehr.v1.authorization.updateRoleAssign',
    path: '/open-apis/corehr/v1/authorizations/update_role_assign',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-更新用户被授权的数据范围-更新角色被授权的管理范围 更新后的数据范围，以本次提交的数据范围为准，本次未提交的部分将被移除',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            assigned_organization_items: zod_1.z
                .array(zod_1.z
                .array(zod_1.z.object({
                org_key: zod_1.z.string().describe('管理对象key'),
                org_ids: zod_1.z.array(zod_1.z.string()).describe('管理对象id列表').optional(),
                org_codes: zod_1.z.array(zod_1.z.string()).describe('管理对象code列表').optional(),
            }))
                .describe('指定管理对象'))
                .describe('被授权角色的授权范围。你需要按照请求体示例构造结构体。 它是一个二维数组，你可以使用它来授权具有多个管理维度的角色，例如属地 HRBP。 - ==org_key==：管理维度。可选项有 - 部门：==department== - 工作地点：==work_location== - 公司：==company== - 成本中心：==organization_id_strand== - 社保城市：==social_security_location== - 入职地点：==onboarding_location== - 薪资组：==pay_group== - 人才池：==talent_pool== - 自定义组织：可在「[飞书人事]-设置-组织设置」中相应的自定义组织目录下查看对应的组织类型编码，例如==custom_org_01==、==custom_org_02==、==custom_org_03==、==custom_org_04==、==custom_org_05==- ==org_ids==：组织 ID。组织 ID 和组织编码只需要填写一个- ==org_codes==：组织编码。组织 ID 和组织编码只需要填写一个'),
        }),
        params: zod_1.z.object({
            employment_id: zod_1.z
                .string()
                .describe('被授权用户的 ID，ID类型与user_id_type的取值意义一致。默认为飞书人事中的 ==employment_id==。 > 如果你需要不同类型的ID进行转换，可以使用 [ID转换服务] 换取 ==employment_id=='),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            role_id: zod_1.z
                .string()
                .describe('被授权角色的 ID，一次仅可授权一个角色。你可以使用 [批量获取角色列表] 获取，或者在角色详情中获取（URL 末的数字）'),
        }),
    },
};
exports.corehrV1CommonDataIdConvert = {
    project: 'corehr',
    name: 'corehr.v1.commonDataId.convert',
    sdkName: 'corehr.v1.commonDataId.convert',
    path: '/open-apis/corehr/v1/common_data/id/convert',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-ID 服务-ID 转换-该接口用来进行飞书人事和飞书通讯录、people admin 的各种 ID 转换（仅适用于飞书人事新链路租户）',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({ ids: zod_1.z.array(zod_1.z.string()).describe('ID 列表（最多传入 100 个 ID，ID 长度限制 50 个字符）') }),
        params: zod_1.z.object({
            id_transform_type: zod_1.z
                .number()
                .describe('ID 转换类型 Options:1(CoreHR2Feishu 飞书人事 -> 飞书通讯录),2(Feishu2CoreHR 飞书通讯录 -> 飞书人事),3(Admin2Feishu people admin -> 飞书通讯录),4(Admin2CoreHR people admin -> 飞书人事)'),
            id_type: zod_1.z
                .enum(['user_id', 'department_id', 'job_level_id', 'job_family_id', 'employee_type_id'])
                .describe('要转换的ID类型 Options:user_id(EmploymentID 员工ID，当选择 user_id 且 id_transform_type 为 1、2、4 时，feishu_user_id_type 必填),department_id(DepartmentID 部门ID，当选择 department_id 且 id_transform_type 为 1、2、4 时，feishu_department_id_type 必填),job_level_id(JobLevelID 职级ID),job_family_id(JobFamilyID 序列ID),employee_type_id(EmployeeTypeID 人员类型ID，people admin 的人员类型ID 即为飞书通讯录人员类型的 enum_value，因此id_transform_type 为 3 时无须转换)'),
            feishu_user_id_type: zod_1.z
                .enum(['open_id', 'union_id', 'user_id'])
                .describe('用户 ID 类型 Options:open_id(标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID]),union_id(标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？]),user_id(标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？])')
                .optional(),
            feishu_department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门)')
                .optional(),
        }),
    },
};
exports.corehrV1CommonDataMetaDataAddEnumOption = {
    project: 'corehr',
    name: 'corehr.v1.commonDataMetaData.addEnumOption',
    sdkName: 'corehr.v1.commonDataMetaData.addEnumOption',
    path: '/open-apis/corehr/v1/common_data/meta_data/add_enum_option',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-元数据信息-增加字段枚举值选项-对于当前已有的所有自定义枚举字段，以及部分系统预置枚举字段，通过本接口可在字段中批量新增可选项',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            object_api_name: zod_1.z
                .string()
                .describe('所属对象 API name，可通过[获取飞书人事对象列表]接口中返回的 `object_api_name` 字段获取'),
            enum_field_api_name: zod_1.z
                .string()
                .describe('枚举字段 API name，可通过[获取自定义字段列表]接口中返回的 `custom_api_name` 字段获取'),
            enum_field_options: zod_1.z
                .array(zod_1.z.object({
                option_api_name: zod_1.z
                    .string()
                    .describe('枚举值选项 API Name，即选项的唯一标识，创建后无法修改。由用户自拟，需以英文字母开头，并仅允许包含小写英文字母、数字和下划线'),
                name: zod_1.z
                    .object({ zh_cn: zod_1.z.string().describe('中文').optional(), en_us: zod_1.z.string().describe('英文').optional() })
                    .describe('选项名称（需填写至少一个语种）'),
            }))
                .describe('新增枚举选项列表'),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('用户若希望避免重试导致多次重复请求，可填写随机字符串，系统根据 client_token 是否一致来判断是否为同一请求')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1CommonDataMetaDataEditEnumOption = {
    project: 'corehr',
    name: 'corehr.v1.commonDataMetaData.editEnumOption',
    sdkName: 'corehr.v1.commonDataMetaData.editEnumOption',
    path: '/open-apis/corehr/v1/common_data/meta_data/edit_enum_option',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-元数据信息-修改字段枚举值选项-对于当前已有的所有自定义枚举字段，以及部分系统预置枚举字段，通过本接口可修改字段中已有可选项的展示名称、停启用状态',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            object_api_name: zod_1.z
                .string()
                .describe('所属对象 API name，可通过[获取飞书人事对象列表]接口中返回的 `object_api_name` 字段获取'),
            enum_field_api_name: zod_1.z
                .string()
                .describe('枚举字段 API name，可通过[获取自定义字段列表]接口中返回的 `custom_api_name` 字段获取'),
            enum_field_option: zod_1.z
                .object({
                option_api_name: zod_1.z.string().describe('枚举值选项 API Name，即选项的唯一标识'),
                active: zod_1.z.boolean().describe('是否启用'),
                name: zod_1.z
                    .object({ zh_cn: zod_1.z.string().describe('中文').optional(), en_us: zod_1.z.string().describe('英文').optional() })
                    .describe('选项名称（需填写至少一个语种）'),
            })
                .describe('枚举选项'),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('用户若希望避免重试导致多次重复请求，可填写随机字符串，系统根据 client_token 是否一致来判断是否为同一请求')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1CompanyCreate = {
    project: 'corehr',
    name: 'corehr.v1.company.create',
    sdkName: 'corehr.v1.company.create',
    path: '/open-apis/corehr/v1/companies',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-创建公司-支持在单个接口中进行公司信息添加，包括公司基本信息、注册地址信息、工作地址信息等',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            hiberarchy_common: zod_1.z
                .object({
                parent_id: zod_1.z
                    .string()
                    .describe('上级公司ID，在创建场景下， 该字段必填，枚举值及详细信息可通过[【批量查询公司】]接口查询获得')
                    .optional(),
                name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('名称信息的内容，支持中文和英文'),
                }))
                    .describe('公司名称- 名称不能包含「/」「；」「;」字符。- xx中英文名称会有全局唯一校验'),
                active: zod_1.z.boolean().describe('是否启用该公司'),
                effective_time: zod_1.z
                    .string()
                    .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59')
                    .optional(),
                code: zod_1.z
                    .string()
                    .describe('公司编码 (不能与其他记录的编码重复)- 开启自动编码时，如果不传值会自动生成编码，否则以传入值为准- 未开启自动编码时，不传值不会自动生成编码')
                    .optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('名称信息的内容，支持中文和英文'),
                }))
                    .describe('描述')
                    .optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('自定义字段 API Name，即自定义字段的唯一标识'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段(该功能暂不支持)')
                    .optional(),
            })
                .describe('公司基本信息，该结构维护了公司的名称、编码、启用状态、上级公司等基础信息'),
            type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('公司性质，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=type')
                .optional(),
            industry_list: zod_1.z
                .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                .describe('所在行业，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=industry')
                .optional(),
            legal_representative: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容，支持中文和英文'),
            }))
                .describe('法定代表人。仅注册地址中的 国家 / 地区为中国大陆时，法人字段填入才有效。若注册地址中的 国家 / 地区 不为中国大陆时，则填入法人字段无效')
                .optional(),
            post_code: zod_1.z.string().describe('邮编').optional(),
            tax_payer_id: zod_1.z.string().describe('纳税人识别号').optional(),
            confidential: zod_1.z.boolean().describe('是否保密，该功能暂不支持，可以忽略').optional(),
            sub_type_list: zod_1.z
                .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                .describe('公司主体类型，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=subtype')
                .optional(),
            branch_company: zod_1.z.boolean().describe('是否为分公司').optional(),
            primary_manager: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容，支持中文和英文'),
            }))
                .describe('主要负责人')
                .optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段(暂时不支持该功能)')
                .optional(),
            currency: zod_1.z
                .object({
                currency_name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('内容，支持中文和英文'),
                }))
                    .describe('货币名称')
                    .optional(),
                numeric_code: zod_1.z.number().describe('对应币种的指代代码，通过[查询货币信息v2]查询获取').optional(),
                currency_alpha_3_code: zod_1.z
                    .string()
                    .describe('法定货币对应代码，如CNY、USD等，通过[查询货币信息v2]查询获取')
                    .optional(),
            })
                .describe('默认币种')
                .optional(),
            phone: zod_1.z
                .object({
                area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('区号对应名称') })
                    .describe('区号对应的数字，可通过[获取字段详情]查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code'),
                phone_number: zod_1.z.string().describe('号码'),
            })
                .describe('电话')
                .optional(),
            fax: zod_1.z
                .object({
                area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('区号对应的名称') })
                    .describe('区号对应的数字，可通过[获取字段详情]查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code'),
                phone_number: zod_1.z.string().describe('号码'),
            })
                .describe('传真')
                .optional(),
            registered_office_address_info: zod_1.z
                .object({
                country_region_id: zod_1.z
                    .string()
                    .describe('国家 / 地区id。各国家/地区填写字段可参考[地址填写规则]查询。国家/地区id可通过[查询国家/地区信息]查询获取'),
                region_id: zod_1.z.string().describe('主要行政区id。可通过[查询省份/主要行政区信息]查询获取').optional(),
                city_id: zod_1.z.string().describe('城市id，可通过[查询城市信息]查询获取').optional(),
                distinct_id: zod_1.z.string().describe('区/县id，可通过[查询区/县信息]查询获取').optional(),
                address_line1: zod_1.z.string().describe('地址行 1').optional(),
                address_line2: zod_1.z.string().describe('地址行 2').optional(),
                address_line3: zod_1.z.string().describe('地址行 3').optional(),
                address_line4: zod_1.z.string().describe('地址行 4').optional(),
                address_line5: zod_1.z.string().describe('地址行 5').optional(),
                address_line6: zod_1.z.string().describe('地址行 6').optional(),
                address_line7: zod_1.z.string().describe('地址行 7').optional(),
                address_line8: zod_1.z.string().describe('地址行 8').optional(),
                address_line9: zod_1.z.string().describe('地址行 9').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
            })
                .describe('注册地址详细信息，该字段在OpenAPI为非必填字段，在页面管理端为必填字段。如果此处不填写该字段，可通过页面管理端补齐该字段')
                .optional(),
            office_address_info: zod_1.z
                .object({
                country_region_id: zod_1.z
                    .string()
                    .describe('国家 / 地区id。各国家/地区填写字段可参考[地址填写规则]查询。国家/地区id可通过[查询国家/地区信息]查询获取'),
                region_id: zod_1.z.string().describe('主要行政区id。可通过[查询省份/主要行政区信息]查询获取').optional(),
                city_id: zod_1.z.string().describe('城市id，可通过[查询城市信息]查询获取').optional(),
                distinct_id: zod_1.z.string().describe('区/县id，可通过[查询区/县信息]查询获取').optional(),
                address_line1: zod_1.z.string().describe('地址行 1').optional(),
                address_line2: zod_1.z.string().describe('地址行 2').optional(),
                address_line3: zod_1.z.string().describe('地址行 3').optional(),
                address_line4: zod_1.z.string().describe('地址行 4').optional(),
                address_line5: zod_1.z.string().describe('地址行 5').optional(),
                address_line6: zod_1.z.string().describe('地址行 6').optional(),
                address_line7: zod_1.z.string().describe('地址行 7').optional(),
                address_line8: zod_1.z.string().describe('地址行 8').optional(),
                address_line9: zod_1.z.string().describe('地址行 9').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
            })
                .describe('办公地址详细信息，该字段在OpenAPI为非必填字段，在页面管理端为必填字段。若此处不填写该字段，可通过页面管理端补齐该字段')
                .optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('操作的唯一标识，用于幂等的进行更新操作，根据client_token是否一致来判断是否为同一请求。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1CompanyDelete = {
    project: 'corehr',
    name: 'corehr.v1.company.delete',
    sdkName: 'corehr.v1.company.delete',
    path: '/open-apis/corehr/v1/companies/:company_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-删除公司-删除公司',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            company_id: zod_1.z
                .string()
                .describe('需要删除的公司ID。ID获取方式：- 调用[【创建公司】][【批量查询公司】]等接口可以返回部门ID'),
        }),
    },
};
exports.corehrV1CompanyGet = {
    project: 'corehr',
    name: 'corehr.v1.company.get',
    sdkName: 'corehr.v1.company.get',
    path: '/open-apis/corehr/v1/companies/:company_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-查询单个公司-根据 ID 查询单个公司',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            company_id: zod_1.z
                .string()
                .describe('需要查询的公司ID。ID获取方式：- 调用[【创建公司】][【批量查询公司】]等接口可以返回部门ID'),
        }),
    },
};
exports.corehrV1CompanyList = {
    project: 'corehr',
    name: 'corehr.v1.company.list',
    sdkName: 'corehr.v1.company.list',
    path: '/open-apis/corehr/v1/companies',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-批量查询公司-分页查询公司，可分页遍历全量公司数据',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
        }),
    },
};
exports.corehrV1CompanyPatch = {
    project: 'corehr',
    name: 'corehr.v1.company.patch',
    sdkName: 'corehr.v1.company.patch',
    path: '/open-apis/corehr/v1/companies/:company_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-更新公司-更新公司信息，包括基本信息、注册地址、办公地址等',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z
            .object({
            hiberarchy_common: zod_1.z
                .object({
                parent_id: zod_1.z.string().describe('上级组织').optional(),
                name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('内容，支持中文和英文'),
                }))
                    .describe('公司名称- 名称不能包含「/」「；」「」字符。- 公司中英文名称会有全局唯一校验')
                    .optional(),
                active: zod_1.z.boolean().describe('是否启用该公司').optional(),
                effective_time: zod_1.z
                    .string()
                    .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59'),
                code: zod_1.z.string().describe('公司编码 (不能与其他记录的编码重复)，如果不传值则不更新').optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('内容，支持中文和英文'),
                }))
                    .describe('描述')
                    .optional(),
            })
                .describe('组织实体公共字段，包括名称、描述、上级、启停用状态、生效日期、编码等基础信息')
                .optional(),
            type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('公司性质，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=type')
                .optional(),
            industry_list: zod_1.z
                .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                .describe('所在行业，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=industry')
                .optional(),
            legal_representative: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                value: zod_1.z.string().describe('内容，支持中文和英文'),
            }))
                .describe('法定代表人。仅注册地址中的 国家 / 地区 为中国大陆时，法人字段填入才有效。若注册地址中的 国家 / 地区 不为中国大陆时，则填入法人字段无效')
                .optional(),
            post_code: zod_1.z.string().describe('邮编').optional(),
            tax_payer_id: zod_1.z.string().describe('纳税人识别号').optional(),
            confidential: zod_1.z.boolean().describe('是否保密，该功能暂不支持，可以忽略').optional(),
            sub_type_list: zod_1.z
                .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                .describe('公司主体类型，通过[获取字段详情]查询获取。请求参数：object_api_name=company；custom_api_name=subtype')
                .optional(),
            branch_company: zod_1.z.boolean().describe('是否为分公司').optional(),
            primary_manager: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                value: zod_1.z.string().describe('内容，支持中文和英文'),
            }))
                .describe('主要负责人')
                .optional(),
            currency: zod_1.z
                .object({
                currency_name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('内容，支持中文和英文'),
                }))
                    .describe('货币名称')
                    .optional(),
                numeric_code: zod_1.z
                    .number()
                    .describe('对应币种的指代代码，通过系统内部查找，通过[查询货币信息v2]查询获取')
                    .optional(),
                currency_alpha_3_code: zod_1.z
                    .string()
                    .describe('法定货币对应代码，如CNY 、USD等.通过[查询货币信息v2]查询获取')
                    .optional(),
            })
                .describe('默认币种')
                .optional(),
            phone: zod_1.z
                .object({
                area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('区号对应名称') })
                    .describe('区号对应的数字，可通过[获取字段详情]查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code'),
                phone_number: zod_1.z.string().describe('号码'),
            })
                .describe('电话')
                .optional(),
            fax: zod_1.z
                .object({
                area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('区号对应的名称') })
                    .describe('区号对应的数字，可通过[获取字段详情]查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code'),
                phone_number: zod_1.z.string().describe('号码'),
            })
                .describe('传真')
                .optional(),
            registered_office_address_info: zod_1.z
                .object({
                country_region_id: zod_1.z
                    .string()
                    .describe('国家 / 地区 ID。各国家/地区填写字段可参考[地址填写规则]查询。可通过[查询国家/地区信息]查询获取'),
                region_id: zod_1.z.string().describe('主要行政区ID.可通过[查询省份/主要行政区信息]查询获取').optional(),
                city_id: zod_1.z.string().describe('城市ID.可通过[查询城市信息]查询获取').optional(),
                distinct_id: zod_1.z.string().describe('区/县ID.可通过[查询区/县信息]查询获取').optional(),
                address_line1: zod_1.z.string().describe('地址行 1').optional(),
                address_line2: zod_1.z.string().describe('地址行 2').optional(),
                address_line3: zod_1.z.string().describe('地址行 3').optional(),
                address_line4: zod_1.z.string().describe('地址行 4').optional(),
                address_line5: zod_1.z.string().describe('地址行 5').optional(),
                address_line6: zod_1.z.string().describe('地址行 6').optional(),
                address_line7: zod_1.z.string().describe('地址行 7').optional(),
                address_line8: zod_1.z.string().describe('地址行 8').optional(),
                address_line9: zod_1.z.string().describe('地址行 9').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
            })
                .describe('注册地址详细信息。公共字段，若请求对象为公司，则该字段必填')
                .optional(),
            office_address_info: zod_1.z
                .object({
                country_region_id: zod_1.z
                    .string()
                    .describe('国家 / 地区 ID。各国家/地区填写字段可参考[地址填写规则]查询.可通过[查询国家/地区信息]查询获取'),
                region_id: zod_1.z.string().describe('主要行政区ID.可通过[查询省份/主要行政区信息]查询获取').optional(),
                city_id: zod_1.z.string().describe('城市ID.可通过[查询城市信息]查询获取').optional(),
                distinct_id: zod_1.z.string().describe('区/县ID.可通过[查询区/县信息]查询获取').optional(),
                address_line1: zod_1.z.string().describe('地址行 1').optional(),
                address_line2: zod_1.z.string().describe('地址行 2').optional(),
                address_line3: zod_1.z.string().describe('地址行 3').optional(),
                address_line4: zod_1.z.string().describe('地址行 4').optional(),
                address_line5: zod_1.z.string().describe('地址行 5').optional(),
                address_line6: zod_1.z.string().describe('地址行 6').optional(),
                address_line7: zod_1.z.string().describe('地址行 7').optional(),
                address_line8: zod_1.z.string().describe('地址行 8').optional(),
                address_line9: zod_1.z.string().describe('地址行 9').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
            })
                .describe('办公地址详细信息。公共字段，若请求对象为公司，则该字段必填')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({
            company_id: zod_1.z
                .string()
                .describe('需要更新的公司 ID。ID获取方式：- 调用[【创建公司】][【批量查询公司】]等接口可以返回部门ID'),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.corehrV1CompensationStandardMatch = {
    project: 'corehr',
    name: 'corehr.v1.compensationStandard.match',
    sdkName: 'corehr.v1.compensationStandard.match',
    path: '/open-apis/corehr/v1/compensation_standards/match',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资标准-获取员工薪资标准-- 调用此接口来获取员工匹配的薪资标准信息- 请求时，可选传递员工的部门 ID、职级 ID、职务ID 、序列 ID 等筛选条件，用于匹配薪资标准- 此接口将返回员工可匹配到的薪资标准全部信息，包括薪资标准表 ID、薪级薪等、薪资带宽、薪资标准值等',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z.object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型，传入部门ID时传入 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)')
                .optional(),
            employment_id: zod_1.z.string().describe('雇员ID，可通过接口[【批量查询员工信息】]获取').optional(),
            reference_object_api: zod_1.z
                .enum(['cpst_item', 'cpst_indicator'])
                .describe('薪资标准的关联对象，项目或者指标 Options:cpst_item(薪资项目),cpst_indicator(薪资统计指标)')
                .optional(),
            reference_object_id: zod_1.z
                .string()
                .describe('薪资标准表关联对象ID，即薪资项目/统计指标ID，可通过接口[【批量查询薪资项】]、[【批量查询薪资统计指标】]获取'),
            department_id: zod_1.z.string().describe('部门ID，可通过接口[【批量查询部门】]获取').optional(),
            work_location_id: zod_1.z.string().describe('工作地点ID，可通过接口[【批量查询地点】]获取').optional(),
            company_id: zod_1.z.string().describe('公司ID，可通过接口[【批量查询公司】]获取').optional(),
            job_family_id: zod_1.z.string().describe('职务序列ID，可通过接口[【批量查询职务序列】]获取').optional(),
            job_id: zod_1.z.string().describe('职务ID，可通过接口[【批量查询职务】]').optional(),
            job_level_id: zod_1.z.string().describe('职级ID，可通过接口[【批量查询职务级别】]获取').optional(),
            employee_type_id: zod_1.z.string().describe('人员类型ID，可通过接口[【批量查询人员类型】]获取').optional(),
            recruitment_type: zod_1.z
                .enum(['experienced_professionals', 'recent_graduates', 'routine_intern'])
                .describe('招聘类型 Options:experienced_professionals(社招),recent_graduates(校招),routine_intern(日常实习)')
                .optional(),
            cpst_change_reason_id: zod_1.z.string().describe('定调薪原因ID，可通过接口[【批量查询定调薪原因】]获取').optional(),
            cpst_plan_id: zod_1.z.string().describe('薪资方案ID，可通过接口[【批量查询薪资方案】]获取').optional(),
            cpst_salary_level_id: zod_1.z.string().describe('薪级薪等ID').optional(),
            effective_time: zod_1.z.string().describe('生效时间（毫秒级时间戳）').optional(),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.corehrV1ContractCreate = {
    project: 'corehr',
    name: 'corehr.v1.contract.create',
    sdkName: 'corehr.v1.contract.create',
    path: '/open-apis/corehr/v1/contracts',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-合同-新建合同-通过本接口可以为员工创建一份新合同',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            effective_time: zod_1.z.string().describe('合同开始日期，格式："YYYY-MM-DD HH-mm-ss"'),
            expiration_time: zod_1.z.string().describe('实际结束日期,格式："YYYY-MM-DD HH-mm-ss"').optional(),
            employment_id: zod_1.z.string().describe('雇佣 ID，详细信息可通过[【搜索员工信息】]接口查询获得'),
            contract_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('合同类型，枚举值可查询[获取字段详情]接口获取，按如下参数查询即可：- object_api_name：contract- custom_api_name：contract_type'),
            first_party_company_id: zod_1.z
                .string()
                .describe('合同签约公司, 引用的公司ID，详细信息可通过[【查询单个公司】]接口查询获得'),
            person_id: zod_1.z.string().describe('合同签约人ID，详细信息可通过[【查询单个个人信息】]接口查询获得').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段，预留字段，暂时不支持')
                .optional(),
            duration_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('期限类型，枚举值可通过文档[【飞书人事枚举常量】]合同期限类型（duration_type）枚举定义部分获得')
                .optional(),
            contract_end_date: zod_1.z.string().describe('合同结束日期，格式："YYYY-MM-DD"').optional(),
            contract_number: zod_1.z.string().describe('合同编号').optional(),
            signing_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('签订类型，枚举值可通过文档[【飞书人事枚举常量】]签订类型（signing_type）枚举定义部分获得')
                .optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z.string().describe('自定义值，根据client_token是否一致来判断是否为同一请求').optional(),
        })
            .optional(),
    },
};
exports.corehrV1ContractDelete = {
    project: 'corehr',
    name: 'corehr.v1.contract.delete',
    sdkName: 'corehr.v1.contract.delete',
    path: '/open-apis/corehr/v1/contracts/:contract_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-合同-删除合同-通过本接口可以删除合同数据，删除后即无法查询到',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ contract_id: zod_1.z.string().describe('需要删除的合同 ID，该ID可以通过[【批量查询合同】]接口获取') }),
    },
};
exports.corehrV1ContractGet = {
    project: 'corehr',
    name: 'corehr.v1.contract.get',
    sdkName: 'corehr.v1.contract.get',
    path: '/open-apis/corehr/v1/contracts/:contract_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-合同-查询单个合同-该接口用于根据合同 ID 查询单个合同详细信息，包括合同开始日期、结束日期、公司主体等信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ contract_id: zod_1.z.string().describe('合同ID，该ID可以通过[【批量查询合同】]接口获取') }),
    },
};
exports.corehrV1ContractList = {
    project: 'corehr',
    name: 'corehr.v1.contract.list',
    sdkName: 'corehr.v1.contract.list',
    path: '/open-apis/corehr/v1/contracts',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-合同-批量查询合同-通过接口可以批量查询合同列表信息，目前暂不支持其他筛选条件且一次查询最多支持50条数据',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小；范围：0～50'),
        }),
    },
};
exports.corehrV1ContractPatch = {
    project: 'corehr',
    name: 'corehr.v1.contract.patch',
    sdkName: 'corehr.v1.contract.patch',
    path: '/open-apis/corehr/v1/contracts/:contract_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-合同-更新合同-通过该接口可以更新员工合同相关信息，没有修改的参数会保留原值',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            effective_time: zod_1.z.string().describe('合同开始日期').optional(),
            expiration_time: zod_1.z.string().describe('合同实际结束日期，合同实际结束日期小于等于合同结束日期').optional(),
            employment_id: zod_1.z.string().describe('该接口不能传递该参数，否则会更新失败').optional(),
            contract_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('合同类型，枚举值可通过文档[【飞书人事枚举常量】]合同类型（contract_type）枚举定义部分获得')
                .optional(),
            first_party_company_id: zod_1.z
                .string()
                .describe('甲方, 引用Company的ID，详细信息可通过[【查询单个公司】]接口查询获得')
                .optional(),
            person_id: zod_1.z.string().describe('该接口不能传递该参数，否则会更新失败').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段，预留，暂时不支持')
                .optional(),
            duration_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('期限类型，枚举值可通过文档[【飞书人事枚举常量】]合同期限类型（duration_type）枚举定义部分获得')
                .optional(),
            contract_end_date: zod_1.z.string().describe('合同预计的结束日期').optional(),
            contract_number: zod_1.z.string().describe('合同编号').optional(),
            signing_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('签订类型，枚举值可通过文档[【飞书人事枚举常量】]签订类型（signing_type）枚举定义部分获得')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            client_token: zod_1.z.string().describe('自定义值，根据client_token是否一致来判断是否为同一请求').optional(),
        })
            .optional(),
        path: zod_1.z.object({ contract_id: zod_1.z.string().describe('合同ID，该ID可以通过[【批量查询合同】]接口获取') }),
    },
};
exports.corehrV1CountryRegionGet = {
    project: 'corehr',
    name: 'corehr.v1.countryRegion.get',
    sdkName: 'corehr.v1.countryRegion.get',
    path: '/open-apis/corehr/v1/country_regions/:country_region_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-查询单条国家/地区信息-查询单条国家/地区信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ country_region_id: zod_1.z.string().describe('国家/地区 ID') }),
    },
};
exports.corehrV1CountryRegionList = {
    project: 'corehr',
    name: 'corehr.v1.countryRegion.list',
    sdkName: 'corehr.v1.countryRegion.list',
    path: '/open-apis/corehr/v1/country_regions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-批量查询国家/地区信息-批量查询国家/地区信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
        }),
    },
};
exports.corehrV1CurrencyGet = {
    project: 'corehr',
    name: 'corehr.v1.currency.get',
    sdkName: 'corehr.v1.currency.get',
    path: '/open-apis/corehr/v1/currencies/:currency_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-货币信息-查询单个货币信息-查询单个货币信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ currency_id: zod_1.z.string().describe('货币 ID') }),
    },
};
exports.corehrV1CurrencyList = {
    project: 'corehr',
    name: 'corehr.v1.currency.list',
    sdkName: 'corehr.v1.currency.list',
    path: '/open-apis/corehr/v1/currencies',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-货币信息-批量查询货币信息-批量查询货币信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
        }),
    },
};
exports.corehrV1CustomFieldGetByParam = {
    project: 'corehr',
    name: 'corehr.v1.customField.getByParam',
    sdkName: 'corehr.v1.customField.getByParam',
    path: '/open-apis/corehr/v1/custom_fields/get_by_param',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-元数据信息-获取字段详情-获取「飞书人事」对象下某字段的详细信息，支持系统预置字段和自定义字段。可通过该接口获取某个选项字段包含的选项列表，某个自定义分组中包含的字段列表等。使用方式可参考「[如何通过 OpenAPI 维护自定义字段]」',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            object_api_name: zod_1.z
                .string()
                .describe('所属对象 API name，可从[获取飞书人事对象列表]接口列举所有对象及其 API name'),
            custom_api_name: zod_1.z
                .string()
                .describe('字段 API name，可通过[获取自定义字段列表]接口中返回的 `custom_api_name` 字段获取'),
        }),
    },
};
exports.corehrV1CustomFieldListObjectApiName = {
    project: 'corehr',
    name: 'corehr.v1.customField.listObjectApiName',
    sdkName: 'corehr.v1.customField.listObjectApiName',
    path: '/open-apis/corehr/v1/custom_fields/list_object_api_name',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-元数据信息-获取飞书人事对象列表-获取「飞书人事」中的对象列表，含系统预置对象与自定义对象。使用方式可参考[【操作手册】如何通过 OpenAPI 维护自定义字段]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
        }),
    },
};
exports.corehrV1CustomFieldQuery = {
    project: 'corehr',
    name: 'corehr.v1.customField.query',
    sdkName: 'corehr.v1.customField.query',
    path: '/open-apis/corehr/v1/custom_fields/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-元数据信息-获取自定义字段列表-根据对象的 API name，获取「飞书人事」具体对象下的自定义字段列表',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            object_api_name_list: zod_1.z
                .array(zod_1.z.string())
                .describe('所属对象 API name，支持一个或多个，当前数量限制为 20 个。可从[获取飞书人事对象列表]接口列举所有对象及其 API name'),
        }),
    },
};
exports.corehrV1DepartmentCreate = {
    project: 'corehr',
    name: 'corehr.v1.department.create',
    sdkName: 'corehr.v1.department.create',
    path: '/open-apis/corehr/v1/departments',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-创建部门-支持在单个接口中进行部门信息添加，包括部门基本信息、部门负责人、部门自定义字段信息等',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            sub_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('部门类型，通过[请求接口]查询获取。请求参数：object_api_name=department；custom_api_name=subtype')
                .optional(),
            manager: zod_1.z
                .string()
                .describe('部门负责人- 详细信息可通过[【搜索员工信息】] 或 [【批量查询员工】] 接口获取')
                .optional(),
            is_confidential: zod_1.z.boolean().describe('是否保密（该功能暂不支持，可忽略）').optional(),
            hiberarchy_common: zod_1.z
                .object({
                parent_id: zod_1.z
                    .string()
                    .describe('上级组织 ID，该字段为通用字段，若为部门维度则为必填。详细信息可通过[【查询单个部门】]接口获得')
                    .optional(),
                name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z
                        .string()
                        .describe('名称信息的内容，支持中文和英文。填写规范- 名称不能包含「/」「；」「;」字符。- 同一个上级部门的启用的部门名称不允许重复'),
                }))
                    .describe('名称'),
                active: zod_1.z.boolean().describe('是否启用该部门'),
                code: zod_1.z.string().describe('编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('描述信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('描述信息的内容'),
                }))
                    .describe('描述')
                    .optional(),
            })
                .describe('组织实体公共字段，包括名称、描述、上级、启停用状态、生效日期、编码等基础信息'),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('自定义字段 API Name，即自定义字段的唯一标识'),
                value: zod_1.z
                    .string()
                    .describe('字段值，为 JSON 转义后的字符串。**注意：具体传值方式参见**[获取自定义字段的元数据]'),
            }))
                .describe('自定义字段类型，详细见[获取自定义字段列表]')
                .optional(),
            cost_center_id: zod_1.z.string().describe('成本中心id详细信息可通过[【搜索成本中心信息】]接口查询获得').optional(),
            staffing_model: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('岗职管理模式- 详细枚举类型请查看[枚举场景]中关于staffing_model定义')
                .optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1DepartmentDelete = {
    project: 'corehr',
    name: 'corehr.v1.department.delete',
    sdkName: 'corehr.v1.department.delete',
    path: '/open-apis/corehr/v1/departments/:department_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-删除部门-可以通过该接口通过部门ID删除一个部门记录',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ department_id: zod_1.z.string().describe('需要删除的部门 ID，可通过[【搜索部门信息】]接口查询获得') }),
    },
};
exports.corehrV1DepartmentGet = {
    project: 'corehr',
    name: 'corehr.v1.department.get',
    sdkName: 'corehr.v1.department.get',
    path: '/open-apis/corehr/v1/departments/:department_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-查询单个部门-该接口支持通过部门id批量查询当天的部门详情信息，包括部门包含的名称、描述、启用状态等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            department_id: zod_1.z
                .string()
                .describe('部门ID。ID获取方式：- 调用[【创建部门】][【搜索部门】]等接口可以返回部门ID- 也可以通过[【事件】创建部门][【事件】更新部门] 获取部门ID信息'),
        }),
    },
};
exports.corehrV1DepartmentList = {
    project: 'corehr',
    name: 'corehr.v1.department.list',
    sdkName: 'corehr.v1.department.list',
    path: '/open-apis/corehr/v1/departments',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-批量查询部门-批量查询部门信息，包括部门基本信息、自定义字段信息等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            department_id_list: zod_1.z.array(zod_1.z.string()).describe('部门ID列表').optional(),
            name_list: zod_1.z.array(zod_1.z.string()).describe('部门名称列表，需精确匹配').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        }),
    },
};
exports.corehrV1DepartmentPatch = {
    project: 'corehr',
    name: 'corehr.v1.department.patch',
    sdkName: 'corehr.v1.department.patch',
    path: '/open-apis/corehr/v1/departments/:department_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-更新部门-更新部门信息，包括基础信息、自定义字段信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            id: zod_1.z.string().describe('部门 ID').optional(),
            sub_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('部门子类型，枚举值可通过文档[【飞书人事枚举常量】]部门子类型（department_sub_type）枚举定义部分获得')
                .optional(),
            manager: zod_1.z.string().describe('部门负责人 ID，枚举值及详细信息可通过[【批量查询员工信息】]查询获得').optional(),
            is_confidential: zod_1.z.boolean().describe('是否保密').optional(),
            hiberarchy_common: zod_1.z
                .object({
                parent_id: zod_1.z.string().describe('上级组织 ID').optional(),
                name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('名称')
                    .optional(),
                active: zod_1.z.boolean().describe('是否启用该部门').optional(),
                code: zod_1.z.string().describe('编码').optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('描述')
                    .optional(),
            })
                .describe('组织实体公共字段，包括名称、描述、上级、启停用状态、生效日期、编码等基础信息')
                .optional(),
            effective_time: zod_1.z.string().describe('生效时间'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段，枚举值可通过[获取自定义字段列表]获取')
                .optional(),
            cost_center_id: zod_1.z
                .string()
                .describe('成本中心 ID，可以通过[搜索成本中心信息]接口获取对应的成本中心信息')
                .optional(),
            staffing_model: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('岗职管理模式- 详细枚举类型请查看[枚举场景]中关于staffing_model定义')
                .optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ department_id: zod_1.z.string().describe('需要更新的部门ID，同部门实体在CoreHR内部的唯一键') }),
    },
};
exports.corehrV1EmployeeTypeCreate = {
    project: 'corehr',
    name: 'corehr.v1.employeeType.create',
    sdkName: 'corehr.v1.employeeType.create',
    path: '/open-apis/corehr/v1/employee_types',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-人员类型-创建人员类型-创建人员类型',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称'),
            default_employee_type: zod_1.z.boolean().describe('是否为默认人员类型，每个租户只能定义一个默认人员类型'),
            active: zod_1.z.boolean().describe('启用'),
            code: zod_1.z.string().describe('编码').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 具体支持的对象请参考[自定义字段说明]')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1EmployeeTypeDelete = {
    project: 'corehr',
    name: 'corehr.v1.employeeType.delete',
    sdkName: 'corehr.v1.employeeType.delete',
    path: '/open-apis/corehr/v1/employee_types/:employee_type_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-人员类型-删除人员类型-删除人员类型。删除之后查询接口不能获取到已删除的数据',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ employee_type_id: zod_1.z.string().describe('需要删除的人员类型ID- 可通过[批量查询人员类型]获取') }),
    },
};
exports.corehrV1EmployeeTypeGet = {
    project: 'corehr',
    name: 'corehr.v1.employeeType.get',
    sdkName: 'corehr.v1.employeeType.get',
    path: '/open-apis/corehr/v1/employee_types/:employee_type_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-人员类型-查询单个人员类型-根据 ID 查询单个人员类型',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ employee_type_id: zod_1.z.string().describe('雇员类型ID- 可通过[批量查询人员类型]获取') }),
    },
};
exports.corehrV1EmployeeTypeList = {
    project: 'corehr',
    name: 'corehr.v1.employeeType.list',
    sdkName: 'corehr.v1.employeeType.list',
    path: '/open-apis/corehr/v1/employee_types',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-人员类型-批量查询人员类型-批量查询人员类型',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小- 格式：整数- 范围：（0, 2000）'),
        }),
    },
};
exports.corehrV1EmployeeTypePatch = {
    project: 'corehr',
    name: 'corehr.v1.employeeType.patch',
    sdkName: 'corehr.v1.employeeType.patch',
    path: '/open-apis/corehr/v1/employee_types/:employee_type_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-人员类型-更新人员类型-更新人员类型',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称')
                .optional(),
            default_employee_type: zod_1.z.boolean().describe('是否为默认人员类型，每个租户只能定义一个默认人员类型').optional(),
            active: zod_1.z.boolean().describe('启用').optional(),
            code: zod_1.z.string().describe('编码').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 具体支持的对象请参考[自定义字段说明]')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({ employee_type_id: zod_1.z.string().describe('雇员类型 ID- 可通过[批量查询人员类型]获取') }),
    },
};
exports.corehrV1EmploymentCreate = {
    project: 'corehr',
    name: 'corehr.v1.employment.create',
    sdkName: 'corehr.v1.employment.create',
    path: '/open-apis/corehr/v1/employments',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-雇佣信息-创建雇佣信息-创建人员的雇佣信息，需要先[创建个人信息]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            seniority_date: zod_1.z.string().describe('资历起算日期').optional(),
            employee_number: zod_1.z
                .string()
                .describe('员工编号（工号）- 开启自动编码时由系统自动生成，填写值不生效- 未开启自动编码，请主动传递： - 由数字或字母组成，请勿使用特殊字符 - 请保证唯一')
                .optional(),
            effective_time: zod_1.z.string().describe('入职日期'),
            expiration_time: zod_1.z.string().describe('离职日期，不能早于入职日期').optional(),
            employment_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('雇佣类型- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：employment - custom_api_name：employment_type'),
            person_id: zod_1.z
                .string()
                .describe('个人信息ID，由[【创建个人信息】]时生成- 当 rehire 值为 yes 时，该个人信息的【姓名信息】必须有值'),
            primary_employment: zod_1.z.boolean().describe('是否是主雇佣信息'),
            employment_status: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('雇佣状态- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：employment - custom_api_name：employment_status'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 请参考[【自定义字段说明】]')
                .optional(),
            work_email_list: zod_1.z
                .array(zod_1.z.object({
                email: zod_1.z.string().describe('邮箱号'),
                is_primary: zod_1.z.boolean().describe('是否为主要邮箱').optional(),
                is_public: zod_1.z.boolean().describe('是否为公开邮箱').optional(),
                email_usage: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('邮箱用途- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name: email - custom_api_name：email_usage- 请勿填写 home 枚举')
                    .optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段- 请参考[【自定义字段说明】]')
                    .optional(),
            }))
                .describe('工作邮箱列表- 只有当满足下面所有条件时，才在工作信息页面可见： - is_primary = "true" - is_public = "true" - email_usage = "work"')
                .optional(),
            reason_for_offboarding: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('离职原因- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：employment - custom_api_name：reason_for_offboarding')
                .optional(),
            ats_application_id: zod_1.z
                .string()
                .describe('招聘投递 ID ，详细信息可以通过[【获取投递信息】]接口查询获得')
                .optional(),
            rehire: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('是否离职重聘 - `to_be_confirmed`：待确认，系统会判断该员工是否存在历史雇佣记录，如果存在且需要二次确认时会调用失败，并返回历史雇佣记录 - `no`：否，系统直接标为非离职重聘人员，不再做重复判断 - `yes`：是，要求历史雇佣信息 ID 必填示例值：`no`默认值：`to_be_confirmed`')
                .optional(),
            rehire_employment_id: zod_1.z
                .string()
                .describe('历史雇佣信息 ID，可通过[【批量查询员工信息】]获得；类型不跟随 user_id_type')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1EmploymentDelete = {
    project: 'corehr',
    name: 'corehr.v1.employment.delete',
    sdkName: 'corehr.v1.employment.delete',
    path: '/open-apis/corehr/v1/employments/:employment_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-雇佣信息-删除雇佣信息-删除人员的雇佣信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        })
            .optional(),
        path: zod_1.z.object({ employment_id: zod_1.z.string().describe('需要删除的雇佣信息对应的ID') }),
    },
};
exports.corehrV1EmploymentPatch = {
    project: 'corehr',
    name: 'corehr.v1.employment.patch',
    sdkName: 'corehr.v1.employment.patch',
    path: '/open-apis/corehr/v1/employments/:employment_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-雇佣信息-更新雇佣信息-更新人事工作信息下的字段，如：工号、工作邮箱、雇佣类型、自定义字段等',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            seniority_date: zod_1.z.string().describe('资历起算日期').optional(),
            employee_number: zod_1.z
                .string()
                .describe('员工编号（工号）- 开启自动编码时不可以主动更新- 未开启自动编码，可主动更新： - 由数字或字母组成，请勿使用特殊字符 - 请保证唯一')
                .optional(),
            employment_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('雇佣类型- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：employment - custom_api_name：employment_type')
                .optional(),
            person_id: zod_1.z.string().describe('个人信息 ID，由[【创建个人信息】]时生成').optional(),
            primary_employment: zod_1.z.boolean().describe('是否是主雇佣信息').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 请参考[【自定义字段说明】]')
                .optional(),
            work_email_list: zod_1.z
                .array(zod_1.z.object({
                email: zod_1.z.string().describe('邮箱号'),
                is_primary: zod_1.z.boolean().describe('是否为主要邮箱').optional(),
                is_public: zod_1.z.boolean().describe('是否为公开邮箱').optional(),
                email_usage: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('邮箱用途- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name: email - custom_api_name: email_usage- 请勿填写 home 枚举')
                    .optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段- 当前为预留字段，返回值为空。具体支持的对象请参考[【自定义字段说明】]')
                    .optional(),
            }))
                .describe('工作邮箱列表- 只有满足下面所有条件时，才在工作信息页面可见： - is_primary = "true" - is_public = "true" - email_usage = "work"')
                .optional(),
            reason_for_offboarding: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('离职原因- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：employment - custom_api_name：reason_for_offboarding')
                .optional(),
            ats_application_id: zod_1.z
                .string()
                .describe('招聘投递 ID ，详细信息可以通过[【获取投递信息】]接口查询获得')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ employment_id: zod_1.z.string().describe('雇佣 ID- 类型应与 user_id_type 一致') }),
    },
};
exports.corehrV1JobChangeCreate = {
    project: 'corehr',
    name: 'corehr.v1.jobChange.create',
    sdkName: 'corehr.v1.jobChange.create',
    path: '/open-apis/corehr/v1/job_changes',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-异动-发起员工异动(不推荐)-该接口用于发起员工异动（变更员工雇佣信息），若发起成功，会生成一条员工的异动数据，同时产生相应的事件：[异动状态变更事件]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            transfer_mode: zod_1.z.number().describe('异动方式 Options:1(直接异动（无审批）),2(正常异动（完整流程）)'),
            employment_id: zod_1.z
                .string()
                .describe('雇员ID，ID 类型与查询参数 user_id_type 的取值一致。- 当user_id_type=user_id时，该字段取员工的user_id，取值参考user_id_type部分。- 当user_id_type=people_corehr_id时，则取该员工的人事雇佣ID，可从[雇佣ID]接口获取'),
            transfer_type_unique_identifier: zod_1.z
                .string()
                .describe('异动类型唯一标识，不支持仅在特殊场景使用的异动类型，如组织架构调整、职责转交和试用期转正。可通过接口[获取异动类型列表]获取'),
            flow_id: zod_1.z
                .string()
                .describe('关联流程唯一标识符，可通过接口[获取异动类型列表]获取注意：当异动方式为2时，该字段为必填')
                .optional(),
            effective_date: zod_1.z.string().describe('生效日期，格式："YYYY-MM-DD"'),
            transfer_info: zod_1.z
                .object({
                remark: zod_1.z.string().describe('备注').optional(),
                offer_info: zod_1.z.string().describe('offer信息注：本字段仅会存储到数据库，前端表单不支持直接显示').optional(),
                target_dotted_manager_clean: zod_1.z.boolean().describe('是否撤销虚线上级').optional(),
                probation_exist: zod_1.z.boolean().describe('是否有试用期').optional(),
                original_department: zod_1.z.string().describe('原部门ID，可通过[【批量查询部门】]接口获取').optional(),
                target_department: zod_1.z.string().describe('新部门ID，可通过[【批量查询部门】]接口获取').optional(),
                original_work_location: zod_1.z.string().describe('原工作地点，可通过[【批量查询地点】]接口获取').optional(),
                target_work_location: zod_1.z.string().describe('新工作地点，可通过[【批量查询地点】]接口获取').optional(),
                original_direct_manager: zod_1.z.string().describe('原直属上级，可通过[【搜索员工信息】]接口获取').optional(),
                target_direct_manager: zod_1.z.string().describe('新直属上级，可通过[【搜索员工信息】]接口获取').optional(),
                original_dotted_manager: zod_1.z.string().describe('原虚线上级，可通过[【搜索员工信息】]接口获取').optional(),
                target_dotted_manager: zod_1.z.string().describe('新虚线上级，可通过[【搜索员工信息】]接口获取').optional(),
                original_job: zod_1.z.string().describe('原职务，可通过[【批量查询职务】]接口获取').optional(),
                target_job: zod_1.z.string().describe('新职务，可通过[【批量查询职务】]接口获取').optional(),
                original_job_family: zod_1.z.string().describe('原序列ID，可通过[【批量查询序列】]接口获取').optional(),
                target_job_family: zod_1.z.string().describe('新序列ID，可通过[【批量查询序列】]接口获取').optional(),
                original_job_level: zod_1.z.string().describe('原职级ID，可通过[【批量查询职级】]接口获取').optional(),
                target_job_level: zod_1.z.string().describe('新职级ID，可通过[【批量查询职级】]接口获取').optional(),
                original_workforce_type: zod_1.z.string().describe('原人员类型，可通过[【批量查询人员类型】]接口获取').optional(),
                target_workforce_type: zod_1.z.string().describe('新人员类型，可通过[【批量查询人员类型】]接口获取').optional(),
                original_employee_subtype: zod_1.z.string().describe('原人员子类型').optional(),
                target_employee_subtype: zod_1.z.string().describe('新人员子类型').optional(),
                original_company: zod_1.z.string().describe('原公司，详细信息可通过[【批量查询公司】]接口查询获得').optional(),
                target_company: zod_1.z.string().describe('新公司，详细信息可通过[【批量查询公司】]接口查询获得').optional(),
                original_contract_number: zod_1.z
                    .string()
                    .describe('原合同编号，可通过[【批量查询合同】]接口获取详细信息')
                    .optional(),
                target_contract_number: zod_1.z
                    .string()
                    .describe('新合同编号，可通过[【批量查询合同】]接口获取详细信息')
                    .optional(),
                original_contract_type: zod_1.z
                    .string()
                    .describe('原合同类型，可通过[【批量查询合同】]接口获取详细信息')
                    .optional(),
                target_contract_type: zod_1.z.string().describe('新合同类型，可通过[【批量查询合同】]接口获取详细信息').optional(),
                original_duration_type: zod_1.z
                    .string()
                    .describe('原期限类型，可通过[【批量查询合同】]接口获取详细信息')
                    .optional(),
                target_duration_type: zod_1.z.string().describe('新期限类型，可通过[【批量查询合同】]接口获取详细信息').optional(),
                original_signing_type: zod_1.z.string().describe('原签订类型，可通过[【批量查询合同】]接口获取详细信息').optional(),
                target_signing_type: zod_1.z.string().describe('新签订类型，可通过[【批量查询合同】]接口获取详细信息').optional(),
                original_contract_start_date: zod_1.z.string().describe('原合同开始日期，格式："YYYY-MM-DD"').optional(),
                target_contract_start_date: zod_1.z.string().describe('新合同开始日期，格式："YYYY-MM-DD"').optional(),
                original_contract_end_date: zod_1.z.string().describe('原合同结束日期，格式："YYYY-MM-DD"').optional(),
                target_contract_end_date: zod_1.z.string().describe('新合同结束日期，格式："YYYY-MM-DD"').optional(),
                original_working_hours_type: zod_1.z
                    .string()
                    .describe('原工时制度，可通过[【批量查询工时制度】]接口获取')
                    .optional(),
                target_working_hours_type: zod_1.z.string().describe('新工时制度，可通过[【批量查询工时制度】]接口获取').optional(),
                original_working_calendar: zod_1.z
                    .string()
                    .describe('原工作日历，请开通休假服务后联系管理员获取工作日历数据')
                    .optional(),
                target_working_calendar: zod_1.z
                    .string()
                    .describe('新工作日历，请开通休假服务后联系管理员获取工作日历数据')
                    .optional(),
                original_probation_end_date: zod_1.z.string().describe('原试用期预计结束日期，格式："YYYY-MM-DD"').optional(),
                target_probation_end_date: zod_1.z.string().describe('新试用期预计结束日期，格式："YYYY-MM-DD"').optional(),
                original_weekly_working_hours: zod_1.z.string().describe('原周工作时长').optional(),
                target_weekly_working_hours: zod_1.z.string().describe('新周工作时长').optional(),
                original_work_shift: zod_1.z.string().describe('原排班').optional(),
                target_work_shift: zod_1.z.string().describe('新排班').optional(),
                original_cost_center_rate: zod_1.z
                    .array(zod_1.z.object({
                    cost_center_id: zod_1.z
                        .string()
                        .describe('支持的成本中心id，详细信息可通过[【搜索成本中心信息】]接口查询获得')
                        .optional(),
                    rate: zod_1.z.number().describe('分摊比例').optional(),
                }))
                    .describe('原成本中心分摊信息')
                    .optional(),
                target_cost_center_rate: zod_1.z
                    .array(zod_1.z.object({
                    cost_center_id: zod_1.z
                        .string()
                        .describe('支持的成本中心id，详细信息可通过[【搜索成本中心信息】]接口查询获得')
                        .optional(),
                    rate: zod_1.z.number().describe('分摊比例').optional(),
                }))
                    .describe('新成本中心分摊信息')
                    .optional(),
                original_employment_change: zod_1.z
                    .object({
                    regular_employee_start_date: zod_1.z.string().describe('转正式员工日期，格式："YYYY-MM-DD"').optional(),
                    seniority_date: zod_1.z.string().describe('司龄起算日期，格式："YYYY-MM-DD"').optional(),
                    employee_number: zod_1.z.string().describe('员工编号，可通过[【搜索员工信息】]接口获取').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        custom_api_name: zod_1.z
                            .string()
                            .describe('自定义字段 apiname，即自定义字段的唯一标识。可以通过[获取自定义字段列表]获取'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）注意：1.枚举字段值可通过[获取字段详情]获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('原工作信息')
                    .optional(),
                target_employment_change: zod_1.z
                    .object({
                    regular_employee_start_date: zod_1.z.string().describe('转正式员工日期，格式："YYYY-MM-DD"').optional(),
                    seniority_date: zod_1.z.string().describe('司龄起算日期，格式："YYYY-MM-DD"').optional(),
                    employee_number: zod_1.z.string().describe('员工编号，可通过[【搜索员工信息】]接口获取').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        custom_api_name: zod_1.z
                            .string()
                            .describe('自定义字段 apiname，即自定义字段的唯一标识。可以通过[获取自定义字段列表]获取'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）注意：1.枚举字段值可通过[获取字段详情]获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('新工作信息')
                    .optional(),
                original_job_grade: zod_1.z.string().describe('原职等，可通过[【查询职等】]接口获取').optional(),
                target_job_grade: zod_1.z.string().describe('新职等，可通过[【查询职等】]接口获取').optional(),
                original_compensation_type: zod_1.z.string().describe('原薪资类型').optional(),
                target_compensation_type: zod_1.z.string().describe('新薪资类型').optional(),
                original_service_company: zod_1.z
                    .string()
                    .describe('原任职公司，详细信息可通过[【批量查询公司】]接口查询获得')
                    .optional(),
                target_service_company: zod_1.z
                    .string()
                    .describe('新任职公司，详细信息可通过[【批量查询公司】]接口查询获得')
                    .optional(),
                original_position: zod_1.z.string().describe('原岗位').optional(),
                target_position: zod_1.z.string().describe('新岗位').optional(),
            })
                .describe('异动详细信息，以下参数如不传，无默认值，代表对应数据无异动'),
            transfer_key: zod_1.z.string().describe('发起异动幂等标志，发起失败可以重新用此标志继续请求').optional(),
            initiator_id: zod_1.z.string().describe('异动发起人 ID，可通过[【搜索员工信息】]接口获取').optional(),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z
                .enum(['open_id', 'union_id', 'user_id', 'people_admin_id', 'people_corehr_id'])
                .describe('用户ID类型')
                .optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1JobDataCreate = {
    project: 'corehr',
    name: 'corehr.v1.jobData.create',
    sdkName: 'corehr.v1.jobData.create',
    path: '/open-apis/corehr/v1/job_datas',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-创建任职信息-在系统中第一次创建员工任职数据，通常在员工入职或者做数据批量导入的时候使用，【任职原因】只支持填写“onboarding”',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            job_level_id: zod_1.z.string().describe('职务级别 ID，枚举值及详细信息可通过[【批量查询职级】]接口查询获得').optional(),
            job_grade_id: zod_1.z.string().describe('职等 ID，枚举值及详细信息可通过[【查询职等】]接口查询获得').optional(),
            employee_type_id: zod_1.z.string().describe('人员类型 ID，枚举值及详细信息可通过[【批量查询人员类型】]接口查询获得'),
            working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】]接口查询获得')
                .optional(),
            work_location_id: zod_1.z
                .string()
                .describe('工作地点 ID，枚举值及详细信息可通过[【批量查询地点】]接口查询获得')
                .optional(),
            department_id: zod_1.z
                .string()
                .describe('部门 ID，枚举值及详细信息可通过[【批量查询部门】]接口查询获得与 department_id_type 类型一致'),
            job_id: zod_1.z.string().describe('职务 ID，枚举值及详细信息可通过[【批量查询职务】]接口查询获得').optional(),
            probation_start_date: zod_1.z.string().describe('试用期开始日期').optional(),
            probation_end_date: zod_1.z.string().describe('试用期结束日期（实际结束日期）').optional(),
            primary_job_data: zod_1.z.boolean().describe('是否为主任职- 该字段已废弃，默认为 true，不可更改'),
            employment_id: zod_1.z
                .string()
                .describe('雇佣 ID，详细信息可以通过[【搜索员工信息】]接口查询获得与 user_id_type 类型一致'),
            effective_time: zod_1.z.string().describe('生效时间'),
            expiration_time: zod_1.z.string().describe('失效时间').optional(),
            job_family_id: zod_1.z
                .string()
                .describe('职务序列 ID，枚举值及详细信息可通过[【批量查询序列】]接口查询获得')
                .optional(),
            assignment_start_reason: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('业务类型（原：任职原因）- 可通过[【获取字段详情】]接口查询，查询参数如下： - object_api_name：job_data - custom_api_name：assignment_start_reason- 这里只支持填写"onboarding"'),
            probation_expected_end_date: zod_1.z.string().describe('预计试用期结束日期').optional(),
            direct_manager_id: zod_1.z
                .string()
                .describe('直属上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得')
                .optional(),
            dotted_line_manager_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('虚线上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得')
                .optional(),
            second_direct_manager_id: zod_1.z
                .string()
                .describe('第二直属上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得')
                .optional(),
            cost_center_rate: zod_1.z
                .array(zod_1.z.object({
                cost_center_id: zod_1.z
                    .string()
                    .describe('支持的成本中心 ID，详细信息可通过[【搜索成本中心信息】]接口查询获得')
                    .optional(),
                rate: zod_1.z.number().describe('分摊比例').optional(),
            }))
                .describe('成本中心分摊信息')
                .optional(),
            work_shift: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值。需自定义') })
                .describe('排班类型，枚举值 api_name 可通过[【获取字段详情】]接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "work_shift"')
                .optional(),
            compensation_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值。需自定义') })
                .describe('薪资类型，枚举值 api_name 可通过[【获取字段详情】]接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "compensation_type"')
                .optional(),
            service_company: zod_1.z.string().describe('任职公司 ID，详细信息可通过[【批量查询公司】]接口查询获得').optional(),
            position_id: zod_1.z.string().describe('岗位 ID，枚举值及详细信息可通过【查询单个岗位】接口查询获得').optional(),
            pathway_id: zod_1.z.string().describe('通道 ID').optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个 department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1JobDataDelete = {
    project: 'corehr',
    name: 'corehr.v1.jobData.delete',
    sdkName: 'corehr.v1.jobData.delete',
    path: '/open-apis/corehr/v1/job_datas/:job_data_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-删除任职信息-删除人员的任职信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            version_id: zod_1.z
                .string()
                .describe('需要删除的任职记录版本 ID- 通过[【批量查询员工任职】]可以获得- 不支持第一条版本：任职原因为 onboarding、add_additional_job 的任职（兼职）记录')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ job_data_id: zod_1.z.string().describe('需要删除的任职信息 ID- 通过[【批量查询员工任职】]可以获得') }),
    },
};
exports.corehrV1JobDataGet = {
    project: 'corehr',
    name: 'corehr.v1.jobData.get',
    sdkName: 'corehr.v1.jobData.get',
    path: '/open-apis/corehr/v1/job_datas/:job_data_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-查询单个任职信息-根据 ID 查询当前生效的主任职记录。所有主任职记录中只有一条记录版本当前生效',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            job_data_id: zod_1.z.string().describe('任职信息 ID，可通过[【创建任职信息】]、[【批量查询员工任职信息】]等接口获取'),
        }),
    },
};
exports.corehrV1JobDataList = {
    project: 'corehr',
    name: 'corehr.v1.jobData.list',
    sdkName: 'corehr.v1.jobData.list',
    path: '/open-apis/corehr/v1/job_datas',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-批量查询任职信息-批量查询员工的任职信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            employment_id: zod_1.z
                .string()
                .describe('雇佣 ID，可通过[【搜索员工信息】]获取- 应与 user_id_type 类型一致')
                .optional(),
            job_data_id_list: zod_1.z.array(zod_1.z.string()).describe('任职信息 ID 列表- 默认查询全部任职信息').optional(),
            department_id: zod_1.z.string().describe('部门 ID- 应与 department_id_type 类型一致- 默认为空').optional(),
            job_id: zod_1.z.string().describe('职务 ID- 默认为空').optional(),
            get_all_version: zod_1.z
                .boolean()
                .describe('是否获取所有版本的任职记录- true 为获取员工所有版本的任职记录- false 为仅获取当前生效的任职记录- 默认为 false')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        }),
    },
};
exports.corehrV1JobDataPatch = {
    project: 'corehr',
    name: 'corehr.v1.jobData.patch',
    sdkName: 'corehr.v1.jobData.patch',
    path: '/open-apis/corehr/v1/job_datas/:job_data_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-更新任职信息-默认为新增一条任职记录，包括职务、职级、序列、部门等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            version_id: zod_1.z
                .string()
                .describe('任职记录版本 ID- ID 不为空时，将更新指定版本的任职记录内容- ID 为空时，将新增一个版本功能灰度中，若需要更新指定版本请联系[技术支持]')
                .optional(),
            job_level_id: zod_1.z
                .string()
                .describe('职务级别 ID，枚举值及详细信息可通过[【批量查询职级】]接口查询获得')
                .optional(),
            job_grade_id: zod_1.z.string().describe('职等 ID，枚举值及详细信息可通过[【查询职等】]接口查询获得').optional(),
            employee_type_id: zod_1.z
                .string()
                .describe('人员类型 ID，枚举值及详细信息可通过[【批量查询人员类型】]接口查询获得')
                .optional(),
            working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】]接口查询获得')
                .optional(),
            work_location_id: zod_1.z
                .string()
                .describe('工作地点 ID，枚举值及详细信息可通过[【批量查询地点】]接口查询获得')
                .optional(),
            department_id: zod_1.z
                .string()
                .describe('部门 ID，枚举值及详细信息可通过[【批量查询部门】]接口查询获得- 与 department_id_type 类型一致')
                .optional(),
            job_id: zod_1.z.string().describe('职务 ID，枚举值及详细信息可通过[【批量查询职务】]接口查询获得').optional(),
            probation_start_date: zod_1.z.string().describe('试用期开始日期- strict_verify 为 true 时不支持该字段').optional(),
            probation_end_date: zod_1.z
                .string()
                .describe('试用期结束日期（实际结束日期）- strict_verify 为 true 时不支持该字段')
                .optional(),
            primary_job_data: zod_1.z.boolean().describe('是否为主任职- 该字段已废弃，默认为 true，不可更改').optional(),
            effective_time: zod_1.z.string().describe('生效时间- 不可为空字符，不传时默认值为当天').optional(),
            expiration_time: zod_1.z.string().describe('失效时间- strict_verify 为 true 时不支持该字段').optional(),
            job_family_id: zod_1.z
                .string()
                .describe('职务序列 ID，枚举值及详细信息可通过[【批量查询序列】]接口查询获得')
                .optional(),
            assignment_start_reason: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('业务类型（原：任职原因）- 枚举值[【获取字段详情】] - object_api_name: job_data - custom_api_name: assignment_start_reason- 请注意，该枚举不允许填写为「onboarding、offboarding」，当上一个任职版本的值为「onboarding」时，该字段必填')
                .optional(),
            probation_expected_end_date: zod_1.z
                .string()
                .describe('预计试用期结束日期- strict_verify 为 true 时不支持该字段')
                .optional(),
            direct_manager_id: zod_1.z
                .string()
                .describe('直属上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得')
                .optional(),
            dotted_line_manager_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('虚线上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得')
                .optional(),
            second_direct_manager_id: zod_1.z
                .string()
                .describe('第二直属上级的任职记录 ID，详细信息可通过[【批量查询员工任职信息】]接口查询获得- strict_verify 为 true 时不支持该字段')
                .optional(),
            cost_center_rate: zod_1.z
                .array(zod_1.z.object({
                cost_center_id: zod_1.z
                    .string()
                    .describe('支持的成本中心 ID，详细信息可通过[【搜索成本中心信息】]接口查询获得')
                    .optional(),
                rate: zod_1.z.number().describe('分摊比例').optional(),
            }))
                .describe('成本中心分摊信息- 当 version_id 有值时，不支持该字段')
                .optional(),
            work_shift: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值。需自定义') })
                .describe('排班类型，枚举值 api_name 可通过[【获取字段详情】]接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "work_shift"')
                .optional(),
            compensation_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值。需自定义') })
                .describe('薪资类型，枚举值 api_name 可通过[【获取字段详情】]接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "compensation_type"')
                .optional(),
            service_company: zod_1.z.string().describe('任职公司 ID，详细信息可通过[【批量查询公司】]接口查询获得').optional(),
            pathway_id: zod_1.z.string().describe('通道 ID').optional(),
        })
            .optional(),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个 department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)')
                .optional(),
            strict_verify: zod_1.z
                .string()
                .describe('是否强校验。值为 true 时，会对入参进行业务校验，并产生异动记录、发送异动事件。- 默认值：true - 仅在新增任职版本时生效，即当 version_id 有值时该字段不生效- 使用此功能时，试用期相关字段不支持- 当响应返回的任职数据无变化时，请检查人事系统-异动管理')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({ job_data_id: zod_1.z.string().describe('任职信息ID') }),
    },
};
exports.corehrV1JobFamilyCreate = {
    project: 'corehr',
    name: 'corehr.v1.jobFamily.create',
    sdkName: 'corehr.v1.jobFamily.create',
    path: '/open-apis/corehr/v1/job_families',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-创建序列-可以通过该接口创建单个序列信息，同时该接口会针对该接口的内容做校验',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，中文用zh-CN，英文用en-US'),
                value: zod_1.z
                    .string()
                    .describe('名称信息的内容- 名称不能包含「/」「；」「;」字符- 序列中英文名称会有全局唯一校验'),
            }))
                .describe('序列名称'),
            active: zod_1.z.boolean().describe('是否启用，true为启用，false为停用'),
            selectable: zod_1.z.boolean().describe('是否可被使用，true为可被使用，false为不可被使用').optional(),
            parent_id: zod_1.z
                .string()
                .describe('上级序列 ID。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID')
                .optional(),
            pathway_ids: zod_1.z.array(zod_1.z.string()).describe('通道ID，详情可以参考[【获取通道信息】]').optional(),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59- 详情可以参考[时间轴介绍]'),
            code: zod_1.z.string().describe('编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
            description: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('语言，中文用zh-CN，英文用en-US'), value: zod_1.z.string().describe('内容') }))
                .describe('描述')
                .optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")- 自定义字段类型，详细见[获取自定义字段列表]'),
            }))
                .describe('自定义字段（该字段暂时不支持）')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1JobFamilyDelete = {
    project: 'corehr',
    name: 'corehr.v1.jobFamily.delete',
    sdkName: 'corehr.v1.jobFamily.delete',
    path: '/open-apis/corehr/v1/job_families/:job_family_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-删除序列-该接口支持通过序列ID删除单个序列信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            job_family_id: zod_1.z
                .string()
                .describe('需要删除的序列 ID。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID'),
        }),
    },
};
exports.corehrV1JobFamilyGet = {
    project: 'corehr',
    name: 'corehr.v1.jobFamily.get',
    sdkName: 'corehr.v1.jobFamily.get',
    path: '/open-apis/corehr/v1/job_families/:job_family_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-查询单个序列-该接口支持通过序列ID查询单个序列详情信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            job_family_id: zod_1.z
                .string()
                .describe('序列ID。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID'),
        }),
    },
};
exports.corehrV1JobFamilyList = {
    project: 'corehr',
    name: 'corehr.v1.jobFamily.list',
    sdkName: 'corehr.v1.jobFamily.list',
    path: '/open-apis/corehr/v1/job_families',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-批量查询序列-该接口支持获取租户下的所有序列信息。序列数量过多时，可以通过多次循环调用该接口获取所有序列详情信息，包括序列编码、名称等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小，最大值支持传100'),
        }),
    },
};
exports.corehrV1JobFamilyPatch = {
    project: 'corehr',
    name: 'corehr.v1.jobFamily.patch',
    sdkName: 'corehr.v1.jobFamily.patch',
    path: '/open-apis/corehr/v1/job_families/:job_family_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-更新序列-可以通过序列ID更新单个序列详情信息，例如序列名称、上级序列ID等',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('序列名称- 名称不能包含「/」「；」「」字符。- 序列中英文名称会有全局唯一校验'),
            }))
                .describe('序列名称')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用').optional(),
            selectable: zod_1.z.boolean().describe('是否可被使用，true为可被使用，false为不可被使用').optional(),
            parent_id: zod_1.z
                .string()
                .describe('上级序列ID。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID')
                .optional(),
            pathway_ids: zod_1.z.array(zod_1.z.string()).describe('通道ID，详情可以参考[获取通道信息]').optional(),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59- 详情可以参考[时间轴介绍]')
                .optional(),
            code: zod_1.z
                .string()
                .describe('序列编码 (不能与其他记录的编码重复)- 开启自动编码时，如果不传值会自动生成编码，否则以传入值为准- 未开启自动编码时，不传值不会自动生成编码')
                .optional(),
            description: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('内容'),
            }))
                .describe('描述')
                .optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('自定义字段 API Name，即自定义字段的唯一标识'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段（该字段暂时不支持）')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({
            job_family_id: zod_1.z
                .string()
                .describe('序列ID。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID'),
        }),
    },
};
exports.corehrV1JobLevelCreate = {
    project: 'corehr',
    name: 'corehr.v1.jobLevel.create',
    sdkName: 'corehr.v1.jobLevel.create',
    path: '/open-apis/corehr/v1/job_levels',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-新建职级-使用指定信息创建职级信息，每次调用支持创建1个职级对象，接口内会做相关规则校验',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            level_order: zod_1.z.number().describe('职级数值，该字段主要用来在职级大小排序，职级的数值越大，代表职级越高'),
            code: zod_1.z
                .string()
                .describe('职级编码。非必填字段，如果非空值会校验全局唯一性，如果传空值则不参与全局校验')
                .optional(),
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，中文用zh-CN，英文用en-US'),
                value: zod_1.z
                    .string()
                    .describe('名称信息的内容。- 职级中英文名称会有全局唯一校验- 名称不能包含「/」「；」「;」字符'),
            }))
                .describe('职级名称'),
            description: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('描述')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用，true为启用，false为停用'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，为 JSON 转义后的字符串。**注意：具体传值方式参见**[获取自定义字段的元数据]'),
            }))
                .describe('自定义字段（目前职级暂不支持该功能）')
                .optional(),
            job_grade: zod_1.z.array(zod_1.z.string()).describe('职等 ID 列表').optional(),
            pathway_ids: zod_1.z.array(zod_1.z.string()).describe('通道ID，详情可以参考[【获取通道信息】]').optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1JobLevelDelete = {
    project: 'corehr',
    name: 'corehr.v1.jobLevel.delete',
    sdkName: 'corehr.v1.jobLevel.delete',
    path: '/open-apis/corehr/v1/job_levels/:job_level_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-删除职级-可以通过该接口通过职级ID删除一个职级对象。- 删除对象时请确认有无在职员工、待入职单据、职务等关联此对象，如有会导致删除失败',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            job_level_id: zod_1.z
                .string()
                .describe('需要删除的职级 ID。ID获取方式：- 调用[【新建职级】][【查询租户的职级信息】]等接口可以返回职级ID'),
        }),
    },
};
exports.corehrV1JobLevelGet = {
    project: 'corehr',
    name: 'corehr.v1.jobLevel.get',
    sdkName: 'corehr.v1.jobLevel.get',
    path: '/open-apis/corehr/v1/job_levels/:job_level_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-查询单个职级-该接口支持通过职级id 查询单个职级详情信息，包括职级包含的名称、描述、启用状态等',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            job_level_id: zod_1.z
                .string()
                .describe('职级ID。ID获取方式：- 调用[【新建职级】][【查询租户的职级信息】]等接口可以返回职级ID'),
        }),
    },
};
exports.corehrV1JobLevelList = {
    project: 'corehr',
    name: 'corehr.v1.jobLevel.list',
    sdkName: 'corehr.v1.jobLevel.list',
    path: '/open-apis/corehr/v1/job_levels',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-批量查询职级-该接口支持获取租户下的所有职级信息。职级数量过多时，可以通过多次循环调用该接口获取所有职级详情信息，包括职级数值、编码、名称等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小，最大支持传100'),
        }),
    },
};
exports.corehrV1JobLevelPatch = {
    project: 'corehr',
    name: 'corehr.v1.jobLevel.patch',
    sdkName: 'corehr.v1.jobLevel.patch',
    path: '/open-apis/corehr/v1/job_levels/:job_level_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-更新单个职级-该接口可以通过职级ID更新单个职级信息，包括职级数值、名称等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            level_order: zod_1.z
                .number()
                .describe('职级数值，该字段主要用来在职级大小排序，职级的数值越大，代表职级越高- 如果不填该字段则不更新')
                .optional(),
            code: zod_1.z
                .string()
                .describe('职级编码。非必填字段，如果非空值会校验全局唯一性，如果传空值则不参与全局校验')
                .optional(),
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('名称信息的语言，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('职级名称')
                .optional(),
            description: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('描述')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z.string().describe('字段值，是json转义后的字符串，具体传值方式参见[获取自定义字段的元数据]'),
            }))
                .describe('自定义字段（该字段暂时不支持）')
                .optional(),
            job_grade: zod_1.z.array(zod_1.z.string()).describe('职等 ID 列表').optional(),
            pathway_ids: zod_1.z.array(zod_1.z.string()).describe('通道ID，详情可以参考[【获取通道信息】]').optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({
            job_level_id: zod_1.z
                .string()
                .describe('职级ID。ID获取方式：- 调用[【新建职级】][【查询租户的职级信息】]等接口可以返回职级ID'),
        }),
    },
};
exports.corehrV1JobCreate = {
    project: 'corehr',
    name: 'corehr.v1.job.create',
    sdkName: 'corehr.v1.job.create',
    path: '/open-apis/corehr/v1/jobs',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-创建职务-可以通过该接口新建职务信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            code: zod_1.z.string().describe('职务编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('职务名称- 名称不能包含「/」「；」「;」字符- 职务中英文名称会有全局唯一校验（已停用职务也会校验）'),
            description: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('描述')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用，true为启用，false为停用'),
            job_title: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('职务头衔')
                .optional(),
            pathway_id: zod_1.z.string().describe('通道ID').optional(),
            job_family_id_list: zod_1.z.array(zod_1.z.string()).describe('职务序列 ID 列表- 可通过[批量查询序列]获取详情').optional(),
            job_level_id_list: zod_1.z.array(zod_1.z.string()).describe('职务级别 ID 列表- 可通过[批量查询职级]获取详情').optional(),
            working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】]接口查询获得')
                .optional(),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59- 详情可以参考[时间轴介绍]'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段，格式参考：[【自定义字段说明】]岗位、职务、自定义组织模块')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1JobDelete = {
    project: 'corehr',
    name: 'corehr.v1.job.delete',
    sdkName: 'corehr.v1.job.delete',
    path: '/open-apis/corehr/v1/jobs/:job_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-删除职务-你可以通过该接口删除一个职务信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            job_id: zod_1.z
                .string()
                .describe('需要删除的职务 ID。ID获取方式：- 调用[【创建职务】][【批量查询职务】]等可以返回职务ID- 也可以通过[【事件】创建职务] [【事件】更新职务] 获取ID'),
        }),
    },
};
exports.corehrV1JobGet = {
    project: 'corehr',
    name: 'corehr.v1.job.get',
    sdkName: 'corehr.v1.job.get',
    path: '/open-apis/corehr/v1/jobs/:job_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-查询单个职务-该接口支持通过职务id批量查询当天的职务详情信息，包括职务包含的名称、描述、启用状态等',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ job_id: zod_1.z.string().describe('职务 ID') }),
    },
};
exports.corehrV1JobList = {
    project: 'corehr',
    name: 'corehr.v1.job.list',
    sdkName: 'corehr.v1.job.list',
    path: '/open-apis/corehr/v1/jobs',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-组织管理-批量查询职务-批量查询职务',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            name: zod_1.z.string().describe('名称').optional(),
            query_language: zod_1.z.string().describe('语言').optional(),
        }),
    },
};
exports.corehrV1JobPatch = {
    project: 'corehr',
    name: 'corehr.v1.job.patch',
    sdkName: 'corehr.v1.job.patch',
    path: '/open-apis/corehr/v1/jobs/:job_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-更新职务-你可以通过该接口更新一个职务信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            code: zod_1.z.string().describe('职务编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
            name: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('职务名称- 名称不能包含「/」「；」「」字符- xx中英文名称会有全局唯一校验（已停用职务也会校验）')
                .optional(),
            description: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('描述')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用，true为停用，fasle为启用').optional(),
            job_title: zod_1.z
                .array(zod_1.z.object({
                lang: zod_1.z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: zod_1.z.string().describe('名称信息的内容'),
            }))
                .describe('职务头衔')
                .optional(),
            pathway_id: zod_1.z.string().describe('通道ID，详情可以参考[【获取通道信息】]').optional(),
            job_family_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('职务序列 ID 列表。ID获取方式：- 调用[【新建序列】][【查询租户的序列信息】]等接口可以返回序列ID')
                .optional(),
            job_level_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('职务级别 ID 列表。ID获取方式：- 调用[【新建职级】][【查询租户的职级信息】]等接口可以返回职级ID')
                .optional(),
            working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】]接口查询获得')
                .optional(),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59')
                .optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段，格式参考：[【自定义字段说明】]岗位、职务、自定义组织模块')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({
            job_id: zod_1.z
                .string()
                .describe('职务ID。ID获取方式：- 调用[【创建职务】][【批量查询职务】]等可以返回职务ID- 也可以通过[【事件】创建职务] [【事件】更新职务] 获取ID'),
        }),
    },
};
exports.corehrV1LeaveGrantingRecordCreate = {
    project: 'corehr',
    name: 'corehr.v1.leaveGrantingRecord.create',
    sdkName: 'corehr.v1.leaveGrantingRecord.create',
    path: '/open-apis/corehr/v1/leave_granting_records',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-创建假期发放记录-向飞书人事休假系统写入假期发放记录。对应假勤管理-休假管理-[发放记录]的创建或者导入功能',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            leave_type_id: zod_1.z
                .string()
                .describe('假期类型 ID，枚举值可通过[获取假期类型列表]接口获取（若假期类型下存在假期子类，此处仅支持传入假期子类的 ID）'),
            employment_id: zod_1.z.string().describe('员工 ID，飞书人事的雇员id。对应user_id_type'),
            granting_quantity: zod_1.z.string().describe('发放数量（小数位数不能超过6位，授予数量范围为-9999~9999）'),
            granting_unit: zod_1.z.number().describe('发放时长单位可选值有：- 1: 天- 2: 小时'),
            effective_date: zod_1.z.string().describe('生效时间，格式为yyyy-MM-dd'),
            expiration_date: zod_1.z.string().describe('失效时间，格式为yyyy-MM-dd').optional(),
            section_type: zod_1.z.number().describe('是否参与折算（1不参与折算，2参与折算）。默认不折算').optional(),
            reason: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('发放原因'),
            external_id: zod_1.z
                .string()
                .describe('自定义外部 ID，可用于避免数据重复写入（不能超过 64 字符）。如果重复录入，不会创建新纪录、也不会更新原始记录')
                .optional(),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        })
            .optional(),
    },
};
exports.corehrV1LeaveGrantingRecordDelete = {
    project: 'corehr',
    name: 'corehr.v1.leaveGrantingRecord.delete',
    sdkName: 'corehr.v1.leaveGrantingRecord.delete',
    path: '/open-apis/corehr/v1/leave_granting_records/:leave_granting_record_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-删除假期发放记录-删除飞书人事休假系统中的发放记录，假勤管理-休假管理-[发放记录]（仅支持删除发放来源是「手动发放」或「外部系统发放」的记录）',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            leave_granting_record_id: zod_1.z.string().describe('假期发放记录 ID，从[创建假期发放记录]中可以获得'),
        }),
    },
};
exports.corehrV1LeaveCalendarByScope = {
    project: 'corehr',
    name: 'corehr.v1.leave.calendarByScope',
    sdkName: 'corehr.v1.leave.calendarByScope',
    path: '/open-apis/corehr/v1/leaves/calendar_by_scope',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-根据适用条件获取工作日历 ID-根据日历的适用范围，获取工作日历 ID。适用范围包含工作地点，工时制度等',
    accessTokens: ['tenant', 'user'],
    schema: {
        params: zod_1.z
            .object({
            wk_department_id: zod_1.z
                .string()
                .describe('用户所属部门的ID列表。可以通过[批量查询任职信息]获取所属部门的 ID')
                .optional(),
            wk_country_region_id: zod_1.z
                .string()
                .describe('国家/地区 ID。可以通过[批量查询任职信息] 获取所属国家/地区 ID')
                .optional(),
            wk_employee_type_id: zod_1.z
                .string()
                .describe('人员类型ID。可以通过[批量查询任职信息] 获取所属人员类型ID')
                .optional(),
            wk_work_location_id: zod_1.z.string().describe('工作地点ID。可以通过[批量查询任职信息] 获取工作地点ID').optional(),
            wk_working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度ID。可以通过[批量查询任职信息] 获取工时制度ID')
                .optional(),
            wk_job_family_id: zod_1.z.string().describe('职务序列ID。可以通过[批量查询任职信息] 获取职务序列ID').optional(),
            wk_company_id: zod_1.z.string().describe('公司 ID。可以通过[批量查询任职信息]获取公司 ID').optional(),
        })
            .optional(),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.corehrV1LeaveLeaveBalances = {
    project: 'corehr',
    name: 'corehr.v1.leave.leaveBalances',
    sdkName: 'corehr.v1.leave.leaveBalances',
    path: '/open-apis/corehr/v1/leaves/leave_balances',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-批量查询员工假期余额-批量获取员工各个假期的余额数据。对应页面为假勤管理-休假管理-[假期报表]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            as_of_date: zod_1.z
                .string()
                .describe('查询截止日期，即截止到某天余额数据的日期（不传则默认为当天）。格式为yyyy-MM-dd')
                .optional(),
            employment_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('员工 ID 列表，最大 100 个（不传则默认查询全部员工），对应user_id_type。请注意：此接口为get请求，所以传入数组时需要满足get请求传入数组的规范，例如employment_id_list=6919733291281024522&employment_id_list=6919733291281024523')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            time_zone: zod_1.z.string().describe('查询时区').optional(),
            include_offboard: zod_1.z.boolean().describe('是否获取离职折算字段，默认值为false').optional(),
        }),
    },
};
exports.corehrV1LeaveLeaveRequestHistory = {
    project: 'corehr',
    name: 'corehr.v1.leave.leaveRequestHistory',
    sdkName: 'corehr.v1.leave.leaveRequestHistory',
    path: '/open-apis/corehr/v1/leaves/leave_request_history',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-批量查询员工请假记录-批量获取员工的请假记录数据。对应页面为假勤管理-休假管理-[请假记录]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            employment_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('员工 ID 列表，最大 100 个（不传则默认查询全部员工），ID 类型与 user_id_type 一致。请注意：此接口为get请求，所以传入数组时需要满足get请求传入数组的规范，例如employment_id_list=6919733291281024522&employment_id_list=6919733291281024523')
                .optional(),
            initiator_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('休假发起人 ID 列表，最大 100 个，ID 类型与 user_id_type 一致。请注意：此接口为get请求，所以传入数组时需要满足get请求传入数组的规范，例如initiator_id_list=6919733291281024522&initiator_id_list=6919733291281024523')
                .optional(),
            leave_request_status: zod_1.z
                .array(zod_1.z.string())
                .describe('请假记录的状态，不填为不过滤状态。请注意：此接口为get请求，所以传入数组时需要满足get请求传入数组的规范，例如leave_request_status =1&leave_request_status=2可选值有：- 1：已通过- 2：审批中- 3：审批中（更正）- 4：审批中（取消休假）- 5：审批中（返岗）- 6：已返岗- 7：已拒绝- 8：已取消- 9：已撤回')
                .optional(),
            leave_type_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('假期类型 ID 列表，枚举值可通过[获取假期类型列表]接口获取。请注意：此接口为get请求，所以传入数组时需要满足get请求传入数组的规范，例如leave_type_id_list =4718803945687580501&leave_type_id_list=4718803945687580500')
                .optional(),
            leave_start_date_min: zod_1.z.string().describe('休假开始时间晚于等于的日期，格式为yyyy-MM-dd').optional(),
            leave_start_date_max: zod_1.z.string().describe('休假开始时间早于等于的日期，格式为yyyy-MM-dd').optional(),
            leave_end_date_min: zod_1.z.string().describe('休假结束时间晚于等于的日期，格式为yyyy-MM-dd').optional(),
            leave_end_date_max: zod_1.z.string().describe('休假结束时间早于等于的日期，格式为yyyy-MM-dd').optional(),
            leave_submit_date_min: zod_1.z.string().describe('休假发起时间晚于等于的日期，格式为yyyy-MM-dd').optional(),
            leave_submit_date_max: zod_1.z.string().describe('休假发起时间早于等于的日期，格式为yyyy-MM-dd').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
            leave_update_time_min: zod_1.z
                .string()
                .describe('请假记录更新时间晚于等于的时间，格式为yyyy-MM-dd HH:mm:ss')
                .optional(),
            leave_update_time_max: zod_1.z
                .string()
                .describe('请假记录更新时间早于等于的时间，格式为yyyy-MM-dd HH:mm:ss')
                .optional(),
            return_detail: zod_1.z
                .boolean()
                .describe('（暂未开放）是否返回请假详情，若为true，将在每条请假记录的details字段返回请假详情')
                .optional(),
            leave_term_type: zod_1.z
                .number()
                .describe('指定过滤长/短假类型，0表示不过滤，1表示仅获取短假，2表示仅获取长假, 默认0')
                .optional(),
            time_zone: zod_1.z.string().describe('请假记录所在时区').optional(),
            data_source: zod_1.z
                .number()
                .describe('（暂未开放）请假记录数据源，1表示中国大陆休假，2表示海外休假，不传或0表示不过滤')
                .optional(),
            db_update_time_min: zod_1.z
                .string()
                .describe('（暂未开放）请假记录DB更新时间晚于等于的时间，格式为yyyy-MM-dd HH:mm:ss')
                .optional(),
            db_update_time_max: zod_1.z
                .string()
                .describe('（暂未开放）请假记录DB更新时间早于等于的时间，格式为yyyy-MM-dd HH:mm:ss')
                .optional(),
            wd_need_amount_zero_records: zod_1.z
                .boolean()
                .describe('WorkDay专用 是否返回0值的请假记录，若为true，将返回0值的请假记录')
                .optional(),
            wd_need_denied_and_canceled_record: zod_1.z
                .boolean()
                .describe('WorkDay专用 是否拒绝和取消的请假记录，若为true，将返回拒绝和取消的请假记录')
                .optional(),
            wd_paid_type: zod_1.z.number().describe('WorkDay专用 扣薪类型, 1不参与算薪 2影响算薪 3不影响算薪').optional(),
        }),
    },
};
exports.corehrV1LeaveLeaveTypes = {
    project: 'corehr',
    name: 'corehr.v1.leave.leaveTypes',
    sdkName: 'corehr.v1.leave.leaveTypes',
    path: '/open-apis/corehr/v1/leaves/leave_types',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-获取假期类型列表-获取休假设置后台配置的假期类型列表（比如年假、事假、婚假等）。对应页面功能为设置-假勤设置-[假期类型]',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            status: zod_1.z.string().describe('假期类型状态（不传则为全部）可选值有：- 1：已启用- 2：已停用').optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        }),
    },
};
exports.corehrV1LeaveWorkCalendar = {
    project: 'corehr',
    name: 'corehr.v1.leave.workCalendar',
    sdkName: 'corehr.v1.leave.workCalendar',
    path: '/open-apis/corehr/v1/leaves/work_calendar',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-获取工作日历-获取工作日历信息，如名称，状态等',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            wk_calendar_ids: zod_1.z.array(zod_1.z.string()).describe('工作日历ID列表，第一次传入时可以传入空数组，形如[]'),
            wk_calendar_id_gt: zod_1.z.string().describe('工作日历ID大于').optional(),
            wk_option: zod_1.z
                .object({
                count: zod_1.z.boolean().describe('是否返回符合条件的工作日历总数，默认值为true').optional(),
                offset: zod_1.z.number().describe('分页查询的位移，从0开始，默认值为0').optional(),
                limit: zod_1.z.number().describe('分页查询单次查询数量，默认值为2000'),
                sort_options: zod_1.z
                    .array(zod_1.z.object({
                    sort_field: zod_1.z.string().describe('排序字段').optional(),
                    sort_order: zod_1.z.number().describe('排序顺序 Options:0(ASC 升序),1(DESC 降序)').optional(),
                    sort_i18n: zod_1.z
                        .number()
                        .describe('0=中文关键字;1=英文关键字;2=拼音 Options:0(CN_KEYWORD 中文关键字),1(EN_KEYWORD 英文关键字),2(SORT_FULL_PINYIN 拼音)')
                        .optional(),
                    sort_by_strand_length: zod_1.z.boolean().describe('按某个字段的层级深度排序').optional(),
                    sort_by_pinyin: zod_1.z.boolean().describe('是否按照拼音排序').optional(),
                    sort_by_enum_value_order: zod_1.z.boolean().describe('是否按照枚举类型 value_order 排序').optional(),
                }))
                    .describe('排序')
                    .optional(),
            })
                .describe('分页、排序等选项，如未填写将赋默认值')
                .optional(),
            only_enable: zod_1.z.boolean().describe('是否只返回启用的工作日历，不填默认true').optional(),
        }),
    },
};
exports.corehrV1LeaveWorkCalendarDate = {
    project: 'corehr',
    name: 'corehr.v1.leave.workCalendarDate',
    sdkName: 'corehr.v1.leave.workCalendarDate',
    path: '/open-apis/corehr/v1/leaves/work_calendar_date',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-休假-获取工作日历日期详情-获取工作日历每一天的日期详情，如日期、日期类型等',
    accessTokens: ['tenant', 'user'],
    schema: {
        data: zod_1.z.object({
            wk_calendar_ids: zod_1.z.array(zod_1.z.string()).describe('工作日历ID列表，最多100；可以通过[获取工作日历] 获取工作日历ID'),
            dates: zod_1.z
                .array(zod_1.z.string())
                .describe('日期，格式："2006-01-02"，最多50个；**注意**：- 如果不传 ids 参数，则必须传 dates 参数或 [begin_date，end_date]参数- 如果传 ids 参数，则仅生效 ids 参数，无需传 dates 参数或 [begin_date，end_date]参数')
                .optional(),
            begin_date: zod_1.z
                .string()
                .describe('日期范围-开始日期，格式："2006-01-02"；需要和end_date一起使用；**注意**：- 如果不传 ids 参数，则必须传 dates 参数或 [begin_date，end_date]参数- 如果传 ids 参数，则仅生效 ids 参数，无需传 dates 参数或 [begin_date，end_date]参数')
                .optional(),
            end_date: zod_1.z.string().describe('日期范围-结束日期(含)，格式："2006-01-02"；需要和begin_date一起使用').optional(),
            offset: zod_1.z.number().describe('分页').optional(),
            limit: zod_1.z.number().describe('分页大小').optional(),
            ids: zod_1.z
                .array(zod_1.z.string())
                .describe('日期id，可使用响应体中的data.calendar_dates.id**注意**：- 如果不传 ids 参数，则必须传 dates 参数或 [begin_date，end_date]参数- 如果传 ids 参数，则仅生效 ids 参数，无需传 dates 参数或 [begin_date，end_date]参数')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
    },
};
exports.corehrV1LocationCreate = {
    project: 'corehr',
    name: 'corehr.v1.location.create',
    sdkName: 'corehr.v1.location.create',
    path: '/open-apis/corehr/v1/locations',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-创建地点-在系统中第一次创建地点数据',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            hiberarchy_common: zod_1.z
                .object({
                parent_id: zod_1.z
                    .string()
                    .describe('上级地点ID。ID获取方式：- 调用[【创建地点】][【批量分页查询地点】]等接口可以返回地点ID')
                    .optional(),
                name: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言- 中文用zh-CN，英文用en-US'),
                    value: zod_1.z.string().describe('内容'),
                }))
                    .describe('地点名称- 名称不能包含「/」「；」「;」字符。- 地点中英文名称会有全局唯一校验'),
                active: zod_1.z.boolean().describe('启用状态，true为启用，false为停用'),
                code: zod_1.z.string().describe('编码- 编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('语言- 中文用zh-CN，英文用en-US'),
                    value: zod_1.z.string().describe('内容'),
                }))
                    .describe('描述')
                    .optional(),
            })
                .describe('地点基本信息，该结构维护了地点的名称、编码、启用状态、上级地点等基础信息'),
            location_usage_list: zod_1.z
                .array(zod_1.z.object({
                enum_name: zod_1.z
                    .string()
                    .describe('地点用途 ID，枚举值及详细信息可通过[【批量查询地点用途】]接口查询获得。- 请求参数object_api_name=location；custom_api_name=location_usage'),
            }))
                .describe('地点用途')
                .optional(),
            address: zod_1.z
                .array(zod_1.z.object({
                country_region_id: zod_1.z.string().describe('国家 / 地区 ID可通过[【查询国家/地区信息】]接口获取'),
                region_id: zod_1.z.string().describe('主要行政区 ID可通过[【查询省份/行政区信息】]接口获取').optional(),
                city_id: zod_1.z.string().describe('城市ID。ID获取调用[【查询城市信息】]等接口可以返回城市ID').optional(),
                distinct_id: zod_1.z.string().describe('区县ID。ID获取调用[【查询区县信息】]等接口可以返回区县ID').optional(),
                address_line1: zod_1.z.string().describe('地址行 1- 填写规则可见[【地址填写指南】]').optional(),
                address_line2: zod_1.z.string().describe('地址行 2- 填写规则可见[【地址填写指南】]').optional(),
                address_line3: zod_1.z.string().describe('地址行 3- 填写规则可见[【地址填写指南】]').optional(),
                address_line4: zod_1.z.string().describe('地址行 4- 填写规则可见[【地址填写指南】]').optional(),
                address_line5: zod_1.z.string().describe('地址行 5- 填写规则可见[【地址填写指南】]').optional(),
                address_line6: zod_1.z.string().describe('地址行 6- 填写规则可见[【地址填写指南】]').optional(),
                address_line7: zod_1.z.string().describe('地址行 7- 填写规则可见[【地址填写指南】]').optional(),
                address_line8: zod_1.z.string().describe('地址行 8- 填写规则可见[【地址填写指南】]').optional(),
                address_line9: zod_1.z.string().describe('地址行 9- 填写规则可见[【地址填写指南】]').optional(),
                local_address_line1: zod_1.z
                    .string()
                    .describe('地址行 1（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line2: zod_1.z
                    .string()
                    .describe('地址行 2（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line3: zod_1.z
                    .string()
                    .describe('地址行 3（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line4: zod_1.z
                    .string()
                    .describe('地址行 4（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line5: zod_1.z
                    .string()
                    .describe('地址行 5（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line6: zod_1.z
                    .string()
                    .describe('地址行 6（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line7: zod_1.z
                    .string()
                    .describe('地址行 7（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line8: zod_1.z
                    .string()
                    .describe('地址行 8（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                local_address_line9: zod_1.z
                    .string()
                    .describe('地址行 9（非拉丁语系的本地文字）- 填写规则可见[【地址填写指南】]')
                    .optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
                address_type_list: zod_1.z
                    .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                    .describe('地址类型，枚举值及详细信息可通过[【获取字段详情】]接口查询获得。- 请求参数object_api_name=address；custom_api_name=address_type')
                    .optional(),
                is_primary: zod_1.z.boolean().describe('是否为主要地址').optional(),
                is_public: zod_1.z.boolean().describe('公开地址').optional(),
            }))
                .describe('地址')
                .optional(),
            working_hours_type_id: zod_1.z
                .string()
                .describe('工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】]接口查询获得')
                .optional(),
            effective_time: zod_1.z
                .string()
                .describe('版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59- 详情可以参考[时间轴介绍]'),
            locale: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('区域设置ID ，枚举值及详细信息可通过[【批量查询枚举信息】]接口查询获得。- 请求参数object_api_name=location；custom_api_name=locale')
                .optional(),
            time_zone_id: zod_1.z.string().describe('时区').optional(),
            display_language_id: zod_1.z.string().describe('默认显示语言').optional(),
        }),
        params: zod_1.z
            .object({
            client_token: zod_1.z
                .string()
                .describe('操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1LocationDelete = {
    project: 'corehr',
    name: 'corehr.v1.location.delete',
    sdkName: 'corehr.v1.location.delete',
    path: '/open-apis/corehr/v1/locations/:location_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-删除地点-删除地点信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            location_id: zod_1.z
                .string()
                .describe('需要删除的地点 ID。ID获取方式：- 调用[【创建地点】][【批量分页查询地点】]等接口可以返回地点ID'),
        }),
    },
};
exports.corehrV1LocationGet = {
    project: 'corehr',
    name: 'corehr.v1.location.get',
    sdkName: 'corehr.v1.location.get',
    path: '/open-apis/corehr/v1/locations/:location_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-查询单个地点-该接口用于根据地点 ID查询地点信息，信息包含地点名称、描述、地点用途、工时制度、区域设置、时区以及关联的地址信息等',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            location_id: zod_1.z
                .string()
                .describe('地点维护管理员在 飞书人事系统，组织管理模块维护的地点记录 ID。ID获取方式：- 调用[【创建地点】][【批量分页查询地点】]等接口可以返回地点ID'),
        }),
    },
};
exports.corehrV1LocationList = {
    project: 'corehr',
    name: 'corehr.v1.location.list',
    sdkName: 'corehr.v1.location.list',
    path: '/open-apis/corehr/v1/locations',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-批量分页查询地点信息-该接口用于批量查询地点信息，信息包含地点名称、描述、地点用途、工时制度、区域设置、时区以及关联的地址信息等',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小，最大支持100'),
        }),
    },
};
exports.corehrV1NationalIdTypeCreate = {
    project: 'corehr',
    name: 'corehr.v1.nationalIdType.create',
    sdkName: 'corehr.v1.nationalIdType.create',
    path: '/open-apis/corehr/v1/national_id_types',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国家证件类型-创建国家证件类型-创建国家证件类型',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            country_region_id: zod_1.z.string().describe('国家 / 地区'),
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称'),
            active: zod_1.z.boolean().describe('是否启用'),
            validation_rule: zod_1.z.string().describe('校验规则（正则表达式），若不设置校验，可以传入".*"'),
            validation_rule_description: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('校验规则描述')
                .optional(),
            code: zod_1.z.string().describe('编码'),
            identification_type: zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }).describe('证件类型'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段（暂不支持）')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1NationalIdTypeDelete = {
    project: 'corehr',
    name: 'corehr.v1.nationalIdType.delete',
    sdkName: 'corehr.v1.nationalIdType.delete',
    path: '/open-apis/corehr/v1/national_id_types/:national_id_type_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国家证件类型-删除国家证件类型-删除国家证件类型，已删除的数据将无法通过查询接口获取',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ national_id_type_id: zod_1.z.string().describe('需要删除的国家证件类型 ID') }),
    },
};
exports.corehrV1NationalIdTypeGet = {
    project: 'corehr',
    name: 'corehr.v1.nationalIdType.get',
    sdkName: 'corehr.v1.nationalIdType.get',
    path: '/open-apis/corehr/v1/national_id_types/:national_id_type_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国家证件类型-查询单个国家证件类型-根据 ID 查询单个国家证件类型',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ national_id_type_id: zod_1.z.string().describe('证件类型 ID') }),
    },
};
exports.corehrV1NationalIdTypeList = {
    project: 'corehr',
    name: 'corehr.v1.nationalIdType.list',
    sdkName: 'corehr.v1.nationalIdType.list',
    path: '/open-apis/corehr/v1/national_id_types',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国家证件类型-批量查询国家证件类型-批量查询国家证件类型',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            identification_type: zod_1.z.string().describe('证件类型').optional(),
            code: zod_1.z.string().describe('证件类型编码').optional(),
            country_region_id: zod_1.z.string().describe('国家地区ID').optional(),
        }),
    },
};
exports.corehrV1NationalIdTypePatch = {
    project: 'corehr',
    name: 'corehr.v1.nationalIdType.patch',
    sdkName: 'corehr.v1.nationalIdType.patch',
    path: '/open-apis/corehr/v1/national_id_types/:national_id_type_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国家证件类型-更新国家证件类型-更新国家证件类型',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            country_region_id: zod_1.z.string().describe('国家 / 地区').optional(),
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称')
                .optional(),
            active: zod_1.z.boolean().describe('是否启用').optional(),
            validation_rule: zod_1.z.string().describe('校验规则（正则表达式），若不设置校验，可以传入".*"').optional(),
            validation_rule_description: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('校验规则描述')
                .optional(),
            code: zod_1.z.string().describe('编码').optional(),
            identification_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('证件类型')
                .optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段（暂不支持）')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({ national_id_type_id: zod_1.z.string().describe('证件类型ID') }),
    },
};
exports.corehrV1OffboardingQuery = {
    project: 'corehr',
    name: 'corehr.v1.offboarding.query',
    sdkName: 'corehr.v1.offboarding.query',
    path: '/open-apis/corehr/v1/offboardings/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-离职-查询员工离职原因列表-该接口用于查询[离职配置]> 离职原因的选项信息，包括离职原因选项的唯一标识、名称和启用状态等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            active: zod_1.z
                .boolean()
                .describe('离职原因状态，为空时默认搜索所有状态的离职原因。可选项有:-true: 启用-false: 停用')
                .optional(),
            offboarding_reason_unique_identifier: zod_1.z
                .array(zod_1.z.string())
                .describe('离职原因唯一标识列表，用于过滤离职原因，为空时默认搜索所有离职原因，最多支持20个')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1OffboardingSearch = {
    project: 'corehr',
    name: 'corehr.v1.offboarding.search',
    sdkName: 'corehr.v1.offboarding.search',
    path: '/open-apis/corehr/v1/offboardings/search',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-离职-搜索离职信息-该接口支持根据员工ID、离职审批发起时间和离职日期等字段搜索离职信息，可获取包括离职日期、离职原因、离职状态和流程审批状态等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            employment_ids: zod_1.z
                .array(zod_1.z.string())
                .describe('雇佣 ID 列表，ID类型与查询参数 user_id_type取值一致：- 当user_id_type取值为open_id时，ID获取方式参考[如何获取自己的Open ID]。- 当user_id_type取值为user_id时，ID获取方式参考[如何获取自己的 User ID]。- 当user_id_type取值为union_id时，ID获取方式参考[如何获取自己的 Union ID]。- 当user_id_type取值为people_corehr_id时，先参考[如何获取自己的 User ID]获取User ID。然后通过[ID 转换]获取雇佣ID')
                .optional(),
            apply_initiating_time_start: zod_1.z
                .string()
                .describe('离职审批发起时间（搜索的起始范围），请按照秒级时间戳格式传入。该字段非必填，需要与离职审批发起时间（搜索的结束范围）一同使用')
                .optional(),
            apply_initiating_time_end: zod_1.z
                .string()
                .describe('离职审批发起时间（搜索的结束范围），请按照秒级时间戳格式传入。该字段非必填，需要与离职审批发起时间（搜索的起始范围）一同使用')
                .optional(),
            apply_finished_time_start: zod_1.z
                .string()
                .describe('离职审批结束时间（搜索的起始范围），请按照秒级时间戳格式传入。该字段非必填，需要与离职审批结束时间（搜索的结束范围）一同使用')
                .optional(),
            apply_finished_time_end: zod_1.z
                .string()
                .describe('离职审批结束时间 （搜索的结束范围），请按照秒级时间戳格式传入。该字段非必填，需要与离职审批结束时间（搜索的起始范围）一同使用')
                .optional(),
            expected_offboarding_date_start: zod_1.z
                .string()
                .describe('期望离职日期（搜索的起始范围），请按日期格式传入。该字段非必填，需要与期望离职日期（搜索的结束范围）一同使用')
                .optional(),
            expected_offboarding_date_end: zod_1.z
                .string()
                .describe('期望离职日期（搜索的结束范围），请按日期格式传入。该字段非必填，需要与期望离职日期（搜索的起始范围）一同使用')
                .optional(),
            offboarding_date_start: zod_1.z
                .string()
                .describe('离职日期（搜索的起始范围），请按日期格式传入。该字段非必填，需要与离职日期（搜索的结束范围）一同使用')
                .optional(),
            offboarding_date_end: zod_1.z
                .string()
                .describe('离职日期（搜索的结束范围），该字段非必填，需要与离职日期（搜索的起始范围）一同使用')
                .optional(),
            statuses: zod_1.z
                .array(zod_1.z
                .enum(['Approving', 'Approved', 'Offboarded', 'Rejected', 'Withdrawn', 'NoNeedApproval'])
                .describe('Options:Approving(审批中),Approved(审批通过),Offboarded(已离职),Rejected(已拒绝),Withdrawn(已撤销),NoNeedApproval(无需审批)'))
                .describe('离职状态，多个状态之间为「或」的关系。为空时默认搜索所有状态的离职信息')
                .optional(),
            reasons: zod_1.z
                .array(zod_1.z.string())
                .describe('离职原因列表 , 可以通过[【查询员工离职原因列表】]接口获取 ，查询时不返回下级原因相关的离职信息。为空时默认搜索所有离职数据。<b>字段权限要求：</b><md-perm name="corehr:employment.offboarding_reason.search:read" desc="按照离职原因搜索" support_app_types="custom,isv" tags="">按照离职原因搜索</md-perm>corehr:employment.offboarding_reason.search:read，确认已开通该权限')
                .optional(),
            employee_reasons: zod_1.z
                .array(zod_1.z.string())
                .describe('离职原因（员工）列表 , 可以通过[【查询员工离职原因列表】]接口获取，查询时不返回下级原因相关的离职信息。为空时默认搜索所有离职数据。<b>字段权限要求：</b><md-perm name="corehr:employment.offboarding_reason.search:read" desc="按照离职原因搜索" support_app_types="custom,isv" tags="">按照离职原因搜索</md-perm>')
                .optional(),
        })
            .optional(),
        params: zod_1.z.object({
            page_size: zod_1.z.number().describe('分页大小，最大 100'),
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        }),
    },
};
exports.corehrV1OffboardingSubmit = {
    project: 'corehr',
    name: 'corehr.v1.offboarding.submit',
    sdkName: 'corehr.v1.offboarding.submit',
    path: '/open-apis/corehr/v1/offboardings/submit',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-离职-操作员工离职-该接口用于发起员工离职。若发起成功，会生成一条员工的离职数据，同时产生相应的事件。参考[离职申请状态变更]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            offboarding_mode: zod_1.z
                .number()
                .describe('离职方式，目前只支持直接离职 Options:1(Termination_of_dismissal 直接离职)'),
            employment_id: zod_1.z
                .string()
                .describe('离职员工 ID。ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考[如何获取自己的Open ID]。2、当user_id_type取值为user_id时，ID获取方式参考[如何获取自己的 User ID]。3、当user_id_type取值为union_id时，ID获取方式参考[如何获取自己的 Union ID]。4、当user_id_type取值为people_corehr_id时，先参考[如何获取自己的 User ID]获取User ID。然后通过[ID 转换]获取雇佣ID。v1/common_data-id/convert)获取'),
            offboarding_date: zod_1.z.string().describe('离职日期，入参格式应为YYYY-MM-DD'),
            offboarding_reason_unique_identifier: zod_1.z.string().describe('离职原因，可通过接口[【查询员工离职原因列表】]获取'),
            offboarding_reason_explanation: zod_1.z
                .string()
                .describe('离职原因说明，长度限制6000个字符，该字段允许为空')
                .optional(),
            initiator_id: zod_1.z
                .string()
                .describe('操作发起人 ID。ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考[如何获取自己的Open ID]。2、当user_id_type取值为user_id时，ID获取方式参考[如何获取自己的 User ID]。3、当user_id_type取值为union_id时，ID获取方式参考[如何获取自己的 Union ID]。4、当user_id_type取值为people_corehr_id时，先参考[如何获取自己的 User ID]获取User ID。然后通过[ID 转换]获取雇佣ID。注意：1.只有操作发起人可以撤销流程2.为空时，默认系统发起人')
                .optional(),
            add_block_list: zod_1.z
                .boolean()
                .describe('是否加入离职屏蔽名单注意：1.取值为true时，屏蔽原因（block_reason）为必填。2.取值为false时，不允许填写屏蔽原因（block_reason）和屏蔽原因说明（block_reason_explanation）。3.取值为空时，不允许填写屏蔽原因（block_reason）和屏蔽原因说明（block_reason_explanation）。4.操作离职时如果选择加入屏蔽名单，只有当员工离职生效后才会进入到屏蔽名单')
                .optional(),
            block_reason: zod_1.z
                .string()
                .describe('屏蔽原因注意：1.该字段取值于 [人员档案配置] > 信息配置 > 离职信息 的屏蔽原因字段选项集。2.枚举字段值也可通过[获取字段详情]获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name3.该字段是否必填取决于是否加入离职屏蔽名单(add_block_list)')
                .optional(),
            block_reason_explanation: zod_1.z.string().describe('屏蔽原因说明，该字段允许为空').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z
                    .string()
                    .describe('字段唯一标识注意：1.该字段取值于[人员档案配置] > 信息配置 > 离职信息 中各字段的字段编码2.该字段也可以通过[获取自定义字段列表]获取'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")。注意：1.枚举字段的枚举值取值于[人员档案配置] > 信息配置 > 离职信息 对应字段选项集的选项编码。2.枚举字段值也可通过[获取字段详情]获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name3.人员字段目前只支持传入员工的雇佣ID。先参考[如何获取自己的 User ID]获取User ID。然后通过[ID 转换]获取雇佣ID。4.暂不支持填写附件类型字段'),
            }))
                .describe('离职自定义字段。注意：可填写的字段范围参考[人员档案配置] > 信息配置 > 离职信息 中的自定义字段')
                .optional(),
        }),
        params: zod_1.z
            .object({
            user_id_type: zod_1.z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
        })
            .optional(),
    },
};
exports.corehrV1PersonCreate = {
    project: 'corehr',
    name: 'corehr.v1.person.create',
    sdkName: 'corehr.v1.person.create',
    path: '/open-apis/corehr/v1/persons',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-个人信息-创建个人信息-创建人员的个人信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            name_list: zod_1.z
                .array(zod_1.z.object({
                local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                name_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                additional_name_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                    .optional(),
                first_name: zod_1.z.string().describe('名').optional(),
                full_name: zod_1.z.string().describe('全名').optional(),
                hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                middle_name: zod_1.z.string().describe('中间名').optional(),
                name_primary: zod_1.z.string().describe('姓').optional(),
                secondary: zod_1.z.string().describe('第二姓氏').optional(),
                social: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('尊称')
                    .optional(),
                tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                title: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                    .optional(),
                local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('姓名'),
            gender: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('性别，枚举值可通过文档[【飞书人事枚举常量】]性别（gender）枚举定义部分获得')
                .optional(),
            date_of_birth: zod_1.z.string().describe('出生日期').optional(),
            nationality_id: zod_1.z.string().describe('国籍id').optional(),
            race: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('民族 / 种族，枚举值可通过文档[【飞书人事枚举常量】]民族（race）枚举定义部分获得')
                .optional(),
            marital_status: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('婚姻状况，枚举值可通过文档[【飞书人事枚举常量】]婚姻状况（marital_status）枚举定义部分获得')
                .optional(),
            phone_list: zod_1.z
                .array(zod_1.z.object({
                international_area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                    .optional(),
                phone_number: zod_1.z.string().describe('电话号码'),
                device_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('设备类型，枚举值可通过文档[【飞书人事枚举常量】]设备类型（device_type）枚举定义部分获得')
                    .optional(),
                phone_usage: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('电话用途，枚举值可通过文档[【飞书人事枚举常量】]电话用途（phone_usage）枚举定义部分获得')
                    .optional(),
                is_primary: zod_1.z.boolean().describe('是否为主要电话').optional(),
                is_public: zod_1.z.boolean().describe('是否为公开电话').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('电话列表，只有当满足下面所有条件时，电话在个人信息页才可见:- 电话号码不为空- is_primary = "true" - phone_usage = "home"')
                .optional(),
            address_list: zod_1.z
                .array(zod_1.z.object({
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                region_id: zod_1.z.string().describe('主要行政区').optional(),
                city_id: zod_1.z.string().describe('城市').optional(),
                distinct_id: zod_1.z.string().describe('区/县').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('地址列表')
                .optional(),
            email_list: zod_1.z
                .array(zod_1.z.object({
                email: zod_1.z.string().describe('邮箱号'),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('邮箱列表')
                .optional(),
            work_experience_list: zod_1.z
                .array(zod_1.z.object({
                company_organization: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('公司 / 组织')
                    .optional(),
                department: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('部门')
                    .optional(),
                job: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('岗位')
                    .optional(),
                description: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('工作描述')
                    .optional(),
                start_date: zod_1.z.string().describe('开始日期').optional(),
                end_date: zod_1.z.string().describe('结束日期').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('工作履历列表')
                .optional(),
            education_list: zod_1.z
                .array(zod_1.z.object({
                school: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('学校'),
                level_of_education: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学历，枚举值可通过文档[【飞书人事枚举常量】]学历（level_of_education）枚举定义获得')
                    .optional(),
                start_date: zod_1.z.string().describe('开始日期').optional(),
                end_date: zod_1.z.string().describe('结束日期').optional(),
                field_of_study: zod_1.z
                    .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                    .describe('专业')
                    .optional(),
                degree: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学位，枚举值可通过文档[【飞书人事枚举常量】]学位（degree）枚举定义获得')
                    .optional(),
                school_name: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学校名称')
                    .optional(),
                field_of_study_name: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('专业名称')
                    .optional(),
                country_region_id: zod_1.z.string().describe('国家地区ID').optional(),
                expected_end_date: zod_1.z.string().describe('预期结束日期').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('教育经历列表')
                .optional(),
            bank_account_list: zod_1.z
                .array(zod_1.z.object({
                bank_name: zod_1.z
                    .string()
                    .describe('银行名称，如果已经填入银行枚举，该字段可为空。如果要填写数据不在系统提供的枚举范围内，该字段存储自定义银行名称')
                    .optional(),
                bank_account_number: zod_1.z.string().describe('银行账号'),
                account_holder: zod_1.z.string().describe('开户人姓名'),
                bank: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('银行枚举，常见的银行枚举如：bank-5（交通银行）、bank-6（中国银行）、bank-7（中国建设银行）、bank-8（中国农业银行）、bank-9（中国工商银行）、bank-10（中国邮政储蓄银行）、bank-11（中国光大银行）、bank-12（中国民生银行）、bank-13（招商银行）、bank-14（中信银行）、bank-15（华夏银行）')
                    .optional(),
                branch_name: zod_1.z.string().describe('支行名称').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                country_region_id: zod_1.z
                    .string()
                    .describe('国家/地区id，详细信息可通过【查询国家/地区信息】接口查询获得')
                    .optional(),
                bank_account_usage: zod_1.z
                    .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                    .describe('银行卡用途，枚举值可通过文档[【飞书人事枚举常量】]银行卡用途（bank_account_usage）枚举定义部分获得')
                    .optional(),
                bank_account_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('银行卡类型，枚举值可通过文档[【飞书人事枚举常量】]银行卡类型（bank_account_type）枚举定义部分获得')
                    .optional(),
                currency_id: zod_1.z.string().describe('货币id').optional(),
            }))
                .describe('银行账号')
                .optional(),
            national_id_list: zod_1.z
                .array(zod_1.z.object({
                national_id_type_id: zod_1.z.string().describe('国家证件类型，枚举值可通过【批量查询国家证件类型】接口获取'),
                national_id_number: zod_1.z.string().describe('证件号码'),
                issue_date: zod_1.z.string().describe('证件签发日期').optional(),
                expiration_date: zod_1.z.string().describe('证件到期日期').optional(),
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                issued_by: zod_1.z.string().describe('证件签发机构').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('证件号码')
                .optional(),
            dependent_list: zod_1.z
                .array(zod_1.z.object({
                name: zod_1.z
                    .object({
                    local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                    local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                    local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                    local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                    additional_name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                        .optional(),
                    first_name: zod_1.z.string().describe('名').optional(),
                    full_name: zod_1.z.string().describe('全名').optional(),
                    hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                    custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                    custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                    middle_name: zod_1.z.string().describe('中间名').optional(),
                    name_primary: zod_1.z.string().describe('姓').optional(),
                    secondary: zod_1.z.string().describe('第二姓氏').optional(),
                    social: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('尊称')
                        .optional(),
                    tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                    title: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                        .optional(),
                    local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                    local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('亲属姓名')
                    .optional(),
                relationship: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('亲属关系，枚举值可通过文档[【飞书人事枚举常量】]亲属关系（relationship）枚举定义获得'),
                gender: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('亲属性别，枚举值可通过文档[【飞书人事枚举常量】]性别（gender）枚举定义部分获得')
                    .optional(),
                date_of_birth: zod_1.z.string().describe('生日').optional(),
                nationality_id: zod_1.z.string().describe('国籍').optional(),
                national_id_list: zod_1.z
                    .array(zod_1.z.object({
                    national_id_type_id: zod_1.z
                        .string()
                        .describe('国家证件类型，枚举值可通过【批量查询国家证件类型】接口获取'),
                    national_id_number: zod_1.z.string().describe('证件号码'),
                    issue_date: zod_1.z.string().describe('证件签发日期').optional(),
                    expiration_date: zod_1.z.string().describe('证件到期日期').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    issued_by: zod_1.z.string().describe('证件签发机构').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                }))
                    .describe('证件号码')
                    .optional(),
                spouses_working_status: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('配偶工作状态，比如working（在岗）、not_working（不在岗）')
                    .optional(),
                is_this_person_covered_by_health_insurance: zod_1.z.boolean().describe('包含家属医疗保险').optional(),
                is_this_person_allowed_for_tax_deduction: zod_1.z.boolean().describe('允许家属抵扣税款').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                dependent_name: zod_1.z.string().describe('家庭成员姓名').optional(),
                employer: zod_1.z.string().describe('工作单位').optional(),
                job: zod_1.z.string().describe('岗位').optional(),
                phone: zod_1.z
                    .object({
                    international_area_code: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                        .optional(),
                    phone_number: zod_1.z.string().describe('电话号码'),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('电话')
                    .optional(),
                address: zod_1.z
                    .object({
                    id: zod_1.z.string().describe('地址ID').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    region_id: zod_1.z.string().describe('主要行政区').optional(),
                    city_id: zod_1.z.string().describe('城市').optional(),
                    distinct_id: zod_1.z.string().describe('区/县').optional(),
                    local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line4: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line5: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line6: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line7: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line8: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line9: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    postal_code: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05])'),
                    }))
                        .describe('地址行 9（非拉丁语系的本地文字）')
                        .optional(),
                })
                    .describe('联系地址')
                    .optional(),
                birth_certificate_of_child: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('上传文件ID').optional() }))
                    .describe('出生证明')
                    .optional(),
            }))
                .describe('亲属列表')
                .optional(),
            emergency_contact_list: zod_1.z
                .array(zod_1.z.object({
                name: zod_1.z
                    .object({
                    local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                    local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                    local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                    local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                    additional_name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                        .optional(),
                    first_name: zod_1.z.string().describe('名').optional(),
                    full_name: zod_1.z.string().describe('全名').optional(),
                    hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                    custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                    custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                    middle_name: zod_1.z.string().describe('中间名').optional(),
                    name_primary: zod_1.z.string().describe('姓').optional(),
                    secondary: zod_1.z.string().describe('第二姓氏').optional(),
                    social: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('尊称')
                        .optional(),
                    tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                    title: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                        .optional(),
                    local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                    local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('紧急联系人姓名')
                    .optional(),
                relationship: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('紧急联系人与本人亲属关系，枚举值可通过文档[【飞书人事枚举常量】]亲属关系（relationship）枚举定义获得')
                    .optional(),
                phone_ist: zod_1.z
                    .array(zod_1.z.object({
                    international_area_code: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                        .optional(),
                    phone_number: zod_1.z.string().describe('电话号码'),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                }))
                    .describe('紧急联系人电话')
                    .optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                legal_name: zod_1.z.string().describe('法定姓名').optional(),
            }))
                .describe('紧急联系人列表')
                .optional(),
            date_entered_workforce: zod_1.z.string().describe('参加工作日期').optional(),
            profile_image_id: zod_1.z.string().describe('头像资源的 ID').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段')
                .optional(),
            resident_tax_id_list: zod_1.z.array(zod_1.z.string()).describe('纳税身份信息').optional(),
            age: zod_1.z.number().describe('年龄').optional(),
            personal_profile: zod_1.z
                .array(zod_1.z.object({
                personal_profile_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('个人资料类型，比如银行储蓄卡复印件、证件照、个人信息采集表、生活照')
                    .optional(),
                files: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('上传文件ID').optional() }))
                    .describe('上传文件列表')
                    .optional(),
            }))
                .describe('个人资料')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1PersonDelete = {
    project: 'corehr',
    name: 'corehr.v1.person.delete',
    sdkName: 'corehr.v1.person.delete',
    path: '/open-apis/corehr/v1/persons/:person_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-个人信息-删除个人信息-删除人员的个人信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ person_id: zod_1.z.string().describe('需要删除的Person ID') }),
    },
};
exports.corehrV1PersonGet = {
    project: 'corehr',
    name: 'corehr.v1.person.get',
    sdkName: 'corehr.v1.person.get',
    path: '/open-apis/corehr/v1/persons/:person_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-个人信息-查询单个个人信息-根据 ID 查询单个人员的个人信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({ user_id_type: zod_1.z.literal('people_employee_id').describe('用户ID类型').optional() }).optional(),
        path: zod_1.z.object({ person_id: zod_1.z.string().describe('Person ID') }),
    },
};
exports.corehrV1PersonPatch = {
    project: 'corehr',
    name: 'corehr.v1.person.patch',
    sdkName: 'corehr.v1.person.patch',
    path: '/open-apis/corehr/v1/persons/:person_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-个人信息-更新个人信息-更新个人信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            name_list: zod_1.z
                .array(zod_1.z.object({
                local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                name_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                additional_name_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                    .optional(),
                first_name: zod_1.z.string().describe('名').optional(),
                full_name: zod_1.z.string().describe('全名').optional(),
                hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                middle_name: zod_1.z.string().describe('中间名').optional(),
                name_primary: zod_1.z.string().describe('姓').optional(),
                secondary: zod_1.z.string().describe('第二姓氏').optional(),
                social: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('尊称')
                    .optional(),
                tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                title: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                    .optional(),
                local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('姓名')
                .optional(),
            gender: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('性别，枚举值可通过文档[【飞书人事枚举常量】]性别（gender）枚举定义部分获得')
                .optional(),
            date_of_birth: zod_1.z.string().describe('出生日期').optional(),
            nationality_id: zod_1.z.string().describe('国籍id').optional(),
            race: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('民族 / 种族，枚举值可通过文档[【飞书人事枚举常量】]民族（race）枚举定义部分获得')
                .optional(),
            marital_status: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('婚姻状况，枚举值可通过文档[【飞书人事枚举常量】]婚姻状况（marital_status）枚举定义部分获得')
                .optional(),
            phone_list: zod_1.z
                .array(zod_1.z.object({
                international_area_code: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                    .optional(),
                phone_number: zod_1.z.string().describe('电话号码'),
                device_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('设备类型，枚举值可通过文档[【飞书人事枚举常量】]设备类型（device_type）枚举定义部分获得')
                    .optional(),
                phone_usage: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('电话用途，枚举值可通过文档[【飞书人事枚举常量】]电话用途（phone_usage）枚举定义部分获得')
                    .optional(),
                is_primary: zod_1.z.boolean().describe('是否为主要电话').optional(),
                is_public: zod_1.z.boolean().describe('是否为公开电话').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('电话列表，只有当满足下面所有条件时，电话在个人信息页才可见:- 电话号码不为空- is_primary = "true" - phone_usage = "home"')
                .optional(),
            address_list: zod_1.z
                .array(zod_1.z.object({
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                region_id: zod_1.z.string().describe('主要行政区').optional(),
                city_id: zod_1.z.string().describe('城市').optional(),
                distinct_id: zod_1.z.string().describe('区/县').optional(),
                local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: zod_1.z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: zod_1.z.string().describe('邮政编码').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('地址列表')
                .optional(),
            email_list: zod_1.z
                .array(zod_1.z.object({
                email: zod_1.z.string().describe('邮箱号'),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('邮箱列表')
                .optional(),
            work_experience_list: zod_1.z
                .array(zod_1.z.object({
                company_organization: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('公司 / 组织')
                    .optional(),
                department: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('部门')
                    .optional(),
                job: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('岗位')
                    .optional(),
                description: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('工作描述')
                    .optional(),
                start_date: zod_1.z.string().describe('开始日期').optional(),
                end_date: zod_1.z.string().describe('结束日期').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('工作履历列表')
                .optional(),
            education_list: zod_1.z
                .array(zod_1.z.object({
                school: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('学校'),
                level_of_education: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学历，枚举值可通过文档[【飞书人事枚举常量】]学历（level_of_education）枚举定义获得')
                    .optional(),
                start_date: zod_1.z.string().describe('开始日期').optional(),
                end_date: zod_1.z.string().describe('结束日期').optional(),
                field_of_study: zod_1.z
                    .array(zod_1.z.object({
                    lang: zod_1.z.string().describe('名称信息的语言'),
                    value: zod_1.z.string().describe('名称信息的内容'),
                }))
                    .describe('专业')
                    .optional(),
                degree: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学位，枚举值可通过文档[【飞书人事枚举常量】]学位（degree）枚举定义获得')
                    .optional(),
                school_name: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('学校名称')
                    .optional(),
                field_of_study_name: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('专业名称')
                    .optional(),
                country_region_id: zod_1.z.string().describe('国家地区ID').optional(),
                expected_end_date: zod_1.z.string().describe('预期结束日期').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('教育经历列表')
                .optional(),
            bank_account_list: zod_1.z
                .array(zod_1.z.object({
                bank_name: zod_1.z
                    .string()
                    .describe('银行名称，如果已经填入银行枚举，该字段可为空。如果要填写数据不在系统提供的枚举范围内，该字段存储自定义银行名称')
                    .optional(),
                bank_account_number: zod_1.z.string().describe('银行账号'),
                account_holder: zod_1.z.string().describe('开户人姓名'),
                bank: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('银行枚举，常见的银行枚举如：bank-5（交通银行）、bank-6（中国银行）、bank-7（中国建设银行）、bank-8（中国农业银行）、bank-9（中国工商银行）、bank-10（中国邮政储蓄银行）、bank-11（中国光大银行）、bank-12（中国民生银行）、bank-13（招商银行）、bank-14（中信银行）、bank-15（华夏银行）')
                    .optional(),
                branch_name: zod_1.z.string().describe('支行名称').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                country_region_id: zod_1.z
                    .string()
                    .describe('国家/地区id，详细信息可通过【查询国家/地区信息】接口查询获得')
                    .optional(),
                bank_account_usage: zod_1.z
                    .array(zod_1.z.object({ enum_name: zod_1.z.string().describe('枚举值') }))
                    .describe('银行卡用途，枚举值可通过文档[【飞书人事枚举常量】]银行卡用途（bank_account_usage）枚举定义部分获得')
                    .optional(),
                bank_account_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('银行卡类型，枚举值可通过文档[【飞书人事枚举常量】]银行卡类型（bank_account_type）枚举定义部分获得')
                    .optional(),
                currency_id: zod_1.z.string().describe('货币id').optional(),
            }))
                .describe('银行账号')
                .optional(),
            national_id_list: zod_1.z
                .array(zod_1.z.object({
                national_id_type_id: zod_1.z.string().describe('国家证件类型，枚举值可通过【批量查询国家证件类型】接口获取'),
                national_id_number: zod_1.z.string().describe('证件号码'),
                issue_date: zod_1.z.string().describe('证件签发日期').optional(),
                expiration_date: zod_1.z.string().describe('证件到期日期').optional(),
                country_region_id: zod_1.z.string().describe('国家 / 地区'),
                issued_by: zod_1.z.string().describe('证件签发机构').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
            }))
                .describe('证件号码')
                .optional(),
            dependent_list: zod_1.z
                .array(zod_1.z.object({
                name: zod_1.z
                    .object({
                    local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                    local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                    local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                    local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                    additional_name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                        .optional(),
                    first_name: zod_1.z.string().describe('名').optional(),
                    full_name: zod_1.z.string().describe('全名').optional(),
                    hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                    custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                    custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                    middle_name: zod_1.z.string().describe('中间名').optional(),
                    name_primary: zod_1.z.string().describe('姓').optional(),
                    secondary: zod_1.z.string().describe('第二姓氏').optional(),
                    social: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('尊称')
                        .optional(),
                    tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                    title: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                        .optional(),
                    local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                    local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('亲属姓名')
                    .optional(),
                relationship: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('亲属关系，枚举值可通过文档[【飞书人事枚举常量】]亲属关系（relationship）枚举定义获得'),
                gender: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('亲属性别，枚举值可通过文档[【飞书人事枚举常量】]性别（gender）枚举定义部分获得')
                    .optional(),
                date_of_birth: zod_1.z.string().describe('生日').optional(),
                nationality_id: zod_1.z.string().describe('国籍').optional(),
                national_id_list: zod_1.z
                    .array(zod_1.z.object({
                    national_id_type_id: zod_1.z
                        .string()
                        .describe('国家证件类型，枚举值可通过【批量查询国家证件类型】接口获取'),
                    national_id_number: zod_1.z.string().describe('证件号码'),
                    issue_date: zod_1.z.string().describe('证件签发日期').optional(),
                    expiration_date: zod_1.z.string().describe('证件到期日期').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    issued_by: zod_1.z.string().describe('证件签发机构').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                }))
                    .describe('证件号码')
                    .optional(),
                spouses_working_status: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('配偶工作状态，比如working（在岗）、not_working（不在岗）')
                    .optional(),
                is_this_person_covered_by_health_insurance: zod_1.z.boolean().describe('包含家属医疗保险').optional(),
                is_this_person_allowed_for_tax_deduction: zod_1.z.boolean().describe('允许家属抵扣税款').optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                dependent_name: zod_1.z.string().describe('家庭成员姓名').optional(),
                employer: zod_1.z.string().describe('工作单位').optional(),
                job: zod_1.z.string().describe('岗位').optional(),
                phone: zod_1.z
                    .object({
                    international_area_code: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                        .optional(),
                    phone_number: zod_1.z.string().describe('电话号码'),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('电话')
                    .optional(),
                address: zod_1.z
                    .object({
                    id: zod_1.z.string().describe('地址ID').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    region_id: zod_1.z.string().describe('主要行政区').optional(),
                    city_id: zod_1.z.string().describe('城市').optional(),
                    distinct_id: zod_1.z.string().describe('区/县').optional(),
                    local_address_line1: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: zod_1.z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line4: zod_1.z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line5: zod_1.z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line6: zod_1.z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line7: zod_1.z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line8: zod_1.z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line9: zod_1.z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    postal_code: zod_1.z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05])'),
                    }))
                        .describe('地址行 9（非拉丁语系的本地文字）')
                        .optional(),
                })
                    .describe('联系地址')
                    .optional(),
                birth_certificate_of_child: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('上传文件ID').optional() }))
                    .describe('出生证明')
                    .optional(),
            }))
                .describe('亲属列表')
                .optional(),
            emergency_contact_list: zod_1.z
                .array(zod_1.z.object({
                name: zod_1.z
                    .object({
                    local_primary: zod_1.z.string().describe('姓 - 本地文字').optional(),
                    local_first_name: zod_1.z.string().describe('名 - 本地文字').optional(),
                    country_region_id: zod_1.z.string().describe('国家 / 地区'),
                    name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('姓名类型，枚举值可通过文档[【飞书人事枚举常量】]姓名类型（name_type）枚举定义部分获得'),
                    local_first_name_2: zod_1.z.string().describe('名 - 第二本地文字').optional(),
                    local_primary_2: zod_1.z.string().describe('姓 - 第二本地文字').optional(),
                    additional_name_type: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('补充姓名类型，比如emergency_contact_name（紧急联系人姓名）')
                        .optional(),
                    first_name: zod_1.z.string().describe('名').optional(),
                    full_name: zod_1.z.string().describe('全名').optional(),
                    hereditary: zod_1.z.string().describe('姓氏称谓').optional(),
                    custom_name: zod_1.z.string().describe('自定义姓名').optional(),
                    custom_local_name: zod_1.z.string().describe('本地文字的自定义姓名').optional(),
                    middle_name: zod_1.z.string().describe('中间名').optional(),
                    name_primary: zod_1.z.string().describe('姓').optional(),
                    secondary: zod_1.z.string().describe('第二姓氏').optional(),
                    social: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('尊称')
                        .optional(),
                    tertiary: zod_1.z.string().describe('婚后姓氏').optional(),
                    title: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('头衔，比如Mr.Miss.Mrs.Prof.Dr')
                        .optional(),
                    local_middle_name: zod_1.z.string().describe('本地中间名').optional(),
                    local_secondary: zod_1.z.string().describe('第二姓氏 - 本地文字').optional(),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                })
                    .describe('紧急联系人姓名')
                    .optional(),
                relationship: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('紧急联系人与本人亲属关系，枚举值可通过文档[【飞书人事枚举常量】]亲属关系（relationship）枚举定义获得')
                    .optional(),
                phone_ist: zod_1.z
                    .array(zod_1.z.object({
                    international_area_code: zod_1.z
                        .object({ enum_name: zod_1.z.string().describe('枚举值') })
                        .describe('国家区号常见如：86_china（中国）、852_hong_kong（中国香港）、886_taiwan（中国台湾）、853_macao（中国澳门）、1_united_states_of_america（美利坚合众国）、7_russian_federation（俄罗斯联邦）、44_united_kingdom（英国）、81_japan（日本）、82_korea_republic_of（大韩民国）、91_india（印度）')
                        .optional(),
                    phone_number: zod_1.z.string().describe('电话号码'),
                    custom_fields: zod_1.z
                        .array(zod_1.z.object({
                        field_name: zod_1.z.string().describe('字段名'),
                        value: zod_1.z
                            .string()
                            .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                    }))
                        .describe('自定义字段')
                        .optional(),
                }))
                    .describe('紧急联系人电话')
                    .optional(),
                custom_fields: zod_1.z
                    .array(zod_1.z.object({
                    field_name: zod_1.z.string().describe('字段名'),
                    value: zod_1.z
                        .string()
                        .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
                }))
                    .describe('自定义字段')
                    .optional(),
                legal_name: zod_1.z.string().describe('法定姓名').optional(),
            }))
                .describe('紧急联系人列表')
                .optional(),
            date_entered_workforce: zod_1.z.string().describe('参加工作日期').optional(),
            profile_image_id: zod_1.z.string().describe('头像资源的 ID').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段')
                .optional(),
            resident_tax_id_list: zod_1.z.array(zod_1.z.string()).describe('纳税身份信息').optional(),
            age: zod_1.z.number().describe('年龄').optional(),
            personal_profile: zod_1.z
                .array(zod_1.z.object({
                personal_profile_type: zod_1.z
                    .object({ enum_name: zod_1.z.string().describe('枚举值') })
                    .describe('个人资料类型，比如银行储蓄卡复印件、证件照、个人信息采集表、生活照')
                    .optional(),
                files: zod_1.z
                    .array(zod_1.z.object({ id: zod_1.z.string().describe('上传文件ID').optional() }))
                    .describe('上传文件列表')
                    .optional(),
            }))
                .describe('个人资料')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({ person_id: zod_1.z.string().describe('person的ID') }),
    },
};
exports.corehrV1PreHireDelete = {
    project: 'corehr',
    name: 'corehr.v1.preHire.delete',
    sdkName: 'corehr.v1.preHire.delete',
    path: '/open-apis/corehr/v1/pre_hires/:pre_hire_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-入职-删除待入职（不推荐）-删除待入职人员接口，本接口直接删除待入职数据，不会判断入职流程，推荐使用新接口进行删除[【删除待入职】]',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ pre_hire_id: zod_1.z.string().describe('需要删除的待入职人员信息ID') }),
    },
};
exports.corehrV1PreHireGet = {
    project: 'corehr',
    name: 'corehr.v1.preHire.get',
    sdkName: 'corehr.v1.preHire.get',
    path: '/open-apis/corehr/v1/pre_hires/:pre_hire_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-入职-查询单个待入职信息-根据 ID 查询单个待入职人员，本接口不再推荐使用（个人信息相关数据不完整），请使用[查询待入职]接口获取更完整信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ pre_hire_id: zod_1.z.string().describe('待入职ID，可从[搜索待入职人员信息]接口获取') }),
    },
};
exports.corehrV1PreHireList = {
    project: 'corehr',
    name: 'corehr.v1.preHire.list',
    sdkName: 'corehr.v1.preHire.list',
    path: '/open-apis/corehr/v1/pre_hires',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-入职-批量查询待入职信息-可通过本接口批量查询待入职人员信息，本接口不再推荐使用（个人信息相关数据不完整），请使用[查询待入职]接口获取更完整信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小，最大值100，最小值 1'),
            pre_hire_ids: zod_1.z.array(zod_1.z.string()).describe('待入职ID列表，可通过[搜索待入职]接口获取').optional(),
        }),
    },
};
exports.corehrV1PreHirePatch = {
    project: 'corehr',
    name: 'corehr.v1.preHire.patch',
    sdkName: 'corehr.v1.preHire.patch',
    path: '/open-apis/corehr/v1/pre_hires/:pre_hire_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-入职-更新待入职信息（不推荐）-更新待入职信息接口，本接口只是会更新待入职数据，不会校验数据规则，推荐使用新接口[【更新待入职信息】]',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            ats_application_id: zod_1.z
                .string()
                .describe('招聘投递 ID ，详细信息可以通过招聘的【获取投递信息】接口查询获得（仅部分租户可用）')
                .optional(),
            hire_date: zod_1.z.string().describe('入职日期').optional(),
            employee_type: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('雇佣类型')
                .optional(),
            worker_id: zod_1.z.string().describe('人员编号').optional(),
            employee_type_id: zod_1.z.string().describe('雇佣类型').optional(),
            person_id: zod_1.z.string().describe('引用Person ID').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段')
                .optional(),
            cost_center_rate: zod_1.z
                .array(zod_1.z.object({
                cost_center_id: zod_1.z.string().describe('支持的成本中心id').optional(),
                rate: zod_1.z.number().describe('分摊比例').optional(),
            }))
                .describe('成本中心分摊信息')
                .optional(),
            onboarding_status: zod_1.z
                .object({ enum_name: zod_1.z.string().describe('枚举值') })
                .describe('入职状态- 待入职(preboarding)- 已删除(deleted)- 准备就绪(day_one)- 已撤销(withdrawn)- 已完成(completed)'),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({ pre_hire_id: zod_1.z.string().describe('待入职ID') }),
    },
};
exports.corehrV1ProcessFormVariableDataGet = {
    project: 'corehr',
    name: 'corehr.v1.processFormVariableData.get',
    sdkName: 'corehr.v1.processFormVariableData.get',
    path: '/open-apis/corehr/v1/processes/:process_id/form_variable_data',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-流程-获取流程表单数据-根据流程实例 id（process_id）获取流程表单字段数据，包括表单里的业务字段和自定义字段。仅支持飞书人事、假勤相关业务流程',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ process_id: zod_1.z.string().describe('流程实例 ID') }),
    },
};
exports.corehrV1SecurityGroupList = {
    project: 'corehr',
    name: 'corehr.v1.securityGroup.list',
    sdkName: 'corehr.v1.securityGroup.list',
    path: '/open-apis/corehr/v1/security_groups',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-批量获取角色列表-用于查询飞书人事中的角色列表（对应[飞书人事管理后台] - 设置 - 权限设置 - 角色设置中的角色列表），列表内包含角色 ID、名称、状态以及描述等信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
        }),
    },
};
exports.corehrV1SecurityGroupQuery = {
    project: 'corehr',
    name: 'corehr.v1.securityGroup.query',
    sdkName: 'corehr.v1.securityGroup.query',
    path: '/open-apis/corehr/v1/security_groups/query',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-权限-查询部门 / 地点的 HRBP / 属地 BP-通过部门或工作地点，查询对应的 HRBP / 属地 BP，返回的信息中包含BP的员工ID、部门ID、属地ID等信息',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            item_list: zod_1.z
                .array(zod_1.z.object({
                role_key: zod_1.z
                    .string()
                    .describe('角色类型的唯一标识- HRBP：与部门有关，role_key 固定为 「hrbp」- 属地 BP：与部门、工作地点有关，role_key 固定为 「location_bp」'),
                department_id: zod_1.z
                    .string()
                    .describe('部门 ID，查询 HRBP 需输入部门 ID，ID类型与department_id_type的取值意义一致。 > 可以使用 [ID转换服务]换取 ==department_id== > 部门id也可通过[搜索部门信息]接口获取'),
                work_location_id: zod_1.z
                    .string()
                    .describe('工作地点 ID，查询属地 BP 需要输入部门 ID 与 工作地点 ID>可从[批量查询地点]接口获取，或者在「[飞书人事]-组织管理-地点」中查看')
                    .optional(),
            }))
                .describe('角色列表，一次最多支持查询 50 个'),
            updated_at_gte: zod_1.z.string().describe('授权时间大于').optional(),
            updated_at_lte: zod_1.z.string().describe('授权时间小于').optional(),
        }),
        params: zod_1.z
            .object({
            department_id_type: zod_1.z
                .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
                .describe('此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1SubdivisionGet = {
    project: 'corehr',
    name: 'corehr.v1.subdivision.get',
    sdkName: 'corehr.v1.subdivision.get',
    path: '/open-apis/corehr/v1/subdivisions/:subdivision_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-查询单条省份/行政区信息-查询单条省份/行政区信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ subdivision_id: zod_1.z.string().describe('省份/行政区 ID') }),
    },
};
exports.corehrV1SubdivisionList = {
    project: 'corehr',
    name: 'corehr.v1.subdivision.list',
    sdkName: 'corehr.v1.subdivision.list',
    path: '/open-apis/corehr/v1/subdivisions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-批量查询省份/行政区信息-批量查询省份/行政区信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            country_region_id: zod_1.z.string().describe('国家/地区id，填写后只查询该国家/地区下的省份/行政区').optional(),
        }),
    },
};
exports.corehrV1SubregionGet = {
    project: 'corehr',
    name: 'corehr.v1.subregion.get',
    sdkName: 'corehr.v1.subregion.get',
    path: '/open-apis/corehr/v1/subregions/:subregion_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-查询单条城市/区域信息-查询单条城市/区域信息',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ subregion_id: zod_1.z.string().describe('城市/区域 ID') }),
    },
};
exports.corehrV1SubregionList = {
    project: 'corehr',
    name: 'corehr.v1.subregion.list',
    sdkName: 'corehr.v1.subregion.list',
    path: '/open-apis/corehr/v1/subregions',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-历史版本（不推荐）-飞书人事-基础数据-地理库信息-批量查询城市/区域信息-批量查询城市/区域信息',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小'),
            subdivision_id: zod_1.z.string().describe('省份/行政区id，填写后只查询该省份/行政区下的城市/区域').optional(),
        }),
    },
};
exports.corehrV1TransferReasonQuery = {
    project: 'corehr',
    name: 'corehr.v1.transferReason.query',
    sdkName: 'corehr.v1.transferReason.query',
    path: '/open-apis/corehr/v1/transfer_reasons/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-异动-获取异动原因列表-获取异动原因列表',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            active: zod_1.z.boolean().describe('异动原因状态').optional(),
            transfer_reason_unique_identifier: zod_1.z
                .array(zod_1.z.string())
                .describe('异动原因唯一标识，多条时最多数量为10')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1TransferTypeQuery = {
    project: 'corehr',
    name: 'corehr.v1.transferType.query',
    sdkName: 'corehr.v1.transferType.query',
    path: '/open-apis/corehr/v1/transfer_types/query',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-异动-获取异动类型列表-获取异动类型列表',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z
            .object({
            active: zod_1.z.boolean().describe('异动类型状态').optional(),
            transfer_type_unique_identifier: zod_1.z
                .array(zod_1.z.string())
                .describe('异动类型唯一标识，多条时最多数量为10')
                .optional(),
        })
            .optional(),
    },
};
exports.corehrV1WorkingHoursTypeCreate = {
    project: 'corehr',
    name: 'corehr.v1.workingHoursType.create',
    sdkName: 'corehr.v1.workingHoursType.create',
    path: '/open-apis/corehr/v1/working_hours_types',
    httpMethod: 'POST',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-工时制度-创建工时制度-创建工时制度',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z.object({
            code: zod_1.z.string().describe('编码').optional(),
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称'),
            country_region_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('国家/地区 ID 列表- 可通过[查询国家/地区信息]获取')
                .optional(),
            default_for_job: zod_1.z.boolean().describe('职务默认值'),
            active: zod_1.z.boolean().describe('是否启用'),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 具体支持的对象请参考[自定义字段说明]')
                .optional(),
        }),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
    },
};
exports.corehrV1WorkingHoursTypeDelete = {
    project: 'corehr',
    name: 'corehr.v1.workingHoursType.delete',
    sdkName: 'corehr.v1.workingHoursType.delete',
    path: '/open-apis/corehr/v1/working_hours_types/:working_hours_type_id',
    httpMethod: 'DELETE',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-工时制度-删除工时制度-删除工时制度',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({
            working_hours_type_id: zod_1.z.string().describe('需要删除的工时制度 ID- 可通过[批量查询工时制度]获取'),
        }),
    },
};
exports.corehrV1WorkingHoursTypeGet = {
    project: 'corehr',
    name: 'corehr.v1.workingHoursType.get',
    sdkName: 'corehr.v1.workingHoursType.get',
    path: '/open-apis/corehr/v1/working_hours_types/:working_hours_type_id',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-工时制度-查询单个工时制度-根据 ID 查询单个工时制度',
    accessTokens: ['tenant'],
    schema: {
        path: zod_1.z.object({ working_hours_type_id: zod_1.z.string().describe('工时制度 ID- 可通过[批量查询工时制度]获取') }),
    },
};
exports.corehrV1WorkingHoursTypeList = {
    project: 'corehr',
    name: 'corehr.v1.workingHoursType.list',
    sdkName: 'corehr.v1.workingHoursType.list',
    path: '/open-apis/corehr/v1/working_hours_types',
    httpMethod: 'GET',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-工时制度-批量查询工时制度-批量查询工时制度',
    accessTokens: ['tenant'],
    schema: {
        params: zod_1.z.object({
            page_token: zod_1.z
                .string()
                .describe('分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果')
                .optional(),
            page_size: zod_1.z.string().describe('分页大小- 格式：整数- 范围：（0, 2000）'),
        }),
    },
};
exports.corehrV1WorkingHoursTypePatch = {
    project: 'corehr',
    name: 'corehr.v1.workingHoursType.patch',
    sdkName: 'corehr.v1.workingHoursType.patch',
    path: '/open-apis/corehr/v1/working_hours_types/:working_hours_type_id',
    httpMethod: 'PATCH',
    description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-工时制度-更新工时制度-更新工时制度',
    accessTokens: ['tenant'],
    schema: {
        data: zod_1.z
            .object({
            code: zod_1.z.string().describe('编码').optional(),
            name: zod_1.z
                .array(zod_1.z.object({ lang: zod_1.z.string().describe('名称信息的语言'), value: zod_1.z.string().describe('名称信息的内容') }))
                .describe('名称')
                .optional(),
            country_region_id_list: zod_1.z
                .array(zod_1.z.string())
                .describe('国家/地区 ID 列表- 可通过[查询国家/地区信息]获取')
                .optional(),
            default_for_job: zod_1.z.boolean().describe('职务默认值').optional(),
            active: zod_1.z.boolean().describe('是否启用').optional(),
            custom_fields: zod_1.z
                .array(zod_1.z.object({
                field_name: zod_1.z.string().describe('字段名'),
                value: zod_1.z
                    .string()
                    .describe('字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")'),
            }))
                .describe('自定义字段- 具体支持的对象请参考[自定义字段说明]')
                .optional(),
        })
            .optional(),
        params: zod_1.z
            .object({ client_token: zod_1.z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() })
            .optional(),
        path: zod_1.z.object({ working_hours_type_id: zod_1.z.string().describe('工时制度ID- 可通过[批量查询工时制度]获取') }),
    },
};
exports.corehrV1Tools = [
    exports.corehrV1AssignedUserSearch,
    exports.corehrV1AuthorizationAddRoleAssign,
    exports.corehrV1AuthorizationGetByParam,
    exports.corehrV1AuthorizationQuery,
    exports.corehrV1AuthorizationRemoveRoleAssign,
    exports.corehrV1AuthorizationUpdateRoleAssign,
    exports.corehrV1CommonDataIdConvert,
    exports.corehrV1CommonDataMetaDataAddEnumOption,
    exports.corehrV1CommonDataMetaDataEditEnumOption,
    exports.corehrV1CompanyCreate,
    exports.corehrV1CompanyDelete,
    exports.corehrV1CompanyGet,
    exports.corehrV1CompanyList,
    exports.corehrV1CompanyPatch,
    exports.corehrV1CompensationStandardMatch,
    exports.corehrV1ContractCreate,
    exports.corehrV1ContractDelete,
    exports.corehrV1ContractGet,
    exports.corehrV1ContractList,
    exports.corehrV1ContractPatch,
    exports.corehrV1CountryRegionGet,
    exports.corehrV1CountryRegionList,
    exports.corehrV1CurrencyGet,
    exports.corehrV1CurrencyList,
    exports.corehrV1CustomFieldGetByParam,
    exports.corehrV1CustomFieldListObjectApiName,
    exports.corehrV1CustomFieldQuery,
    exports.corehrV1DepartmentCreate,
    exports.corehrV1DepartmentDelete,
    exports.corehrV1DepartmentGet,
    exports.corehrV1DepartmentList,
    exports.corehrV1DepartmentPatch,
    exports.corehrV1EmployeeTypeCreate,
    exports.corehrV1EmployeeTypeDelete,
    exports.corehrV1EmployeeTypeGet,
    exports.corehrV1EmployeeTypeList,
    exports.corehrV1EmployeeTypePatch,
    exports.corehrV1EmploymentCreate,
    exports.corehrV1EmploymentDelete,
    exports.corehrV1EmploymentPatch,
    exports.corehrV1JobChangeCreate,
    exports.corehrV1JobDataCreate,
    exports.corehrV1JobDataDelete,
    exports.corehrV1JobDataGet,
    exports.corehrV1JobDataList,
    exports.corehrV1JobDataPatch,
    exports.corehrV1JobFamilyCreate,
    exports.corehrV1JobFamilyDelete,
    exports.corehrV1JobFamilyGet,
    exports.corehrV1JobFamilyList,
    exports.corehrV1JobFamilyPatch,
    exports.corehrV1JobLevelCreate,
    exports.corehrV1JobLevelDelete,
    exports.corehrV1JobLevelGet,
    exports.corehrV1JobLevelList,
    exports.corehrV1JobLevelPatch,
    exports.corehrV1JobCreate,
    exports.corehrV1JobDelete,
    exports.corehrV1JobGet,
    exports.corehrV1JobList,
    exports.corehrV1JobPatch,
    exports.corehrV1LeaveGrantingRecordCreate,
    exports.corehrV1LeaveGrantingRecordDelete,
    exports.corehrV1LeaveCalendarByScope,
    exports.corehrV1LeaveLeaveBalances,
    exports.corehrV1LeaveLeaveRequestHistory,
    exports.corehrV1LeaveLeaveTypes,
    exports.corehrV1LeaveWorkCalendar,
    exports.corehrV1LeaveWorkCalendarDate,
    exports.corehrV1LocationCreate,
    exports.corehrV1LocationDelete,
    exports.corehrV1LocationGet,
    exports.corehrV1LocationList,
    exports.corehrV1NationalIdTypeCreate,
    exports.corehrV1NationalIdTypeDelete,
    exports.corehrV1NationalIdTypeGet,
    exports.corehrV1NationalIdTypeList,
    exports.corehrV1NationalIdTypePatch,
    exports.corehrV1OffboardingQuery,
    exports.corehrV1OffboardingSearch,
    exports.corehrV1OffboardingSubmit,
    exports.corehrV1PersonCreate,
    exports.corehrV1PersonDelete,
    exports.corehrV1PersonGet,
    exports.corehrV1PersonPatch,
    exports.corehrV1PreHireDelete,
    exports.corehrV1PreHireGet,
    exports.corehrV1PreHireList,
    exports.corehrV1PreHirePatch,
    exports.corehrV1ProcessFormVariableDataGet,
    exports.corehrV1SecurityGroupList,
    exports.corehrV1SecurityGroupQuery,
    exports.corehrV1SubdivisionGet,
    exports.corehrV1SubdivisionList,
    exports.corehrV1SubregionGet,
    exports.corehrV1SubregionList,
    exports.corehrV1TransferReasonQuery,
    exports.corehrV1TransferTypeQuery,
    exports.corehrV1WorkingHoursTypeCreate,
    exports.corehrV1WorkingHoursTypeDelete,
    exports.corehrV1WorkingHoursTypeGet,
    exports.corehrV1WorkingHoursTypeList,
    exports.corehrV1WorkingHoursTypePatch,
];
