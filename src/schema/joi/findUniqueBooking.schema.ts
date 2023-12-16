import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './objects'

export const BookingFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereUniqueInputSchemaObject) }).required()