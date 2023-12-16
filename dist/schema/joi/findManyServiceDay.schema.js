"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayFindManySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
const enums_1 = require("./enums");
exports.ServiceDayFindManySchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.ServiceDayWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.ServiceDayOrderByWithRelationInputSchemaObject), cursor: joi_1.default.object().keys(objects_1.ServiceDayWhereUniqueInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number(), distinct: joi_1.default.array().items(enums_1.ServiceDayScalarFieldEnumSchema) }).required();
