// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutPaymentInputSchemaObject } from './BookingCreateWithoutPaymentInput.schema';
import { BookingUncheckedCreateWithoutPaymentInputSchemaObject } from './BookingUncheckedCreateWithoutPaymentInput.schema';
import { BookingCreateOrConnectWithoutPaymentInputSchemaObject } from './BookingCreateOrConnectWithoutPaymentInput.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema'

export const BookingCreateNestedOneWithoutPaymentInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutPaymentInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BookingCreateOrConnectWithoutPaymentInputSchemaObject),
  connect: Joi.object().keys(BookingWhereUniqueInputSchemaObject)
}