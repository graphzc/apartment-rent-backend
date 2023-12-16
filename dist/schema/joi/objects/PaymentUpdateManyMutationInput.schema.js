"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyMutationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const EnumPaymentStatusFieldUpdateOperationsInput_schema_1 = require("./EnumPaymentStatusFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
exports.PaymentUpdateManyMutationInputSchemaObject = {
    amount: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    slip: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputSchemaObject)),
    status: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPaymentStatusFieldUpdateOperationsInput_schema_1.EnumPaymentStatusFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject))
};
