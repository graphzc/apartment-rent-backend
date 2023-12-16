"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingScalarWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.BookingScalarWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#BookingScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#BookingScalarWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#BookingScalarWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#BookingScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#BookingScalarWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    roomId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    userId: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    startDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    endDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    duration: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject))
};
