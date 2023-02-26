import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"

import { BASE_URL, MAP_CENTER, MIN_ZOOM, useMap } from "../../MapContext"
import { Box, Text } from "../../design-system/components"
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

	const title = "Trails | Wandern - Plan your trail accommodation"
	const description =
		"An easy way to find and book mountain huts and campsites on popular hiking trails. See your trail's stages, water sources and resupply points."
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="twitter:text:title" content={title} />
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
			</Helmet>
			<Box display="flex" flexDirection="column" height="100vh">
				<Box
					m="spacing-sm"
					bg="neutral.700"
					position="sticky"
					p="spacing-sm"
					top={0}
					borderRadius="border-radius-md"
					boxShadow="shadow-md"
				>
					<Box as="a" height="60px" href="/" sx={{ "> svg": { mx: "auto" } }}>
						<WandernLogoFull />
					</Box>
					<Text color="white" textAlign="center" bold>
						Pick a trail to plan your accommodation
					</Text>
				</Box>
				<Box flex={1} overflowY="auto" px="spacing-md">
					{trails?.map(trail => (
						<TrailCard key={trail.url} trail={trail} map={map} />
					)) ??
						Array.from({ length: 10 }, (_, i) => (
							<Box key={i} height="100px" bg="neutral.200" m="spacing-xs" />
						))}
				</Box>
			</Box>
		</>
	)
}

export default HomeSidebar
