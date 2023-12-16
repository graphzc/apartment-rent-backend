import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject, RoomCreateInputSchemaObject, RoomUpdateInputSchemaObject } from './objects'

export const RoomUpsertSchema = Joi.object().keys({ where: Joi.object().keys(RoomWhereUniqueInputSchemaObject), data: Joi.object().keys(RoomCreateInputSchemaObject), update: Joi.object().keys(RoomUpdateInputSchemaObject)  }).required()