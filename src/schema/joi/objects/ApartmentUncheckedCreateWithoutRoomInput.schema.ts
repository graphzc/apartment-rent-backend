// @ts-nocheck
import Joi from 'joi';


export const ApartmentUncheckedCreateWithoutRoomInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}