"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PaymentMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    bookingId: SortOrder_schema_1.SortOrderSchema,
    amount: SortOrder_schema_1.SortOrderSchema,
    slip: SortOrder_schema_1.SortOrderSchema,
    status: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
