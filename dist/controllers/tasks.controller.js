"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = exports.TaskController = void 0;
const tasks_service_1 = require("../services/tasks.service");
class TaskController {
    async createTask(req, res, next) {
        try {
            const task = await tasks_service_1.taskService.createTask(req.body);
            res.status(201).json({
                success: true,
                data: task,
                message: 'Task created successfully',
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAllTasks(req, res, next) {
        try {
            const { status } = req.query;
            const tasks = await tasks_service_1.taskService.getAllTasks(status);
            res.status(200).json({
                success: true,
                data: tasks,
                count: tasks.length,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTaskById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await tasks_service_1.taskService.getTaskById(id);
            res.status(200).json({
                success: true,
                data: task,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateTask(req, res, next) {
        try {
            const { id } = req.params;
            const task = await tasks_service_1.taskService.updateTask(id, req.body);
            res.status(200).json({
                success: true,
                data: task,
                message: 'Task updated successfully',
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteTask(req, res, next) {
        try {
            const { id } = req.params;
            const result = await tasks_service_1.taskService.deleteTask(id);
            res.status(200).json({
                success: true,
                ...result,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.TaskController = TaskController;
exports.taskController = new TaskController();
