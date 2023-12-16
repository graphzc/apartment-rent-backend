// @ts-nocheck
import Joi from 'joi';
import { PaymentCreateWithoutBookingInputSchemaObject } from './PaymentCreateWithoutBookingInput.schema';
import { PaymentUncheckedCreateWithoutBookingInputSchemaObject } from './PaymentUncheckedCreateWithoutBookingInput.schema';
import { PaymentCreateOrConnectWithoutBookingInputSchemaObject } from './PaymentCreateOrConnectWithoutBookingInput.schema';
import { PaymentCreateManyBookingInputEnvelopeSchemaObject } from './PaymentCreateManyBookingInputEnvelope.schema';
import { PaymentWhereUniqueInputSchemaObject } from './PaymentWhereUniqueInput.schema'

export const PaymentUncheckedCreateNestedManyWithoutBookingInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject)),
Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PaymentCreateOrConnectWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentCreateOrConnectWithoutBookingInputSchemaObject))),
  createMany: Joi.object().keys(PaymentCreateManyBookingInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentWhereUniqueInputSchemaObject)))
}