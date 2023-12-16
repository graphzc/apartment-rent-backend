"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const CustomerOrderOrderByWithRelationInput_schema_1 = require("./CustomerOrderOrderByWithRelationInput.schema");
exports.InvoiceOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    paidAt: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    vatIncluded: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    customerOrder: joi_1.default.object().keys(CustomerOrderOrderByWithRelationInput_schema_1.CustomerOrderOrderByWithRelationInputSchemaObject)
};
