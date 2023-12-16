"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithoutCustomerInput_schema_1 = require("./CustomerOrderUpdateWithoutCustomerInput.schema");
const CustomerOrderUncheckedUpdateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutCustomerInput.schema");
const CustomerOrderCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateWithoutCustomerInput.schema");
const CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutCustomerInput.schema");
exports.CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutCustomerInput_schema_1.CustomerOrderUpdateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutCustomerInput_schema_1.CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))
};
