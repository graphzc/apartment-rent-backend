"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateManyWithoutProductNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutProductInput_schema_1 = require("./PurchaseCreateWithoutProductInput.schema");
const PurchaseUncheckedCreateWithoutProductInput_schema_1 = require("./PurchaseUncheckedCreateWithoutProductInput.schema");
const PurchaseCreateOrConnectWithoutProductInput_schema_1 = require("./PurchaseCreateOrConnectWithoutProductInput.schema");
const PurchaseUpsertWithWhereUniqueWithoutProductInput_schema_1 = require("./PurchaseUpsertWithWhereUniqueWithoutProductInput.schema");
const PurchaseCreateManyProductInputEnvelope_schema_1 = require("./PurchaseCreateManyProductInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithWhereUniqueWithoutProductInput_schema_1 = require("./PurchaseUpdateWithWhereUniqueWithoutProductInput.schema");
const PurchaseUpdateManyWithWhereWithoutProductInput_schema_1 = require("./PurchaseUpdateManyWithWhereWithoutProductInput.schema");
const PurchaseScalarWhereInput_schema_1 = require("./PurchaseScalarWhereInput.schema");
exports.PurchaseUpdateManyWithoutProductNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutProductInput_schema_1.PurchaseCreateWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutProductInput_schema_1.PurchaseCreateWithoutProductInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutProductInput_schema_1.PurchaseUncheckedCreateWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutProductInput_schema_1.PurchaseUncheckedCreateWithoutProductInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutProductInput_schema_1.PurchaseCreateOrConnectWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutProductInput_schema_1.PurchaseCreateOrConnectWithoutProductInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutProductInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutProductInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyProductInputEnvelope_schema_1.PurchaseCreateManyProductInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutProductInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutProductInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutProductInput_schema_1.PurchaseUpdateManyWithWhereWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutProductInput_schema_1.PurchaseUpdateManyWithWhereWithoutProductInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject)))
};
