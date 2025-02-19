const {Equipe} = require('../models');

const createEquipe = async (req, res) => {
  try {
    const equipe = await Equipe.create(req.body);
    res.status(201).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEquipes = async (req, res) => {
  try {
    const equipes = await Equipe.findAll();
    res.status(200).json(equipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEquipeById = async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    res.status(200).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEquipe = async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    await equipe.update(req.body);
    res.status(200).json(equipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEquipe = async (req, res) => {
  try {
    const equipe = await Equipe.findByPk(req.params.id);
    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada' });
    await equipe.destroy();
    res.status(200).json({ message: 'Equipe deletada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEquipe,
  getAllEquipes,
  getEquipeById,
  updateEquipe,
  deleteEquipe,
};
