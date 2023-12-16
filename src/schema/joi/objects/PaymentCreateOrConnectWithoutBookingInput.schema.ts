// @ts-nocheck
import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutBookingInputSchemaObject } from './PaymentCreateWithoutBookingInput.schema';
import { PaymentUncheckedCreateWithoutBookingInputSchemaObject } from './PaymentUncheckedCreateWithoutBookingInput.schema'

export const PaymentCreateOrConnectWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject),
Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject))
}