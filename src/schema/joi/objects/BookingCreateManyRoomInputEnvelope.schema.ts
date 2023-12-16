// @ts-nocheck
import Joi from 'joi';
import { BookingCreateManyRoomInputSchemaObject } from './BookingCreateManyRoomInput.schema'

export const BookingCreateManyRoomInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(BookingCreateManyRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateManyRoomInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}