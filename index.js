
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const db = require('./database')

const carsRouter = require('./routes/cars')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/cars', carsRouter)

app.listen(8001, () => {
    console.log('Listening on 8001')
})