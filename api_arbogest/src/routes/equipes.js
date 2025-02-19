const express = require("express");
const CreateEquipeController = require('../controllers/equipeController.js');

const EquipesRouter = express.Router();

// Obter todas as Equipes
EquipesRouter.get('/', CreateEquipeController.getAllEquipes);

// Criar uma nova Equipe
EquipesRouter.post('/', CreateEquipeController.createEquipe);

// Obter uma Equipe por ID
EquipesRouter.get('/:id', CreateEquipeController.getEquipeById);

// Atualizar uma Equipe
EquipesRouter.put('/:id', CreateEquipeController.updateEquipe);

// Deletar uma Equipe
EquipesRouter.delete('/:id', CreateEquipeController.deleteEquipe);

module.exports = EquipesRouter;
