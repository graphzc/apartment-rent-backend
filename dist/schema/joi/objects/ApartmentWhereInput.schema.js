"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const RoomListRelationFilter_schema_1 = require("./RoomListRelationFilter.schema");
exports.ApartmentWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#ApartmentWhereInput'), joi_1.default.array().items(joi_1.default.link('#ApartmentWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#ApartmentWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#ApartmentWhereInput'), joi_1.default.array().items(joi_1.default.link('#ApartmentWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    room: joi_1.default.object().keys(RoomListRelationFilter_schema_1.RoomListRelationFilterSchemaObject)
};
