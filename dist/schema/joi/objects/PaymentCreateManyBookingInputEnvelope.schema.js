"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateManyBookingInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentCreateManyBookingInput_schema_1 = require("./PaymentCreateManyBookingInput.schema");
exports.PaymentCreateManyBookingInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateManyBookingInput_schema_1.PaymentCreateManyBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentCreateManyBookingInput_schema_1.PaymentCreateManyBookingInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
