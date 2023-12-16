"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const BookingOrderByRelationAggregateInput_schema_1 = require("./BookingOrderByRelationAggregateInput.schema");
exports.UserOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    email: SortOrder_schema_1.SortOrderSchema,
    name: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    password: SortOrder_schema_1.SortOrderSchema,
    role: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    booking: joi_1.default.object().keys(BookingOrderByRelationAggregateInput_schema_1.BookingOrderByRelationAggregateInputSchemaObject)
};
