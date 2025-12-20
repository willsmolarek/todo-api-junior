"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const logger_1 = require("./utils/logger");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, _res, next) => {
    logger_1.Logger.info(`${req.method} ${req.path}`);
    next();
});
app.use('/tasks', tasks_routes_1.default);
app.get('/health', (_req, res) => {
    res.json({
        status: 'OK',
        message: 'Todo API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});
app.use(error_middleware_1.errorHandler);
exports.default = app;
