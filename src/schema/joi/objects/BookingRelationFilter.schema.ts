// @ts-nocheck
import Joi from 'joi';
import { BookingWhereInputSchemaObject } from './BookingWhereInput.schema'

export const BookingRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(BookingWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(BookingWhereInputSchemaObject))
}