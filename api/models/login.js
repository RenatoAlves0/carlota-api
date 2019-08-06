const mongoose = require('mongoose')

const login = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: { type: String, required: true },
    senha: { type: String, required: true }
})

module.exports = mongoose.model('Login', login)