import { Request, Response, NextFunction } from 'express';
export declare class TaskController {
    createTask(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllTasks(req: Request, res: Response, next: NextFunction): Promise<void>;
    getTaskById(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateTask(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteTask(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const taskController: TaskController;
