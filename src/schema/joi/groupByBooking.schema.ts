import Joi from 'joi';
import { BookingWhereInputSchemaObject, BookingOrderByWithAggregationInputSchemaObject, BookingScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { BookingScalarFieldEnumSchema } from './enums'

export const BookingGroupBySchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereInputSchemaObject), orderBy: Joi.object().keys(BookingOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(BookingScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(BookingScalarFieldEnumSchema).required()  }).required()