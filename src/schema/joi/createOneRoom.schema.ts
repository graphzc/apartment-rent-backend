import Joi from 'joi';
import { RoomCreateInputSchemaObject } from './objects'

export const RoomCreateSchema = Joi.object().keys({ data: Joi.object().keys(RoomCreateInputSchemaObject)  }).required()