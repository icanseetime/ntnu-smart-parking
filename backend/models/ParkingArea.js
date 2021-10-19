const mongoose = require('mongoose')

const ParkingArea = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// Export
module.exports = mongoose.model('ParkingArea', ParkingArea)
