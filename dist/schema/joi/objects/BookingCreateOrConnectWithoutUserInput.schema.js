"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateOrConnectWithoutUserInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingCreateWithoutUserInput_schema_1 = require("./BookingCreateWithoutUserInput.schema");
const BookingUncheckedCreateWithoutUserInput_schema_1 = require("./BookingUncheckedCreateWithoutUserInput.schema");
exports.BookingCreateOrConnectWithoutUserInputSchemaObject = {
    where: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutUserInput_schema_1.BookingCreateWithoutUserInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutUserInput_schema_1.BookingUncheckedCreateWithoutUserInputSchemaObject))
};
