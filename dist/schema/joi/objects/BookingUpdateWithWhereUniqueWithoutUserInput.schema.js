"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingUpdateWithoutUserInput_schema_1 = require("./BookingUpdateWithoutUserInput.schema");
const BookingUncheckedUpdateWithoutUserInput_schema_1 = require("./BookingUncheckedUpdateWithoutUserInput.schema");
exports.BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithoutUserInput_schema_1.BookingUpdateWithoutUserInputSchemaObject), joi_1.default.object().keys(BookingUncheckedUpdateWithoutUserInput_schema_1.BookingUncheckedUpdateWithoutUserInputSchemaObject))
};
