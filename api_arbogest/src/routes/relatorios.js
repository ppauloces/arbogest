const express = require('express');
const relatorioController = require('../controllers/relatorioController.js');

const RelatoriosRouter = express.Router();

RelatoriosRouter.post('/', relatorioController.createRelatorio);
RelatoriosRouter.get('/', relatorioController.getAllRelatorios);
RelatoriosRouter.get('/:id', relatorioController.getRelatorioById);
RelatoriosRouter.put('/:id', relatorioController.updateRelatorio);
RelatoriosRouter.delete('/:id', relatorioController.deleteRelatorio);

module.exports = RelatoriosRouter;
