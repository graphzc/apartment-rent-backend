// @ts-nocheck
import Joi from 'joi';
import { PaymentScalarWhereInputSchemaObject } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputSchemaObject } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutPaymentInputSchemaObject } from './PaymentUncheckedUpdateManyWithoutPaymentInput.schema'

export const PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(PaymentScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PaymentUpdateManyMutationInputSchemaObject),
Joi.object().keys(PaymentUncheckedUpdateManyWithoutPaymentInputSchemaObject))
}