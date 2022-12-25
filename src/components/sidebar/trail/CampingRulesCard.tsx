import { IconTree } from "@tabler/icons"
import { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import Box from "../../../design-system/components/Box/Box"
import Heading from "../../../design-system/components/Heading/Heading"

export default ({ description }: { description?: string }) =>
	description ? (
		<Box m="spacing-lg">
			<IconTree />
			<Heading as="h2" color="neutral.500" mb="spacing-xs" size="md">
				Wild Camping Rules
			</Heading>
			<Box as="p">
				<ReactMarkdown components={{ p: Fragment }}>
					{description}
				</ReactMarkdown>
			</Box>
		</Box>
	) : null
