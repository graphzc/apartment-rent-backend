// @ts-nocheck
import Joi from 'joi';
import { ApartmentUpdateWithoutRoomInputSchemaObject } from './ApartmentUpdateWithoutRoomInput.schema';
import { ApartmentUncheckedUpdateWithoutRoomInputSchemaObject } from './ApartmentUncheckedUpdateWithoutRoomInput.schema';
import { ApartmentCreateWithoutRoomInputSchemaObject } from './ApartmentCreateWithoutRoomInput.schema';
import { ApartmentUncheckedCreateWithoutRoomInputSchemaObject } from './ApartmentUncheckedCreateWithoutRoomInput.schema'

export const ApartmentUpsertWithoutRoomInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ApartmentUpdateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedUpdateWithoutRoomInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ApartmentCreateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedCreateWithoutRoomInputSchemaObject))
}