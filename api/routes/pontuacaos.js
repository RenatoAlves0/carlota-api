const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Pontuacao = require('../models/pontuacao')

router.post('/', (req, res, next) => {
    const pontuacao = new Pontuacao({
        _id: new mongoose.Types.ObjectId(),
        cuidador: req.body.cuidador,
        nota_quiz: req.body.nota_quiz,
        nota_questionario: req.body.nota_questionario
    })

    pontuacao.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Pontuacao.find()
        .populate('cuidador')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:pontuacaoId', (req, res, next) => {
    Pontuacao.findById(req.params.pontuacaoId)
        .populate('cuidador')
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:pontuacaoId', (req, res, next) => {
    Pontuacao.update({ _id: req.params.pontuacaoId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:pontuacaoId', (req, res, next) => {
    Pontuacao.remove({ _id: req.params.pontuacaoId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router