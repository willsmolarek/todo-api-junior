import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/tasks.routes';
import { errorHandler } from './middlewares/error.middleware';
// Remova o import do Logger se estiver causando problemas
// import { Logger } from './utils/logger';