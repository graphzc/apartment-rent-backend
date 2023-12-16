"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PurchaseCountOrderByAggregateInput_schema_1 = require("./PurchaseCountOrderByAggregateInput.schema");
const PurchaseAvgOrderByAggregateInput_schema_1 = require("./PurchaseAvgOrderByAggregateInput.schema");
const PurchaseMaxOrderByAggregateInput_schema_1 = require("./PurchaseMaxOrderByAggregateInput.schema");
const PurchaseMinOrderByAggregateInput_schema_1 = require("./PurchaseMinOrderByAggregateInput.schema");
const PurchaseSumOrderByAggregateInput_schema_1 = require("./PurchaseSumOrderByAggregateInput.schema");
exports.PurchaseOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    poolId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    productId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    customerOrderId: SortOrder_schema_1.SortOrderSchema,
    quantity: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(PurchaseCountOrderByAggregateInput_schema_1.PurchaseCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(PurchaseAvgOrderByAggregateInput_schema_1.PurchaseAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(PurchaseMaxOrderByAggregateInput_schema_1.PurchaseMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(PurchaseMinOrderByAggregateInput_schema_1.PurchaseMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(PurchaseSumOrderByAggregateInput_schema_1.PurchaseSumOrderByAggregateInputSchemaObject)
};
