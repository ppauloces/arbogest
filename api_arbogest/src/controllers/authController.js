import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './models'; // Assumindo que você tem um modelo de usuário

const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar se o email existe no banco de dados
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Comparar a senha fornecida com a senha armazenada (hashed)
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Gerar o token JWT se a senha estiver correta
        const token = jwt.sign(
            { id: user.id, email: user.email },
            'seu-segredo', // Substitua com uma chave secreta segura
            { expiresIn: '8h' }
        );

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

export default loginController;
