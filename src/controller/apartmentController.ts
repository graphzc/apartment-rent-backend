import { Request, Response } from "express";
import apartmentService from "@/services/apartmentService";
import { ApartmentCreateSchema, ApartmentUpdateOneSchema } from "@/schema/joi";

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
    const { body } = req;
    console.log(ApartmentCreateSchema.validate(body));

    // if (error) {
    //     return res.status(400).json({
    //         message: error.message
    //     });
    // }

    // const apartment = await apartmentService.createApartment(value);

    // return res.status(201).json(apartment);
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
    const id = parseInt(req.params.id);
    const payload = req.body;

    const { value, error } = ApartmentUpdateOneSchema.validate(payload);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    const apartment = await apartmentService.editApartment(id, value);

    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }

    return res.status(200).json(apartment);
}