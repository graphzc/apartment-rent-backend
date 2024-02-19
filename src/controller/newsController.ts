import { CreateNewsValidation, EditNewsValidation } from "@/schema/newsSchema";
import newsService from "@/services/newsService";
import { Request, Response } from "express";
import { ZodError } from "zod";

export const getAllNews = async (req: Request, res: Response) => {
     const news = await newsService.getAllNews();
    
     return res.status(200).json(news);
};

export const getCurrentNews = async (req: Request, res: Response) => {
    const news = await newsService.getCurrentNews();

    return res.status(200).json(news);
};

export const getNewsById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const news = await newsService.getNewsById(id);

    if (!news) {
        return res.status(404).json({
            message: "News not found"
        });
    }

    return res.status(200).json(news);
};

export const createNews = async (req: Request, res: Response) => {
    try {
        const payload = CreateNewsValidation.parse(req.body);
        
        const news = await newsService.createNews(payload);

        return res.status(201).json(news);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues
            });
        }
        
    }
};

export const updateNews = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const payload = EditNewsValidation.parse(req.body);

    const news = await newsService.editNews(id, payload);

    if (!news) {
        return res.status(404).json({
            message: "News not found"
        });
    }

    return res.status(200).json(news);
};

export const deleteNews = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const news = await newsService.deleteNews(id);

    if (!news) {
        return res.status(404).json({
            message: "News not found"
        });
    }

    return res.status(200).json(news);
};