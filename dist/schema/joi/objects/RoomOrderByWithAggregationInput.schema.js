"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const RoomCountOrderByAggregateInput_schema_1 = require("./RoomCountOrderByAggregateInput.schema");
const RoomAvgOrderByAggregateInput_schema_1 = require("./RoomAvgOrderByAggregateInput.schema");
const RoomMaxOrderByAggregateInput_schema_1 = require("./RoomMaxOrderByAggregateInput.schema");
const RoomMinOrderByAggregateInput_schema_1 = require("./RoomMinOrderByAggregateInput.schema");
const RoomSumOrderByAggregateInput_schema_1 = require("./RoomSumOrderByAggregateInput.schema");
exports.RoomOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    no: SortOrder_schema_1.SortOrderSchema,
    apartmentId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(RoomCountOrderByAggregateInput_schema_1.RoomCountOrderByAggregateInputSchemaObject),
    _avg: joi_1.default.object().keys(RoomAvgOrderByAggregateInput_schema_1.RoomAvgOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(RoomMaxOrderByAggregateInput_schema_1.RoomMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(RoomMinOrderByAggregateInput_schema_1.RoomMinOrderByAggregateInputSchemaObject),
    _sum: joi_1.default.object().keys(RoomSumOrderByAggregateInput_schema_1.RoomSumOrderByAggregateInputSchemaObject)
};
