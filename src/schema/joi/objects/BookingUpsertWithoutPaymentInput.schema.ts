// @ts-nocheck
import Joi from 'joi';
import { BookingUpdateWithoutPaymentInputSchemaObject } from './BookingUpdateWithoutPaymentInput.schema';
import { BookingUncheckedUpdateWithoutPaymentInputSchemaObject } from './BookingUncheckedUpdateWithoutPaymentInput.schema';
import { BookingCreateWithoutPaymentInputSchemaObject } from './BookingCreateWithoutPaymentInput.schema';
import { BookingUncheckedCreateWithoutPaymentInputSchemaObject } from './BookingUncheckedCreateWithoutPaymentInput.schema'

export const BookingUpsertWithoutPaymentInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutPaymentInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutPaymentInputSchemaObject))
}