"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const EmployeeCountOrderByAggregateInput_schema_1 = require("./EmployeeCountOrderByAggregateInput.schema");
const EmployeeMaxOrderByAggregateInput_schema_1 = require("./EmployeeMaxOrderByAggregateInput.schema");
const EmployeeMinOrderByAggregateInput_schema_1 = require("./EmployeeMinOrderByAggregateInput.schema");
exports.EmployeeOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    username: SortOrder_schema_1.SortOrderSchema,
    password: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    role: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(EmployeeCountOrderByAggregateInput_schema_1.EmployeeCountOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(EmployeeMaxOrderByAggregateInput_schema_1.EmployeeMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(EmployeeMinOrderByAggregateInput_schema_1.EmployeeMinOrderByAggregateInputSchemaObject)
};
