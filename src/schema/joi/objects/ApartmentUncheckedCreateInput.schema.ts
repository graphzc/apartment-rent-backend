// @ts-nocheck
import Joi from 'joi';
import { RoomUncheckedCreateNestedManyWithoutApartmentInputSchemaObject } from './RoomUncheckedCreateNestedManyWithoutApartmentInput.schema'

export const ApartmentUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  room: Joi.object().keys(RoomUncheckedCreateNestedManyWithoutApartmentInputSchemaObject)
}