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
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    });
    return products;
});
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.findUnique({
        where: {
            id,
        }
    });
    return product;
});
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.create({
        data: Object.assign({}, data)
    });
    return product;
});
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.update({
        where: {
            id,
        },
        data: Object.assign({}, data)
    });
    return product;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.delete({
        where: {
            id,
        }
    });
    return product;
});
exports.default = {
    getAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
