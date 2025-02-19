const { User } = require('../models');

const createUser = async (data) => {
  try {
    // Criação do usuário no banco de dados
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

module.exports = {
  createUser,
};
