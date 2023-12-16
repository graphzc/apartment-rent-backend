"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const CustomerOrderByWithRelationInput_schema_1 = require("./CustomerOrderByWithRelationInput.schema");
const EmployeeOrderByWithRelationInput_schema_1 = require("./EmployeeOrderByWithRelationInput.schema");
const InvoiceOrderByWithRelationInput_schema_1 = require("./InvoiceOrderByWithRelationInput.schema");
const PurchaseOrderByRelationAggregateInput_schema_1 = require("./PurchaseOrderByRelationAggregateInput.schema");
exports.CustomerOrderOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    employeeId: SortOrder_schema_1.SortOrderSchema,
    invoiceId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    customer: joi_1.default.object().keys(CustomerOrderByWithRelationInput_schema_1.CustomerOrderByWithRelationInputSchemaObject),
    employee: joi_1.default.object().keys(EmployeeOrderByWithRelationInput_schema_1.EmployeeOrderByWithRelationInputSchemaObject),
    invoice: joi_1.default.object().keys(InvoiceOrderByWithRelationInput_schema_1.InvoiceOrderByWithRelationInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseOrderByRelationAggregateInput_schema_1.PurchaseOrderByRelationAggregateInputSchemaObject)
};
