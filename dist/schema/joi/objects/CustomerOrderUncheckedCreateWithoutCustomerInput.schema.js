"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput.schema");
exports.CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject = {
    id: joi_1.default.string(),
    employeeId: joi_1.default.string().required(),
    invoiceId: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    purchase: joi_1.default.object().keys(PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject)
};
