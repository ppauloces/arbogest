const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');  // Caminho para seu arquivo de configuração do Sequelize

const sequelize = new Sequelize(config);
const db = {};

// Carregar todos os modelos da pasta models
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')  // Ignorar o arquivo index.js
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes); // Importando o modelo
    db[model.name] = model;  // Adicionando o modelo ao objeto db
  });

// Definindo as associações, se existirem
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;  // Expondo todos os modelos
