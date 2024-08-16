const express = require("express");
const ProdutoController = require("../controllers/ProdutoController.js");

const RouteProdutos = express.Router();
const produtoController = new ProdutoController();

RouteProdutos.get("/produtos", produtoController.findAll);
RouteProdutos.get("/produto/:id", produtoController.findByPk);
RouteProdutos.post("/produtos", produtoController.create);
RouteProdutos.put("/produto/:id", produtoController.update);
RouteProdutos.delete("/produto/:id", produtoController.delete);

module.exports = RouteProdutos;