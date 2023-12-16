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
exports.deleteCustomerById = exports.updateCustomerById = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
const joi_1 = require("../schema/joi");
const customerService_1 = __importDefault(require("../services/customerService"));
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customerService_1.default.getAllCustomers();
    return res.status(200).json(customers);
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const customer = yield customerService_1.default.findCustomerById(id);
        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }
        return res.status(200).json(customer);
    }
    catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
});
exports.getCustomerById = getCustomerById;
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { value, error } = joi_1.CustomerCreateSchema.unknown(true).validate(body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    try {
        const customer = yield customerService_1.default.createCustomer(value);
        return res.status(201).json(customer);
    }
    catch (error) {
        return res.status(400).json({
            message: "Fail to create customer"
        });
    }
});
exports.createCustomer = createCustomer;
const updateCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const { value, error } = joi_1.CustomerCreateSchema.unknown(true).validate(body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    try {
        const customer = yield customerService_1.default.updateCustomer(id, value);
        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }
        return res.status(200).json(customer);
    }
    catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
});
exports.updateCustomerById = updateCustomerById;
const deleteCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if ((yield customerService_1.default.isCustomerExist(id)) === false) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }
    try {
        const customer = yield customerService_1.default.deleteCustomer(id);
        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }
        return res.status(200).json(customer);
    }
    catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
});
exports.deleteCustomerById = deleteCustomerById;
