const connection = require("../config/connection.js");
const { DataTypes, Model } = require("sequelize");
const ProdutoModel = require("../model/ProdutoModel.js");
const CategoriaModel = require("../model/CategoriaModel.js");

class ProdutoCategoriaModel extends Model {};

ProdutoCategoriaModel.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: ProdutoModel,
                key: "id"
            },
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: CategoriaModel,
                key: "id"
            },
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "produtos_categorias",
    }
);

module.exports = ProdutoCategoriaModel;