"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const InvoiceWhereUniqueInput_schema_1 = require("./InvoiceWhereUniqueInput.schema");
const InvoiceCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedCreateWithoutCustomerOrderInput.schema");
exports.InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: joi_1.default.object().keys(InvoiceWhereUniqueInput_schema_1.InvoiceWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceCreateWithoutCustomerOrderInput_schema_1.InvoiceCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
