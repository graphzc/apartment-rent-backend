"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpsertSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
exports.PurchaseUpsertSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.PurchaseWhereUniqueInputSchemaObject), data: joi_1.default.object().keys(objects_1.PurchaseCreateInputSchemaObject), update: joi_1.default.object().keys(objects_1.PurchaseUpdateInputSchemaObject) }).required();
