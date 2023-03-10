import { useState } from "react"

import { Box, Text } from "../../design-system/components"
import { FilterProps } from "../../interfaces"

const StageFilter = ({ numStages, toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<Box
			onClick={toggleDisplay("stages", setIsHidden)}
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
			alignItems="center"
		>
			<Box
				borderRadius="border-radius-circle"
				height="20px"
				width="20px"
				fontSize="font-size-1"
				bg="neutral.700"
				color="white"
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontWeight="font-weight-bold"
				backgroundColor={isHidden ? "neutral.400" : "neutral.700"}
			>
				{numStages ? numStages - 1 : 0}
			</Box>
			<Text
				bold
				fontSize="font-size-2"
				color={isHidden ? "neutral.400" : "neutral.700"}
			>
				Stages
			</Text>
		</Box>
	)
}

export default StageFilter
