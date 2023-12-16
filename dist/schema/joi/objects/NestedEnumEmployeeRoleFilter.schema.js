"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEmployeeRoleFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.NestedEnumEmployeeRoleFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.link('#NestedEnumEmployeeRoleFilter'))
};
