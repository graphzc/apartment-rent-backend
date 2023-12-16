// @ts-nocheck
import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutBookingInputSchemaObject } from './PaymentUpdateWithoutBookingInput.schema';
import { PaymentUncheckedUpdateWithoutBookingInputSchemaObject } from './PaymentUncheckedUpdateWithoutBookingInput.schema'

export const PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PaymentUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(PaymentUncheckedUpdateWithoutBookingInputSchemaObject))
}