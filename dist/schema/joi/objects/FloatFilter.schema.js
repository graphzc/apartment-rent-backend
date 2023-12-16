"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
exports.FloatFilterSchemaObject = {
    equals: joi_1.default.number(),
    in: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.number()), joi_1.default.number()),
    notIn: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.number()), joi_1.default.number()),
    lt: joi_1.default.number(),
    lte: joi_1.default.number(),
    gt: joi_1.default.number(),
    gte: joi_1.default.number(),
    not: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(NestedFloatFilter_schema_1.NestedFloatFilterSchemaObject))
};
