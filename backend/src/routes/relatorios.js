import express from 'express';
import Relatorio from '../database/models/Relatorios.js';

const RelatoriosRouter = express.Router();

// Criar um novo Relatório
RelatoriosRouter.post('/relatorios', async (req, res) => {
  try {
    const relatorio = await Relatorio.create(req.body);
    res.status(201).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter todos os Relatórios
RelatoriosRouter.get('/relatorios', async (req, res) => {
  try {
    const relatorios = await Relatorio.findAll();
    res.status(200).json(relatorios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter um Relatório por ID
RelatoriosRouter.get('/relatorios/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    res.status(200).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar um Relatório
RelatoriosRouter.put('/relatorios/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    await relatorio.update(req.body);
    res.status(200).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar um Relatório
RelatoriosRouter.delete('/relatorios/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    await relatorio.destroy();
    res.status(200).json({ message: 'Relatório deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default RelatoriosRouter;
