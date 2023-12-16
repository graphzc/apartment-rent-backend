import Joi from 'joi';
import { ApartmentCreateInputSchemaObject } from './objects'

export const ApartmentCreateSchema = Joi.object().keys({ data: Joi.object().keys(ApartmentCreateInputSchemaObject)  }).required()