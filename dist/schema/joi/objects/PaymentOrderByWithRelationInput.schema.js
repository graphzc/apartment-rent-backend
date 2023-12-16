"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const BookingOrderByWithRelationInput_schema_1 = require("./BookingOrderByWithRelationInput.schema");
exports.PaymentOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    bookingId: SortOrder_schema_1.SortOrderSchema,
    amount: SortOrder_schema_1.SortOrderSchema,
    slip: joi_1.default.alternatives().try(SortOrder_schema_1.SortOrderSchema, joi_1.default.object().keys(SortOrderInput_schema_1.SortOrderInputSchemaObject)),
    status: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    booking: joi_1.default.object().keys(BookingOrderByWithRelationInput_schema_1.BookingOrderByWithRelationInputSchemaObject)
};
