import { IconMinus, IconPlus } from "@tabler/icons"
import React from "react"

import { useMap } from "../MapContext"
import Box from "../design-system/components/Box/Box"

export default () => {
	const { map } = useMap()

	return (
		<Box
			// @ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			overflow="hidden"
			zIndex={2}
			position="absolute"
			bottom="80px"
			right="16px"
			display="flex"
			flexDirection="column"
			borderRadius="border-radius-md"
		>
			<Box
				as="button"
				border="none"
				cursor="pointer"
				p="spacing-xxs"
				backgroundColor="white"
				title="Zoom in"
				onClick={() => map.current && map.current.zoomIn()}
			>
				<IconPlus fontSize="font-size-3" />
			</Box>
			<Box
				as="button"
				border="none"
				borderTop="1px solid"
				borderTopColor="neutral.200"
				p="spacing-xxs"
				backgroundColor="white"
				cursor="pointer"
				title="Zoom out"
				onClick={() => map.current && map.current.zoomOut()}
			>
				<IconMinus fontSize="font-size-3" />
			</Box>
		</Box>
	)
}
