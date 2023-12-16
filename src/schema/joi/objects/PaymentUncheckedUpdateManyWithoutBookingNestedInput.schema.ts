// @ts-nocheck
import Joi from 'joi';
import { PaymentCreateWithoutBookingInputSchemaObject } from './PaymentCreateWithoutBookingInput.schema';
import { PaymentUncheckedCreateWithoutBookingInputSchemaObject } from './PaymentUncheckedCreateWithoutBookingInput.schema';
import { PaymentCreateOrConnectWithoutBookingInputSchemaObject } from './PaymentCreateOrConnectWithoutBookingInput.schema';
import { PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject } from './PaymentUpsertWithWhereUniqueWithoutBookingInput.schema';
import { PaymentCreateManyBookingInputEnvelopeSchemaObject } from './PaymentCreateManyBookingInputEnvelope.schema';
import { PaymentWhereUniqueInputSchemaObject } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject } from './PaymentUpdateWithWhereUniqueWithoutBookingInput.schema';
import { PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject } from './PaymentUpdateManyWithWhereWithoutBookingInput.schema';
import { PaymentScalarWhereInputSchemaObject } from './PaymentScalarWhereInput.schema'

export const PaymentUncheckedUpdateManyWithoutBookingNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentCreateWithoutBookingInputSchemaObject)),
Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentUncheckedCreateWithoutBookingInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PaymentCreateOrConnectWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentCreateOrConnectWithoutBookingInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject))),
  createMany: Joi.object().keys(PaymentCreateManyBookingInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(PaymentWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(PaymentScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(PaymentScalarWhereInputSchemaObject)))
}