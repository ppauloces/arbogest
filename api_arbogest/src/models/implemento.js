'use strict';
const { Model, DataTypes } = require('sequelize');  // Importação correta
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Implemento extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  
  Implemento.init(
    {
      id: {
        type: DataTypes.UUID, 
        defaultValue: uuidv4,  
        primaryKey: true,      
      },
      title: DataTypes.STRING,
      categoria: DataTypes.STRING,
    }, 
    {
      sequelize,
      modelName: 'Implemento',
    }
  );

  return Implemento;
};
