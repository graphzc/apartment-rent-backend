"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFieldUpdateOperationsInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.FloatFieldUpdateOperationsInputSchemaObject = {
    set: joi_1.default.number(),
    increment: joi_1.default.number(),
    decrement: joi_1.default.number(),
    multiply: joi_1.default.number(),
    divide: joi_1.default.number()
};
