import express from 'express';
import Implemento from '../database/models/Implemento.js';

const ImplementosRouter = express.Router();

// Criar um novo Implemento
ImplementosRouter.post('/implementos', async (req, res) => {
  try {
    const implemento = await Implemento.create(req.body);
    res.status(201).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter todos os Implementos
ImplementosRouter.get('/implementos', async (req, res) => {
  try {
    const implementos = await Implemento.findAll();
    res.status(200).json(implementos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter um Implemento por ID
ImplementosRouter.get('/implementos/:id', async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    res.status(200).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar um Implemento
ImplementosRouter.put('/implementos/:id', async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    await implemento.update(req.body);
    res.status(200).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar um Implemento
ImplementosRouter.delete('/implementos/:id', async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    await implemento.destroy();
    res.status(200).json({ message: 'Implemento deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default ImplementosRouter;
