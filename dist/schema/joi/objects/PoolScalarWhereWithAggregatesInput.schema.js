"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const FloatWithAggregatesFilter_schema_1 = require("./FloatWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
const EnumPoolTypeWithAggregatesFilter_schema_1 = require("./EnumPoolTypeWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.PoolScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PoolScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PoolScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    customerId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    address: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    price: joi_1.default.alternatives().try(joi_1.default.object().keys(FloatWithAggregatesFilter_schema_1.FloatWithAggregatesFilterSchemaObject), joi_1.default.number()),
    chemicalIncluded: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    type: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPoolTypeWithAggregatesFilter_schema_1.EnumPoolTypeWithAggregatesFilterSchemaObject)),
    inService: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    serviceDayId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
