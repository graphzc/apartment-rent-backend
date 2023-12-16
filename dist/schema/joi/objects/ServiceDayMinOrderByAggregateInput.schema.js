"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ServiceDayMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    monday: SortOrder_schema_1.SortOrderSchema,
    tuesday: SortOrder_schema_1.SortOrderSchema,
    wednesday: SortOrder_schema_1.SortOrderSchema,
    thursday: SortOrder_schema_1.SortOrderSchema,
    friday: SortOrder_schema_1.SortOrderSchema,
    saturday: SortOrder_schema_1.SortOrderSchema,
    sunday: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
