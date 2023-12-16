// @ts-nocheck
import Joi from 'joi';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject } from './RoomUpdateOneRequiredWithoutBookingNestedInput.schema';
import { UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutBookingNestedInput.schema';
import { PaymentUpdateManyWithoutBookingNestedInputSchemaObject } from './PaymentUpdateManyWithoutBookingNestedInput.schema'

export const BookingUpdateInputSchemaObject = {
    startDate: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  endDate: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  duration: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  room: Joi.object().keys(RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject),
  payment: Joi.object().keys(PaymentUpdateManyWithoutBookingNestedInputSchemaObject)
}