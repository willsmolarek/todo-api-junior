import prisma from '../config/database';
import { CreateTaskInput, UpdateTaskInput, TaskStatus } from '../models/task.model';
import { AppError } from '../middlewares/error.middleware';

export class TaskService {
  async createTask(data: CreateTaskInput) {
    try {
      const task = await prisma.task.create({
        data: {
          title: data.title,
          description: data.description,
          priority: data.priority || 'MEDIUM',
          status: 'PENDING',
          dueDate: data.dueDate ? new Date(data.dueDate) : null,
        },
      });
      return task;
    } catch (error) {
      throw new AppError('Failed to create task', 500);
    }
  }

  async getAllTasks(status?: TaskStatus) {
    try {
      const where = status ? { status } : {};
      const tasks = await prisma.task.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
      });
      return tasks;
    } catch (error) {
      throw new AppError('Failed to fetch tasks', 500);
    }
  }

  async getTaskById(id: string) {
    try {
      const task = await prisma.task.findUnique({
        where: { id },
      });

      if (!task) {
        throw new AppError('Task not found', 404);
      }

      return task;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Failed to fetch task', 500);
    }
  }

  async updateTask(id: string, data: UpdateTaskInput) {
    try {
      // Verifica se a tarefa existe
      await this.getTaskById(id);

      const task = await prisma.task.update({
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
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Failed to update task', 500);
    }
  }

  async deleteTask(id: string) {
    try {
      // Verifica se a tarefa existe
      await this.getTaskById(id);

      await prisma.task.delete({
        where: { id },
      });

      return { message: 'Task deleted successfully' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Failed to delete task', 500);
    }
  }
}

export const taskService = new TaskService();
