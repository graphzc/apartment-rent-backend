"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const CustomerOrderOrderByRelationAggregateInput_schema_1 = require("./CustomerOrderOrderByRelationAggregateInput.schema");
exports.EmployeeOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    username: SortOrder_schema_1.SortOrderSchema,
    password: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    role: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    customerOrder: joi_1.default.object().keys(CustomerOrderOrderByRelationAggregateInput_schema_1.CustomerOrderOrderByRelationAggregateInputSchemaObject)
};
