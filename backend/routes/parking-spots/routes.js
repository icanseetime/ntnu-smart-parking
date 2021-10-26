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

module.exports = {
	listParkingSpots,
	createParkingSpot
}
