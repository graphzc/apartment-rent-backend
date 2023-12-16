import Joi from 'joi';
import { ApartmentWhereUniqueInputSchemaObject, ApartmentCreateInputSchemaObject, ApartmentUpdateInputSchemaObject } from './objects'

export const ApartmentUpsertSchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject), data: Joi.object().keys(ApartmentCreateInputSchemaObject), update: Joi.object().keys(ApartmentUpdateInputSchemaObject)  }).required()