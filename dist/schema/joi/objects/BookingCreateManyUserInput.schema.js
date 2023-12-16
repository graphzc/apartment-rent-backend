"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateManyUserInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.BookingCreateManyUserInputSchemaObject = {
    id: joi_1.default.number(),
    roomId: joi_1.default.number().required(),
    startDate: joi_1.default.date().required(),
    endDate: joi_1.default.date().required(),
    duration: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
