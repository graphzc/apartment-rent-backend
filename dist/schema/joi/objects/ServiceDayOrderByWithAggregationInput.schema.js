"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayOrderByWithAggregationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ServiceDayCountOrderByAggregateInput_schema_1 = require("./ServiceDayCountOrderByAggregateInput.schema");
const ServiceDayMaxOrderByAggregateInput_schema_1 = require("./ServiceDayMaxOrderByAggregateInput.schema");
const ServiceDayMinOrderByAggregateInput_schema_1 = require("./ServiceDayMinOrderByAggregateInput.schema");
exports.ServiceDayOrderByWithAggregationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    monday: SortOrder_schema_1.SortOrderSchema,
    tuesday: SortOrder_schema_1.SortOrderSchema,
    wednesday: SortOrder_schema_1.SortOrderSchema,
    thursday: SortOrder_schema_1.SortOrderSchema,
    friday: SortOrder_schema_1.SortOrderSchema,
    saturday: SortOrder_schema_1.SortOrderSchema,
    sunday: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    _count: joi_1.default.object().keys(ServiceDayCountOrderByAggregateInput_schema_1.ServiceDayCountOrderByAggregateInputSchemaObject),
    _max: joi_1.default.object().keys(ServiceDayMaxOrderByAggregateInput_schema_1.ServiceDayMaxOrderByAggregateInputSchemaObject),
    _min: joi_1.default.object().keys(ServiceDayMinOrderByAggregateInput_schema_1.ServiceDayMinOrderByAggregateInputSchemaObject)
};
