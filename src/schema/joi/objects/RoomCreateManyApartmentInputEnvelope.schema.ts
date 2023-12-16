// @ts-nocheck
import Joi from 'joi';
import { RoomCreateManyApartmentInputSchemaObject } from './RoomCreateManyApartmentInput.schema'

export const RoomCreateManyApartmentInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(RoomCreateManyApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomCreateManyApartmentInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}