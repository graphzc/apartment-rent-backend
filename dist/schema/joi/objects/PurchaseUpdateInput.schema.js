"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const PoolUpdateOneWithoutPurchaseNestedInput_schema_1 = require("./PoolUpdateOneWithoutPurchaseNestedInput.schema");
const ProductUpdateOneWithoutPurchaseNestedInput_schema_1 = require("./ProductUpdateOneWithoutPurchaseNestedInput.schema");
const CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInput_schema_1 = require("./CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInput.schema");
exports.PurchaseUpdateInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    quantity: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    pool: joi_1.default.object().keys(PoolUpdateOneWithoutPurchaseNestedInput_schema_1.PoolUpdateOneWithoutPurchaseNestedInputSchemaObject),
    product: joi_1.default.object().keys(ProductUpdateOneWithoutPurchaseNestedInput_schema_1.ProductUpdateOneWithoutPurchaseNestedInputSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInput_schema_1.CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInputSchemaObject)
};
