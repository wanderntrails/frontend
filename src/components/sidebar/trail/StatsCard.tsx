import { IconClock, IconMountain, IconRuler } from "@tabler/icons"
import React from "react"

import { Block, Card } from "../../../design-system/components"
import { Trail } from "../../../interfaces"
import StatCard from "./StatCard"

export default ({ trail }: { trail: Trail | null }) =>
	trail ? (
		<Card>
			<Block display="flex">
				<StatCard
					Icon={IconRuler}
					value={`${Math.round(trail.distance / 1000)} km`}
					title="Distance"
				/>
				<StatCard
					Icon={IconClock}
					value={`${Math.round(trail.distance / 1000)} km`}
					title="Distance"
				/>
				<StatCard
					Icon={IconMountain}
					value={`${trail.minimum_elevation} - ${trail.maximum_elevation} m`}
					title="Elevation range"
				/>
			</Block>
		</Card>
	) : null
