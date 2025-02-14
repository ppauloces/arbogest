import express from 'express';
import { Sequelize } from 'sequelize';
import routes from './routes/index.js';
import { errorHandler, notFoundRequest } from './routes/errorHandler.js';
import cors from 'cors';

//Import database
import './database/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/',routes);
app.use(notFoundRequest);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
