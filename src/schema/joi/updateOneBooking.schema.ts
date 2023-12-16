import Joi from 'joi';
import { BookingUpdateInputSchemaObject, BookingWhereUniqueInputSchemaObject } from './objects'

export const BookingUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(BookingUpdateInputSchemaObject), where: Joi.object().keys(BookingWhereUniqueInputSchemaObject)  }).required()