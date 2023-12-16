"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUpsertSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
exports.EmployeeUpsertSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.EmployeeWhereUniqueInputSchemaObject), data: joi_1.default.object().keys(objects_1.EmployeeCreateInputSchemaObject), update: joi_1.default.object().keys(objects_1.EmployeeUpdateInputSchemaObject) }).required();
