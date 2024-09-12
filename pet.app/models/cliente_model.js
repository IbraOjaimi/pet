const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    numero_casa: { type: String, required: true },
    telefones: [String],
  });
  
  const Cliente = mongoose.model('Cliente', ClienteSchema);
  module.exports = Cliente;