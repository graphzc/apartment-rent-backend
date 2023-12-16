// @ts-nocheck
import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutBookingInputSchemaObject } from './PaymentUpdateWithoutBookingInput.schema';
import { PaymentUncheckedUpdateWithoutBookingInputSchemaObject } from './PaymentUncheckedUpdateWithoutBookingInput.schema';
import { PaymentCreateWithoutBookingInputSchemaObject } from './PaymentCreateWithoutBookingInput.schema';
import { PaymentUncheckedCreateWithoutBookingInputSchemaObject } from './PaymentUncheckedCreateWithoutBookingInput.schema'

export const PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PaymentUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(PaymentUncheckedUpdateWithoutBookingInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject),
Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject))
}