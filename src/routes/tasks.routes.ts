import { Router } from 'express';
import { taskController } from '../controllers/tasks.controller';
import { validate } from '../middlewares/validation.middleware';
import { CreateTaskSchema, UpdateTaskSchema, TaskIdSchema } from '../dtos/task.dto';

const router = Router();

// POST /tasks - Create a new task
router.post('/', validate(CreateTaskSchema), taskController.createTask.bind(taskController));

// GET /tasks - Get all tasks
router.get('/', taskController.getAllTasks.bind(taskController));

// GET /tasks/:id - Get task by ID
router.get('/:id', validate(TaskIdSchema), taskController.getTaskById.bind(taskController));

// PUT /tasks/:id - Update task
router.put('/:id', validate(UpdateTaskSchema), taskController.updateTask.bind(taskController));

// DELETE /tasks/:id - Delete task
router.delete('/:id', validate(TaskIdSchema), taskController.deleteTask.bind(taskController));

export default router;
