// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingCreateWithoutUserInputSchemaObject } from './BookingCreateWithoutUserInput.schema';
import { BookingUncheckedCreateWithoutUserInputSchemaObject } from './BookingUncheckedCreateWithoutUserInput.schema'

export const BookingCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject))
}