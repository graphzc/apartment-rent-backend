// @ts-nocheck
import Joi from 'joi';
import { PaymentUncheckedCreateNestedManyWithoutBookingInputSchemaObject } from './PaymentUncheckedCreateNestedManyWithoutBookingInput.schema'

export const BookingUncheckedCreateWithoutRoomInputSchemaObject = {
    id: Joi.number(),
  userId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  payment: Joi.object().keys(PaymentUncheckedCreateNestedManyWithoutBookingInputSchemaObject)
}