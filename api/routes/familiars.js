const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Familiar = require('../models/familiar')

router.post('/', (req, res, next) => {
    const familiar = new Familiar({
        _id: new mongoose.Types.ObjectId(),
        idoso: req.body.idoso,
        nome: req.body.nome,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        nascimento: req.body.nascimento
    })

    familiar.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Familiar.find()
        .populate('idoso')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:familiarId', (req, res, next) => {
    Familiar.findById(req.params.familiarId)
        .populate('idoso')
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:familiarId', (req, res, next) => {
    Familiar.update({ _id: req.params.familiarId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:familiarId', (req, res, next) => {
    Familiar.remove({ _id: req.params.familiarId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router