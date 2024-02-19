import { CreateNewsType } from "@/schema/newsSchema";
import Prisma from "./prisma";

const prisma = Prisma.client()

const getAllNews = async () => {
    const news = await prisma.news.findMany({
        orderBy: {
            id: 'desc'
        }
    });

    return news;
}

const getNewsById = async (id: number) => {
    const news = await prisma.news.findUnique({
        where: {
            id: id
        }
    });

    return news;
}

const createNews = async (news: CreateNewsType) => {
    const createdNews = await prisma.news.create({
        data: {
            ...news
        }
    });

    return createdNews;
}

const editNews = async (id: number, news: CreateNewsType) => {
    const editedNews = await prisma.news.update({
        where: {
            id
        },
        data: {
            ...news
        }
    });

    return editedNews;
}

const deleteNews = async (id: number) => {
    const deletedNews = await prisma.news.delete({
        where: {
            id
        }
    });

    return deletedNews;
}

const getCurrentNews = async () => {
    const currentNews = await prisma.news.findMany({
        where: {
            endDate: {
                gte: new Date()
            }
        },
        orderBy: {
            id: 'desc'
        }
    });

    return currentNews;
}

export default {
    getAllNews,
    getNewsById,
    createNews,
    editNews,
    deleteNews,
    getCurrentNews
}
    

