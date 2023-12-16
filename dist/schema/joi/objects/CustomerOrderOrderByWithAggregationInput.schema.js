"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const CustomerOrderCountOrderByAggregateInput_schema_1 = require("./CustomerOrderCountOrderByAggregateInput.schema");
const CustomerOrderMaxOrderByAggregateInput_schema_1 = require("./CustomerOrderMaxOrderByAggregateInput.schema");
const CustomerOrderMinOrderByAggregateInput_schema_1 = require("./CustomerOrderMinOrderByAggregateInput.schema");
exports.CustomerOrderOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    employeeId: SortOrder_schema_1.SortOrderSchema,
    invoiceId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(CustomerOrderCountOrderByAggregateInput_schema_1.CustomerOrderCountOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(CustomerOrderMaxOrderByAggregateInput_schema_1.CustomerOrderMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(CustomerOrderMinOrderByAggregateInput_schema_1.CustomerOrderMinOrderByAggregateInputSchemaObject)
};
