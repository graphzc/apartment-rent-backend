import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","email","name","password","role","createdAt","updatedAt"])