"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolMinOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PoolMinOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    address: SortOrder_schema_1.SortOrderSchema,
    price: SortOrder_schema_1.SortOrderSchema,
    chemicalIncluded: SortOrder_schema_1.SortOrderSchema,
    type: SortOrder_schema_1.SortOrderSchema,
    inService: SortOrder_schema_1.SortOrderSchema,
    serviceDayId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
