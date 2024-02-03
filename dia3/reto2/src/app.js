const express = require('express')
const cors = require ('cors')
const myBookRoutes = require ('./routers/book.routes')
const errorHandLing = require ('./error/errorHandling')
const book = require('./models/book')

const app = express();

app.set ('port',3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(myBookRoutes)
app.use(cors())



app.use(myBookRoutes)
module.exports = app;