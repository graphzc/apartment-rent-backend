import Joi from 'joi';

export const PaymentScalarFieldEnumSchema = Joi.string().valid(...["id","bookingId","amount","slip","status","createdAt","updatedAt"])