// @ts-nocheck
import Joi from 'joi';
import { RoomWhereInputSchemaObject } from './RoomWhereInput.schema'

export const RoomListRelationFilterSchemaObject = {
    every: Joi.object().keys(RoomWhereInputSchemaObject),
  some: Joi.object().keys(RoomWhereInputSchemaObject),
  none: Joi.object().keys(RoomWhereInputSchemaObject)
}