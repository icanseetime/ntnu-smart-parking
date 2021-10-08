const mongoose = require('mongoose')

const ParkingArea = mongoose.Schema({
    name: {
        type: string,
        required: true
    }
})

// Export
module.exports = mongoose.model('ParkingArea', ParkingArea)
