// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutPaymentInputSchemaObject } from './BookingCreateWithoutPaymentInput.schema';
import { BookingUncheckedCreateWithoutPaymentInputSchemaObject } from './BookingUncheckedCreateWithoutPaymentInput.schema';
import { BookingCreateOrConnectWithoutPaymentInputSchemaObject } from './BookingCreateOrConnectWithoutPaymentInput.schema';
import { BookingUpsertWithoutPaymentInputSchemaObject } from './BookingUpsertWithoutPaymentInput.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithoutPaymentInputSchemaObject } from './BookingUpdateWithoutPaymentInput.schema';
import { BookingUncheckedUpdateWithoutPaymentInputSchemaObject } from './BookingUncheckedUpdateWithoutPaymentInput.schema'

export const BookingUpdateOneRequiredWithoutPaymentNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutPaymentInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BookingCreateOrConnectWithoutPaymentInputSchemaObject),
  upsert: Joi.object().keys(BookingUpsertWithoutPaymentInputSchemaObject),
  connect: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutPaymentInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutPaymentInputSchemaObject))
}