"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.ApartmentScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#ApartmentScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#ApartmentScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#ApartmentScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#ApartmentScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#ApartmentScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterSchemaObject), joi_1.default.number()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
