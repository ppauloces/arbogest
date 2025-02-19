import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Usuario from './Usuario.js'; 

class Relatorio extends Model {
  static associate(models) {
    Relatorio.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario',
    });
  }

  static initModel(sequelize) {
    Relatorio.init(
    {
        id: {
            type: DataTypes.UUID, 
            defaultValue: uuidv4,  
            primaryKey: true,     
        },
        usuario_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Usuario,
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
            allowNull: true,
        },
        hh_parada: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        hm_parada: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        maquina: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ha_hm: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observacoes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Relatorio',
    }
    );
  }
}

export default Relatorio; 
