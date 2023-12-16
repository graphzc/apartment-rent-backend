"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateOrConnectWithoutPaymentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingCreateWithoutPaymentInput_schema_1 = require("./BookingCreateWithoutPaymentInput.schema");
const BookingUncheckedCreateWithoutPaymentInput_schema_1 = require("./BookingUncheckedCreateWithoutPaymentInput.schema");
exports.BookingCreateOrConnectWithoutPaymentInputSchemaObject = {
    where: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutPaymentInput_schema_1.BookingCreateWithoutPaymentInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutPaymentInput_schema_1.BookingUncheckedCreateWithoutPaymentInputSchemaObject))
};
