"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateNestedManyWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateWithoutCustomerInput.schema");
const CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutCustomerInput.schema");
const CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutCustomerInput.schema");
const CustomerOrderCreateManyCustomerInputEnvelope_schema_1 = require("./CustomerOrderCreateManyCustomerInputEnvelope.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
exports.CustomerOrderCreateNestedManyWithoutCustomerInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject)), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject))),
    createMany: joi_1.default.object().keys(CustomerOrderCreateManyCustomerInputEnvelope_schema_1.CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject)))
};
