const connection = require("../config/connection.js");
const { DataTypes, Model } = require("sequelize");

class CategoriaModel extends Model {};

CategoriaModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
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
            defaultValue: 0,
        },
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "categorias",
    }
);

module.exports = CategoriaModel;