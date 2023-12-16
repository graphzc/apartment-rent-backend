// @ts-nocheck
import Joi from 'joi';
import { RoomCreateWithoutApartmentInputSchemaObject } from './RoomCreateWithoutApartmentInput.schema';
import { RoomUncheckedCreateWithoutApartmentInputSchemaObject } from './RoomUncheckedCreateWithoutApartmentInput.schema';
import { RoomCreateOrConnectWithoutApartmentInputSchemaObject } from './RoomCreateOrConnectWithoutApartmentInput.schema';
import { RoomCreateManyApartmentInputEnvelopeSchemaObject } from './RoomCreateManyApartmentInputEnvelope.schema';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema'

export const RoomCreateNestedManyWithoutApartmentInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject)),
Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RoomCreateOrConnectWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomCreateOrConnectWithoutApartmentInputSchemaObject))),
  createMany: Joi.object().keys(RoomCreateManyApartmentInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(RoomWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomWhereUniqueInputSchemaObject)))
}