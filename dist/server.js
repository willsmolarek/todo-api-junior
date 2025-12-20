// dist/server.js
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`?? Server running on port ${PORT}`);
  console.log(`?? Environment: ${process.env.NODE_ENV || "production"}`);
  console.log(`?? Health check: http://0.0.0.0:${PORT}/health`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
