const app = require('./app').default || require('./app');

// Render usa process.env.PORT, se não tiver, usa 3000
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Adicione uma rota raiz para evitar 404
app.get('/', (_req: any, res: any) => {
  res.json({
    message: 'Todo API - Gerenciamento de Tarefas',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      tasks: {
        list: 'GET /tasks',
        create: 'POST /tasks',
        get: 'GET /tasks/:id',
        update: 'PUT /tasks/:id',
        delete: 'DELETE /tasks/:id'
      }
    },
    documentation: 'Veja README.md no GitHub para detalhes',
    repository: 'https://github.com/willsmolarek/todo-api-junior',
    status: 'online'
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`?? Server running on port ${PORT}`);
  console.log(`?? Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`?? Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`?? API Root: http://0.0.0.0:${PORT}/`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = server;
