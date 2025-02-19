// controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Certifique-se de importar o modelo User corretamente

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Comparar a senha fornecida com a armazenada no banco de dados
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

module.exports = {
  login,
};
