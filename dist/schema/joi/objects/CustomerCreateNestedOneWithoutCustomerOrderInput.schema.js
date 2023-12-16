"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateWithoutCustomerOrderInput.schema");
const CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedCreateWithoutCustomerOrderInput.schema");
const CustomerCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateOrConnectWithoutCustomerOrderInput.schema");
const CustomerWhereUniqueInput_schema_1 = require("./CustomerWhereUniqueInput.schema");
exports.CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutCustomerOrderInput_schema_1.CustomerCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1.CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(CustomerCreateOrConnectWithoutCustomerOrderInput_schema_1.CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(CustomerWhereUniqueInput_schema_1.CustomerWhereUniqueInputSchemaObject)
};
