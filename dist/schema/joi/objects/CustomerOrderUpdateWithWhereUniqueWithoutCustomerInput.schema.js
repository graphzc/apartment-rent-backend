"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithoutCustomerInput_schema_1 = require("./CustomerOrderUpdateWithoutCustomerInput.schema");
const CustomerOrderUncheckedUpdateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutCustomerInput.schema");
exports.CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutCustomerInput_schema_1.CustomerOrderUpdateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutCustomerInput_schema_1.CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject))
};
