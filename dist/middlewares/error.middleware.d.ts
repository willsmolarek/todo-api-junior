export declare class AppError extends Error {
    message: string;
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare const errorHandler: (error: Error, req: Request, res: Response, _next: NextFunction) => any;
