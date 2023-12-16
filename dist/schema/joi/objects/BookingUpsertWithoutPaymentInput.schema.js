"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpsertWithoutPaymentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingUpdateWithoutPaymentInput_schema_1 = require("./BookingUpdateWithoutPaymentInput.schema");
const BookingUncheckedUpdateWithoutPaymentInput_schema_1 = require("./BookingUncheckedUpdateWithoutPaymentInput.schema");
const BookingCreateWithoutPaymentInput_schema_1 = require("./BookingCreateWithoutPaymentInput.schema");
const BookingUncheckedCreateWithoutPaymentInput_schema_1 = require("./BookingUncheckedCreateWithoutPaymentInput.schema");
exports.BookingUpsertWithoutPaymentInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithoutPaymentInput_schema_1.BookingUpdateWithoutPaymentInputSchemaObject), joi_1.default.object().keys(BookingUncheckedUpdateWithoutPaymentInput_schema_1.BookingUncheckedUpdateWithoutPaymentInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutPaymentInput_schema_1.BookingCreateWithoutPaymentInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutPaymentInput_schema_1.BookingUncheckedCreateWithoutPaymentInputSchemaObject))
};
