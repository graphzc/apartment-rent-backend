// @ts-nocheck
import Joi from 'joi';
import { BookingUncheckedCreateNestedManyWithoutRoomInputSchemaObject } from './BookingUncheckedCreateNestedManyWithoutRoomInput.schema'

export const RoomUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  no: Joi.number().required(),
  apartmentId: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  booking: Joi.object().keys(BookingUncheckedCreateNestedManyWithoutRoomInputSchemaObject)
}