const express = require('express');
const implementoController = require('../controllers/implementoController.js');

const ImplementosRouter = express.Router();

ImplementosRouter.post('/', implementoController.createImplemento);
ImplementosRouter.get('/', implementoController.getAllImplementos);
ImplementosRouter.get('/:id', implementoController.getImplementoById);
ImplementosRouter.put('/:id', implementoController.updateImplemento);
ImplementosRouter.delete('/:id', implementoController.deleteImplemento);

module.exports = ImplementosRouter;
