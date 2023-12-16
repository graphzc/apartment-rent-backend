"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const InvoiceCountOrderByAggregateInput_schema_1 = require("./InvoiceCountOrderByAggregateInput.schema");
const InvoiceMaxOrderByAggregateInput_schema_1 = require("./InvoiceMaxOrderByAggregateInput.schema");
const InvoiceMinOrderByAggregateInput_schema_1 = require("./InvoiceMinOrderByAggregateInput.schema");
exports.InvoiceOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    paidAt: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    vatIncluded: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(InvoiceCountOrderByAggregateInput_schema_1.InvoiceCountOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(InvoiceMaxOrderByAggregateInput_schema_1.InvoiceMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(InvoiceMinOrderByAggregateInput_schema_1.InvoiceMinOrderByAggregateInputSchemaObject)
};
