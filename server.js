// API Todo - Versão mais simples possível
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API funciona!", status: "online" });
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", time: new Date().toISOString() });
});

app.listen(3000, () => {
    console.log("✅ Servidor rodando na porta 3000");
    console.log("🔗 http://localhost:3000");
});
