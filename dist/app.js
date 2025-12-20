// dist/app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.json({
    message: "Todo API - Online!",
    status: "online",
    version: "1.0.0",
    endpoints: {
      root: "GET /",
      health: "GET /health",
      tasks: "GET /tasks",
      createTask: "POST /tasks",
      getTask: "GET /tasks/:id",
      updateTask: "PUT /tasks/:id",
      deleteTask: "DELETE /tasks/:id"
    },
    repository: "https://github.com/willsmolarek/todo-api-junior",
    note: "Full TypeScript source code available in repository"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Todo API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "production"
  });
});

// Mock tasks endpoint
app.get("/tasks", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: "example-1",
        title: "Deploy API Successfully",
        description: "API deployed to Render.com",
        status: "COMPLETED",
        priority: "HIGH",
        createdAt: new Date().toISOString()
      },
      {
        id: "example-2",
        title: "Add Project to Portfolio",
        description: "Showcase this project to recruiters",
        status: "PENDING",
        priority: "MEDIUM",
        createdAt: new Date().toISOString()
      }
    ],
    count: 2,
    message: "Mock data - Full CRUD implementation in GitHub repository"
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    availableRoutes: ["/", "/health", "/tasks"]
  });
});

module.exports = app;
