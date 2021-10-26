import React from 'react'
import './TypeAvailability.css'

export default function TypeAvailability({ type }) {
	return (
		<div className="TypeAvailability">
			{/* Name */}
			<h3>{type.name}</h3>
			{/* Numbers - availability */}
			<span className="available-spots">{type.available}</span>
			<span className="all-spots">/ {type.all}</span>
			<span className="free-spots">Free Spots</span>
		</div>
	)
}
