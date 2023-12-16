import Joi from 'joi';
import { BookingCreateInputSchemaObject } from './objects'

export const BookingCreateSchema = Joi.object().keys({ data: Joi.object().keys(BookingCreateInputSchemaObject)  }).required()