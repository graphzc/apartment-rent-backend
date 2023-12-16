"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPaymentStatusWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedEnumPaymentStatusWithAggregatesFilter_schema_1 = require("./NestedEnumPaymentStatusWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumPaymentStatusFilter_schema_1 = require("./NestedEnumPaymentStatusFilter.schema");
exports.EnumPaymentStatusWithAggregatesFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.object().keys(NestedEnumPaymentStatusWithAggregatesFilter_schema_1.NestedEnumPaymentStatusWithAggregatesFilterSchemaObject)),
    _count: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedEnumPaymentStatusFilter_schema_1.NestedEnumPaymentStatusFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedEnumPaymentStatusFilter_schema_1.NestedEnumPaymentStatusFilterSchemaObject)
};
