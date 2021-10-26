// Database schemas
const ParkingArea = require('../../models/ParkingArea')

// GET: List all parking areas
const listParkingAreas = async (req, res) => {
	try {
		const list = await ParkingArea.find(req.query)
		if (!list) {
			res.status(404).json({
				error: `Couldn't find any parking areas in the database.`
			})
		} else {
			res.status(200).json(list)
		}
	} catch (err) {
		res.status(500).json({
			error: `Something went wrong while trying to list the parking areas. [${err}]`
		})
	}
}

// POST: Create new parking area
const createParkingAreas = async (req, res) => {
	try {
		const newParkingArea = new ParkingArea({
			name: req.body.name
		})
		const parkingArea = await newParkingArea.save()
		res.status(201).json({
			message: `New parking area successfully created!`,
			parkingArea
		})
	} catch (err) {
		res.status(500).json({
			error: `Something went wrong while trying to create a new parking area. [${err}]`
		})
	}
}

module.exports = {
	listParkingAreas,
	createParkingAreas
}
