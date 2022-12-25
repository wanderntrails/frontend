import { IconTent } from "@tabler/icons"
import React, { useState } from "react"

import Box from "../../design-system/components/Box/Box"
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
			<Box as="p" fontWeight="font-weight-bold">
				Campsites
			</Box>
		</Box>
	)
}

export default CampsiteFilter
