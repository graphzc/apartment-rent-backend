// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingCreateWithoutPaymentInputSchemaObject } from './BookingCreateWithoutPaymentInput.schema';
import { BookingUncheckedCreateWithoutPaymentInputSchemaObject } from './BookingUncheckedCreateWithoutPaymentInput.schema'

export const BookingCreateOrConnectWithoutPaymentInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutPaymentInputSchemaObject))
}