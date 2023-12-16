"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumPaymentStatusFilter_schema_1 = require("./EnumPaymentStatusFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const BookingRelationFilter_schema_1 = require("./BookingRelationFilter.schema");
const BookingWhereInput_schema_1 = require("./BookingWhereInput.schema");
exports.PaymentWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PaymentWhereInput'), joi_1.default.array().items(joi_1.default.link('#PaymentWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PaymentWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PaymentWhereInput'), joi_1.default.array().items(joi_1.default.link('#PaymentWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    bookingId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    amount: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    slip: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    status: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPaymentStatusFilter_schema_1.EnumPaymentStatusFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    booking: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingRelationFilter_schema_1.BookingRelationFilterSchemaObject), joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject))
};
