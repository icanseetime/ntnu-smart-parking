const mongoose = require('mongoose')

const ParkingSpot = mongoose.Schema({
	area: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ParkingArea',
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
}, { collection: 'parking-spots' })

// Export
module.exports = mongoose.model('ParkingSpot', ParkingSpot)
