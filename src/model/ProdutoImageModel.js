const connection = require("../config/connection.js");
const { DataTypes, Model } = require("sequelize");
const ProdutoModel = require("./ProdutoModel.js");

class ProdutoImageModel extends Model {};

ProdutoImageModel.init(
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
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0,
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "produtos_imagens",
    }
);

module.exports = ProdutoImageModel;