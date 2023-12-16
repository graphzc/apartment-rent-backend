"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_1 = __importDefault(require("./web"));
const api_1 = __importDefault(require("./v1/api"));
const admin_1 = __importDefault(require("./v1/admin"));
const setUpRouter = (app) => {
    app.use('/', (0, web_1.default)());
    app.use('/api/v1', (0, api_1.default)());
    app.use('/api/v1/admin', (0, admin_1.default)());
};
exports.default = setUpRouter;
