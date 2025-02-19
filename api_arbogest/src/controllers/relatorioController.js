const {Relatorio} = require('../models');

const createRelatorio = async (req, res) => {
  try {
    const relatorio = await Relatorio.create(req.body);
    res.status(201).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllRelatorios = async (req, res) => {
  try {
    const relatorios = await Relatorio.findAll();
    res.status(200).json(relatorios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRelatorioById = async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    res.status(200).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRelatorio = async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    await relatorio.update(req.body);
    res.status(200).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRelatorio = async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
    await relatorio.destroy();
    res.status(200).json({ message: 'Relatório deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { 
  createRelatorio,
  getAllRelatorios,
  getRelatorioById,
  updateRelatorio,
  deleteRelatorio,
};
