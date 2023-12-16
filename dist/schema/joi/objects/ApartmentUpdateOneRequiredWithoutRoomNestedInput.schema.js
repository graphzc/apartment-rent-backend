"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentUpdateOneRequiredWithoutRoomNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ApartmentCreateWithoutRoomInput_schema_1 = require("./ApartmentCreateWithoutRoomInput.schema");
const ApartmentUncheckedCreateWithoutRoomInput_schema_1 = require("./ApartmentUncheckedCreateWithoutRoomInput.schema");
const ApartmentCreateOrConnectWithoutRoomInput_schema_1 = require("./ApartmentCreateOrConnectWithoutRoomInput.schema");
const ApartmentUpsertWithoutRoomInput_schema_1 = require("./ApartmentUpsertWithoutRoomInput.schema");
const ApartmentWhereUniqueInput_schema_1 = require("./ApartmentWhereUniqueInput.schema");
const ApartmentUpdateWithoutRoomInput_schema_1 = require("./ApartmentUpdateWithoutRoomInput.schema");
const ApartmentUncheckedUpdateWithoutRoomInput_schema_1 = require("./ApartmentUncheckedUpdateWithoutRoomInput.schema");
exports.ApartmentUpdateOneRequiredWithoutRoomNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentCreateWithoutRoomInput_schema_1.ApartmentCreateWithoutRoomInputSchemaObject), joi_1.default.object().keys(ApartmentUncheckedCreateWithoutRoomInput_schema_1.ApartmentUncheckedCreateWithoutRoomInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(ApartmentCreateOrConnectWithoutRoomInput_schema_1.ApartmentCreateOrConnectWithoutRoomInputSchemaObject),
    upsert: joi_1.default.object().keys(ApartmentUpsertWithoutRoomInput_schema_1.ApartmentUpsertWithoutRoomInputSchemaObject),
    connect: joi_1.default.object().keys(ApartmentWhereUniqueInput_schema_1.ApartmentWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentUpdateWithoutRoomInput_schema_1.ApartmentUpdateWithoutRoomInputSchemaObject), joi_1.default.object().keys(ApartmentUncheckedUpdateWithoutRoomInput_schema_1.ApartmentUncheckedUpdateWithoutRoomInputSchemaObject))
};
