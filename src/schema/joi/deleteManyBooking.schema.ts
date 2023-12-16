import Joi from 'joi';
import { BookingWhereInputSchemaObject } from './objects'

export const BookingDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereInputSchemaObject)  }).required()