"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateWithoutCustomerInput_schema_1 = require("./PoolCreateWithoutCustomerInput.schema");
const PoolUncheckedCreateWithoutCustomerInput_schema_1 = require("./PoolUncheckedCreateWithoutCustomerInput.schema");
const PoolCreateOrConnectWithoutCustomerInput_schema_1 = require("./PoolCreateOrConnectWithoutCustomerInput.schema");
const PoolUpsertWithWhereUniqueWithoutCustomerInput_schema_1 = require("./PoolUpsertWithWhereUniqueWithoutCustomerInput.schema");
const PoolCreateManyCustomerInputEnvelope_schema_1 = require("./PoolCreateManyCustomerInputEnvelope.schema");
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolUpdateWithWhereUniqueWithoutCustomerInput_schema_1 = require("./PoolUpdateWithWhereUniqueWithoutCustomerInput.schema");
const PoolUpdateManyWithWhereWithoutCustomerInput_schema_1 = require("./PoolUpdateManyWithWhereWithoutCustomerInput.schema");
const PoolScalarWhereInput_schema_1 = require("./PoolScalarWhereInput.schema");
exports.PoolUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutCustomerInput_schema_1.PoolCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolCreateWithoutCustomerInput_schema_1.PoolCreateWithoutCustomerInputSchemaObject)), joi_1.default.object().keys(PoolUncheckedCreateWithoutCustomerInput_schema_1.PoolUncheckedCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolUncheckedCreateWithoutCustomerInput_schema_1.PoolUncheckedCreateWithoutCustomerInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateOrConnectWithoutCustomerInput_schema_1.PoolCreateOrConnectWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolCreateOrConnectWithoutCustomerInput_schema_1.PoolCreateOrConnectWithoutCustomerInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpsertWithWhereUniqueWithoutCustomerInput_schema_1.PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolUpsertWithWhereUniqueWithoutCustomerInput_schema_1.PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject))),
    createMany: joi_1.default.object().keys(PoolCreateManyCustomerInputEnvelope_schema_1.PoolCreateManyCustomerInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithWhereUniqueWithoutCustomerInput_schema_1.PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolUpdateWithWhereUniqueWithoutCustomerInput_schema_1.PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateManyWithWhereWithoutCustomerInput_schema_1.PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolUpdateManyWithWhereWithoutCustomerInput_schema_1.PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolScalarWhereInput_schema_1.PoolScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolScalarWhereInput_schema_1.PoolScalarWhereInputSchemaObject)))
};
