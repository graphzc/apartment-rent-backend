"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateWithoutInvoiceInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CustomerUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1 = require("./CustomerUpdateOneRequiredWithoutCustomerOrderNestedInput.schema");
const EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1 = require("./EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput.schema");
const PurchaseUpdateManyWithoutCustomerOrderNestedInput_schema_1 = require("./PurchaseUpdateManyWithoutCustomerOrderNestedInput.schema");
exports.CustomerOrderUpdateWithoutInvoiceInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    customer: joi_1.default.object().keys(CustomerUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1.CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
    employee: joi_1.default.object().keys(EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1.EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseUpdateManyWithoutCustomerOrderNestedInput_schema_1.PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject)
};
