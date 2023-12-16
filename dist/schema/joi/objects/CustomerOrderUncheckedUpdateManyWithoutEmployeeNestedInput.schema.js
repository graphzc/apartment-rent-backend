"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUncheckedUpdateManyWithoutEmployeeNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutEmployeeInput.schema");
const CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutEmployeeInput.schema");
const CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInput_schema_1 = require("./CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInput.schema");
const CustomerOrderCreateManyEmployeeInputEnvelope_schema_1 = require("./CustomerOrderCreateManyEmployeeInputEnvelope.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInput_schema_1 = require("./CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInput.schema");
const CustomerOrderUpdateManyWithWhereWithoutEmployeeInput_schema_1 = require("./CustomerOrderUpdateManyWithWhereWithoutEmployeeInput.schema");
const CustomerOrderScalarWhereInput_schema_1 = require("./CustomerOrderScalarWhereInput.schema");
exports.CustomerOrderUncheckedUpdateManyWithoutEmployeeNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject)), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInput_schema_1.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInput_schema_1.CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInput_schema_1.CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject))),
    createMany: joi_1.default.object().keys(CustomerOrderCreateManyEmployeeInputEnvelope_schema_1.CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInput_schema_1.CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInput_schema_1.CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateManyWithWhereWithoutEmployeeInput_schema_1.CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpdateManyWithWhereWithoutEmployeeInput_schema_1.CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderScalarWhereInput_schema_1.CustomerOrderScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderScalarWhereInput_schema_1.CustomerOrderScalarWhereInputSchemaObject)))
};
