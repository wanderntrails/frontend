import { TablerIcon } from "@tabler/icons"
import React, { ReactNode } from "react"

import {
	Block,
	BodyText,
	SmallBodyText,
} from "../../../design-system/components"

export default ({
	Icon,
	value,
	title,
}: {
	Icon: TablerIcon
	value: string
	title: string
}) => (
	<Block flex={1}>
		<Block color="primary.0" textAlign="center">
			<Icon />
		</Block>
		<BodyText fontWeight="bold" textAlign="center">
			{value}
		</BodyText>
		<SmallBodyText color="neutral.4" textAlign="center">
			{title}
		</SmallBodyText>
	</Block>
)
