import { useEffect } from "react"
import { matchPath, useLocation } from "react-router-dom"

import { useMap } from "../MapContext"
import { Box } from "../design-system/components"

const MapSatelliteToggle = () => {
	const { pathname } = useLocation()

	const { map, isSatellite, setIsSatellite } = useMap()

	const styleURLs = {
		Map: "mapbox://styles/vankhan/ckm5gzob32y9c17pgbw4jwcaq",
		Satellite: "mapbox://styles/vankhan/ckm9ku43sfb4o17lbsltrn6kh",
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
		return () => map.current?.off("styledata", onChange)
	})

	const toggleMapSatellite = () => {
		if (!map.current) return // skip if map not initialized
		map.current.setStyle(styleURLs[isSatellite ? "Map" : "Satellite"])
		setIsSatellite(isSatellite => !isSatellite)
	}

	return (
		<Box
			as="button"
			title={`Switch to ${isSatellite ? "Map" : "Satellite"}`}
			borderRadius="border-radius-md"
			width="64px"
			height="64px"
			ml="spacing-lg"
			mb="spacing-lg"
			border="2px solid white"
			backgroundSize="cover"
			fontSize="font-size-2"
			color="white"
			p="spacing-xxs"
			display="flex"
			alignItems="flex-end"
			justifyContent="center"
			cursor="pointer"
			pointerEvents="auto"
			//@ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			onClick={toggleMapSatellite}
			sx={{
				backgroundImage: `
          linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.7) 100%
          ),
          url("/images/${isSatellite ? "map" : "satellite"}.png");
        `,
			}}
		>
			{isSatellite ? "Map" : "Satellite"}
		</Box>
	)
}

export default MapSatelliteToggle
