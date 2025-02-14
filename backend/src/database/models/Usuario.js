import { DataTypes } from 'sequelize';
import sequelize from '../database'; // Ajuste o caminho conforme sua estrutura

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel_acesso: {
        type: DataTypes.ENUM('usuario', 'admin'),
        allowNull: false,
        defaultValue: 'Usuário',
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, // Validação para CPF formatado
        },
    },
    tokken_recPassword: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
},
{
  timestamps: true,
  tableName: 'Usuario',
});

export default Usuario;
