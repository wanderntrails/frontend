import { IconMinus, IconPlus } from "@tabler/icons"

import { useMap } from "../MapContext"
import { Box } from "../design-system/components"
import theme from "../design-system/theme"

const MapZooms = () => {
	const { map } = useMap()

	return (
		<Box zIndex={2} position="absolute" bottom="48px" right="24px">
			<Box
				as="button"
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
				// @ts-ignore
				boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			>
				3D
			</Box>
			<Box
				// @ts-ignore
				boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
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
