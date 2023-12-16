"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.ServiceDayScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#ServiceDayScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#ServiceDayScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#ServiceDayScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#ServiceDayScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#ServiceDayScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    monday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    tuesday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    wednesday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    thursday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    friday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    saturday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    sunday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
