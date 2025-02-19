const express = require('express');
const estoqueController = require ('../controllers/estoqueController.js');

const EstoquesRouter = express.Router();

EstoquesRouter.post('/', estoqueController.createEstoque);
EstoquesRouter.get('/', estoqueController.getAllEstoques);
EstoquesRouter.get('/:id', estoqueController.getEstoqueById);
EstoquesRouter.put('/:id', estoqueController.updateEstoque);
EstoquesRouter.delete('/:id', estoqueController.deleteEstoque);

module.exports = EstoquesRouter;
