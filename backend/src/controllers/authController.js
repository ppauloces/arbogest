import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../database/models/Usuario.js';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await Usuario.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { id: user.id, nivel_acesso: user.nivel_acesso },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
