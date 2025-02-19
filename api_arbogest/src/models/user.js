'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Defina associações aqui, se houver
    }

    static async comparePassword(password, hashedPassword) {
      return bcrypt.compare(password, hashedPassword);
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
      type: DataTypes.STRING,
      unique: true,  // Garantindo que o email seja único
      allowNull: false,  // O campo de email não pode ser nulo
      validate: {
        isEmail: true,  // Validando se o email tem formato correto
      }
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
    hooks: {
      // Antes de criar, fazer o hash da senha
      async beforeCreate(user) {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      // Antes de atualizar, fazer o hash da senha
      async beforeUpdate(user) {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      }
    }
  });

  return User;
};
