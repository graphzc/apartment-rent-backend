import Joi from 'joi';
import { ApartmentUpdateManyMutationInputSchemaObject, ApartmentWhereInputSchemaObject } from './objects'

export const ApartmentUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(ApartmentUpdateManyMutationInputSchemaObject), where: Joi.object().keys(ApartmentWhereInputSchemaObject)  }).required()