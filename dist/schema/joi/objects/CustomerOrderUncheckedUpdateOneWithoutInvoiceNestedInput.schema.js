"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUncheckedUpdateOneWithoutInvoiceNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderCreateWithoutInvoiceInput.schema");
const CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutInvoiceInput.schema");
const CustomerOrderCreateOrConnectWithoutInvoiceInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutInvoiceInput.schema");
const CustomerOrderUpsertWithoutInvoiceInput_schema_1 = require("./CustomerOrderUpsertWithoutInvoiceInput.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUpdateWithoutInvoiceInput.schema");
const CustomerOrderUncheckedUpdateWithoutInvoiceInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutInvoiceInput.schema");
exports.CustomerOrderUncheckedUpdateOneWithoutInvoiceNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutInvoiceInput_schema_1.CustomerOrderCreateWithoutInvoiceInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInput_schema_1.CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutInvoiceInput_schema_1.CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject),
    upsert: joi_1.default.object().keys(CustomerOrderUpsertWithoutInvoiceInput_schema_1.CustomerOrderUpsertWithoutInvoiceInputSchemaObject),
    disconnect: joi_1.default.boolean(),
    delete: joi_1.default.boolean(),
    connect: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutInvoiceInput_schema_1.CustomerOrderUpdateWithoutInvoiceInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutInvoiceInput_schema_1.CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject))
};
