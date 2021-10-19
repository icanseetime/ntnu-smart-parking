const mongoose = require('mongoose')

const ParkingType = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
})

// Export
module.exports = mongoose.model('ParkingType', ParkingType)
