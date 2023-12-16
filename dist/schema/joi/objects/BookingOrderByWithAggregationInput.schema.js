"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const BookingCountOrderByAggregateInput_schema_1 = require("./BookingCountOrderByAggregateInput.schema");
const BookingAvgOrderByAggregateInput_schema_1 = require("./BookingAvgOrderByAggregateInput.schema");
const BookingMaxOrderByAggregateInput_schema_1 = require("./BookingMaxOrderByAggregateInput.schema");
const BookingMinOrderByAggregateInput_schema_1 = require("./BookingMinOrderByAggregateInput.schema");
const BookingSumOrderByAggregateInput_schema_1 = require("./BookingSumOrderByAggregateInput.schema");
exports.BookingOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    roomId: SortOrder_schema_1.SortOrderSchema,
    userId: SortOrder_schema_1.SortOrderSchema,
    startDate: SortOrder_schema_1.SortOrderSchema,
    endDate: SortOrder_schema_1.SortOrderSchema,
    duration: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(BookingCountOrderByAggregateInput_schema_1.BookingCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(BookingAvgOrderByAggregateInput_schema_1.BookingAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(BookingMaxOrderByAggregateInput_schema_1.BookingMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(BookingMinOrderByAggregateInput_schema_1.BookingMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(BookingSumOrderByAggregateInput_schema_1.BookingSumOrderByAggregateInputSchemaObject)
};
