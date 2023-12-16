"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseAggregateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
exports.PurchaseAggregateSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.PurchaseWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.PurchaseOrderByWithRelationInputSchemaObject), cursor: joi_1.default.object().keys(objects_1.PurchaseWhereUniqueInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number() }).required();
