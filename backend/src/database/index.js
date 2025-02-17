import { Sequelize } from 'sequelize';
import databaseconfig from "./config/config.js";
import Equipe from "./models/Equipe.js";
import Estoque from "./models/Estoque.js";
import Implemento from "./models/Implemento.js";
import Relatorios from "./models/Relatorios.js";
import Usuario from "./models/Usuario.js";  

const models = [Equipe, Estoque, Implemento, Relatorios, Usuario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseconfig.development);
        models.forEach((model) => model.initModel(this.connection)); 
    }
}

export default new Database();
