"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const task_dto_1 = require("../dtos/task.dto");
const router = (0, express_1.Router)();
// POST /tasks - Create a new task
router.post('/', (0, validation_middleware_1.validate)(task_dto_1.CreateTaskSchema), tasks_controller_1.taskController.createTask.bind(tasks_controller_1.taskController));
// GET /tasks - Get all tasks
router.get('/', tasks_controller_1.taskController.getAllTasks.bind(tasks_controller_1.taskController));
// GET /tasks/:id - Get task by ID
router.get('/:id', (0, validation_middleware_1.validate)(task_dto_1.TaskIdSchema), tasks_controller_1.taskController.getTaskById.bind(tasks_controller_1.taskController));
// PUT /tasks/:id - Update task
router.put('/:id', (0, validation_middleware_1.validate)(task_dto_1.UpdateTaskSchema), tasks_controller_1.taskController.updateTask.bind(tasks_controller_1.taskController));
// DELETE /tasks/:id - Delete task
router.delete('/:id', (0, validation_middleware_1.validate)(task_dto_1.TaskIdSchema), tasks_controller_1.taskController.deleteTask.bind(tasks_controller_1.taskController));
exports.default = router;
