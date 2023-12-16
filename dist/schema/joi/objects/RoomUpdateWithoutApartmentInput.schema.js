"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpdateWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const BookingUpdateManyWithoutRoomNestedInput_schema_1 = require("./BookingUpdateManyWithoutRoomNestedInput.schema");
exports.RoomUpdateWithoutApartmentInputSchemaObject = {
    no: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    booking: joi_1.default.object().keys(BookingUpdateManyWithoutRoomNestedInput_schema_1.BookingUpdateManyWithoutRoomNestedInputSchemaObject)
};
