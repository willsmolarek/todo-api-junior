// dist/app.js - Versão simplificada para deploy
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas mockadas para deploy
app.get('/', (req, res) => {
  res.json({
    message: 'Todo API - Gerenciamento de Tarefas',
    status: 'online',
    version: '1.0.0',
    endpoints: ['/health', '/tasks'],
    repository: 'https://github.com/willsmolarek/todo-api-junior'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/tasks', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'example-1',
        title: 'Example Task 1',
        status: 'COMPLETED',
        priority: 'HIGH'
      },
      {
        id: 'example-2',
        title: 'Example Task 2',
        status: 'PENDING',
        priority: 'MEDIUM'
      }
    ],
    count: 2,
    note: 'Full CRUD implementation available in repository'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    availableRoutes: ['/', '/health', '/tasks']
  });
});

module.exports = app;
