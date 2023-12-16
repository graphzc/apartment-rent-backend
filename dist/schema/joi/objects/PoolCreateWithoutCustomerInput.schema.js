"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolCreateWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateNestedManyWithoutPoolInput_schema_1 = require("./PurchaseCreateNestedManyWithoutPoolInput.schema");
const ServiceDayCreateNestedOneWithoutPoolInput_schema_1 = require("./ServiceDayCreateNestedOneWithoutPoolInput.schema");
exports.PoolCreateWithoutCustomerInputSchemaObject = {
    id: joi_1.default.string(),
    address: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    chemicalIncluded: joi_1.default.boolean().required(),
    inService: joi_1.default.boolean().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    purchase: joi_1.default.object().keys(PurchaseCreateNestedManyWithoutPoolInput_schema_1.PurchaseCreateNestedManyWithoutPoolInputSchemaObject),
    serviceDay: joi_1.default.object().keys(ServiceDayCreateNestedOneWithoutPoolInput_schema_1.ServiceDayCreateNestedOneWithoutPoolInputSchemaObject)
};
