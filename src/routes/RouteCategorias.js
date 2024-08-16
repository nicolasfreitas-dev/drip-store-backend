const express = require("express");
const CategoriaController = require("../controllers/CategoriaController.js");

const RouteCategorias = express.Router();
const categoriaController = new CategoriaController();

RouteCategorias.get("/categorias", categoriaController.findAll);
RouteCategorias.get("/categoria/:id", categoriaController.findByPk);
RouteCategorias.post("/categorias", categoriaController.create);
RouteCategorias.put("/categoria/:id", categoriaController.update);
RouteCategorias.delete("/categoria/:id", categoriaController.delete);

module.exports = RouteCategorias;