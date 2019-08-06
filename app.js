const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const loginRoutes = require('./api/routes/logins')
const idosoRoutes = require('./api/routes/idosos')
const cuidadorRoutes = require('./api/routes/cuidadors')
const pontuacaoRoutes = require('./api/routes/pontuacaos')
const familiarRoutes = require('./api/routes/familiars')
const planoRoutes = require('./api/routes/plano_diarios')

mongoose.connect('mongodb+srv://carlota-api:' +
    process.env.MONGO_ATLAS_PW +
    '@carlota-api-kxoqd.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)
mongoose.Promise = global.Promise

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
})

//Rotas
app.use('/logins', loginRoutes)
app.use('/idosos', idosoRoutes)
app.use('/cuidadors', cuidadorRoutes)
app.use('/pontuacaos', pontuacaoRoutes)
app.use('/familiars', familiarRoutes)
app.use('/plano_diarios', planoRoutes)

app.use((req, res, next) => {
    const error = new Error("Não encontrato!")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app