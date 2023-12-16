import Joi from 'joi';
import { ApartmentUpdateInputSchemaObject, ApartmentWhereUniqueInputSchemaObject } from './objects'

export const ApartmentUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(ApartmentUpdateInputSchemaObject), where: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject)  }).required()