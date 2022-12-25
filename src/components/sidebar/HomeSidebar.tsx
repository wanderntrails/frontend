import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BASE_URL, useMap } from "../../MapContext"
import Box from "../../design-system/components/Box/Box"
import { TrailOverview } from "../../interfaces"
import { TrailMarker, resetMarkers } from "../MapMarker"
import TrailCard from "../cards/TrailCard"
import WandernLogoFull from "../icons/WandernLogoFull"

export default () => {
	const navigate = useNavigate()
	const { map, setMapMarkers } = useMap()
	const [trails, setTrails] = useState<TrailOverview[] | null>(null)

	useEffect(() => {
		resetMarkers(setMapMarkers)
		fetch(BASE_URL + "/trails.json")
			.then(response => response.json())
			.then(json => {
				if (!map.current) return // need further testing for this line
				//@ts-ignore
				map.current.off("styledata")
				json.forEach((trail: TrailOverview, index: number) => {
					json[index].marker = TrailMarker(trail, map, navigate).addTo(
						map.current! // ?
					)
				})
				setTrails(json)
				setMapMarkers({
					trails: json.map((trail: TrailOverview) => trail.marker),
				})

				document.title = "Wandern | Plan your trail accommodation"
				const titles: (HTMLElement | null)[] = [
					document.querySelector("meta[property='og:title']"),
					document.querySelector("meta[name='twitter:text:title']"),
				]
				titles.forEach(
					title =>
						title instanceof HTMLMetaElement && (title.content = document.title)
				)

				map.current.resetNorthPitch()
				map.current.setCenter([-16, 52])
				map.current.setZoom(3.37)
				json.forEach(({ url }: TrailOverview) => {
					map.current?.setLayoutProperty(url, "visibility", "none")
				})
			})
	}, [])

	return (
		<>
			<Box display="flex" alignItems="center" p="spacing-sm" bg="neutral.700">
				<Box height="60px" mr="spacing-md">
					<WandernLogoFull />
				</Box>
				<Box as="h1" fontSize="font-size-5" color="white">
					Plan your trail accommodation
				</Box>
			</Box>
			{trails
				? trails.map(trail => (
						<TrailCard key={trail.url} trail={trail} map={map} />
				  ))
				: Array.from({ length: 10 }, (_, i) => (
						<Box key={i} height="100px" bg="neutral.200" m="spacing-xs" />
				  ))}
		</>
	)
}
