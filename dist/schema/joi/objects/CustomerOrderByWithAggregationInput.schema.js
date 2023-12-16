"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const CustomerCountOrderByAggregateInput_schema_1 = require("./CustomerCountOrderByAggregateInput.schema");
const CustomerMaxOrderByAggregateInput_schema_1 = require("./CustomerMaxOrderByAggregateInput.schema");
const CustomerMinOrderByAggregateInput_schema_1 = require("./CustomerMinOrderByAggregateInput.schema");
exports.CustomerOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    address: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    telephone: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    taxId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(CustomerCountOrderByAggregateInput_schema_1.CustomerCountOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(CustomerMaxOrderByAggregateInput_schema_1.CustomerMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(CustomerMinOrderByAggregateInput_schema_1.CustomerMinOrderByAggregateInputSchemaObject)
};
