"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const ApartmentRelationFilter_schema_1 = require("./ApartmentRelationFilter.schema");
const ApartmentWhereInput_schema_1 = require("./ApartmentWhereInput.schema");
const BookingListRelationFilter_schema_1 = require("./BookingListRelationFilter.schema");
exports.RoomWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#RoomWhereInput'), joi_1.default.array().items(joi_1.default.link('#RoomWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#RoomWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#RoomWhereInput'), joi_1.default.array().items(joi_1.default.link('#RoomWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    no: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    apartmentId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    apartment: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentRelationFilter_schema_1.ApartmentRelationFilterSchemaObject), joi_1.default.object().keys(ApartmentWhereInput_schema_1.ApartmentWhereInputSchemaObject)),
    booking: joi_1.default.object().keys(BookingListRelationFilter_schema_1.BookingListRelationFilterSchemaObject)
};
