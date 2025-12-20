"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = parseInt(process.env.PORT || '3000', 10);
app_1.default.get('/', (_req, res) => {
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
        repository: 'https://github.com/seu-usuario/todo-api-junior',
        status: 'online'
    });
});
const server = app_1.default.listen(PORT, '0.0.0.0', () => {
    console.log(`?? Server running on port ${PORT}`);
    console.log(`?? Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`?? Health check: http://0.0.0.0:${PORT}/health`);
    console.log(`?? API Root: http://0.0.0.0:${PORT}/`);
});
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
exports.default = server;
