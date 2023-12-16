"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpdateOneRequiredWithoutPaymentNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateWithoutPaymentInput_schema_1 = require("./BookingCreateWithoutPaymentInput.schema");
const BookingUncheckedCreateWithoutPaymentInput_schema_1 = require("./BookingUncheckedCreateWithoutPaymentInput.schema");
const BookingCreateOrConnectWithoutPaymentInput_schema_1 = require("./BookingCreateOrConnectWithoutPaymentInput.schema");
const BookingUpsertWithoutPaymentInput_schema_1 = require("./BookingUpsertWithoutPaymentInput.schema");
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingUpdateWithoutPaymentInput_schema_1 = require("./BookingUpdateWithoutPaymentInput.schema");
const BookingUncheckedUpdateWithoutPaymentInput_schema_1 = require("./BookingUncheckedUpdateWithoutPaymentInput.schema");
exports.BookingUpdateOneRequiredWithoutPaymentNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutPaymentInput_schema_1.BookingCreateWithoutPaymentInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutPaymentInput_schema_1.BookingUncheckedCreateWithoutPaymentInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(BookingCreateOrConnectWithoutPaymentInput_schema_1.BookingCreateOrConnectWithoutPaymentInputSchemaObject),
    upsert: joi_1.default.object().keys(BookingUpsertWithoutPaymentInput_schema_1.BookingUpsertWithoutPaymentInputSchemaObject),
    connect: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithoutPaymentInput_schema_1.BookingUpdateWithoutPaymentInputSchemaObject), joi_1.default.object().keys(BookingUncheckedUpdateWithoutPaymentInput_schema_1.BookingUncheckedUpdateWithoutPaymentInputSchemaObject))
};
