const { Equipe } = require('../models');

const createEquipe = async (data) => {
  try {
    // Criação da equipe no banco de dados
    const equipe = await Equipe.create(data);
    return equipe;
  } catch (error) {
    throw new Error('Erro ao criar equipe: ' + error.message);
  }
};

module.exports = {
  createEquipe,
};
