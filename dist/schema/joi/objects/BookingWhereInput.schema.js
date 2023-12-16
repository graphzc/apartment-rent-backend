"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const RoomRelationFilter_schema_1 = require("./RoomRelationFilter.schema");
const RoomWhereInput_schema_1 = require("./RoomWhereInput.schema");
const UserRelationFilter_schema_1 = require("./UserRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const PaymentListRelationFilter_schema_1 = require("./PaymentListRelationFilter.schema");
exports.BookingWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#BookingWhereInput'), joi_1.default.array().items(joi_1.default.link('#BookingWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#BookingWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#BookingWhereInput'), joi_1.default.array().items(joi_1.default.link('#BookingWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    roomId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    userId: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    startDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    endDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    duration: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    room: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomRelationFilter_schema_1.RoomRelationFilterSchemaObject), joi_1.default.object().keys(RoomWhereInput_schema_1.RoomWhereInputSchemaObject)),
    user: joi_1.default.alternatives().try(joi_1.default.object().keys(UserRelationFilter_schema_1.UserRelationFilterSchemaObject), joi_1.default.object().keys(UserWhereInput_schema_1.UserWhereInputSchemaObject)),
    payment: joi_1.default.object().keys(PaymentListRelationFilter_schema_1.PaymentListRelationFilterSchemaObject)
};
