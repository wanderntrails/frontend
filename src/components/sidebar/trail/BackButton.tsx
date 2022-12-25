import { IconArrowLeft } from "@tabler/icons"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Block, BodyText } from "../../../design-system/components"

export default () => {
	const navigate = useNavigate()
	return (
		<Block
			display="flex"
			cursor="pointer"
			py="xxs"
			px="xs"
			borderRadius="md"
			bg="neutral.1"
			width="fit-content"
			alignItems="center"
			m="sm"
			onClick={() => navigate("/map")}
		>
			<IconArrowLeft size={32} />
			<BodyText ml="xs">Trails</BodyText>
		</Block>
	)
}
