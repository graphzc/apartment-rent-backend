"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const EnumPaymentStatusWithAggregatesFilter_schema_1 = require("./EnumPaymentStatusWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.PaymentScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PaymentScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PaymentScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PaymentScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PaymentScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#PaymentScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    bookingId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    amount: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    slip: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterSchemaObject), joi_1.default.string()),
    status: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPaymentStatusWithAggregatesFilter_schema_1.EnumPaymentStatusWithAggregatesFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
