"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PoolCountOrderByAggregateInput_schema_1 = require("./PoolCountOrderByAggregateInput.schema");
const PoolAvgOrderByAggregateInput_schema_1 = require("./PoolAvgOrderByAggregateInput.schema");
const PoolMaxOrderByAggregateInput_schema_1 = require("./PoolMaxOrderByAggregateInput.schema");
const PoolMinOrderByAggregateInput_schema_1 = require("./PoolMinOrderByAggregateInput.schema");
const PoolSumOrderByAggregateInput_schema_1 = require("./PoolSumOrderByAggregateInput.schema");
exports.PoolOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    address: SortOrder_schema_1.SortOrderSchema,
    price: SortOrder_schema_1.SortOrderSchema,
    chemicalIncluded: SortOrder_schema_1.SortOrderSchema,
    type: SortOrder_schema_1.SortOrderSchema,
    inService: SortOrder_schema_1.SortOrderSchema,
    serviceDayId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(PoolCountOrderByAggregateInput_schema_1.PoolCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(PoolAvgOrderByAggregateInput_schema_1.PoolAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(PoolMaxOrderByAggregateInput_schema_1.PoolMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(PoolMinOrderByAggregateInput_schema_1.PoolMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(PoolSumOrderByAggregateInput_schema_1.PoolSumOrderByAggregateInputSchemaObject)
};
