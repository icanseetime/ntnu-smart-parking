import React, { useEffect, useState } from 'react'

// Utils
import axios from 'axios'
import LocationsAccordionItem from '../LocationsAccordionItem/LocationsAccordionItem'

export default function LocationsAccordion() {
	const [locations, setLocations] = useState([])

	useEffect(() => {
		axios.get('/api/parking-areas').then((res) => {
			setLocations(res.data)
		})
	}, [])

	return (
		<section className="LocationsAccordion">
			<LocationsAccordionItem
				location={{
					name: 'All Parking Lots',
					_id: ''
				}}
			/>
			{locations.map((location) => {
				return (
					<LocationsAccordionItem
						location={location}
						key={location._id}
					/>
				)
			})}
		</section>
	)
}
