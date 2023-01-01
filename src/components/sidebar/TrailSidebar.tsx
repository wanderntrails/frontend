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
			.then(response =>
				response.status === 404 ? navigate("/map") : response.json()
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

				map.current.setPitch(35).fitBounds(json.bbox, {
					padding: { top: 0, bottom: 0, left: 400 + 32, right: 0 },
					offset: [0, -32],
				})
				map.current.setLayoutProperty(trailURL, "visibility", "visible")
			})
	}, [])

	const listCountries = (countries: string[]): string => {
		if (countries.length === 0) return "Europe"
		if (countries.length === 1) return countries[0]
		return [
			countries.slice(0, -1).join(", "),
			countries.length > 1 && "and",
			countries.at(-1),
		].join(" ")
	}

	const toKM = (metres: number): string => Math.round(metres / 1000) + " km"

	const title = trail
		? `${trail.name} | Wandern - Plan your trail accommodation`
		: ""
	const description = trail
		? `The ${trail.name} is a ${toKM(
				trail.distance
		  )} hike through ${listCountries(trail.countries)}, with over ${
				trail.accoms.length
		  } mountain huts and campsites available. Wandern is an easy way to find and book accommodation on popular hiking trails. See your trail's stages, water sources and resupply points.`
		: ""
	return (
		<>
			{trail && (
				<Helmet>
					<title>{title}</title>
					<meta name="twitter:text:title" content={title} />
					<meta property="og:title" content={title} />
					<meta name="description" content={description} />
				</Helmet>
			)}
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
