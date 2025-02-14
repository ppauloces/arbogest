import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Implemento from './Implemento'; 

class Estoque extends Model {
  static associate(models) {
    
  }

  static initModel(sequelize) {
    Estoque.init(
    {
        id: {
            type: DataTypes.UUID, 
            defaultValue: uuidv4,  
            primaryKey: true,     
        },
        implemento_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Implemento,
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        quantidade_kg: 
        {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
              min: 0, // Garante que a quantidade não seja negativa
         },
        }
    },
    {
        sequelize,
        modelName: 'Estoque',
    }
    );
  }
}

export default Estoque; 
