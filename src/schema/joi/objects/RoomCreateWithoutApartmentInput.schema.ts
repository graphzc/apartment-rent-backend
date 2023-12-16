// @ts-nocheck
import Joi from 'joi';
import { BookingCreateNestedManyWithoutRoomInputSchemaObject } from './BookingCreateNestedManyWithoutRoomInput.schema'

export const RoomCreateWithoutApartmentInputSchemaObject = {
    no: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  booking: Joi.object().keys(BookingCreateNestedManyWithoutRoomInputSchemaObject)
}