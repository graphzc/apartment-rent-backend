"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateManyUserInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateManyUserInput_schema_1 = require("./BookingCreateManyUserInput.schema");
exports.BookingCreateManyUserInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateManyUserInput_schema_1.BookingCreateManyUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateManyUserInput_schema_1.BookingCreateManyUserInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
