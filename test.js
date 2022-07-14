const mongoose = require('mongoose')
const url = 'mongodb://cars_usr:simple@node10645-spucars.us.reclaim.cloud/cars'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection
db.once('open', () => {
    console.log('Database Successful Connection')
})
db.on('error', (error) => {
    console.error('Database error: ', error)
})

