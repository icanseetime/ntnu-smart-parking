// /api
const express = require('express')
const router = express.Router()

// Test route
router.get('/', (req, res) => {
	res.status(200).json({
		message: `Congratulations! 🎉🥳`
	})
})

module.exports = router
