const express = require('express')
const cors = require ('cors')
const myBooksRoutes = require ('./routers/books.routes')
const errorHandLing = require ('./error/errorHandling')
const books = require('./models/books')

const app = express();

app.set ('port',3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(myBooksRoutes)
app.use(cors())



app.use(myBooksRoutes)
module.exports = app;