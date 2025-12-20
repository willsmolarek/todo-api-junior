"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = exports.TaskService = void 0;
const database_1 = __importDefault(require("../config/database"));
const error_middleware_1 = require("../middlewares/error.middleware");
class TaskService {
    async createTask(data) {
        try {
            const task = await database_1.default.task.create({
                data: {
                    title: data.title,
                    description: data.description,
                    priority: data.priority || 'MEDIUM',
                    status: 'PENDING',
                    dueDate: data.dueDate ? new Date(data.dueDate) : null,
                },
            });
            return task;
        }
        catch (error) {
            throw new error_middleware_1.AppError('Failed to create task', 500);
        }
    }
    async getAllTasks(status) {
        try {
            const where = status ? { status } : {};
            const tasks = await database_1.default.task.findMany({
                where,
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return tasks;
        }
        catch (error) {
            throw new error_middleware_1.AppError('Failed to fetch tasks', 500);
        }
    }
    async getTaskById(id) {
        try {
            const task = await database_1.default.task.findUnique({
                where: { id },
            });
            if (!task) {
                throw new error_middleware_1.AppError('Task not found', 404);
            }
            return task;
        }
        catch (error) {
            if (error instanceof error_middleware_1.AppError)
                throw error;
            throw new error_middleware_1.AppError('Failed to fetch task', 500);
        }
    }
    async updateTask(id, data) {
        try {
            await this.getTaskById(id);
            const task = await database_1.default.task.update({
                where: { id },
                data: {
                    title: data.title,
                    description: data.description,
                    status: data.status,
                    priority: data.priority,
                    dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
                },
            });
            return task;
        }
        catch (error) {
            if (error instanceof error_middleware_1.AppError)
                throw error;
            throw new error_middleware_1.AppError('Failed to update task', 500);
        }
    }
    async deleteTask(id) {
        try {
            await this.getTaskById(id);
            await database_1.default.task.delete({
                where: { id },
            });
            return { message: 'Task deleted successfully' };
        }
        catch (error) {
            if (error instanceof error_middleware_1.AppError)
                throw error;
            throw new error_middleware_1.AppError('Failed to delete task', 500);
        }
    }
}
exports.TaskService = TaskService;
exports.taskService = new TaskService();
