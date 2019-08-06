const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Idoso = require('../models/idoso')

router.post('/', (req, res, next) => {
    const idoso = new Idoso({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        condicao_saude: req.body.condicao_saude,
        nascimento: req.body.nascimento,
        sexo: req.body.sexo,
        endereco: req.body.endereco
    })

    idoso.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Idoso.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:idosoId', (req, res, next) => {
    Idoso.findById(req.params.idosoId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:idosoId', (req, res, next) => {
    Idoso.update({ _id: req.params.idosoId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:idosoId', (req, res, next) => {
    Idoso.remove({ _id: req.params.idosoId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router