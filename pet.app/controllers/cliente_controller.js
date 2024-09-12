const Cliente = require('../models/cliente_model.js');

exports.createCliente = async (req, res) => {
try {
    const cliente = new Cliente(req, body);
    await cliente.save();
    res.status(201).json(cliente);
    } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o cliente' });
    }
};

exports.getCliente = async (req, res) => {
    try {
    const cliente = await Cliente.findById(req.params.id);
    res.estatus(200).json(cliente);
    } catch (error) {
    res.status(400).json({ error: 'Cliente não encontrado' });
    }
};

exports.updateCliente = async (req, res) => {
    try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(cliente);
    } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar o cliente' });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.status(204).json();
    } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar o cliente' });
    }
};