"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpsertWithoutInvoiceInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderUpdateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUpdateWithoutInvoiceInput.schema");
const CustomerOrderUncheckedUpdateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutInvoiceInput.schema");
const CustomerOrderCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderCreateWithoutInvoiceInput.schema");
const CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutInvoiceInput.schema");
exports.CustomerOrderUpsertWithoutInvoiceInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutInvoiceInput_schema_1.CustomerOrderUpdateWithoutInvoiceInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutInvoiceInput_schema_1.CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutInvoiceInput_schema_1.CustomerOrderCreateWithoutInvoiceInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1.CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject))
};
