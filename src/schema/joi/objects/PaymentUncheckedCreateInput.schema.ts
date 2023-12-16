// @ts-nocheck
import Joi from 'joi';


export const PaymentUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  bookingId: Joi.number().required(),
  amount: Joi.number().required(),
  slip: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}