import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BASE_URL, useMap } from "../../MapContext"
import { Block, H1 } from "../../design-system/components"
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
		<Block>
			<Block mt="xs" textAlign="center">
				<WandernLogoFull />
			</Block>
			<H1 textAlign="center" mb="sm" noMargin>
				Plan your trail accommodation
			</H1>
			{trails
				? trails.map(trail => (
						<TrailCard key={trail.url} trail={trail} map={map} />
				  ))
				: Array.from({ length: 10 }, (_, i) => (
						<Block key={i} height="100px" bg="neutral.2" m="xs"></Block>
				  ))}
		</Block>
	)
}
