// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutUserInputSchemaObject } from './BookingCreateWithoutUserInput.schema';
import { BookingUncheckedCreateWithoutUserInputSchemaObject } from './BookingUncheckedCreateWithoutUserInput.schema';
import { BookingCreateOrConnectWithoutUserInputSchemaObject } from './BookingCreateOrConnectWithoutUserInput.schema';
import { BookingCreateManyUserInputEnvelopeSchemaObject } from './BookingCreateManyUserInputEnvelope.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema'

export const BookingUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject)),
Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BookingCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(BookingCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject)))
}