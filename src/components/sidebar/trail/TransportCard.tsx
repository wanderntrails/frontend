import { IconBus } from "@tabler/icons"
import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import { Block, BodyText, Card, H2 } from "../../../design-system/components"

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
		<Card>
			<Block>
				<IconBus />
			</Block>
			{transport_to !== "\n" && (
				<>
					<H2 color="neutral.4" mb="xs">
						Transport to start
					</H2>
					<BodyText mb="sm">
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_to}
						</ReactMarkdown>
					</BodyText>
				</>
			)}
			{transport_from !== "\n" && (
				<>
					<H2 color="neutral.4" mb="xs">
						Transport from end
					</H2>
					<BodyText>
						<ReactMarkdown components={{ p: Fragment }}>
							{transport_from}
						</ReactMarkdown>
					</BodyText>
				</>
			)}
		</Card>
	) : null
