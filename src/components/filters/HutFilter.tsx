import { IconBed } from "@tabler/icons"
import { useState } from "react"

import { Box, Text } from "../../design-system/components"
import { FilterProps } from "../../interfaces"

const HutFilter = ({ toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<Box
			onClick={toggleDisplay("huts", setIsHidden)}
			as="button"
			border="none"
			display="flex"
			bg={isHidden ? "neutral.100" : "white"}
			sx={{ ":hover": { bg: "neutral.100" } }}
			color={isHidden ? "neutral.400" : "neutral.700"}
			borderRadius="border-radius-md"
			py="spacing-xxs"
			px="spacing-xs"
			//@ts-ignore
			boxShadow="0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
			cursor="pointer"
			width="fit-content"
			gap="spacing-xs"
		>
			<IconBed size={20} />
			<Text
				bold
				fontSize="font-size-2"
				color={isHidden ? "neutral.400" : "neutral.700"}
			>
				Huts
			</Text>
		</Box>
	)
}

export default HutFilter
