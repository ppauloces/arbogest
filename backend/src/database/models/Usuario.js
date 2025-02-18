import { Model, DataTypes } from 'sequelize';

class Usuario extends Model {
    static associate(models) {
        // Aqui você pode definir as associações, se houver
    }

    static initModel(sequelize) {
        Usuario.init(
            {
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
                    defaultValue: 'usuario',
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
                }
            },
            {
                sequelize,  
                modelName: 'Usuario',
            }
        );
    }
}

export default Usuario;
