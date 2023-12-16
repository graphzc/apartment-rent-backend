// @ts-nocheck
import Joi from 'joi';
import { PaymentCreateManyBookingInputSchemaObject } from './PaymentCreateManyBookingInput.schema'

export const PaymentCreateManyBookingInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(PaymentCreateManyBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentCreateManyBookingInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}