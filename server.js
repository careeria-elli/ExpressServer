//express.js palvelin//
const path = require('path')
const express = require('express')

const app = express()

const herkut = require('./herkut.json')

//GET All etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res)=> {
    res.json(herkut)
})

//tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})