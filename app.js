const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database'); // Caminho para o arquivo de configuração do banco de dados
const cupcakeRoutes = require('./src/routes/cupcakesRoute');
const orderRoutes = require('./src/routes/ordersRoute');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

connectDB();

app.use(bodyParser.json());

app.use('/api', cupcakeRoutes);
app.use('/api', orderRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
