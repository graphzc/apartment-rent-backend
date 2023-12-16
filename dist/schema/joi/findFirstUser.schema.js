"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFindFirstSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
const enums_1 = require("./enums");
exports.UserFindFirstSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.UserWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.UserOrderByWithRelationInputSchemaObject), cursor: joi_1.default.object().keys(objects_1.UserWhereUniqueInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number(), distinct: joi_1.default.array().items(enums_1.UserScalarFieldEnumSchema) }).required();
