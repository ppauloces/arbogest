const {Estoque} = require('../models');

const createEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEstoques = async (req, res) => {
  try {
    const estoques = await Estoque.findAll();
    res.status(200).json(estoques);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEstoqueById = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    res.status(200).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    await estoque.update(req.body);
    res.status(200).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
    await estoque.destroy();
    res.status(200).json({ message: 'Estoque deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEstoque,
  getAllEstoques,
  getEstoqueById,
  updateEstoque,
  deleteEstoque,
};
