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
const createApartment = (apartment) => __awaiter(void 0, void 0, void 0, function* () {
    const newApartment = yield prisma.apartment.create({
        data: apartment
    });
    return newApartment;
});
const getAllApartment = () => __awaiter(void 0, void 0, void 0, function* () {
    const apartments = yield prisma.apartment.findMany();
    return apartments;
});
const findApartmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const apartment = yield prisma.apartment.findUnique({
        where: {
            id
        }
    });
    return apartment;
});
const deleteApartment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield prisma.apartment.delete({
        where: {
            id: id
        }
    });
    return deleted;
});
const editApartment = (id, apartment) => __awaiter(void 0, void 0, void 0, function* () {
    const edited = yield prisma.apartment.update({
        where: {
            id: id
        },
        data: Object.assign({}, apartment)
    });
    return edited;
});
exports.default = {
    createApartment,
    getAllApartment,
    findApartmentById,
    deleteApartment,
    editApartment,
};
