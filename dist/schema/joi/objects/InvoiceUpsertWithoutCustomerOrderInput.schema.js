"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceUpsertWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const InvoiceUpdateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUpdateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedUpdateWithoutCustomerOrderInput.schema");
const InvoiceCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedCreateWithoutCustomerOrderInput.schema");
exports.InvoiceUpsertWithoutCustomerOrderInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceUpdateWithoutCustomerOrderInput_schema_1.InvoiceUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedUpdateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceCreateWithoutCustomerOrderInput_schema_1.InvoiceCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
