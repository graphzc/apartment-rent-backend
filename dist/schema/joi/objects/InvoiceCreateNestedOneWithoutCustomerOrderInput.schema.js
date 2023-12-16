"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const InvoiceCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedCreateWithoutCustomerOrderInput.schema");
const InvoiceCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateOrConnectWithoutCustomerOrderInput.schema");
const InvoiceWhereUniqueInput_schema_1 = require("./InvoiceWhereUniqueInput.schema");
exports.InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceCreateWithoutCustomerOrderInput_schema_1.InvoiceCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(InvoiceCreateOrConnectWithoutCustomerOrderInput_schema_1.InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(InvoiceWhereUniqueInput_schema_1.InvoiceWhereUniqueInputSchemaObject)
};
