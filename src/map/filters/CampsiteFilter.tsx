import { IconTent } from "@tabler/icons-react"
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
			sx={{ ":hover": { bg: "neutral.100" } }}
			color={isHidden ? "neutral.400" : "neutral.700"}
			borderRadius="border-radius-md"
			py="spacing-xxs"
			px="spacing-xs"
			boxShadow="shadow-map-controls"
			cursor="pointer"
			width="fit-content"
			gap="spacing-xs"
		>
			<IconTent size={20} />
			<Text
				bold
				fontSize="font-size-2"
				color={isHidden ? "neutral.400" : "neutral.700"}
			>
				Campsites
			</Text>
		</Box>
	)
}

export default CampsiteFilter
