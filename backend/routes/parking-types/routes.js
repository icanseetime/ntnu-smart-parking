// Database schemas
const ParkingType = require('../../models/ParkingType')

//POST: create parking type

const createParkingType = async (req, res) => {
    try {
        const newParkingType = new ParkingType({
            name: req.body.name
        })
        const parkingType = await newParkingType.save() //saves to database
        res.status(201).json({
            message: `succesfully created a new parking type!`, 
            parkingType
        })
    } catch (err) { 
        res.status(500).json({
            error: `Something went wrong while trying to create a new parking type. [${err}]`
        })
            
    }
}

module.exports = {
    createParkingType
}
