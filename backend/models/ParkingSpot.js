const mongoose = require('mongoose')

const ParkingSpot = mongoose.Schema({
	area: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Area',
		required: true
	},
	type: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ParkingType',
		required: true
	},
	availability: {
		type: Boolean,
		required: true
	}
})

// Export
module.exports = mongoose.model('ParkingSpot', ParkingSpot)
