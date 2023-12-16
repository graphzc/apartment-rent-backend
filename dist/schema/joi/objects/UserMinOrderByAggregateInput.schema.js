"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.UserMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    email: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    password: SortOrder_schema_1.SortOrderSchema,
    role: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
