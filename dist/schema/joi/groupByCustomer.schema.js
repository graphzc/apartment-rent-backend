"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupBySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
const enums_1 = require("./enums");
exports.CustomerGroupBySchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.CustomerWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.CustomerOrderByWithAggregationInputSchemaObject), having: joi_1.default.object().keys(objects_1.CustomerScalarWhereWithAggregatesInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number(), by: joi_1.default.array().items(enums_1.CustomerScalarFieldEnumSchema).required() }).required();
