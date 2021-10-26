import React from 'react'
import './Header.css'

export default function Header() {
	return (
		<header className="Header">
			<img src="/ntnu-logo.png" alt="NTNU logo" id="logo-img" />
			<span className="smart-parking">Smart Parking</span>
		</header>
	)
}
