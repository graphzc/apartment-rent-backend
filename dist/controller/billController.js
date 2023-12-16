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
exports.issueReceipt = exports.deleteBillById = exports.createBill = exports.getBillById = exports.getAllBills = void 0;
const billService_1 = __importDefault(require("../services/billService"));
const joi_1 = require("../schema/joi");
const getAllBills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bills = yield billService_1.default.getAllBills();
    return res.status(200).json(bills);
});
exports.getAllBills = getAllBills;
const getBillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const bill = yield billService_1.default.findBillById(id);
        if (!bill) {
            return res.status(404).json({
                message: "Bill not found"
            });
        }
        return res.status(200).json(bill);
    }
    catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
});
exports.getBillById = getBillById;
const createBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { body } = req;
    const { value, error } = joi_1.CustomerOrderCreateSchema.unknown(true).validate(body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    try {
        const bill = yield billService_1.default.createBill(Object.assign(Object.assign({}, value), { invoice: { vatIncluded: (_a = value.invoice.vatIncluded) !== null && _a !== void 0 ? _a : false } }));
        return res.status(201).json(bill);
    }
    catch (error) {
        return res.status(400).json({
            message: "Fail to create bill"
        });
    }
});
exports.createBill = createBill;
const deleteBillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bill = yield billService_1.default.deleteBill(id);
    if (!bill) {
        return res.status(404).json({
            message: "Bill not found"
        });
    }
    return res.status(200).json(bill);
});
exports.deleteBillById = deleteBillById;
const issueReceipt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bill = yield billService_1.default.issueReceipt(id);
    if (!bill) {
        return res.status(404).json({
            message: "Bill not found"
        });
    }
    return res.status(200).json(bill);
});
exports.issueReceipt = issueReceipt;
