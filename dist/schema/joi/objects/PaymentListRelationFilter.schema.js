"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentWhereInput_schema_1 = require("./PaymentWhereInput.schema");
exports.PaymentListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(PaymentWhereInput_schema_1.PaymentWhereInputSchemaObject),
    some: joi_1.default.object().keys(PaymentWhereInput_schema_1.PaymentWhereInputSchemaObject),
    none: joi_1.default.object().keys(PaymentWhereInput_schema_1.PaymentWhereInputSchemaObject)
};
