import { CreateUtilitySchema } from '@/schema/utilitySchema';
import paymentService from '@/services/paymentService';
import untilityService from '@/services/utilityService';
import e, { Request, Response } from 'express';

export const getAllUtility = async (req: Request, res: Response) => {
    const utilities = await untilityService.getAllUtilities();

    return res.status(200).json(utilities);
}

export const getUtilityById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const utility = await untilityService.findUtilityById(id);

    if (!utility) {
        return res.status(404).json({
            message: "Utility not found"
        });
    }

    return res.status(200).json(utility);
}

export const createUtility = async (req: Request, res: Response) => {
    const payload = CreateUtilitySchema.parse(req.body);

    const createdUtility = await untilityService.createUtility(payload);

    if (!createdUtility) {
        return res.status(500).json({
            message: "Failed to create utility"
        });
    } 

    const utilities = await untilityService.findUtilityByBooking(payload.bookingId);
   
    if (utilities.length > 1) {
        const electricityCost = (utilities[0].electricity - utilities[1].electricity) * 7;
        const plumblingCost = (utilities[0].plumbing - utilities[1].plumbing ) * 18;

        await paymentService.createPayment({
            bookingId: payload.bookingId,
            amount: electricityCost + plumblingCost
        });        
    } 

    return res.status(201).json(createUtility);
}

