"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ApartmentCountOrderByAggregateInput_schema_1 = require("./ApartmentCountOrderByAggregateInput.schema");
const ApartmentAvgOrderByAggregateInput_schema_1 = require("./ApartmentAvgOrderByAggregateInput.schema");
const ApartmentMaxOrderByAggregateInput_schema_1 = require("./ApartmentMaxOrderByAggregateInput.schema");
const ApartmentMinOrderByAggregateInput_schema_1 = require("./ApartmentMinOrderByAggregateInput.schema");
const ApartmentSumOrderByAggregateInput_schema_1 = require("./ApartmentSumOrderByAggregateInput.schema");
exports.ApartmentOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    name: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(ApartmentCountOrderByAggregateInput_schema_1.ApartmentCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(ApartmentAvgOrderByAggregateInput_schema_1.ApartmentAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(ApartmentMaxOrderByAggregateInput_schema_1.ApartmentMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(ApartmentMinOrderByAggregateInput_schema_1.ApartmentMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(ApartmentSumOrderByAggregateInput_schema_1.ApartmentSumOrderByAggregateInputSchemaObject)
};
