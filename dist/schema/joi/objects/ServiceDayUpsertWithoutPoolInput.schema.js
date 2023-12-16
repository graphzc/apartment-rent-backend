"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayUpsertWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ServiceDayUpdateWithoutPoolInput_schema_1 = require("./ServiceDayUpdateWithoutPoolInput.schema");
const ServiceDayUncheckedUpdateWithoutPoolInput_schema_1 = require("./ServiceDayUncheckedUpdateWithoutPoolInput.schema");
const ServiceDayCreateWithoutPoolInput_schema_1 = require("./ServiceDayCreateWithoutPoolInput.schema");
const ServiceDayUncheckedCreateWithoutPoolInput_schema_1 = require("./ServiceDayUncheckedCreateWithoutPoolInput.schema");
exports.ServiceDayUpsertWithoutPoolInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayUpdateWithoutPoolInput_schema_1.ServiceDayUpdateWithoutPoolInputSchemaObject), joi_1.default.object().keys(ServiceDayUncheckedUpdateWithoutPoolInput_schema_1.ServiceDayUncheckedUpdateWithoutPoolInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayCreateWithoutPoolInput_schema_1.ServiceDayCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(ServiceDayUncheckedCreateWithoutPoolInput_schema_1.ServiceDayUncheckedCreateWithoutPoolInputSchemaObject))
};
