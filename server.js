// server.js na RAIZ (Render procura aqui)
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Todo API - Deployed to Render! 🎉',
    status: 'online',
    version: '1.0.0',
    endpoints: ['/', '/health', '/tasks'],
    repository: 'https://github.com/willsmolarek/todo-api-junior',
    note: 'TypeScript source code in repository'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is running on Render',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;