import { CreateTaskInput, UpdateTaskInput, TaskStatus } from '../models/task.model';
export declare class TaskService {
    createTask(data: CreateTaskInput): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllTasks(status?: TaskStatus): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getTaskById(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateTask(id: string, data: UpdateTaskInput): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteTask(id: string): Promise<{
        message: string;
    }>;
}
export declare const taskService: TaskService;
