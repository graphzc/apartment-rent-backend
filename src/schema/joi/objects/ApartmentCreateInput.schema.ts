// @ts-nocheck
import Joi from 'joi';
import { RoomCreateNestedManyWithoutApartmentInputSchemaObject } from './RoomCreateNestedManyWithoutApartmentInput.schema'

export const ApartmentCreateInputSchemaObject = {
    name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  room: Joi.object().keys(RoomCreateNestedManyWithoutApartmentInputSchemaObject)
}