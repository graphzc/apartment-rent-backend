// @ts-nocheck
import Joi from 'joi';


export const ApartmentCreateWithoutRoomInputSchemaObject = {
    name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}