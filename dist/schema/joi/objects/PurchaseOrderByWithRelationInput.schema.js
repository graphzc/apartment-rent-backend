"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PoolOrderByWithRelationInput_schema_1 = require("./PoolOrderByWithRelationInput.schema");
const ProductOrderByWithRelationInput_schema_1 = require("./ProductOrderByWithRelationInput.schema");
const CustomerOrderOrderByWithRelationInput_schema_1 = require("./CustomerOrderOrderByWithRelationInput.schema");
exports.PurchaseOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    poolId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    productId: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    customerOrderId: SortOrder_schema_1.SortOrderSchema,
    quantity: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    pool: joi_1.default.object().keys(PoolOrderByWithRelationInput_schema_1.PoolOrderByWithRelationInputSchemaObject),
    product: joi_1.default.object().keys(ProductOrderByWithRelationInput_schema_1.ProductOrderByWithRelationInputSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderOrderByWithRelationInput_schema_1.CustomerOrderOrderByWithRelationInputSchemaObject)
};
