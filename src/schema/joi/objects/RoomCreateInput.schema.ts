// @ts-nocheck
import Joi from 'joi';
import { ApartmentCreateNestedOneWithoutRoomInputSchemaObject } from './ApartmentCreateNestedOneWithoutRoomInput.schema';
import { BookingCreateNestedManyWithoutRoomInputSchemaObject } from './BookingCreateNestedManyWithoutRoomInput.schema'

export const RoomCreateInputSchemaObject = {
    no: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  apartment: Joi.object().keys(ApartmentCreateNestedOneWithoutRoomInputSchemaObject),
  booking: Joi.object().keys(BookingCreateNestedManyWithoutRoomInputSchemaObject)
}