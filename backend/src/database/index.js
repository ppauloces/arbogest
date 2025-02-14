import Sequelize from "sequelize";
import databaseconfig from "./config/config.js";


const models = [Equipe];

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
