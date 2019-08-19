const mongoose = require('mongoose')

const familiar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idoso: { type: mongoose.Schema.Types.ObjectId, ref: 'Idoso', required: true },
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    sexo: { type: String, required: true },
    nascimento: { type: Date, required: true }
})

module.exports = mongoose.model('Familiar', familiar)