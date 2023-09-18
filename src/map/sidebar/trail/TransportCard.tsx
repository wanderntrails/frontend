import { IconBus } from "@tabler/icons-react"
import { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import { Box, Heading, Text } from "../../../design-system/components"

const TransportCard = ({
	transport_to,
	transport_from,
}: {
	transport_to?: string
	transport_from?: string
}) =>
	transport_to &&
	transport_from &&
	(transport_to !== "\n" || transport_from !== "\n") ? (
		<Box m="spacing-lg" sx={{ a: { color: "orange.700" } }}>
			<Box color="neutral.600">
				<IconBus />
			</Box>
			{transport_to !== "\n" && (
				<>
					<Heading as="h2" color="neutral.500" my="spacing-xxs" size="md">
						Transport to start
					</Heading>
					<Text>
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_to}
						</ReactMarkdown>
					</Text>
				</>
			)}
			{transport_from !== "\n" && (
				<Box mt="spacing-lg">
					<Heading as="h2" color="neutral.500" my="spacing-xxs" size="md">
						Transport from end
					</Heading>
					<Text>
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_from}
						</ReactMarkdown>
					</Text>
				</Box>
			)}
		</Box>
	) : null

export default TransportCard
