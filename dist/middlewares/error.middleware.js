"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const errorHandler = (error, req, res, _next) => {
    console.error('Error:', {
        message: error.message,
        stack: error.stack,
        path: req.path,
        method: req.method
    });
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            success: false,
            error: error.message
        });
    }
    if (error.name === 'PrismaClientKnownRequestError') {
        return res.status(400).json({
            success: false,
            error: 'Database error'
        });
    }
    if (error.name === 'ZodError') {
        return res.status(400).json({
            success: false,
            error: 'Validation error',
            details: JSON.parse(error.message)
        });
    }
    return res.status(500).json({
        success: false,
        error: 'Internal server error'
    });
};
exports.errorHandler = errorHandler;
