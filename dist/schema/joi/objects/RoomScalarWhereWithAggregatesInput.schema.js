"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.RoomScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#RoomScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#RoomScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#RoomScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#RoomScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#RoomScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    no: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    apartmentId: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
