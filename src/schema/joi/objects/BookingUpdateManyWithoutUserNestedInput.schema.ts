// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutUserInputSchemaObject } from './BookingCreateWithoutUserInput.schema';
import { BookingUncheckedCreateWithoutUserInputSchemaObject } from './BookingUncheckedCreateWithoutUserInput.schema';
import { BookingCreateOrConnectWithoutUserInputSchemaObject } from './BookingCreateOrConnectWithoutUserInput.schema';
import { BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './BookingUpsertWithWhereUniqueWithoutUserInput.schema';
import { BookingCreateManyUserInputEnvelopeSchemaObject } from './BookingCreateManyUserInputEnvelope.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './BookingUpdateWithWhereUniqueWithoutUserInput.schema';
import { BookingUpdateManyWithWhereWithoutUserInputSchemaObject } from './BookingUpdateManyWithWhereWithoutUserInput.schema';
import { BookingScalarWhereInputSchemaObject } from './BookingScalarWhereInput.schema'

export const BookingUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateWithoutUserInputSchemaObject)),
Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BookingCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(BookingCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(BookingUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(BookingScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingScalarWhereInputSchemaObject)))
}