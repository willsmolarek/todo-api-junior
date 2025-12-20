import { Request, Response, NextFunction } from 'express';
import { taskService } from '../services/tasks.service';

export class TaskController {
  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await taskService.createTask(req.body);
      res.status(201).json({
        success: true,
        data: task,
        message: 'Task created successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { status } = req.query;
      const tasks = await taskService.getAllTasks(status as any);
      res.status(200).json({
        success: true,
        data: tasks,
        count: tasks.length,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task = await taskService.getTaskById(id);
      res.status(200).json({
        success: true,
        data: task,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task = await taskService.updateTask(id, req.body);
      res.status(200).json({
        success: true,
        data: task,
        message: 'Task updated successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await taskService.deleteTask(id);
      res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const taskController = new TaskController();
