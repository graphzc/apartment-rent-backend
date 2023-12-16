import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject, BookingCreateInputSchemaObject, BookingUpdateInputSchemaObject } from './objects'

export const BookingUpsertSchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereUniqueInputSchemaObject), data: Joi.object().keys(BookingCreateInputSchemaObject), update: Joi.object().keys(BookingUpdateInputSchemaObject)  }).required()