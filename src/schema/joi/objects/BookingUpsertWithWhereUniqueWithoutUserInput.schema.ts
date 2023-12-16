// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithoutUserInputSchemaObject } from './BookingUpdateWithoutUserInput.schema';
import { BookingUncheckedUpdateWithoutUserInputSchemaObject } from './BookingUncheckedUpdateWithoutUserInput.schema';
import { BookingCreateWithoutUserInputSchemaObject } from './BookingCreateWithoutUserInput.schema';
import { BookingUncheckedCreateWithoutUserInputSchemaObject } from './BookingUncheckedCreateWithoutUserInput.schema'

export const BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject))
}