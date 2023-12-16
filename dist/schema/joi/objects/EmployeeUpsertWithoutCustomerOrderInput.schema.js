"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpsertWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const EmployeeUpdateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUpdateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedUpdateWithoutCustomerOrderInput.schema");
const EmployeeCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedCreateWithoutCustomerOrderInput.schema");
exports.EmployeeUpsertWithoutCustomerOrderInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeUpdateWithoutCustomerOrderInput_schema_1.EmployeeUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedUpdateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeCreateWithoutCustomerOrderInput_schema_1.EmployeeCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
