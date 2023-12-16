"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceScalarWhereWithAggregatesInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.InvoiceScalarWhereWithAggregatesInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#InvoiceScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#InvoiceScalarWhereWithAggregatesInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#InvoiceScalarWhereWithAggregatesInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#InvoiceScalarWhereWithAggregatesInput'), joi_1.default.array().items(joi_1.default.link('#InvoiceScalarWhereWithAggregatesInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterSchemaObject), joi_1.default.string()),
    paidAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterSchemaObject)),
    vatIncluded: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterSchemaObject), joi_1.default.boolean()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterSchemaObject))
};
