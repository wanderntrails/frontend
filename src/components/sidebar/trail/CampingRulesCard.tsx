import { IconTree } from "@tabler/icons"
import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import { Block, BodyText, Card, H2 } from "../../../design-system/components"

export default ({ description }: { description?: string }) =>
	description ? (
		<Card>
			<Block>
				<IconTree />
			</Block>
			<H2 color="neutral.4" mb="xs">
				Wild Camping Rules
			</H2>
			<BodyText>
				<ReactMarkdown components={{ p: Fragment }}>
					{description}
				</ReactMarkdown>
			</BodyText>
		</Card>
	) : null
