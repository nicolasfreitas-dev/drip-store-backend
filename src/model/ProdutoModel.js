const connection = require("../config/connection.js");
const { DataTypes, Model } = require("sequelize");

class ProdutoModel extends Model {}

ProdutoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            values: [0, 1],
            defaultValue: 0,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            values: [0, 1],
            defaultValue: 0,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            values: [0, 1],
            defaultValue: 0,
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "produtos",
    }
);

module.exports = ProdutoModel;