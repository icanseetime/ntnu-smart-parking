const mongoose = require('mongoose')

const Area = mongoose.Schema({
	Name: {
		type: String,
		required: true
	}
})

// Export
module.exports = mongoose.model('Area', Area)
