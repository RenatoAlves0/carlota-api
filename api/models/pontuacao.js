const mongoose = require('mongoose')

const pontuacao = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cuidador: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuidador', required: true },
    nota_quiz: { type: Number, required: true },
    nota_questionario: { type: Number, required: true },
})

module.exports = mongoose.model('Pontuacao', pontuacao)