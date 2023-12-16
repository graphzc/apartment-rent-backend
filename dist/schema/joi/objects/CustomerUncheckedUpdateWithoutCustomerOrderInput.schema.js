"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const PoolUncheckedUpdateManyWithoutCustomerNestedInput_schema_1 = require("./PoolUncheckedUpdateManyWithoutCustomerNestedInput.schema");
exports.CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    name: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    address: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputSchemaObject)),
    telephone: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputSchemaObject)),
    taxId: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    pool: joi_1.default.object().keys(PoolUncheckedUpdateManyWithoutCustomerNestedInput_schema_1.PoolUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject)
};
