"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateManyWithoutCustomerNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateWithoutCustomerInput.schema");
const CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutCustomerInput.schema");
const CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutCustomerInput.schema");
const CustomerOrderUpsertWithWhereUniqueWithoutCustomerInput_schema_1 = require("./CustomerOrderUpsertWithWhereUniqueWithoutCustomerInput.schema");
const CustomerOrderCreateManyCustomerInputEnvelope_schema_1 = require("./CustomerOrderCreateManyCustomerInputEnvelope.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithWhereUniqueWithoutCustomerInput_schema_1 = require("./CustomerOrderUpdateWithWhereUniqueWithoutCustomerInput.schema");
const CustomerOrderUpdateManyWithWhereWithoutCustomerInput_schema_1 = require("./CustomerOrderUpdateManyWithWhereWithoutCustomerInput.schema");
const CustomerOrderScalarWhereInput_schema_1 = require("./CustomerOrderScalarWhereInput.schema");
exports.CustomerOrderUpdateManyWithoutCustomerNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateWithoutCustomerInput_schema_1.CustomerOrderCreateWithoutCustomerInputSchemaObject)), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInput_schema_1.CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutCustomerInput_schema_1.CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutCustomerInput_schema_1.CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject))),
    createMany: joi_1.default.object().keys(CustomerOrderCreateManyCustomerInputEnvelope_schema_1.CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutCustomerInput_schema_1.CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutCustomerInput_schema_1.CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateManyWithWhereWithoutCustomerInput_schema_1.CustomerOrderUpdateManyWithWhereWithoutCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderUpdateManyWithWhereWithoutCustomerInput_schema_1.CustomerOrderUpdateManyWithWhereWithoutCustomerInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderScalarWhereInput_schema_1.CustomerOrderScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderScalarWhereInput_schema_1.CustomerOrderScalarWhereInputSchemaObject)))
};
