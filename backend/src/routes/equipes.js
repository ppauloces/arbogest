import express from 'express';
import Equipe from './models/Equipe';

const EquipesRouter = express.Router();

// Criar uma nova Equipe
EquipesRouter.post('/equipes', async (req, res) => {
  try {
    const equipe = await Equipe.create(req.body);
    res.status(201).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter todas as Equipes
EquipesRouter.get('/equipes', async (req, res) => {
  try {
    const equipes = await Equipe.findAll();
    res.status(200).json(equipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter uma Equipe por ID
EquipesRouter.get('/equipes/:id', async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    res.status(200).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar uma Equipe
EquipesRouter.put('/equipes/:id', async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    await equipe.update(req.body);
    res.status(200).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar uma Equipe
EquipesRouter.delete('/equipes/:id', async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    await equipe.destroy();
    res.status(200).json({ message: 'Equipe deletada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default EquipesRouter;
