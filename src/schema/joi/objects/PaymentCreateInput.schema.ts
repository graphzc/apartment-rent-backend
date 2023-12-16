// @ts-nocheck
import Joi from 'joi';
import { BookingCreateNestedOneWithoutPaymentInputSchemaObject } from './BookingCreateNestedOneWithoutPaymentInput.schema'

export const PaymentCreateInputSchemaObject = {
    amount: Joi.number().required(),
  slip: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  booking: Joi.object().keys(BookingCreateNestedOneWithoutPaymentInputSchemaObject)
}