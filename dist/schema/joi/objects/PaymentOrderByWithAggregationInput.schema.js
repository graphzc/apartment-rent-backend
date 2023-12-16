"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PaymentCountOrderByAggregateInput_schema_1 = require("./PaymentCountOrderByAggregateInput.schema");
const PaymentAvgOrderByAggregateInput_schema_1 = require("./PaymentAvgOrderByAggregateInput.schema");
const PaymentMaxOrderByAggregateInput_schema_1 = require("./PaymentMaxOrderByAggregateInput.schema");
const PaymentMinOrderByAggregateInput_schema_1 = require("./PaymentMinOrderByAggregateInput.schema");
const PaymentSumOrderByAggregateInput_schema_1 = require("./PaymentSumOrderByAggregateInput.schema");
exports.PaymentOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    bookingId: SortOrder_schema_1.SortOrderSchema,
    amount: SortOrder_schema_1.SortOrderSchema,
    slip: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    status: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(PaymentCountOrderByAggregateInput_schema_1.PaymentCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(PaymentAvgOrderByAggregateInput_schema_1.PaymentAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(PaymentMaxOrderByAggregateInput_schema_1.PaymentMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(PaymentMinOrderByAggregateInput_schema_1.PaymentMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(PaymentSumOrderByAggregateInput_schema_1.PaymentSumOrderByAggregateInputSchemaObject)
};
