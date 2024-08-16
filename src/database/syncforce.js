const connection = require("../config/connection.js");

require("../model/UsuarioModel.js");
require("../model/CategoriaModel.js");
require("../model/ProdutoModel.js");
require("../model/ProdutoImageModel.js");
require("../model/OpcaoProdutoModel.js");
require("../model/ProdutoCategoriaModel.js");

connection.sync({ alter: true });