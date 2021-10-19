const mongoose = require('mongoose')

const ParkingType = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		}
	},
	{ collection: 'parking-types' }
)

// Export
module.exports = mongoose.model('ParkingType', ParkingType)
