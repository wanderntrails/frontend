import { IconTree } from "@tabler/icons"
import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import Box from "../../../design-system/components/Box/Box"

export default ({ description }: { description?: string }) =>
	description ? (
		<Box m="spacing-lg">
			<IconTree />
			<Box as="h2" color="neutral.500" mb="spacing-xs" fontSize="font-size-5">
				Wild Camping Rules
			</Box>
			<Box as="p">
				<ReactMarkdown components={{ p: Fragment }}>
					{description}
				</ReactMarkdown>
			</Box>
		</Box>
	) : null
