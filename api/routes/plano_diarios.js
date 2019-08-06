const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Plano_diario = require('../models/plano_diario')

router.post('/', (req, res, next) => {
    const plano_diario = new Plano_diario({
        _id: new mongoose.Types.ObjectId(),
        data: req.body.data,
        hora: req.body.hora,
        tarefa: req.body.tarefa,
        status: req.body.status
    })

    plano_diario.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Plano_diario.find()
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:plano_diarioId', (req, res, next) => {
    Plano_diario.findById(req.params.plano_diarioId)
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:plano_diarioId', (req, res, next) => {
    Plano_diario.update({ _id: req.params.plano_diarioId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:plano_diarioId', (req, res, next) => {
    Plano_diario.remove({ _id: req.params.plano_diarioId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router