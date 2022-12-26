import { IconArrowLeft } from "@tabler/icons"
import { useNavigate } from "react-router-dom"

import { Box } from "../../../design-system/components"

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
			<IconArrowLeft strokeWidth={1.5} size={32} />
		</Box>
	)
}

export default BackButton
