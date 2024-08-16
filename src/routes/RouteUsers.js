const express = require("express");
const UsuarioController = require("../controllers/UsuarioController.js");

const RouteUsers = express.Router();
const usuarioController = new UsuarioController();

RouteUsers.get("/usuarios", usuarioController.findAll);
RouteUsers.get("/usuario/:id", usuarioController.findByPk);
RouteUsers.post("/usuarios", usuarioController.create);
RouteUsers.put("/usuario/:id", usuarioController.update);
RouteUsers.delete("/usuario/:id", usuarioController.delete);

module.exports = RouteUsers;