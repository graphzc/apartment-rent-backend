import Joi from 'joi';

export const PaymentStatusSchema = Joi.string().valid(...["UNPAID","APPROVED","REJECTED"])