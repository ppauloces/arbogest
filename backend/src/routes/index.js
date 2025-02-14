import express from "express";
import coordinateRouter from "./coordinates.js";

const routes = new express.Router();

routes.get("/", (req, res) => {
    res.send("API is running...");
});

routes.use('/coordenadas', coordinateRouter);

export default routes;
