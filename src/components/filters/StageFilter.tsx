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
			color={isHidden ? "neutral.400" : "neutral.700"}
			borderRadius="border-radius-pill"
			py="spacing-xxs"
			px="spacing-md"
			//@ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
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
				background={isHidden ? "neutral.400" : "neutral.700"}
			>
				{numStages}
			</Box>
			<Text bold fontSize="font-size-2">
				Stages
			</Text>
		</Box>
	)
}

export default StageFilter
