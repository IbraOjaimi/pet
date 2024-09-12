const Pet = require('../models/pet_model.js');

exports.createPet = async (req, res) => {
    try {
        const pet = new Pet(req, body);
        await pet.save();
        res.status(201).json(pet);
        } catch (error) {
        res.status(400).json({ error: 'Erro ao criar o pet' });
        }
    };
    
    exports.getPet = async (req, res) => {
        try {
        const pet = await Pet.findById(req.params.id);
        res.estatus(200).json(pet);
        } catch (error) {
        res.status(400).json({ error: 'Pet não encontrado' });
        }
    };
    
    exports.updatePet = async (req, res) => {
        try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(pet);
        } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar o pet' });
        }
    };
    
    exports.deletePet = async (req, res) => {
        try {
        await Pet.findByIdAndDelete(req.params.id);
        res.status(204).json();
        } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar o pet' });
        }
    };