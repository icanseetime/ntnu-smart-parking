const mongoose = require('mongoose')

const Area = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// Export
module.exports = mongoose.model('Area', Area)
