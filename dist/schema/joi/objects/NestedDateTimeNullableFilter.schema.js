"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.NestedDateTimeNullableFilterSchemaObject = {
    lt: joi_1.default.date(),
    lte: joi_1.default.date(),
    gt: joi_1.default.date(),
    gte: joi_1.default.date(),
    not: joi_1.default.alternatives().try(joi_1.default.link('#NestedDateTimeNullableFilter'))
};
