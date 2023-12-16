"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpsertWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerUpdateWithoutCustomerOrderInput_schema_1 = require("./CustomerUpdateWithoutCustomerOrderInput.schema");
const CustomerUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedUpdateWithoutCustomerOrderInput.schema");
const CustomerCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateWithoutCustomerOrderInput.schema");
const CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedCreateWithoutCustomerOrderInput.schema");
exports.CustomerUpsertWithoutCustomerOrderInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerUpdateWithoutCustomerOrderInput_schema_1.CustomerUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedUpdateWithoutCustomerOrderInput_schema_1.CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutCustomerOrderInput_schema_1.CustomerCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1.CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
