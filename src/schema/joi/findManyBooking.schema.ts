import Joi from 'joi';
import { BookingWhereInputSchemaObject, BookingOrderByWithRelationInputSchemaObject, BookingWhereUniqueInputSchemaObject } from './objects';
import { BookingScalarFieldEnumSchema } from './enums'

export const BookingFindManySchema = Joi.object().keys({ where: Joi.object().keys(BookingWhereInputSchemaObject), orderBy: Joi.object().keys(BookingOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(BookingWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(BookingScalarFieldEnumSchema)  }).required()