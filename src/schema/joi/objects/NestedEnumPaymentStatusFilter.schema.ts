// @ts-nocheck
import Joi from 'joi';


export const NestedEnumPaymentStatusFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumPaymentStatusFilter'))
}