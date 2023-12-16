import Joi from 'joi';
import { ApartmentWhereUniqueInputSchemaObject } from './objects'

export const ApartmentDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject)  }).required()