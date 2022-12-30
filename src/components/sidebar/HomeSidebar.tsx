import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"

import { BASE_URL, MAP_CENTER, MIN_ZOOM, useMap } from "../../MapContext"
import { Box } from "../../design-system/components"
import { TrailOverview } from "../../interfaces"
import { TrailMarker, resetMarkers } from "../MapMarker"
import TrailCard from "../cards/TrailCard"
import WandernLogoFull from "../icons/WandernLogoFull"

const HomeSidebar = () => {
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
					if (!map.current) return // ?
					json[index].marker = TrailMarker(trail, map, navigate).addTo(
						map.current
					)
				})
				setTrails(json)
				setMapMarkers({
					trails: json.map((trail: TrailOverview) => trail.marker),
				})

				map.current.setCenter(MAP_CENTER).setZoom(MIN_ZOOM).resetNorthPitch()
				json.forEach(({ url }: TrailOverview) => {
					map.current?.setLayoutProperty(url, "visibility", "none")
				})
			})
	}, [])

	const title = "Wandern - Plan your trail accommodation"
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="twitter:text:title" content={title} />
				<meta property="og:title" content={title} />
			</Helmet>

			<Box p="spacing-sm" bg="neutral.700" position="sticky" top={0}>
				<Box as="a" height="60px" href="/" sx={{ "> svg": { mx: "auto" } }}>
					<WandernLogoFull />
				</Box>
			</Box>
			{trails?.map(trail => (
				<TrailCard key={trail.url} trail={trail} map={map} />
			)) ??
				Array.from({ length: 10 }, (_, i) => (
					<Box key={i} height="100px" bg="neutral.200" m="spacing-xs" />
				))}
		</>
	)
}

export default HomeSidebar
