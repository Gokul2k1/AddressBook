const express = require('express')
const { route } = require('./route/appRoute')
require('dotenv').config
const connectDB = require('./db')
const cors = require('cors')

const app = express()// express instance

const PORT = process.env.PORT || 5000; 

//config setup for view engin
app.set('view engine', 'ejs')
app.set('views', './view')

//static directory
app.use(express.static ('/'))

// middle ware
app.use(express.urlencoded({extended: true})) // incoming data = req.body, req.query, req.params, req.file
app.use(express.json()) //server response
app.use(cors())

//index route -home route
app.use(`/`, require('./route/appRoute')) // index route

// not found route
app.all('***',(req,res) => {
    res.render('pnf.ejs')
})

// start server
app.listen(PORT, async() => {
    await connectDB()
    console.log(`server is ready @ http://localhost:${PORT}`)
})