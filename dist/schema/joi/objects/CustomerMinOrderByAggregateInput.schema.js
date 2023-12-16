"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.CustomerMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    address: SortOrder_schema_1.SortOrderSchema,
    telephone: SortOrder_schema_1.SortOrderSchema,
    taxId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
