"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedDateTimeNullableWithAggregatesFilter_schema_1 = require("./NestedDateTimeNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedDateTimeNullableFilter_schema_1 = require("./NestedDateTimeNullableFilter.schema");
exports.DateTimeNullableWithAggregatesFilterSchemaObject = {
    lt: joi_1.default.date(),
    lte: joi_1.default.date(),
    gt: joi_1.default.date(),
    gte: joi_1.default.date(),
    not: joi_1.default.alternatives().try(joi_1.default.object().keys(NestedDateTimeNullableWithAggregatesFilter_schema_1.NestedDateTimeNullableWithAggregatesFilterSchemaObject)),
    _count: joi_1.default.object().keys(NestedIntNullableFilter_schema_1.NestedIntNullableFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterSchemaObject)
};
