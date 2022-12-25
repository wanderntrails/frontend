import { IconMinus, IconPlus } from "@tabler/icons"
import React from "react"

import { useMap } from "../MapContext"
import { Block } from "../design-system/components"

export default () => {
	const { map } = useMap()

	return (
		<Block
			borderRadius="md"
			overflow="hidden"
			zIndex={2}
			position="absolute"
			bottom="80px"
			right="8px"
			boxShadow="md"
		>
			<Block
				p="xs"
				backgroundColor="neutral.0"
				cursor="pointer"
				fontSize="lg"
				title="Zoom in"
				onClick={() => map.current && map.current.zoomIn()}
			>
				<IconPlus />
			</Block>
			<Block
				p="xs"
				backgroundColor="neutral.0"
				cursor="pointer"
				fontSize="lg"
				title="Zoom out"
				onClick={() => map.current && map.current.zoomOut()}
			>
				<IconMinus />
			</Block>
		</Block>
	)
}
