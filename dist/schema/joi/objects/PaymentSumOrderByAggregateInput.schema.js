"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSumOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PaymentSumOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    bookingId: SortOrder_schema_1.SortOrderSchema,
    amount: SortOrder_schema_1.SortOrderSchema
};
