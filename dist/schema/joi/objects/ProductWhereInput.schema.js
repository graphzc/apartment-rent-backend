"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const PurchaseListRelationFilter_schema_1 = require("./PurchaseListRelationFilter.schema");
exports.ProductWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#ProductWhereInput'), joi_1.default.array().items(joi_1.default.link('#ProductWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#ProductWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#ProductWhereInput'), joi_1.default.array().items(joi_1.default.link('#ProductWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    code: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    description: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    price: joi_1.default.alternatives().try(joi_1.default.object().keys(FloatFilter_schema_1.FloatFilterSchemaObject), joi_1.default.number()),
    unit: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    purchase: joi_1.default.object().keys(PurchaseListRelationFilter_schema_1.PurchaseListRelationFilterSchemaObject)
};
