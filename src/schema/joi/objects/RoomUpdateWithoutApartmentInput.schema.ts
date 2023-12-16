// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BookingUpdateManyWithoutRoomNestedInputSchemaObject } from './BookingUpdateManyWithoutRoomNestedInput.schema'

export const RoomUpdateWithoutApartmentInputSchemaObject = {
    no: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  booking: Joi.object().keys(BookingUpdateManyWithoutRoomNestedInputSchemaObject)
}