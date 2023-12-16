// @ts-nocheck
import Joi from 'joi';


export const RoomUncheckedCreateWithoutBookingInputSchemaObject = {
    id: Joi.number(),
  no: Joi.number().required(),
  apartmentId: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}