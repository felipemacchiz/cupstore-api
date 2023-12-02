const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database'); // Caminho para o arquivo de configuração do banco de dados
const cupcakeRoutes = require('./src/routes/cupcakesRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
connectDB();

// Configurar o Body Parser para lidar com dados JSON
app.use(bodyParser.json());

// Resto do seu código...
app.use('/api', cupcakeRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
