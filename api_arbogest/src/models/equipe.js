'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Equipe extends Model {
    static associate(models) {
      // Defina associações, se necessário
    }
  }

  Equipe.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    sequelize,
    modelName: 'Equipe',  // Certifique-se de que o nome do modelo seja 'Equipe'
  });

  return Equipe;
};
