"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMaxOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ProductMaxOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    code: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    description: SortOrder_schema_1.SortOrderSchema,
    price: SortOrder_schema_1.SortOrderSchema,
    unit: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
