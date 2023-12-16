"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ApartmentOrderByWithRelationInput_schema_1 = require("./ApartmentOrderByWithRelationInput.schema");
const BookingOrderByRelationAggregateInput_schema_1 = require("./BookingOrderByRelationAggregateInput.schema");
exports.RoomOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    no: SortOrder_schema_1.SortOrderSchema,
    apartmentId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    apartment: joi_1.default.object().keys(ApartmentOrderByWithRelationInput_schema_1.ApartmentOrderByWithRelationInputSchemaObject),
    booking: joi_1.default.object().keys(BookingOrderByRelationAggregateInput_schema_1.BookingOrderByRelationAggregateInputSchemaObject)
};
