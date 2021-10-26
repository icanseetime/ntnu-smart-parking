// /api/parking-spots
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET: Get all parking spots
router.get('/', routes.listParkingSpots)

// POST: Create new parking spot
router.post('/', routes.createParkingSpot)

// GET: List available parking spots in selected area, split by type
router.get('/:area', routes.listAvailabilityInArea)

module.exports = router
