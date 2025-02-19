const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

// Middleware para verificar se o token é válido
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // O token vem no header 'Authorization'

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica o token com a chave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Adapte de acordo com a chave secreta que você estiver usando
    req.user = decoded; // Armazena as informações do usuário no req
    next();
  } catch (err) {
    res.status(400).json({ error: 'Token inválido.' });
  }
};

module.exports = authenticateToken;
