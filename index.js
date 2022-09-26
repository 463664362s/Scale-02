const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

let db = [
    { Codigo: 'COL',    Nome: 'COLOMBIA',        Fronteiras: 'BRA, ECU, PAN, PER, VEN'},
    { Codigo: 'BRA',    Nome: 'BRASIL',          Fronteiras: 'ARG, BOL, COL, GUF, GUY, PRY, PER, SUR, URY, VEN'},
    { Codigo: 'ECU',    Nome: 'EQUADOR',         Fronteiras: 'COL, PER'},
    { Codigo: 'PAN',    Nome: 'PANAMA',          Fronteiras: 'COL'},
    { Codigo: 'PER',    Nome: 'PERU',            Fronteiras: 'BOL, BRA, CHL, COL, ECU'},
    { Codigo: 'ARG',    Nome: 'ARGENTINA',       Fronteiras: 'ARG, BRA, CHL, PRY, PER'},
    { Codigo: 'BOL',    Nome: 'BOLIVIA',         Fronteiras: 'ARG, BRA, CHL, PRY, PER'},
    { Codigo: 'GUF',    Nome: 'GUIANA FRANCESA', Fronteiras: 'BRA, SUR, VEN'},
    { Codigo: 'PRY',    Nome: 'PARAGUAI',        Fronteiras: 'ARG, BOL, BRA'},
    { Codigo: 'SUR',    Nome: 'SURINAME',        Fronteiras: 'BRA, GUF, GUY'},
    { Codigo: 'URY',    Nome: 'URUGUAI',         Fronteiras: 'ARG, BRA'},
    { Codigo: 'CHL',    Nome: 'CHILE',           Fronteiras: 'ARG, BOL, PER'},
    { Codigo: 'VEN',    Nome: 'VENEZUELA',       Fronteiras: 'BRA, COL, GUF'},
    { Codigo: 'GUY',    Nome: 'Guiana',          Fronteiras: 'BRA, VEN, SUR,'}]


app.get('/', (req, res) => {
    return res.json(db)
})

app.listen(21262, () => {
    console.log(`API rodando na porta http://localhost:21262`)
})