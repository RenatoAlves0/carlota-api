const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Cuidador = require('../models/cuidador')

router.post('/', (req, res, next) => {
    const cuidador = new Cuidador({
        _id: new mongoose.Types.ObjectId(),
        idoso: req.body.idoso,
        cpf: req.body.cpf,
        escolaridade: req.body.escolaridade,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        nascimento: req.body.nascimento,
        nome: req.body.nome
    })

    cuidador.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Cuidador.find()
        .populate('idoso')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:cuidadorId', (req, res, next) => {
    Cuidador.findById(req.params.cuidadorId)
        .populate('idoso')
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:cuidadorId', (req, res, next) => {
    Cuidador.update({ _id: req.params.cuidadorId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:cuidadorId', (req, res, next) => {
    Cuidador.remove({ _id: req.params.cuidadorId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router