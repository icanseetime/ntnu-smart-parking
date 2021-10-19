// Database schemas
const ParkingSpot = require('../../models/ParkingSpot')

// GET: Get all parking spots
const listParkingSpots = async (req, res) => {
	try {
		// List all parking spots
		const list = ParkingSpot.find()
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

module.exports = {
	listParkingSpots
}
