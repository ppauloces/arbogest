'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Relatorios', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Usuarios', // Nome da tabela referenciada
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      programacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao_operacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cod_operacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quant_ajudantes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      quant_caminhoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      quant_maquinas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      talhao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hh: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      hm: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      cod_horas_paradas: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hh_parada: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      hm_parada: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      maquina: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ha_hm: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      observacoes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Relatorios');
  },
};
