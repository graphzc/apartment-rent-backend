"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpdateManyWithoutApartmentNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomCreateWithoutApartmentInput_schema_1 = require("./RoomCreateWithoutApartmentInput.schema");
const RoomUncheckedCreateWithoutApartmentInput_schema_1 = require("./RoomUncheckedCreateWithoutApartmentInput.schema");
const RoomCreateOrConnectWithoutApartmentInput_schema_1 = require("./RoomCreateOrConnectWithoutApartmentInput.schema");
const RoomUpsertWithWhereUniqueWithoutApartmentInput_schema_1 = require("./RoomUpsertWithWhereUniqueWithoutApartmentInput.schema");
const RoomCreateManyApartmentInputEnvelope_schema_1 = require("./RoomCreateManyApartmentInputEnvelope.schema");
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
const RoomUpdateWithWhereUniqueWithoutApartmentInput_schema_1 = require("./RoomUpdateWithWhereUniqueWithoutApartmentInput.schema");
const RoomUpdateManyWithWhereWithoutApartmentInput_schema_1 = require("./RoomUpdateManyWithWhereWithoutApartmentInput.schema");
const RoomScalarWhereInput_schema_1 = require("./RoomScalarWhereInput.schema");
exports.RoomUpdateManyWithoutApartmentNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutApartmentInput_schema_1.RoomCreateWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomCreateWithoutApartmentInput_schema_1.RoomCreateWithoutApartmentInputSchemaObject)), joi_1.default.object().keys(RoomUncheckedCreateWithoutApartmentInput_schema_1.RoomUncheckedCreateWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomUncheckedCreateWithoutApartmentInput_schema_1.RoomUncheckedCreateWithoutApartmentInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateOrConnectWithoutApartmentInput_schema_1.RoomCreateOrConnectWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomCreateOrConnectWithoutApartmentInput_schema_1.RoomCreateOrConnectWithoutApartmentInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpsertWithWhereUniqueWithoutApartmentInput_schema_1.RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomUpsertWithWhereUniqueWithoutApartmentInput_schema_1.RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject))),
    createMany: joi_1.default.object().keys(RoomCreateManyApartmentInputEnvelope_schema_1.RoomCreateManyApartmentInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateWithWhereUniqueWithoutApartmentInput_schema_1.RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomUpdateWithWhereUniqueWithoutApartmentInput_schema_1.RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateManyWithWhereWithoutApartmentInput_schema_1.RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomUpdateManyWithWhereWithoutApartmentInput_schema_1.RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomScalarWhereInput_schema_1.RoomScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomScalarWhereInput_schema_1.RoomScalarWhereInputSchemaObject)))
};
