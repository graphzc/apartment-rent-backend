"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateWithoutCustomerOrderInput.schema");
const CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedCreateWithoutCustomerOrderInput.schema");
const CustomerCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./CustomerCreateOrConnectWithoutCustomerOrderInput.schema");
const CustomerUpsertWithoutCustomerOrderInput_schema_1 = require("./CustomerUpsertWithoutCustomerOrderInput.schema");
const CustomerWhereUniqueInput_schema_1 = require("./CustomerWhereUniqueInput.schema");
const CustomerUpdateWithoutCustomerOrderInput_schema_1 = require("./CustomerUpdateWithoutCustomerOrderInput.schema");
const CustomerUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./CustomerUncheckedUpdateWithoutCustomerOrderInput.schema");
exports.CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutCustomerOrderInput_schema_1.CustomerCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInput_schema_1.CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(CustomerCreateOrConnectWithoutCustomerOrderInput_schema_1.CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    upsert: joi_1.default.object().keys(CustomerUpsertWithoutCustomerOrderInput_schema_1.CustomerUpsertWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(CustomerWhereUniqueInput_schema_1.CustomerWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerUpdateWithoutCustomerOrderInput_schema_1.CustomerUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedUpdateWithoutCustomerOrderInput_schema_1.CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
};
