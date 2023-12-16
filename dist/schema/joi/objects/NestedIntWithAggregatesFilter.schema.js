"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
exports.NestedIntWithAggregatesFilterSchemaObject = {
    equals: joi_1.default.number(),
    in: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.number()), joi_1.default.number()),
    notIn: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.number()), joi_1.default.number()),
    lt: joi_1.default.number(),
    lte: joi_1.default.number(),
    gt: joi_1.default.number(),
    gte: joi_1.default.number(),
    not: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.link('#NestedIntWithAggregatesFilter')),
    _count: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _avg: joi_1.default.object().keys(NestedFloatFilter_schema_1.NestedFloatFilterSchemaObject),
    _sum: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject)
};
