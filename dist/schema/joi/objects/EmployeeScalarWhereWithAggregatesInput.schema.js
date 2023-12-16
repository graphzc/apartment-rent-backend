"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const EnumEmployeeRoleWithAggregatesFilter_schema_1 = require("./EnumEmployeeRoleWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.EmployeeScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#EmployeeScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#EmployeeScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#EmployeeScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#EmployeeScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#EmployeeScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    username: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    password: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    role: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumEmployeeRoleWithAggregatesFilter_schema_1.EnumEmployeeRoleWithAggregatesFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
