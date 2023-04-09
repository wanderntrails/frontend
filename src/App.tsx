import { useState } from "react"
import { useMatch } from "react-router-dom"

import { useMap } from "./MapContext"
import "./application.css"
import Coordinates from "./map/Coordinates"
import MapFilters from "./map/MapFilters"
import MapSatelliteToggle from "./map/MapSatelliteToggle"
import MapZooms from "./map/MapZooms"
import Sidebar from "./map/Sidebar"
import WandernLogo from "./map/icons/WandernLogo"

export default () => {
	const { mapContainer } = useMap()
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
	const trailMatch = useMatch("/map/:trail")

	return (
		<>
			<div id="map" ref={mapContainer} />
			{process.env.NODE_ENV !== "production" && <Coordinates />}
			{trailMatch && <MapFilters />}
			<MapZooms />

			<Sidebar
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
