const mongoose = require('mongoose')

const plano_diario = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idoso: { type: mongoose.Schema.Types.ObjectId, ref: 'Idoso', required: true },
    data: { type: Date, required: true },
    hora: { type: Date, required: true },
    tarefa: { type: String, required: true },
    status: { type: String, required: true }
})

module.exports = mongoose.model('Plano_diario', plano_diario)