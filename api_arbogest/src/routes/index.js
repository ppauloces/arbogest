const express = require('express');
const EquipesRouter = require('./equipes');
const RelatorioRouter = require('./relatorios');
const UsuariosRouter = require('./user');
const ImplementosRouter = require('./implementos');
const EstoqueRouter = require('./estoques');
const { login } = require('../controllers/authController');


const routes = new express.Router();

routes.get("/", (req, res) => {
    res.send("API is running...");
});
routes.post("/login", login);
routes.use('/equipes', EquipesRouter);
routes.use('/relatorios', RelatorioRouter);
routes.use('/usuarios', UsuariosRouter);
routes.use('/implementos', ImplementosRouter);
routes.use('/estoque', EstoqueRouter);

module.exports =  routes;