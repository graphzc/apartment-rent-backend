"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseScalarWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.PurchaseScalarWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    poolId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableFilter_schema_1.UuidNullableFilterSchemaObject), joi_1.default.string()),
    productId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableFilter_schema_1.UuidNullableFilterSchemaObject), joi_1.default.string()),
    customerOrderId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    quantity: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject))
};
