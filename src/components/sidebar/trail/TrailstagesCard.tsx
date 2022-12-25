import {
	IconArrowDownRight,
	IconArrowUpRight,
	IconFlag,
	IconWalk,
} from "@tabler/icons"
import React, { Fragment } from "react"

import {
	Block,
	BodyText,
	Card,
	H2,
	MarkerTrailStage,
} from "../../../design-system/components"
import { TrailStage } from "../../../interfaces"

export default ({ stages }: { stages?: TrailStage[] }) =>
	stages ? (
		<Card>
			<IconFlag />
			<H2 color="neutral.4" mb="xs">
				{stages.length - 1} Trail Stages
			</H2>

			<Block display="flex">
				<MarkerTrailStage bg="positive.0" />
				<BodyText fontWeight="bold" ml="sm">
					{stages[0].name}
				</BodyText>
			</Block>
			{stages.slice(1).map((stage, index) => (
				<Fragment key={index}>
					<Block className="trailstage-stats">
						<Block className="trailstage-stat">
							<IconWalk />
							<BodyText color="neutral.4">
								{Math.round(stage.distance_from_last / 1000)} km
							</BodyText>
						</Block>
						<Block className="trailstage-stat">
							<IconArrowUpRight />
							<BodyText color="neutral.4">
								{stage.total_ascent_from_last} m
							</BodyText>
						</Block>
						<Block className="trailstage-stat">
							<IconArrowDownRight />
							<BodyText color="neutral.4">
								{stage.total_descent_from_last} m
							</BodyText>
						</Block>
					</Block>

					<Block display="flex">
						{index + 2 === stages.length ? (
							<MarkerTrailStage backgroundImage="url(/svg/map-markers/trailstage-end.svg)" />
						) : (
							<MarkerTrailStage bg="neutral.5">
								{stage.order_number}
							</MarkerTrailStage>
						)}
						<BodyText fontWeight="bold" ml="sm">
							{stage.name}
						</BodyText>
					</Block>
				</Fragment>
			))}
		</Card>
	) : null
