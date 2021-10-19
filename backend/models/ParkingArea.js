const mongoose = require('mongoose')

const ParkingArea = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		}
	},
	{ collection: 'parking-areas' }
)

// Export
module.exports = mongoose.model('ParkingArea', ParkingArea)
