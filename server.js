//express.js palvelin//
const path = require('path')
const express = require('express')
const fs = require('fs').promises

const app = express()

const herkut = require('./herkut.json')

//GET All etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res)=> {
    res.json(herkut)
})

//pin koodin lukeminen txt tiedostosta palvelimelta ja lähettäminen selaimelle
app.get('/api/getpin', async (req,res)=> {
    try{
        const savedPin = await fs.readFile('./pin.txt', 'utf-8')
        res.send(savedPin)
    }catch(error){
        console.error('Error sending file', error)
        res.status(500).send('Internal Server Error')
    }
})

//tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})