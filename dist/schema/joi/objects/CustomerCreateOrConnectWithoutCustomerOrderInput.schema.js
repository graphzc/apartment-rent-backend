"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerWhereUniqueInput_schema_1 = require("./CustomerWhereUniqueInput.schema");
const CustomerCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateWithoutCustomerOrderInput.schema");
const CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedCreateWithoutCustomerOrderInput.schema");
exports.CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerWhereUniqueInput_schema_1.CustomerWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutCustomerOrderInput_schema_1.CustomerCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1.CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
