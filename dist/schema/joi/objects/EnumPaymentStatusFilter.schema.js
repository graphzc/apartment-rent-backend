"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPaymentStatusFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedEnumPaymentStatusFilter_schema_1 = require("./NestedEnumPaymentStatusFilter.schema");
exports.EnumPaymentStatusFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.object().keys(NestedEnumPaymentStatusFilter_schema_1.NestedEnumPaymentStatusFilterSchemaObject))
};
