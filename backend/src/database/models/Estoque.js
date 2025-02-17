import { Model, DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import Implemento from "./Implemento.js"; 

class Estoque extends Model {
  static associate(models) {
    Estoque.belongsTo(models.Implemento, {
      foreignKey: "implemento_id",
      as: "implemento",
    });
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
            model: "Implementos", // Deve ser o nome da tabela, não a classe diretamente
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        quantidade_kg: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            min: 0,
          },
        },
      },
      {
        sequelize,
        modelName: "Estoque",
        tableName: "estoques",
      }
    );
  }
}

export default Estoque;
