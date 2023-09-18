import { IconTree } from "@tabler/icons-react"
import { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import { Box, Heading, Text } from "../../../design-system/components"

const CampingRulesCard = ({ description }: { description?: string }) =>
	description ? (
		<Box m="spacing-lg">
			<Box color="neutral.600">
				<IconTree />
			</Box>
			<Heading as="h2" color="neutral.500" my="spacing-xxs" size="md">
				Camping rules
			</Heading>
			<Text>
				<ReactMarkdown components={{ p: Fragment }}>
					{description}
				</ReactMarkdown>
			</Text>
		</Box>
	) : null

export default CampingRulesCard
