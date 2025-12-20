import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.routes';
import { errorHandler } from './middlewares/error.middleware';
import { Logger } from './utils/logger';
import cors from 'cors';

dotenv.config();

const app = express();

// CORS para produção
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://todo-api-junior.onrender.com', 'https://seu-usuario.github.io']
    : 'http://localhost:3000',
  credentials: true
}));

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, _res, next) => {
  Logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/tasks', taskRoutes);

// Health check
app.get('/health', (_req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Todo API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handler
app.use(errorHandler);

export default app;
