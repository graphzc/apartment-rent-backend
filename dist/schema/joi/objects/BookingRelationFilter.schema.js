"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereInput_schema_1 = require("./BookingWhereInput.schema");
exports.BookingRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereInput_schema_1.BookingWhereInputSchemaObject))
};
