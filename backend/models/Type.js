const mongoose = require('mongoose')

const Type = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
}, { collection: 'parking-types' })

// Export
module.exports = mongoose.model('Type', Type)
