const express = require('express');
const app = express();
const db = require('./models'); // Aqui, estamos importando o objeto db
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

// Alterar para usar db.sequelize.sync()
db.sequelize.sync() 
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco:', err);
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
