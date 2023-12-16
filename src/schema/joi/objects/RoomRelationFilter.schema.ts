// @ts-nocheck
import Joi from 'joi';
import { RoomWhereInputSchemaObject } from './RoomWhereInput.schema'

export const RoomRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(RoomWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(RoomWhereInputSchemaObject))
}