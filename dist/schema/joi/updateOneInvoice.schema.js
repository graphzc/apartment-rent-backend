"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceUpdateOneSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
exports.InvoiceUpdateOneSchema = joi_1.default.object().keys({ data: joi_1.default.object().keys(objects_1.InvoiceUpdateInputSchemaObject), where: joi_1.default.object().keys(objects_1.InvoiceWhereUniqueInputSchemaObject) }).required();
