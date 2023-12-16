import { Express } from "express";
import webRouter from "./web";
import apiRouter from "./v1/api";
import adminRouter from "./v1/admin";

const setUpRouter = (app: Express) => {
    app.use('/', webRouter());
    app.use('/api/v1', apiRouter());
    app.use('/api/v1/admin', adminRouter());
}

export default setUpRouter