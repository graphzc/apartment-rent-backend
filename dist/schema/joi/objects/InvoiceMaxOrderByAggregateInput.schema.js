"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceMaxOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.InvoiceMaxOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    paidAt: SortOrder_schema_1.SortOrderSchema,
    vatIncluded: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
