import express from 'express';

// import createCoordinate from '../controllers/createCoordinateController.js';
// import indexCoordinate from '../controllers/indexCoordinateController.js';
// import distanceCoordinate from '../controllers/distanceCoordinateController.js';    

const coordinateRouter = express.Router();


coordinateRouter.get("/", async (req, res) =>
{   
    indexCoordinate(req, res);
});

coordinateRouter.post("/criar", async (req, res) =>
{
    createCoordinate(req.body, res);
});

coordinateRouter.post("/listar-proximos", async (req, res) =>
{
    
    distanceCoordinate(req.body, res);
});

export default coordinateRouter;