// /api/parking-areas
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET: List all parking areas
router.get('/', routes.listParkingAreas)

// POST: Create new parking area
router.post('/', routes.createParkingAreas)

module.exports = router
