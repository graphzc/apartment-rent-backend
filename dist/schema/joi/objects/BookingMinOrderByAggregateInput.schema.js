"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.BookingMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    roomId: SortOrder_schema_1.SortOrderSchema,
    userId: SortOrder_schema_1.SortOrderSchema,
    startDate: SortOrder_schema_1.SortOrderSchema,
    endDate: SortOrder_schema_1.SortOrderSchema,
    duration: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
