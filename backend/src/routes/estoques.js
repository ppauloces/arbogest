import express from 'express';
import Estoque from './models/Estoque';

const router = express.Router();

// Criar um novo Estoque
router.post('/estoques', async (req, res) => {
  try {
    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter todos os Estoques
router.get('/estoques', async (req, res) => {
  try {
    const estoques = await Estoque.findAll();
    res.status(200).json(estoques);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter um Estoque por ID
router.get('/estoques/:id', async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    res.status(200).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar um Estoque
router.put('/estoques/:id', async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    await estoque.update(req.body);
    res.status(200).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar um Estoque
router.delete('/estoques/:id', async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    await estoque.destroy();
    res.status(200).json({ message: 'Estoque deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
