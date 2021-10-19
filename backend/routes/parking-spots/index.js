// /api/parking-spots
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET: Get all parking spots
router.get('/', routes.listParkingSpots)

// POST: Create new parking spot
router.post('/', routes.createParkingSpot)

module.exports = router
