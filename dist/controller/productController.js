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
exports.deleteProductById = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const joi_1 = require("../schema/joi");
const productService_1 = __importDefault(require("../services/productService"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productService_1.default.getAllProducts();
    if (!products) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    return res.status(200).json(products);
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield productService_1.default.findProductById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { value, error } = joi_1.ProductCreateSchema.unknown(true).validate(body, { convert: true });
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    try {
        const product = yield productService_1.default.createProduct(value);
        return res.status(201).json(product);
    }
    catch (error) {
        return res.status(400).json({
            message: "Fail to create product"
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const { value, error } = joi_1.ProductUpdateOneSchema.unknown(true).validate(body, { convert: true });
    console.log(value);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    try {
        const product = yield productService_1.default.updateProduct(id, value);
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        return res.status(400).json({
            message: "Fail to update product"
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if ((yield productService_1.default.findProductById(id)) === null) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        const product = yield productService_1.default.deleteProduct(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json(product);
    }
    catch (_a) {
        return res.status(400).json({
            message: "Fail to delete product"
        });
    }
});
exports.deleteProductById = deleteProductById;
