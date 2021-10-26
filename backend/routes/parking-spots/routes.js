// Database schemas
const ParkingSpot = require('../../models/ParkingSpot')

// GET: Get all parking spots
const listParkingSpots = async (req, res) => {
	try {
		// List all parking spots
		const list = await ParkingSpot.find(req.query).populate('area type')
		if (!list) {
			res.status(404).json({
				error: `Couldn't find any parking spots in the database.`
			})
		} else {
			res.status(200).json(list)
		}
	} catch (err) {
		res.status(500).json({
			error: `Something went wrong while trying to list the parking spots. [${err}]`
		})
	}
}

const createParkingSpot = async (req, res) => {
	try {
		// Create parking spot
		const newParkingSpot = new ParkingSpot({
			area: req.body.area,
			type: req.body.type
		})

		// Save in DB
		const parkingSpot = await newParkingSpot.save()
		res.status(201).json({
			message: `Successfully created new parking spot.`,
			parkingSpot
		})
	} catch (err) {
		res.status(500).json({
			error: `Something went wrong while trying to create a new parking spot. [${err}]`
		})
	}
}

const listAvailabilityInArea = async (req, res) => {
	try {
		// Check for area missing
		if (!req.params.area) {
			return res.status(400).json({
				error: `You need to include the ID of an area in your request.`
			})
		}

		// Find all parking spots in area
		const list = await ParkingSpot.find({
			area: req.params.area
		}).populate('type')

		// Check for missing parking spots in DB
		if (!list.length) {
			return res.status(404).json({
				error: `Couldn't find any parking spots in the selected area / parking spot type.`
			})
		}

		// Send results to client
		res.status(200).json(list)
	} catch (err) {
		res.status(500).json({
			error: `Something went wrong while trying find parking spots in the selected area. [${err}]`
		})
	}
}

module.exports = {
	listParkingSpots,
	createParkingSpot,
	listAvailabilityInArea
}
