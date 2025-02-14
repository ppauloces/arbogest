import express from "express";
import RelatoriosRouter from "./relatorios.js";
import UsuariosRouter from "./usuarios.js"
import ImplementosRouter from "./implementos.js"
import EquipesRouter from "./equipes.js"
import EstoquesRouter from "./estoques.js"

const routes = new express.Router();

routes.get("/", (req, res) => {
    res.send("API is running...");
});

routes.use('/relatorios', RelatoriosRouter);
routes.use('/usuarios', UsuariosRouter);
routes.use('/implementos', ImplementosRouter);
routes.use('/equipes', EquipesRouter);
routes.use('/estoques', EstoquesRouter);

export default routes;
