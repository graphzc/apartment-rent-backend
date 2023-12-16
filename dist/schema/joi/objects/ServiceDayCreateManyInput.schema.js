"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayCreateManyInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.ServiceDayCreateManyInputSchemaObject = {
    id: joi_1.default.string(),
    monday: joi_1.default.boolean().required(),
    tuesday: joi_1.default.boolean().required(),
    wednesday: joi_1.default.boolean().required(),
    thursday: joi_1.default.boolean().required(),
    friday: joi_1.default.boolean().required(),
    saturday: joi_1.default.boolean().required(),
    sunday: joi_1.default.boolean().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
