"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPaymentStatusWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumPaymentStatusFilter_schema_1 = require("./NestedEnumPaymentStatusFilter.schema");
exports.NestedEnumPaymentStatusWithAggregatesFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.link('#NestedEnumPaymentStatusWithAggregatesFilter')),
    _count: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedEnumPaymentStatusFilter_schema_1.NestedEnumPaymentStatusFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedEnumPaymentStatusFilter_schema_1.NestedEnumPaymentStatusFilterSchemaObject)
};
