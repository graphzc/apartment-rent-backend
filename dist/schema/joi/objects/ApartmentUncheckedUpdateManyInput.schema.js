"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentUncheckedUpdateManyInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
exports.ApartmentUncheckedUpdateManyInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    name: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject))
};
