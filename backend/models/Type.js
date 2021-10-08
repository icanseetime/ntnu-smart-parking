const mongoose = require('mongoose')

const Type = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
})

// Export
module.exports = mongoose.model('Type', Type)
