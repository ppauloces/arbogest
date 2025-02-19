'use strict';
const { Model, DataTypes } = require('sequelize');  // Importação correta
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Defina associações aqui, se houver
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    equipe: {
      type: DataTypes.STRING,
    },
    nivel_acesso: {
      type: DataTypes.ENUM('usuario', 'admin'),
      defaultValue: 'usuario',
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
