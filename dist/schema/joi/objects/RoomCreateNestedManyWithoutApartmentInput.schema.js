"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateNestedManyWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomCreateWithoutApartmentInput_schema_1 = require("./RoomCreateWithoutApartmentInput.schema");
const RoomUncheckedCreateWithoutApartmentInput_schema_1 = require("./RoomUncheckedCreateWithoutApartmentInput.schema");
const RoomCreateOrConnectWithoutApartmentInput_schema_1 = require("./RoomCreateOrConnectWithoutApartmentInput.schema");
const RoomCreateManyApartmentInputEnvelope_schema_1 = require("./RoomCreateManyApartmentInputEnvelope.schema");
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
exports.RoomCreateNestedManyWithoutApartmentInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutApartmentInput_schema_1.RoomCreateWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomCreateWithoutApartmentInput_schema_1.RoomCreateWithoutApartmentInputSchemaObject)), joi_1.default.object().keys(RoomUncheckedCreateWithoutApartmentInput_schema_1.RoomUncheckedCreateWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomUncheckedCreateWithoutApartmentInput_schema_1.RoomUncheckedCreateWithoutApartmentInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateOrConnectWithoutApartmentInput_schema_1.RoomCreateOrConnectWithoutApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomCreateOrConnectWithoutApartmentInput_schema_1.RoomCreateOrConnectWithoutApartmentInputSchemaObject))),
    createMany: joi_1.default.object().keys(RoomCreateManyApartmentInputEnvelope_schema_1.RoomCreateManyApartmentInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject)))
};
