import { IconBus } from "@tabler/icons"
import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import Box from "../../../design-system/components/Box/Box"

export default ({
	transport_to,
	transport_from,
}: {
	transport_to?: string
	transport_from?: string
}) =>
	transport_to &&
	transport_from &&
	(transport_to !== "\n" || transport_from !== "\n") ? (
		<Box
			m="spacing-lg"
			sx={{
				a: {
					color: "primary.700",
				},
			}}
		>
			<IconBus />
			{transport_to !== "\n" && (
				<>
					<Box
						as="h2"
						color="neutral.500"
						mb="spacing-xs"
						fontSize="font-size-5"
					>
						Transport to start
					</Box>
					<Box as="p">
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_to}
						</ReactMarkdown>
					</Box>
				</>
			)}
			{transport_from !== "\n" && (
				<Box mt="spacing-lg">
					<Box
						as="h2"
						color="neutral.500"
						mb="spacing-xs"
						fontSize="font-size-5"
					>
						Transport from end
					</Box>
					<Box as="p">
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_from}
						</ReactMarkdown>
					</Box>
				</Box>
			)}
		</Box>
	) : null
