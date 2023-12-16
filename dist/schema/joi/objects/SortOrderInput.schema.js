"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrderInputSchemaObject = void 0;
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const NullsOrder_schema_1 = require("../enums/NullsOrder.schema");
exports.SortOrderInputSchemaObject = {
    sort: SortOrder_schema_1.SortOrderSchema,
    nulls: NullsOrder_schema_1.NullsOrderSchema
};
