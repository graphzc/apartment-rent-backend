"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereInput_schema_1 = require("./BookingWhereInput.schema");
exports.BookingListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject),
    some: joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject),
    none: joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject)
};
