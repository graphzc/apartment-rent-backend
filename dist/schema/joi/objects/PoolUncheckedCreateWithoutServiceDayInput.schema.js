"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUncheckedCreateWithoutServiceDayInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseUncheckedCreateNestedManyWithoutPoolInput_schema_1 = require("./PurchaseUncheckedCreateNestedManyWithoutPoolInput.schema");
exports.PoolUncheckedCreateWithoutServiceDayInputSchemaObject = {
    id: joi_1.default.string(),
    customerId: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    chemicalIncluded: joi_1.default.boolean().required(),
    inService: joi_1.default.boolean().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    purchase: joi_1.default.object().keys(PurchaseUncheckedCreateNestedManyWithoutPoolInput_schema_1.PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject)
};
