"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.EmployeeMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    username: SortOrder_schema_1.SortOrderSchema,
    password: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    role: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
