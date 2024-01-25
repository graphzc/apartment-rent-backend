import { Request, Response } from "express";
import apartmentService from "@/services/apartmentService";
import { CreateApartmentValidation, EditApartmentValidation } from "@/schema/apartmentSchema";
import { ZodError } from "zod";

export const getAllApartment = async (req: Request, res: Response) => {
    const apartments = await apartmentService.getAllApartment();

    return res.status(200).json(apartments);
}

export const getApartment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const apartment = await apartmentService.findApartmentById(id);

    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }

    return res.status(200).json(apartment);
}

export const createApartment = async (req: Request, res: Response) => {
    try {
        const payload = CreateApartmentValidation.parse(req.body)
        
        const isExist = await apartmentService.findApartmentByName(payload.name);

        if (isExist) {
            return res.status(400).json({
                message: "Apartment already exist"
            });
        }
    
        const apartment = await apartmentService.createApartment(payload);

        return res.status(201).json(apartment);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues
            });
        }
    }
}

export const deleteApartment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const apartment = await apartmentService.deleteApartment(id);

    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }

    return res.status(200).json(apartment);
}

export const updateApartment = async (req: Request, res: Response) => {
    try {
        const payload = EditApartmentValidation.parse(req.body);
        const id = parseInt(req.params.id);

        const isExist = await apartmentService.findApartmentByName(payload.name);

        if (isExist) {
            return res.status(400).json({
                message: "Apartment already exist"
            });
        }

        const apartment = await apartmentService.editApartment(id, payload);

        if (apartment) {
            return res.status(200).json(apartment);
        }

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues
            });
        }
    }
}