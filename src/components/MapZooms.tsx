import { IconMinus, IconPlus } from "@tabler/icons"

import { useMap } from "../MapContext"
import { Box } from "../design-system/components"
import theme from "../design-system/theme"

const MapZooms = () => {
	const { map } = useMap()

	return (
		<Box
			// @ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			overflow="hidden"
			zIndex={2}
			position="absolute"
			bottom="80px"
			right="8px"
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
				p="spacing-xs"
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
				p="spacing-xs"
				backgroundColor="white"
				cursor="pointer"
				title="Zoom out"
				onClick={() => map.current && map.current.zoomOut()}
			>
				<IconMinus size={20} color={theme.colors.neutral[700]} />
			</Box>
		</Box>
	)
}

export default MapZooms
