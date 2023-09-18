import { TablerIcon } from "@tabler/icons-react"

import { Box } from "../../../design-system/components"

const StatCard = ({
	Icon,
	value,
	title,
}: {
	Icon: TablerIcon
	value: string
	title: string
}) => (
	<Box flex={1}>
		<Box color="orange.700" width="fit-content" mx="auto">
			<Icon />
		</Box>
		<Box
			as="p"
			mt="spacing-xs"
			color="neutral.700"
			fontWeight="font-weight-bold"
			textAlign="center"
		>
			{value}
		</Box>
		<Box as="p" color="neutral.500" textAlign="center" fontSize="font-size-2">
			{title}
		</Box>
	</Box>
)

export default StatCard
