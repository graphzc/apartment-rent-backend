"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const RoomOrderByWithRelationInput_schema_1 = require("./RoomOrderByWithRelationInput.schema");
const UserOrderByWithRelationInput_schema_1 = require("./UserOrderByWithRelationInput.schema");
const PaymentOrderByRelationAggregateInput_schema_1 = require("./PaymentOrderByRelationAggregateInput.schema");
exports.BookingOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    roomId: SortOrder_schema_1.SortOrderSchema,
    userId: SortOrder_schema_1.SortOrderSchema,
    startDate: SortOrder_schema_1.SortOrderSchema,
    endDate: SortOrder_schema_1.SortOrderSchema,
    duration: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    room: joi_1.default.object().keys(RoomOrderByWithRelationInput_schema_1.RoomOrderByWithRelationInputSchemaObject),
    user: joi_1.default.object().keys(UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputSchemaObject),
    payment: joi_1.default.object().keys(PaymentOrderByRelationAggregateInput_schema_1.PaymentOrderByRelationAggregateInputSchemaObject)
};
