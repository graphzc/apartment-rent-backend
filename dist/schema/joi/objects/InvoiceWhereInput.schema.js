"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const CustomerOrderRelationFilter_schema_1 = require("./CustomerOrderRelationFilter.schema");
const CustomerOrderWhereInput_schema_1 = require("./CustomerOrderWhereInput.schema");
exports.InvoiceWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#InvoiceWhereInput'), joi_1.default.array().items(joi_1.default.link('#InvoiceWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#InvoiceWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#InvoiceWhereInput'), joi_1.default.array().items(joi_1.default.link('#InvoiceWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    paidAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeNullableFilter_schema_1.DateTimeNullableFilterSchemaObject)),
    vatIncluded: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    customerOrder: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderRelationFilter_schema_1.CustomerOrderRelationFilterSchemaObject), joi_1.default.object().keys(CustomerOrderWhereInput_schema_1.CustomerOrderWhereInputSchemaObject))
};
