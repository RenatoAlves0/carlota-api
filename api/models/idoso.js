const mongoose = require('mongoose')

const idoso = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: { type: String, required: true },
    condicao_saude: { type: String, required: true },
    nascimento: { type: Date, required: true },
    sexo: { type: String, required: true },
    endereco: { type: String, required: true }
})

module.exports = mongoose.model('Idoso', idoso)