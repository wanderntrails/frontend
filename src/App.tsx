import { useState } from "react"
import { useMatch } from "react-router-dom"

import { useMap } from "./MapContext"
import Coordinates from "./components/Coordinates"
import MapFilters from "./components/MapFilters"
import MapSatelliteToggle from "./components/MapSatelliteToggle"
import MapZooms from "./components/MapZooms"
import Sidebar from "./components/Sidebar"
import WandernLogo from "./components/icons/WandernLogo"

export default () => {
	const { mapContainer } = useMap()
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
	const trailMatch = useMatch("/map/:trail")

	return (
		<>
			<div id="map" ref={mapContainer} />
			<Coordinates />
			{trailMatch && <MapFilters />}
			<MapZooms />

			<Sidebar // TODO: ts
				isExpanded={isSidebarExpanded}
				toggleSidebar={() => setIsSidebarExpanded(isExpanded => !isExpanded)}
			/>
			<div
				className={`logo-satellite-wrapper ${
					isSidebarExpanded ? "expand" : "collapse"
				}`}
			>
				<WandernLogo />
				<MapSatelliteToggle />
			</div>
		</>
	)
}
