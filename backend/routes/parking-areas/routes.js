// Database schemas
const ParkingArea = require('../../models/ParkingArea')

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
    createParkingAreas
}