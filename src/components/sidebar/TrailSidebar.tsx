import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { BASE_URL, MapMarkers, useMap } from "../../MapContext"
import Box from "../../design-system/components/Box/Box"
import { Trail } from "../../interfaces"
import { AccomMarker, StageMarker, resetMarkers } from "../MapMarker"
import BackButton from "./trail/BackButton"
import CampingRulesCard from "./trail/CampingRulesCard"
import StatsCard from "./trail/StatsCard"
import TrailstagesCard from "./trail/TrailstagesCard"
import TransportCard from "./trail/TransportCard"

export default () => {
	const params = useParams()
	const trailURL = (params.trail ?? "").toLowerCase()

	const { map, setMapMarkers } = useMap()
	const [trail, setTrail] = useState<Trail | null>(null)

	// run when first loaded
	useEffect(() => {
		fetch(`${BASE_URL}/trail/${trailURL}.json`)
			.then(response => response.json())
			.then((json: Trail) => {
				setTrail(json)

				resetMarkers(setMapMarkers)
				const trailMarkers: MapMarkers = { campsites: [], huts: [], stages: [] }
				json.accoms.forEach(accom =>
					trailMarkers[accom.type + "s"].push(AccomMarker(accom))
				)
				trailMarkers.stages = json.stages.map(stage =>
					StageMarker(stage, json.stages.length)
				)
				if (!map.current) return // further testing required
				Object.values(trailMarkers).forEach(markers =>
					markers.forEach(marker => map.current && marker.addTo(map.current))
				)
				setMapMarkers(trailMarkers)

				map.current.setPitch(35)
				map.current.fitBounds(json.bbox, {
					padding: { top: 32, bottom: 64, left: 400 + 64, right: 100 },
				})
				map.current.setLayoutProperty(trailURL, "visibility", "visible")

				document.title = `${json.name} | Wandern - Trail accommodation`
				const titles: (HTMLElement | null)[] = [
					document.querySelector("meta[property='og:title']"),
					document.querySelector("meta[name='twitter:text:title']"),
				]
				titles.forEach(
					el => el instanceof HTMLMetaElement && (el.content = document.title)
				)
			})
	}, [])

	return (
		<>
			<Box bg="neutral.700" py="spacing-md" position="sticky" top={0}>
				<BackButton />

				<Box as="h1" textAlign="center" fontSize="font-size-6" color="white">
					{trail?.name}
				</Box>
				<Box
					as="p"
					textAlign="center"
					color="neutral.300"
					fontSize="font-size-4"
				>
					{trail?.countries?.join(", ")}
				</Box>
			</Box>

			{trail && (
				<Box
					as="img"
					height="240px"
					objectFit="cover"
					width={1}
					src={trail.image}
				/>
			)}

			<StatsCard trail={trail} />
			<CampingRulesCard description={trail?.wild_camping_rules} />
			<TransportCard
				transport_to={trail?.transport_to}
				transport_from={trail?.transport_from}
			/>
			<TrailstagesCard stages={trail?.stages} />
		</>
	)
}
