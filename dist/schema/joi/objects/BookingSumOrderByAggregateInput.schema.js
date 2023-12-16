"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSumOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.BookingSumOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    roomId: SortOrder_schema_1.SortOrderSchema,
    duration: SortOrder_schema_1.SortOrderSchema
};
