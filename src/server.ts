// src/server.ts - VERSÃO CORRETA PARA DEPLOY
import app from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Rota raiz já está no app.ts, não precisa adicionar aqui novamente

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://0.0.0.0:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default server;