"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const PoolListRelationFilter_schema_1 = require("./PoolListRelationFilter.schema");
const CustomerOrderListRelationFilter_schema_1 = require("./CustomerOrderListRelationFilter.schema");
exports.CustomerWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#CustomerWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#CustomerWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#CustomerWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    address: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    telephone: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    taxId: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    pool: joi_1.default.object().keys(PoolListRelationFilter_schema_1.PoolListRelationFilterSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderListRelationFilter_schema_1.CustomerOrderListRelationFilterSchemaObject)
};
