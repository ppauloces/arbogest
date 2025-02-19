'use strict';
const { Model, DataTypes } = require('sequelize');  // Importação correta
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Relatorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Relatorio.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4, // Caso precise usar UUID v4
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    programacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao_operacao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cod_operacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quant_ajudantes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    quant_caminhoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    quant_maquinas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    talhao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hh: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    hm: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    cod_horas_paradas: {
      type: DataTypes.STRING,
    },
    hh_parada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    hm_parada: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    maquina: {
      type: DataTypes.STRING,
    },
    ha_hm: {
      type: DataTypes.STRING,
    },
    observacoes: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Relatorio',
  });

  return Relatorio;
};
