const express = require('express');
const mongoDB = require('./db');
const PORT = 5000;

const cliente_router = require('./routers/cliente_router.js');
const pet_router = require('./routers/pet_router.js');
// const cep_endereco = require('./middlewares/cep_endereco.js');

const app = express();

mongoDB();

app.use(express.json());
// app.use(cep_endereco);
app.use('/api/cliente', cliente_router);
app.use('/api/pet', pet_router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});