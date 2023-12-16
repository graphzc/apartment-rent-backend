// @ts-nocheck
import Joi from 'joi';
import { ApartmentWhereInputSchemaObject } from './ApartmentWhereInput.schema'

export const ApartmentRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(ApartmentWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(ApartmentWhereInputSchemaObject))
}