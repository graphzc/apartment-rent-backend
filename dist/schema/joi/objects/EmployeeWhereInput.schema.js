"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const EnumEmployeeRoleFilter_schema_1 = require("./EnumEmployeeRoleFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const CustomerOrderListRelationFilter_schema_1 = require("./CustomerOrderListRelationFilter.schema");
exports.EmployeeWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#EmployeeWhereInput'), joi_1.default.array().items(joi_1.default.link('#EmployeeWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#EmployeeWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#EmployeeWhereInput'), joi_1.default.array().items(joi_1.default.link('#EmployeeWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    username: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    password: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    role: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumEmployeeRoleFilter_schema_1.EnumEmployeeRoleFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    customerOrder: joi_1.default.object().keys(CustomerOrderListRelationFilter_schema_1.CustomerOrderListRelationFilterSchemaObject)
};
