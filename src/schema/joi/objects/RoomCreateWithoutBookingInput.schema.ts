// @ts-nocheck
import Joi from 'joi';
import { ApartmentCreateNestedOneWithoutRoomInputSchemaObject } from './ApartmentCreateNestedOneWithoutRoomInput.schema'

export const RoomCreateWithoutBookingInputSchemaObject = {
    no: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  apartment: Joi.object().keys(ApartmentCreateNestedOneWithoutRoomInputSchemaObject)
}