// @ts-nocheck
import Joi from 'joi';
import { ApartmentCreateWithoutRoomInputSchemaObject } from './ApartmentCreateWithoutRoomInput.schema';
import { ApartmentUncheckedCreateWithoutRoomInputSchemaObject } from './ApartmentUncheckedCreateWithoutRoomInput.schema';
import { ApartmentCreateOrConnectWithoutRoomInputSchemaObject } from './ApartmentCreateOrConnectWithoutRoomInput.schema';
import { ApartmentWhereUniqueInputSchemaObject } from './ApartmentWhereUniqueInput.schema'

export const ApartmentCreateNestedOneWithoutRoomInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ApartmentCreateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedCreateWithoutRoomInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ApartmentCreateOrConnectWithoutRoomInputSchemaObject),
  connect: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject)
}