"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUncheckedCreateNestedManyWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateWithoutCustomerInput_schema_1 = require("./PoolCreateWithoutCustomerInput.schema");
const PoolUncheckedCreateWithoutCustomerInput_schema_1 = require("./PoolUncheckedCreateWithoutCustomerInput.schema");
const PoolCreateOrConnectWithoutCustomerInput_schema_1 = require("./PoolCreateOrConnectWithoutCustomerInput.schema");
const PoolCreateManyCustomerInputEnvelope_schema_1 = require("./PoolCreateManyCustomerInputEnvelope.schema");
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
exports.PoolUncheckedCreateNestedManyWithoutCustomerInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutCustomerInput_schema_1.PoolCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolCreateWithoutCustomerInput_schema_1.PoolCreateWithoutCustomerInputSchemaObject)), joi_1.default.object().keys(PoolUncheckedCreateWithoutCustomerInput_schema_1.PoolUncheckedCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolUncheckedCreateWithoutCustomerInput_schema_1.PoolUncheckedCreateWithoutCustomerInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateOrConnectWithoutCustomerInput_schema_1.PoolCreateOrConnectWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolCreateOrConnectWithoutCustomerInput_schema_1.PoolCreateOrConnectWithoutCustomerInputSchemaObject))),
    createMany: joi_1.default.object().keys(PoolCreateManyCustomerInputEnvelope_schema_1.PoolCreateManyCustomerInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject)))
};
