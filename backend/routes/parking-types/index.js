// /api/parking-spot-types
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// post: create a new parking spot 
router.post('/', routes.createParkingType)

module.exports = router