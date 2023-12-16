// @ts-nocheck
import Joi from 'joi';


export const RoomCreateManyApartmentInputSchemaObject = {
    id: Joi.number(),
  no: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}