"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAvgOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PaymentAvgOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    bookingId: SortOrder_schema_1.SortOrderSchema,
    amount: SortOrder_schema_1.SortOrderSchema
};
