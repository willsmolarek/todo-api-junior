const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const taskRoutes = require('./routes/tasks.routes').default;
const { errorHandler } = require('./middlewares/error.middleware');
const { Logger } = require('./utils/logger');

dotenv.config();

const app = express();

// CORS para produção
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://todo-api-junior.onrender.com', 'https://willsmolarek.github.io']
    : 'http://localhost:3000',
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req: any, _res: any, next: any) => {
  Logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/tasks', taskRoutes);

// Health check
app.get('/health', (_req: any, res: any) => {
  res.json({ 
    status: 'OK', 
    message: 'Todo API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// 404 handler
app.use('*', (req: any, res: any) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handler
app.use(errorHandler);

module.exports = app;
