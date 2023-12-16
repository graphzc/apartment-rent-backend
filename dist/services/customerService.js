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
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma.customer.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    });
    return customers;
});
const findCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma.customer.findUnique({
        where: {
            id,
        },
    });
    return customer;
});
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma.customer.create({
        data: Object.assign({}, data),
    });
    return customer;
});
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma.customer.update({
        where: {
            id,
        },
        data: Object.assign({}, data),
    });
    return customer;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma.customer.delete({
        where: {
            id,
        },
    });
    return customer;
});
const isCustomerExist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield findCustomerById(id);
    return !!customer;
});
exports.default = {
    getAllCustomers,
    findCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    isCustomerExist
};
