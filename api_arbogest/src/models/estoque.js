// models/estoque.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Estoque extends Model {
    static associate(models) {
      // Defina associações aqui, se necessário
    }
  }

  Estoque.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Outros campos aqui
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Estoque',
    }
  );

  return Estoque;
};
