// @ts-nocheck
import Joi from 'joi';
import { BookingWhereInputSchemaObject } from './BookingWhereInput.schema'

export const BookingListRelationFilterSchemaObject = {
    every: Joi.object().keys(BookingWhereInputSchemaObject),
  some: Joi.object().keys(BookingWhereInputSchemaObject),
  none: Joi.object().keys(BookingWhereInputSchemaObject)
}