import Joi from 'joi';
import { BookingUpdateManyMutationInputSchemaObject, BookingWhereInputSchemaObject } from './objects'

export const BookingUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(BookingUpdateManyMutationInputSchemaObject), where: Joi.object().keys(BookingWhereInputSchemaObject)  }).required()