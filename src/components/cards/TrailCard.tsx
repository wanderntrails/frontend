import { IconChevronRight } from "@tabler/icons"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { MapContext } from "../../MapContext"
import {
	Block,
	BodyText,
	Image,
	SmallBodyText,
} from "../../design-system/components"
import { TrailOverview } from "../../interfaces"

export default ({
	trail,
	map,
}: {
	trail: TrailOverview
	map: MapContext["map"]
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
		<Block
			display="flex"
			height="100px"
			borderTop="1px solid"
			backgroundColor={isHovered ? "neutral.2" : "neutral.0"}
			borderColor="neutral.2"
			cursor="pointer"
			p="xs"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => navigate(`/map/${trail.url}`)}
		>
			<Image
				width="140px"
				borderRadius="md"
				src={trail.image}
				backgroundSize="cover"
			/>
			<Block flex={1} my="auto" mx="xs">
				<SmallBodyText color="neutral.4">
					{trail.countries.join(", ")}
				</SmallBodyText>
				<BodyText fontWeight="bold" my="xxs">
					{trail.name}
				</BodyText>
				<SmallBodyText fontWeight="bold" color="neutral.4">
					{Math.round(trail.distance / 1000)} km
				</SmallBodyText>
			</Block>
			<Block color="neutral.3" my="auto">
				<IconChevronRight />
			</Block>
		</Block>
	)
}
