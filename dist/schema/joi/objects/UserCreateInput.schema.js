"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateNestedManyWithoutUserInput_schema_1 = require("./BookingCreateNestedManyWithoutUserInput.schema");
exports.UserCreateInputSchemaObject = {
    id: joi_1.default.string(),
    email: joi_1.default.string().required(),
    name: joi_1.default.alternatives().try(joi_1.default.string()),
    password: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    booking: joi_1.default.object().keys(BookingCreateNestedManyWithoutUserInput_schema_1.BookingCreateNestedManyWithoutUserInputSchemaObject)
};
