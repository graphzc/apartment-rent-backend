"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.CustomerOrderMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    employeeId: SortOrder_schema_1.SortOrderSchema,
    invoiceId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
