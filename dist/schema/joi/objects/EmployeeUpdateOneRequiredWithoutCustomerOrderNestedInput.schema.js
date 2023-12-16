"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const EmployeeCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedCreateWithoutCustomerOrderInput.schema");
const EmployeeCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./EmployeeCreateOrConnectWithoutCustomerOrderInput.schema");
const EmployeeUpsertWithoutCustomerOrderInput_schema_1 = require("./EmployeeUpsertWithoutCustomerOrderInput.schema");
const EmployeeWhereUniqueInput_schema_1 = require("./EmployeeWhereUniqueInput.schema");
const EmployeeUpdateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUpdateWithoutCustomerOrderInput.schema");
const EmployeeUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./EmployeeUncheckedUpdateWithoutCustomerOrderInput.schema");
exports.EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeCreateWithoutCustomerOrderInput_schema_1.EmployeeCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(EmployeeCreateOrConnectWithoutCustomerOrderInput_schema_1.EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject),
    upsert: joi_1.default.object().keys(EmployeeUpsertWithoutCustomerOrderInput_schema_1.EmployeeUpsertWithoutCustomerOrderInputSchemaObject),
    connect: joi_1.default.object().keys(EmployeeWhereUniqueInput_schema_1.EmployeeWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeUpdateWithoutCustomerOrderInput_schema_1.EmployeeUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(EmployeeUncheckedUpdateWithoutCustomerOrderInput_schema_1.EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
};
