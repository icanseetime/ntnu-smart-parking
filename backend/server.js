// Packages and services
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Routers
const apiRouter = require('./routes')
const parkingSpotRouter = require('./routes/parking-spots')
const parkingTypeRouter = require('./routes/parking-types')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) =>
	console.error('❌ Database connection failed\n', error)
)
db.on('open', () => console.log('✅ Connected to database'))

// Endpoints
app.use('/api', apiRouter)
app.use('/api/parking-spots', parkingSpotRouter)
app.use('/api/parking-types', parkingTypeRouter)

// Error handling
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({ error: `${err}` })
})

// Server
app.listen(process.env.PORT, () => {
	console.log(`✅ Listening on port ${process.env.PORT}`)
})
