import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 400
  ) {
    super(message);
  }
}

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  // Erro do Prisma
  if (error.name === 'PrismaClientKnownRequestError') {
    return res.status(400).json({
      success: false,
      error: 'Database error'
    });
  }

  // Erro de validação do Zod
  if (error.name === 'ZodError') {
    return res.status(400).json({
      success: false,
      error: 'Validation error',
      details: JSON.parse(error.message)
    });
  }

  // Erro genérico
  return res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
};