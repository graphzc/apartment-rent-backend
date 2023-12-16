// @ts-nocheck
import Joi from 'joi';
import { RoomCreateNestedOneWithoutBookingInputSchemaObject } from './RoomCreateNestedOneWithoutBookingInput.schema';
import { UserCreateNestedOneWithoutBookingInputSchemaObject } from './UserCreateNestedOneWithoutBookingInput.schema'

export const BookingCreateWithoutPaymentInputSchemaObject = {
    startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  room: Joi.object().keys(RoomCreateNestedOneWithoutBookingInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutBookingInputSchemaObject)
}