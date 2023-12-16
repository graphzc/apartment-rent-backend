"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.CustomerScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#CustomerScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#CustomerScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#CustomerScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#CustomerScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#CustomerScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    address: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    telephone: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    taxId: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
