"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(UserWhereInput_schema_1.UserWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(UserWhereInput_schema_1.UserWhereInputSchemaObject))
};
