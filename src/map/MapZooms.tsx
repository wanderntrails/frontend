import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

import { useMap } from "../MapContext"
import { Box } from "../design-system/components"
import theme from "../design-system/theme"

const MapZooms = () => {
	const { map } = useMap()
	const [buttonText, setButtonText] = useState("3D")

	map.current?.on("pitchend", () => {
		setButtonText(map.current?.getPitch() > 10 ? "2D" : "3D")
	})

	return (
		<Box zIndex={2} position="absolute" bottom="24px" right="24px">
			<Box
				as="button"
				title="Tilt the view"
				border="none"
				fontWeight="font-weight-bold"
				bg="white"
				size="28px"
				borderRadius="border-radius-md"
				mb="spacing-xs"
				display="flex"
				justifyContent="center"
				alignItems="center"
				cursor="pointer"
				sx={{ ":hover": { bg: "neutral.100" } }}
				color="neutral.700"
				boxShadow="shadow-map-controls"
				onClick={() =>
					map.current?.easeTo({ pitch: map.current?.getPitch() > 10 ? 0 : 45 })
				}
			>
				{buttonText}
			</Box>
			<Box
				boxShadow="shadow-map-controls"
				overflow="hidden"
				display="flex"
				flexDirection="column"
				borderRadius="border-radius-md"
				justifyContent="center"
				alignItems="center"
			>
				<Box
					as="button"
					border="none"
					cursor="pointer"
					p="spacing-xxs"
					sx={{ ":hover": { bg: "neutral.100" } }}
					backgroundColor="white"
					title="Zoom in"
					onClick={() => map.current && map.current.zoomIn()}
				>
					<IconPlus size={20} color={theme.colors.neutral[700]} />
				</Box>
				<Box
					as="button"
					border="none"
					borderTop="1px solid"
					borderTopColor="neutral.200"
					p="spacing-xxs"
					backgroundColor="white"
					sx={{ ":hover": { bg: "neutral.100" } }}
					cursor="pointer"
					title="Zoom out"
					onClick={() => map.current && map.current.zoomOut()}
				>
					<IconMinus size={20} color={theme.colors.neutral[700]} />
				</Box>
			</Box>
		</Box>
	)
}

export default MapZooms
