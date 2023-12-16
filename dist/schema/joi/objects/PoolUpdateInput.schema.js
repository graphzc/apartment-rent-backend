"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpdateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const FloatFieldUpdateOperationsInput_schema_1 = require("./FloatFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const EnumPoolTypeFieldUpdateOperationsInput_schema_1 = require("./EnumPoolTypeFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CustomerUpdateOneRequiredWithoutPoolNestedInput_schema_1 = require("./CustomerUpdateOneRequiredWithoutPoolNestedInput.schema");
const PurchaseUpdateManyWithoutPoolNestedInput_schema_1 = require("./PurchaseUpdateManyWithoutPoolNestedInput.schema");
const ServiceDayUpdateOneRequiredWithoutPoolNestedInput_schema_1 = require("./ServiceDayUpdateOneRequiredWithoutPoolNestedInput.schema");
exports.PoolUpdateInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    address: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    price: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(FloatFieldUpdateOperationsInput_schema_1.FloatFieldUpdateOperationsInputSchemaObject)),
    chemicalIncluded: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    type: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPoolTypeFieldUpdateOperationsInput_schema_1.EnumPoolTypeFieldUpdateOperationsInputSchemaObject)),
    inService: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    customer: joi_1.default.object().keys(CustomerUpdateOneRequiredWithoutPoolNestedInput_schema_1.CustomerUpdateOneRequiredWithoutPoolNestedInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseUpdateManyWithoutPoolNestedInput_schema_1.PurchaseUpdateManyWithoutPoolNestedInputSchemaObject),
    serviceDay: joi_1.default.object().keys(ServiceDayUpdateOneRequiredWithoutPoolNestedInput_schema_1.ServiceDayUpdateOneRequiredWithoutPoolNestedInputSchemaObject)
};
