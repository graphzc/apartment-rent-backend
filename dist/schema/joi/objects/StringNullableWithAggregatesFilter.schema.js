"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const NestedStringNullableWithAggregatesFilter_schema_1 = require("./NestedStringNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedStringNullableFilter_schema_1 = require("./NestedStringNullableFilter.schema");
exports.StringNullableWithAggregatesFilterSchemaObject = {
    equals: joi_1.default.alternatives().try(joi_1.default.string()),
    in: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.string()), joi_1.default.string()),
    notIn: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.string()), joi_1.default.string()),
    lt: joi_1.default.string(),
    lte: joi_1.default.string(),
    gt: joi_1.default.string(),
    gte: joi_1.default.string(),
    contains: joi_1.default.string(),
    startsWith: joi_1.default.string(),
    endsWith: joi_1.default.string(),
    mode: QueryMode_schema_1.QueryModeSchema,
    not: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(NestedStringNullableWithAggregatesFilter_schema_1.NestedStringNullableWithAggregatesFilterSchemaObject)),
    _count: joi_1.default.object().keys(NestedIntNullableFilter_schema_1.NestedIntNullableFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedStringNullableFilter_schema_1.NestedStringNullableFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedStringNullableFilter_schema_1.NestedStringNullableFilterSchemaObject)
};
