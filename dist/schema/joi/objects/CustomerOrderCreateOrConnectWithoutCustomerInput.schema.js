"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateWithoutCustomerInput.schema");
const CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutCustomerInput.schema");
exports.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))
};
