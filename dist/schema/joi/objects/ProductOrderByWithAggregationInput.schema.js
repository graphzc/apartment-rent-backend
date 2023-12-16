"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProductCountOrderByAggregateInput_schema_1 = require("./ProductCountOrderByAggregateInput.schema");
const ProductAvgOrderByAggregateInput_schema_1 = require("./ProductAvgOrderByAggregateInput.schema");
const ProductMaxOrderByAggregateInput_schema_1 = require("./ProductMaxOrderByAggregateInput.schema");
const ProductMinOrderByAggregateInput_schema_1 = require("./ProductMinOrderByAggregateInput.schema");
const ProductSumOrderByAggregateInput_schema_1 = require("./ProductSumOrderByAggregateInput.schema");
exports.ProductOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    code: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    name: SortOrder_schema_1.SortOrderSchema,
    description: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    price: SortOrder_schema_1.SortOrderSchema,
    unit: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(ProductCountOrderByAggregateInput_schema_1.ProductCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(ProductAvgOrderByAggregateInput_schema_1.ProductAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(ProductMaxOrderByAggregateInput_schema_1.ProductMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(ProductMinOrderByAggregateInput_schema_1.ProductMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(ProductSumOrderByAggregateInput_schema_1.ProductSumOrderByAggregateInputSchemaObject)
};
