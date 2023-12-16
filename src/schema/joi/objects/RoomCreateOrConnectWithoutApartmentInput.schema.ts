// @ts-nocheck
import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutApartmentInputSchemaObject } from './RoomCreateWithoutApartmentInput.schema';
import { RoomUncheckedCreateWithoutApartmentInputSchemaObject } from './RoomUncheckedCreateWithoutApartmentInput.schema'

export const RoomCreateOrConnectWithoutApartmentInputSchemaObject = {
    where: Joi.object().keys(RoomWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject))
}