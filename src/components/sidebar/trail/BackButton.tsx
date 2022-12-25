import { IconHome } from "@tabler/icons"
import React from "react"
import { useNavigate } from "react-router-dom"

import Box from "../../../design-system/components/Box/Box"

const BackButton = () => {
	const navigate = useNavigate()
	return (
		<Box
			as="button"
			bg="transparent"
			color="white"
			cursor="pointer"
			borderRadius="border-radius-md"
			width="fit-content"
			ml="spacing-lg"
			border="none"
			onClick={() => navigate("/map")}
		>
			<IconHome size={24} />
		</Box>
	)
}

export default BackButton
