import { IconChevronRight } from "@tabler/icons-react"
import { Map } from "mapbox-gl"
import { MutableRefObject, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box } from "../../design-system/components"
import Heading from "../../design-system/components/Heading/Heading"
import { TrailOverview } from "../../interfaces"

const TrailCard = ({
	trail,
	map,
}: {
	trail: TrailOverview
	map: MutableRefObject<Map | null>
}) => {
	const navigate = useNavigate()
	const [isHovered, setIsHovered] = useState(false)

	const onMouseEnter = () => {
		setIsHovered(true)
		//@ts-ignore
		trail.marker?.togglePopup()._popup.remove()
		trail.marker?.togglePopup()
		map.current?.setLayoutProperty(trail.url, "visibility", "visible")
	}
	const onMouseLeave = () => {
		setIsHovered(false)
		//@ts-ignore
		trail.marker?.togglePopup()._popup.remove()
		map.current?.setLayoutProperty(trail.url, "visibility", "none")
	}

	return (
		<Box
			as="button"
			border="none"
			display="flex"
			textAlign="left"
			width={1}
			backgroundColor={isHovered ? "neutral.100" : "white"}
			cursor="pointer"
			p="spacing-xs"
			mb="spacing-sm"
			borderRadius="border-radius-md"
			boxShadow="shadow-md"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => navigate(`/map/${trail.url}`)}
			sx={{ ":hover": { transform: "scale(1.02)" } }}
		>
			<Box
				as="img"
				width="136px"
				height="100px"
				borderRadius="border-radius-md"
				src={trail.image}
				backgroundSize="cover"
			/>
			<Box flex={1} my="auto" mx="spacing-xs">
				<Box as="p" color="neutral.500" fontSize="font-size-3">
					{trail.countries.join(", ")}
				</Box>
				<Heading as="h2" size="sm" my="spacing-xxs">
					{trail.name}
				</Heading>
				<Box as="p" fontWeight="font-weight-bold" color="neutral.500">
					{Math.round(trail.distance / 1000)} km
				</Box>
			</Box>
			<Box color="neutral.400" my="auto">
				<IconChevronRight />
			</Box>
		</Box>
	)
}

export default TrailCard
