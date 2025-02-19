import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Equipe extends Model {
  static associate(models) {
    
  }

  static initModel(sequelize) {
    Equipe.init(
      {
        id: {
          type: DataTypes.UUID, 
          defaultValue: uuidv4,  
          primaryKey: true,      
        },
        title: DataTypes.STRING,
        responsavel: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Equipe',
      }
    );
  }
}

export default Equipe; 
