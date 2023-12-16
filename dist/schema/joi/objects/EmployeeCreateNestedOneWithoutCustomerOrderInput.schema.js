"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const EmployeeCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedCreateWithoutCustomerOrderInput.schema");
const EmployeeCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateOrConnectWithoutCustomerOrderInput.schema");
const EmployeeWhereUniqueInput_schema_1 = require("./EmployeeWhereUniqueInput.schema");
exports.EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeCreateWithoutCustomerOrderInput_schema_1.EmployeeCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(EmployeeCreateOrConnectWithoutCustomerOrderInput_schema_1.EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(EmployeeWhereUniqueInput_schema_1.EmployeeWhereUniqueInputSchemaObject)
};
