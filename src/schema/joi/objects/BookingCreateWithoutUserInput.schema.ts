// @ts-nocheck
import Joi from 'joi';
import { RoomCreateNestedOneWithoutBookingInputSchemaObject } from './RoomCreateNestedOneWithoutBookingInput.schema';
import { PaymentCreateNestedManyWithoutBookingInputSchemaObject } from './PaymentCreateNestedManyWithoutBookingInput.schema'

export const BookingCreateWithoutUserInputSchemaObject = {
    startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  room: Joi.object().keys(RoomCreateNestedOneWithoutBookingInputSchemaObject),
  payment: Joi.object().keys(PaymentCreateNestedManyWithoutBookingInputSchemaObject)
}