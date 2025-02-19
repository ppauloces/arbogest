import express from 'express';
import Usuario from '../database/models/Usuario.js';

const UsuariosRouter = express.Router();

// Criar um novo Usuário
UsuariosRouter.post('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter todos os Usuários
UsuariosRouter.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter um Usuário por ID
UsuariosRouter.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar um Usuário
UsuariosRouter.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    await usuario.update(req.body);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar um Usuário
UsuariosRouter.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    await usuario.destroy();
    res.status(200).json({ message: 'Usuário deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default UsuariosRouter;
