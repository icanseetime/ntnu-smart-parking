const mongoose = require('mongoose')

const Type = mongoose.Schema({
	Name: {
		type: String,
		required: true
	}
})

// Export
module.exports = mongoose.model('Type', Type)
