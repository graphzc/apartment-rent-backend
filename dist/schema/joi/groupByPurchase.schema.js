"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseGroupBySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
const enums_1 = require("./enums");
exports.PurchaseGroupBySchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.PurchaseWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.PurchaseOrderByWithAggregationInputSchemaObject), having: joi_1.default.object().keys(objects_1.PurchaseScalarWhereWithAggregatesInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number(), by: joi_1.default.array().items(enums_1.PurchaseScalarFieldEnumSchema).required() }).required();
