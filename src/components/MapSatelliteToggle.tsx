import React, { useEffect } from "react"
import { matchPath, useLocation } from "react-router-dom"

import { useMap } from "../MapContext"

export default () => {
	const { pathname } = useLocation()

	const { map, isSatellite, setIsSatellite } = useMap()

	const styleURLs = {
		Map: "mapbox://styles/vankhan/ckm5gzob32y9c17pgbw4jwcaq",
		Satellite: "mapbox://styles/vankhan/ckm9ku43sfb4o17lbsltrn6kh",
	}

	useEffect((): any => {
		if (!map.current) return
		const onChange = () => {
			const trail = matchPath(
				"/map/:trail",
				pathname
			)?.params.trail?.toLowerCase()
			if (
				trail &&
				map.current?.getLayoutProperty(trail, "visibility") === "none"
			) {
				map.current.setLayoutProperty(trail, "visibility", "visible")
			}
		}
		map.current.once("styledata", onChange)
		return () => map.current!.off("styledata", onChange)
	})

	const toggleMapSatellite = () => {
		if (!map.current) return // skip if map not initialized
		map.current.setStyle(styleURLs[isSatellite ? "Map" : "Satellite"])
		setIsSatellite(isSatellite => !isSatellite)
	}

	return (
		<div
			className="map-satellite-toggle"
			title={`Switch to ${isSatellite ? "Map" : "Satellite"}`}
			onClick={toggleMapSatellite}
			style={{
				background: `
          linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.7) 100%
          ),
          url('/images/${isSatellite ? "map" : "satellite"}.png')
        `,
			}}
		>
			{isSatellite ? "Map" : "Satellite"}
		</div>
	)
}
