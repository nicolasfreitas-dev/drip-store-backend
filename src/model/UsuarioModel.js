const connection = require("../config/connection.js");
const { DataTypes, Model, Sequelize } = require("sequelize");

class UsuarioModel extends Model {}

UsuarioModel.init(
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
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        timestamps: true,
        tableName: "usuarios",
    }
);

module.exports = UsuarioModel;
