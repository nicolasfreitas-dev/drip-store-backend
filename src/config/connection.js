const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: "mysql",
    database: "backendgt",
    host: "localhost",
    username: "root",
    password: "nf6199",
    port: 3306
});

module.exports = connection;