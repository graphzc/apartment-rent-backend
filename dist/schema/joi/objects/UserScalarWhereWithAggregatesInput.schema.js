"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const EnumRoleWithAggregatesFilter_schema_1 = require("./EnumRoleWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.UserScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#UserScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#UserScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#UserScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#UserScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#UserScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    email: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    password: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    role: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumRoleWithAggregatesFilter_schema_1.EnumRoleWithAggregatesFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
