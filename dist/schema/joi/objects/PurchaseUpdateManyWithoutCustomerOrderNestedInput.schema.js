"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateWithoutCustomerOrderInput.schema");
const PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedCreateWithoutCustomerOrderInput.schema");
const PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateOrConnectWithoutCustomerOrderInput.schema");
const PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInput_schema_1 = require("./PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInput.schema");
const PurchaseCreateManyCustomerOrderInputEnvelope_schema_1 = require("./PurchaseCreateManyCustomerOrderInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInput_schema_1 = require("./PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInput.schema");
const PurchaseUpdateManyWithWhereWithoutCustomerOrderInput_schema_1 = require("./PurchaseUpdateManyWithWhereWithoutCustomerOrderInput.schema");
const PurchaseScalarWhereInput_schema_1 = require("./PurchaseScalarWhereInput.schema");
exports.PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutCustomerOrderInput_schema_1.PurchaseCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutCustomerOrderInput_schema_1.PurchaseCreateWithoutCustomerOrderInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1.PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1.PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyCustomerOrderInputEnvelope_schema_1.PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutCustomerOrderInput_schema_1.PurchaseUpdateManyWithWhereWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutCustomerOrderInput_schema_1.PurchaseUpdateManyWithWhereWithoutCustomerOrderInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject)))
};
