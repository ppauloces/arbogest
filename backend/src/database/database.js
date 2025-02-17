const { Sequelize } = require("sequelize");
const config = require("../config/config.js"); // Certifique-se do caminho correto

const sequelize = new Sequelize(config.development);

module.exports = sequelize;
