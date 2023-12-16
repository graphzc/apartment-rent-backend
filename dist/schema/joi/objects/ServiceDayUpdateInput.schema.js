"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayUpdateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const PoolUpdateOneWithoutServiceDayNestedInput_schema_1 = require("./PoolUpdateOneWithoutServiceDayNestedInput.schema");
exports.ServiceDayUpdateInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    monday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    tuesday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    wednesday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    thursday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    friday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    saturday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    sunday: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    pool: joi_1.default.object().keys(PoolUpdateOneWithoutServiceDayNestedInput_schema_1.PoolUpdateOneWithoutServiceDayNestedInputSchemaObject)
};
