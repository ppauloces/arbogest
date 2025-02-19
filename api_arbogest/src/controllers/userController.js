const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    // Hashing da senha antes de criar o usuário
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Criar o usuário com a senha hashada
    const user = await User.create({
      ...req.body, // Outros dados do usuário
      password: hashedPassword, // Substituindo a senha pela senha hashada
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    // Se a senha for fornecida no corpo da requisição, faça o hashing dela
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword; // Substituindo a senha fornecida pela senha hashada
    }

    // Atualizar o usuário com os novos dados
    await user.update(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    await user.destroy();
    res.status(200).json({ message: 'Usuário deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
