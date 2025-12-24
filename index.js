// index.js - Ponto de entrada simples
console.log("Iniciando API Todo...");

try {
    // Tente carregar do src primeiro
    const app = require("./src/app.js");
    const server = require("./src/server.js");
    
    console.log("✅ Arquivos .js carregados do src/");
    
    // Se server.js exporta o servidor, use-o
    if (typeof server.listen === "function") {
        const PORT = process.env.PORT || 3000;
        server.listen(PORT, "0.0.0.0", () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
            console.log(`🔗 http://localhost:${PORT}`);
        });
    } else if (typeof app.listen === "function") {
        // Se app.js é o Express app
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
            console.log(`🔗 http://localhost:${PORT}`);
        });
    } else {
        console.log("❌ Nenhum servidor encontrado nos arquivos .js");
    }
} catch (error) {
    console.log("❌ Erro ao carregar arquivos .js:", error.message);
    console.log("Criando servidor básico...");
    
    // Criar servidor básico
    const express = require("express");
    const app = express();
    
    app.get("/", (req, res) => {
        res.json({ message: "API Todo", status: "online" });
    });
    
    app.get("/health", (req, res) => {
        res.json({ status: "OK" });
    });
    
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`✅ Servidor básico na porta ${PORT}`);
    });
}
