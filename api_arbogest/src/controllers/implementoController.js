const {Implemento} = require('../models'); // ou '../database/models/Implemento.js'

const createImplemento = async (req, res) => {
  try {
    const implemento = await Implemento.create(req.body);
    res.status(201).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllImplementos = async (req, res) => {
  try {
    const implementos = await Implemento.findAll();
    res.status(200).json(implementos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getImplementoById = async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    res.status(200).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateImplemento = async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    await implemento.update(req.body);
    res.status(200).json(implemento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteImplemento = async (req, res) => {
  try {
    const implemento = await Implemento.findByPk(req.params.id);
    if (!implemento) return res.status(404).json({ message: 'Implemento não encontrado' });
    await implemento.destroy();
    res.status(200).json({ message: 'Implemento deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createImplemento,
  getAllImplementos,
  getImplementoById,
  updateImplemento,
  deleteImplemento,
};
