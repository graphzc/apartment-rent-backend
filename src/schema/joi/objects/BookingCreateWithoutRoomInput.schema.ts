// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutBookingInputSchemaObject } from './UserCreateNestedOneWithoutBookingInput.schema';
import { PaymentCreateNestedManyWithoutBookingInputSchemaObject } from './PaymentCreateNestedManyWithoutBookingInput.schema'

export const BookingCreateWithoutRoomInputSchemaObject = {
    startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutBookingInputSchemaObject),
  payment: Joi.object().keys(PaymentCreateNestedManyWithoutBookingInputSchemaObject)
}