"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCountOrderByAggregateInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PurchaseCountOrderByAggregateInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    poolId: SortOrder_schema_1.SortOrderSchema,
    productId: SortOrder_schema_1.SortOrderSchema,
    customerOrderId: SortOrder_schema_1.SortOrderSchema,
    quantity: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema
};
