import Joi from 'joi';
import { ApartmentWhereInputSchemaObject } from './objects'

export const ApartmentDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereInputSchemaObject)  }).required()