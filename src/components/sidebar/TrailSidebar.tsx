import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate, useParams } from "react-router-dom"

import { BASE_URL, MapMarkers, useMap } from "../../MapContext"
import { Box } from "../../design-system/components"
import Heading from "../../design-system/components/Heading/Heading"
import { Trail } from "../../interfaces"
import { AccomMarker, StageMarker, resetMarkers } from "../MapMarker"
import BackButton from "./trail/BackButton"
import CampingRulesCard from "./trail/CampingRulesCard"
import StatsCard from "./trail/StatsCard"
import TrailstagesCard from "./trail/TrailstagesCard"
import TransportCard from "./trail/TransportCard"

const TrailSidebar = () => {
	const navigate = useNavigate()
	const params = useParams()
	const trailURL = (params.trail ?? "").toLowerCase()

	const { map, setMapMarkers } = useMap()
	const [trail, setTrail] = useState<Trail | null>(null)

	// run when first loaded
	useEffect(() => {
		fetch(`${BASE_URL}/trail/${trailURL}.json`)
			.then(({ status, json }: Response) =>
				status === 404 ? navigate("/map") : json()
			)
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

				map.current.setPitch(45).fitBounds(json.bbox, {
					padding: { top: 0, bottom: 0, left: 400 + 32, right: 0 },
					offset: [0, -32],
				})
				map.current.setLayoutProperty(trailURL, "visibility", "visible")
			})
	}, [])

	const title = `${
		trail?.name ?? "Trail"
	} | Wandern - Plan your trail accommodation`

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="twitter:text:title" content={title} />
				<meta property="og:title" content={title} />
			</Helmet>
			<Box bg="neutral.700" py="spacing-md" position="sticky" top={0}>
				<BackButton />

				<Heading as="h1" size="xl" color="white" textAlign="center">
					{trail?.name}
				</Heading>

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

export default TrailSidebar
