"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolScalarWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const EnumPoolTypeFilter_schema_1 = require("./EnumPoolTypeFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.PoolScalarWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PoolScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PoolScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#PoolScalarWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    customerId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    address: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    price: joi_1.default.alternatives().try(joi_1.default.object().keys(FloatFilter_schema_1.FloatFilterSchemaObject), joi_1.default.number()),
    chemicalIncluded: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    type: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPoolTypeFilter_schema_1.EnumPoolTypeFilterSchemaObject)),
    inService: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    serviceDayId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject))
};
