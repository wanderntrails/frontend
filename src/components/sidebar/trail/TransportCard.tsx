import { IconBus } from "@tabler/icons"
import { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import Box from "../../../design-system/components/Box/Box"
import Heading from "../../../design-system/components/Heading/Heading"

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
					<Heading as="h2" color="neutral.500" mb="spacing-xs" size="md">
						Transport to start
					</Heading>
					<Box as="p">
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_to}
						</ReactMarkdown>
					</Box>
				</>
			)}
			{transport_from !== "\n" && (
				<Box mt="spacing-lg">
					<Heading as="h2" color="neutral.500" mb="spacing-xs" size="md">
						Transport from end
					</Heading>
					<Box as="p">
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_from}
						</ReactMarkdown>
					</Box>
				</Box>
			)}
		</Box>
	) : null
