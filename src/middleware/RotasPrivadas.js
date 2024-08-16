const express = require('express');
const RouteUsers = require("../routes/RouteUsers.js");
const RouteProdutos = require("../routes/RouteProdutos.js");
const RouteCategorias = require("../routes/RouteCategorias.js");
require('dotenv').config()

const RotasPrivadas = express.Router();

RotasPrivadas.use((req, res, next) => {
    // const token = req.headers.token;

    // try {
    //     jwt.verify(token, process.env.APP_KEY_TOKEN)
    // } catch(error) {
    //     return res.status(403).send("Não Autorizado!")
    // }

    next();
});

RotasPrivadas.use(RouteUsers);
RotasPrivadas.use(RouteProdutos);
RotasPrivadas.use(RouteCategorias);

module.exports = RotasPrivadas;