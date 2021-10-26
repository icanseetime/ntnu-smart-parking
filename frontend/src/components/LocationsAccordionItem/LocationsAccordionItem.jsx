import React, { useEffect, useState } from 'react'
import './LocationsAccordionItem.css'

// Utils
import axios from 'axios'
import { IoIosArrowForward } from 'react-icons/io'

// Components
import TypeAvailability from '../TypeAvailability/TypeAvailability'

export default function LocationsAccordionItem({ location }) {
	const [contentVisible, setContentVisible] = useState(false)
	const [areaParkingSpots, setAreaParkingSpots] = useState([])

	const toggleVisibleContent = () => {
		setContentVisible((prev) => !prev)
	}

	useEffect(() => {
		axios.get(`/api/parking-spots/${location._id}`).then(({ data }) => {
			// Fetch types from list
			let types = []
			data.forEach((spot) => {
				if (!types.includes(spot.type.name)) {
					types.push(spot.type.name)
				}
			})

			// Set available / all numbers for each of the areas
			types.forEach((type) => {
				const allCount = data.filter(
					(spot) => spot.type.name === type
				).length
				const availableCount = data.filter(
					(spot) => spot.type.name === type && spot.availability
				).length
				setAreaParkingSpots((prev) => [
					...prev,
					{
						name: type,
						all: allCount,
						available: availableCount
					}
				])
			})
		})
	}, [location._id])

	return (
		<div className="LocationsAccordionItem">
			{/* Header */}
			<div className="ItemHeader" onClick={toggleVisibleContent}>
				<span />
				<span>{location.name}</span>
				<IoIosArrowForward
					style={{
						transform: contentVisible && 'rotate(90deg)',
						transition: 'transform .2s'
					}}
				/>
			</div>

			{/* Content */}
			<div
				className="ItemContent"
				style={{
					display: contentVisible ? 'flex' : 'none'
				}}
			>
				{areaParkingSpots.map((type) => {
					return <TypeAvailability type={type} key={type.name} />
				})}
			</div>
		</div>
	)
}
