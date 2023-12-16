"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const InvoiceCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedCreateWithoutCustomerOrderInput.schema");
const InvoiceCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./InvoiceCreateOrConnectWithoutCustomerOrderInput.schema");
const InvoiceUpsertWithoutCustomerOrderInput_schema_1 = require("./InvoiceUpsertWithoutCustomerOrderInput.schema");
const InvoiceWhereUniqueInput_schema_1 = require("./InvoiceWhereUniqueInput.schema");
const InvoiceUpdateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUpdateWithoutCustomerOrderInput.schema");
const InvoiceUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./InvoiceUncheckedUpdateWithoutCustomerOrderInput.schema");
exports.InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceCreateWithoutCustomerOrderInput_schema_1.InvoiceCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(InvoiceCreateOrConnectWithoutCustomerOrderInput_schema_1.InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    upsert: joi_1.default.object().keys(InvoiceUpsertWithoutCustomerOrderInput_schema_1.InvoiceUpsertWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(InvoiceWhereUniqueInput_schema_1.InvoiceWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceUpdateWithoutCustomerOrderInput_schema_1.InvoiceUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(InvoiceUncheckedUpdateWithoutCustomerOrderInput_schema_1.InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
};
