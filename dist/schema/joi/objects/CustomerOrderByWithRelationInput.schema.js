"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PoolOrderByRelationAggregateInput_schema_1 = require("./PoolOrderByRelationAggregateInput.schema");
const CustomerOrderOrderByRelationAggregateInput_schema_1 = require("./CustomerOrderOrderByRelationAggregateInput.schema");
exports.CustomerOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    address: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    telephone: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    taxId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    pool: joi_1.default.object().keys(PoolOrderByRelationAggregateInput_schema_1.PoolOrderByRelationAggregateInputSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderOrderByRelationAggregateInput_schema_1.CustomerOrderOrderByRelationAggregateInputSchemaObject)
};
