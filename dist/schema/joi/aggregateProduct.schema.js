"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAggregateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
exports.ProductAggregateSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.ProductWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.ProductOrderByWithRelationInputSchemaObject), cursor: joi_1.default.object().keys(objects_1.ProductWhereUniqueInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number() }).required();
