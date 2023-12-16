import Joi from 'joi';
import { RoomWhereInputSchemaObject } from './objects'

export const RoomDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RoomWhereInputSchemaObject)  }).required()