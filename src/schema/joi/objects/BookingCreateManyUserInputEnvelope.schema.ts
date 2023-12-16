// @ts-nocheck
import Joi from 'joi';
import { BookingCreateManyUserInputSchemaObject } from './BookingCreateManyUserInput.schema'

export const BookingCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(BookingCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}