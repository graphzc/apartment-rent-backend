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
const getAllBills = () => __awaiter(void 0, void 0, void 0, function* () {
    const bills = yield prisma.customerOrder.findMany({
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
    return bills;
});
const findBillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const bill = yield prisma.customerOrder.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        }
    });
    return bill;
});
const createBill = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield prisma.invoice.create({
        data: {
            vatIncluded: data.invoice.vatIncluded,
        }
    });
    const customerOrder = yield prisma.customerOrder.create({
        data: {
            customerId: data.customerId,
            employeeId: data.employeeId,
            invoiceId: invoice.id,
        }
    });
    yield Promise.all(data.purchase.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        item.productId ? yield prisma.product.findUnique({
            where: {
                id: item.productId,
            }
        }) : null;
        item.poolId ? yield prisma.pool.findUnique({
            where: {
                id: item.poolId,
            }
        }) : null;
        const purchase = yield prisma.purchase.create({
            data: {
                customerOrderId: customerOrder.id,
                productId: item.productId,
                poolId: item.poolId,
                quantity: Number(item.quantity),
            }
        });
        return purchase;
    })));
    return yield findBillById(customerOrder.id);
});
const deleteBill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customerOrder = yield prisma.customerOrder.findUnique({
        where: {
            id,
        }
    });
    yield prisma.purchase.deleteMany({
        where: {
            customerOrderId: id,
        }
    });
    const deletedCustomerOrder = yield prisma.customerOrder.delete({
        where: {
            id,
        }
    });
    yield prisma.invoice.delete({
        where: {
            id: customerOrder === null || customerOrder === void 0 ? void 0 : customerOrder.invoiceId,
        }
    });
    return deletedCustomerOrder;
});
const issueReceipt = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customerOrder = yield prisma.customerOrder.update({
        where: {
            id,
        },
        data: {
            invoice: {
                update: {
                    paidAt: new Date(),
                }
            }
        },
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        }
    });
    return customerOrder;
});
exports.default = {
    getAllBills,
    findBillById,
    createBill,
    deleteBill,
    issueReceipt,
};
