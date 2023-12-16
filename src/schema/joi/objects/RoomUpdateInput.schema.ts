// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { ApartmentUpdateOneRequiredWithoutRoomNestedInputSchemaObject } from './ApartmentUpdateOneRequiredWithoutRoomNestedInput.schema';
import { BookingUpdateManyWithoutRoomNestedInputSchemaObject } from './BookingUpdateManyWithoutRoomNestedInput.schema'

export const RoomUpdateInputSchemaObject = {
    no: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  apartment: Joi.object().keys(ApartmentUpdateOneRequiredWithoutRoomNestedInputSchemaObject),
  booking: Joi.object().keys(BookingUpdateManyWithoutRoomNestedInputSchemaObject)
}