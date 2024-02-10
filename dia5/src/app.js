const express = require('express')
const cors = require ('cors')
const myPokemonRoutes = require ('./routers/pokemon.routes')
const errorHandLing = require ('./error/errorHandling')
const pokemon = require('./models/pokemon')
const axios = require ('axios')
const fetch = require ('fetch')

const app = express();

app.set ('port',3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(myPokemonRoutes)
app.use(cors())
app.use(axios)




app.use(myPokemonRoutes)
module.exports = app;