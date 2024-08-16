const connection = require("../config/connection.js");
const { DataTypes, Model } = require("sequelize");
const ProdutoModel = require("./ProdutoModel.js");

class OpcaoProdutoModel extends Model {};

OpcaoProdutoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: ProdutoModel,
                key: "id"
            },
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        shape: {
            type: DataTypes.ENUM,
            values: ["circle", "square"],
            defaultValue: "square",
            allowNull: true
        },
        radius: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM,
            values: ["text", "color"],
            defaultValue: "text",
            allowNull: true
        },
        values: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "opcao_produtos",
    }
);

module.exports = OpcaoProdutoModel;