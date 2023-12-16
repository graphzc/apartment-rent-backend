"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const EmployeeWhereUniqueInput_schema_1 = require("./EmployeeWhereUniqueInput.schema");
const EmployeeCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedCreateWithoutCustomerOrderInput.schema");
exports.EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: joi_1.default.object().keys(EmployeeWhereUniqueInput_schema_1.EmployeeWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeCreateWithoutCustomerOrderInput_schema_1.EmployeeCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
