"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
const prisma = prisma_1.default.client();
const createPool = (pool, serviceDay) => __awaiter(void 0, void 0, void 0, function* () {
    const newServiceDay = yield prisma.serviceDay.create({
        data: {
            monday: serviceDay.monday,
            tuesday: serviceDay.tuesday,
            wednesday: serviceDay.wednesday,
            thursday: serviceDay.thursday,
            friday: serviceDay.friday,
            saturday: serviceDay.saturday,
            sunday: serviceDay.sunday,
        }
    });
    const newPool = yield prisma.pool.create({
        data: {
            serviceDayId: newServiceDay.id,
            address: pool.address,
            price: pool.price,
            chemicalIncluded: pool.chemicalIncluded,
            inService: pool.inService,
            type: pool.type,
            customerId: pool.customerId,
        },
    });
    const createdPool = yield prisma.pool.findUnique({
        where: {
            id: newPool.id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });
    return createdPool;
});
const getAllPools = () => __awaiter(void 0, void 0, void 0, function* () {
    const pools = yield prisma.pool.findMany({
        include: {
            serviceDay: true,
            customer: true
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
    return pools;
});
const findPoolById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield prisma.pool.findUnique({
        where: {
            id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });
    return pool;
});
const updatePool = (id, pool, serviceDay) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPool = yield prisma.pool.update({
        where: {
            id,
        },
        data: {
            address: pool.address,
            price: pool.price,
            chemicalIncluded: pool.chemicalIncluded,
            inService: pool.inService,
            type: pool.type,
            serviceDay: {
                update: {
                    monday: serviceDay.monday,
                    tuesday: serviceDay.tuesday,
                    wednesday: serviceDay.wednesday,
                    thursday: serviceDay.thursday,
                    friday: serviceDay.friday,
                    saturday: serviceDay.saturday,
                    sunday: serviceDay.sunday,
                }
            }
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });
    return updatedPool;
});
const deletePoolById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield prisma.pool.delete({
        where: {
            id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });
    yield prisma.serviceDay.delete({
        where: {
            id: pool.serviceDay.id
        }
    });
    return pool;
});
exports.default = {
    getAllPools,
    findPoolById,
    createPool,
    updatePool,
    deletePoolById
};
