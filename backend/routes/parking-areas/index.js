// /api/parking-areas
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// POST: Create new parking area
router.post('/', routes.createParkingAreas)

module.exports = router