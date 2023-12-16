// @ts-nocheck
import Joi from 'joi';
import { ApartmentWhereUniqueInputSchemaObject } from './ApartmentWhereUniqueInput.schema';
import { ApartmentCreateWithoutRoomInputSchemaObject } from './ApartmentCreateWithoutRoomInput.schema';
import { ApartmentUncheckedCreateWithoutRoomInputSchemaObject } from './ApartmentUncheckedCreateWithoutRoomInput.schema'

export const ApartmentCreateOrConnectWithoutRoomInputSchemaObject = {
    where: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ApartmentCreateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedCreateWithoutRoomInputSchemaObject))
}