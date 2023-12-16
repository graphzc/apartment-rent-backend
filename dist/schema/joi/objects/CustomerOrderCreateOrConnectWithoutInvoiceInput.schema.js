"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderCreateWithoutInvoiceInput.schema");
const CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutInvoiceInput.schema");
exports.CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutInvoiceInput_schema_1.CustomerOrderCreateWithoutInvoiceInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1.CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject))
};
