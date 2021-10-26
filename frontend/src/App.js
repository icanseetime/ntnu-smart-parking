import './App.css'

// Components
import Header from './components/Header/Header'
import LocationsAccordion from './components/LocationsAccordion/LocationsAccordion'
import Map from './components/Map/Map'

function App() {
	return (
		<div className="App">
			<Header />
			<Map />
			<LocationsAccordion />
		</div>
	)
}

export default App
