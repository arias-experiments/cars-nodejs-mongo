const express = require('express')
const router = express.Router()
CarSchema = require('../models/car')

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({'error': message})
}

router.get('/', (request, response) => {
   CarSchema.find().exec( (error, cars) => {
       if (error){
           HandleError(response, 'error retrieving data', 'get failed', 500)
       }else{
           response.send(cars)
       }
   })
})

router.post('/', (request, response) => {
    const carJSON = request.body
    if (!carJSON.make || !carJSON.model || !carJSON.year){
        HandleError(response, 'missing information', 'post data missing', 500)
    }else{
        car = new CarSchema({
            make: carJSON.make,
            model: carJSON.model,
            color: carJSON.color,
            year: carJSON.year || 0
        })
        car.save( (error) => {
            if (error){
                response.send({'error': error})
            }else{
                response.send({'id': car.id})
            }
        })
    }
})

module.exports = router