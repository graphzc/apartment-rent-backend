import Joi from 'joi';
import { BookingWhereInputSchemaObject, BookingOrderByWithRelationInputSchemaObject, BookingWhereUniqueInputSchemaObject } from './objects'

export const BookingAggregateSchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereInputSchemaObject), orderBy: Joi.object().keys(BookingOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(BookingWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()