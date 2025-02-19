import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Implemento extends Model {
  static associate(models) {
    
  }

  static initModel(sequelize) {
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
  }
}

export default Implemento; 
