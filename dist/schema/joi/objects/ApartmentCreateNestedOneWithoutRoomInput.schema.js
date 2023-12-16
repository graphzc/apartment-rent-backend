"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentCreateNestedOneWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ApartmentCreateWithoutRoomInput_schema_1 = require("./ApartmentCreateWithoutRoomInput.schema");
const ApartmentUncheckedCreateWithoutRoomInput_schema_1 = require("./ApartmentUncheckedCreateWithoutRoomInput.schema");
const ApartmentCreateOrConnectWithoutRoomInput_schema_1 = require("./ApartmentCreateOrConnectWithoutRoomInput.schema");
const ApartmentWhereUniqueInput_schema_1 = require("./ApartmentWhereUniqueInput.schema");
exports.ApartmentCreateNestedOneWithoutRoomInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentCreateWithoutRoomInput_schema_1.ApartmentCreateWithoutRoomInputSchemaObject), joi_1.default.object().keys(ApartmentUncheckedCreateWithoutRoomInput_schema_1.ApartmentUncheckedCreateWithoutRoomInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(ApartmentCreateOrConnectWithoutRoomInput_schema_1.ApartmentCreateOrConnectWithoutRoomInputSchemaObject),
    connect: joi_1.default.object().keys(ApartmentWhereUniqueInput_schema_1.ApartmentWhereUniqueInputSchemaObject)
};
