// /api/parking-spots
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET: Get all parking spots
router.get('/', routes.listParkingSpots)

module.exports = router

