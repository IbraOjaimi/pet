const mongoose = require('mongoose')

const mongoDB = async () => {
    try {
    await mongoose.connect('mongodb+srv://ibraojaimi:I125786bra@cluster0.fhhha.mongodb.net/pet.app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    } catch (error) {
        console.error('Erro ao se conectar ao MongoDB', error);
        process.exit(1);
    }    
};

module.exports = mongoDB;