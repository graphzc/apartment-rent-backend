"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateManyWithoutPoolNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutPoolInput_schema_1 = require("./PurchaseCreateWithoutPoolInput.schema");
const PurchaseUncheckedCreateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedCreateWithoutPoolInput.schema");
const PurchaseCreateOrConnectWithoutPoolInput_schema_1 = require("./PurchaseCreateOrConnectWithoutPoolInput.schema");
const PurchaseUpsertWithWhereUniqueWithoutPoolInput_schema_1 = require("./PurchaseUpsertWithWhereUniqueWithoutPoolInput.schema");
const PurchaseCreateManyPoolInputEnvelope_schema_1 = require("./PurchaseCreateManyPoolInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithWhereUniqueWithoutPoolInput_schema_1 = require("./PurchaseUpdateWithWhereUniqueWithoutPoolInput.schema");
const PurchaseUpdateManyWithWhereWithoutPoolInput_schema_1 = require("./PurchaseUpdateManyWithWhereWithoutPoolInput.schema");
const PurchaseScalarWhereInput_schema_1 = require("./PurchaseScalarWhereInput.schema");
exports.PurchaseUpdateManyWithoutPoolNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutPoolInput_schema_1.PurchaseCreateOrConnectWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutPoolInput_schema_1.PurchaseCreateOrConnectWithoutPoolInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutPoolInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpsertWithWhereUniqueWithoutPoolInput_schema_1.PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyPoolInputEnvelope_schema_1.PurchaseCreateManyPoolInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutPoolInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateWithWhereUniqueWithoutPoolInput_schema_1.PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutPoolInput_schema_1.PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUpdateManyWithWhereWithoutPoolInput_schema_1.PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject)))
};
