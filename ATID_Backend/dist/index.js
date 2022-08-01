"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const atidRoutes_1 = __importDefault(require("./routes/atidRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/attendanceID', atidRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
// Mongo connection
mongoose_1.default.connect('mongodb://localhost:27017/ATID', (err) => {
    if (err)
        throw err;
    console.log('Base de Datos en Linea');
});
