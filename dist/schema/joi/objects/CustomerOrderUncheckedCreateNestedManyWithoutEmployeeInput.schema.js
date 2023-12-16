"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutEmployeeInput.schema");
const CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutEmployeeInput.schema");
const CustomerOrderCreateManyEmployeeInputEnvelope_schema_1 = require("./CustomerOrderCreateManyEmployeeInputEnvelope.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
exports.CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject)), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject))),
    createMany: joi_1.default.object().keys(CustomerOrderCreateManyEmployeeInputEnvelope_schema_1.CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject)))
};
