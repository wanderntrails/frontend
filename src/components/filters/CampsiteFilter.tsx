import { IconTent } from "@tabler/icons"
import { useState } from "react"

import { Box, Text } from "../../design-system/components"
import { FilterProps } from "../../interfaces"

const CampsiteFilter = ({ toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<Box
			onClick={toggleDisplay("campsites", setIsHidden)}
			as="button"
			border="none"
			display="flex"
			bg={isHidden ? "neutral.100" : "white"}
			color={isHidden ? "neutral.400" : "neutral.700"}
			borderRadius="border-radius-pill"
			py="spacing-xs"
			px="spacing-md"
			//@ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			cursor="pointer"
			width="fit-content"
			gap="spacing-xs"
		>
			<IconTent size={20} />
			<Text bold fontSize="font-size-2">
				Campsites
			</Text>
		</Box>
	)
}

export default CampsiteFilter
