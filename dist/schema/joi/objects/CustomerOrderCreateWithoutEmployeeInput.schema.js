"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerCreateNestedOneWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateNestedOneWithoutCustomerOrderInput.schema");
const InvoiceCreateNestedOneWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateNestedOneWithoutCustomerOrderInput.schema");
const PurchaseCreateNestedManyWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateNestedManyWithoutCustomerOrderInput.schema");
exports.CustomerOrderCreateWithoutEmployeeInputSchemaObject = {
    id: joi_1.default.string(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    customer: joi_1.default.object().keys(CustomerCreateNestedOneWithoutCustomerOrderInput_schema_1.CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject),
    invoice: joi_1.default.object().keys(InvoiceCreateNestedOneWithoutCustomerOrderInput_schema_1.InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseCreateNestedManyWithoutCustomerOrderInput_schema_1.PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject)
};
