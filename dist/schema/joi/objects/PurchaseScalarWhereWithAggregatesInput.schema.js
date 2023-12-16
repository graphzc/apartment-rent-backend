"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.PurchaseScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    poolId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    productId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    customerOrderId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    quantity: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
