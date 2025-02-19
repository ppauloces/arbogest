import { Sequelize } from 'sequelize';
import databaseconfig from './config/config.js';
import Equipe from "./models/Equipe.js";
import Estoque from "./models/Estoque.js";
import Implemento from "./models/Implemento.js";
import Relatorio from "./models/Relatorios.js";
import Usuario from "./models/Usuario.js";  

const models = [Equipe, Estoque, Implemento, Relatorio, Usuario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // Inicialize o Sequelize com as configurações
        this.connection = new Sequelize(databaseconfig.development);
        
        this.connection.authenticate()
            .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
            .catch((error) => {
                console.error('Erro na conexão com o banco de dados:', error);
            });

        // Inicializando os modelos após a conexão
        models.forEach((model) => model.initModel(this.connection)); // Passando a conexão do Sequelize
    }
}

export default new Database();
