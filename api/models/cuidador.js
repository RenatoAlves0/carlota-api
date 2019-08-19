const mongoose = require('mongoose')

const cuidador = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idoso: { type: mongoose.Schema.Types.ObjectId, ref: 'Idoso', required: true },
    cpf: { type: String, required: true },
    escolaridade: { type: String, required: true },
    endereco: { type: String, required: true },
    sexo: { type: String, required: true },
    nascimento: { type: Date, required: true },
    nome: { type: String, required: true }
})

module.exports = mongoose.model('Cuidador', cuidador)