const express = require("express");
const RotasPrivadas = require("./middleware/RotasPrivadas.js");

const port = 3000;
const host = "localhost";

const app = express();
app.use(express.json());

app.use(RotasPrivadas);

app.get("/", (req, res) => {
    res.send("<h1>Projeto Final BackendGT</h1>");
})

app.listen(port, host, () => {
    console.log(`Servidor rodando na URL: http://${host}:${port}`)
});