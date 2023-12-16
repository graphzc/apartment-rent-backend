// @ts-nocheck
import Joi from 'joi';


export const PaymentUncheckedCreateWithoutBookingInputSchemaObject = {
    id: Joi.number(),
  amount: Joi.number().required(),
  slip: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}