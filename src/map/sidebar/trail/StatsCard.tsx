import { IconClock, IconMountain, IconRuler } from "@tabler/icons-react"

import { Box } from "../../../design-system/components"
import { Trail } from "../../../interfaces"
import StatCard from "./StatCard"

const StatsCard = ({ trail }: { trail: Trail | null }) =>
	trail ? (
		<Box bg="neutral.100" p="spacing-md">
			<Box display="flex">
				<StatCard
					Icon={IconRuler}
					value={`${Math.round(trail.distance / 1000)} km`}
					title="Distance"
				/>
				<StatCard
					Icon={IconClock}
					value={`${trail.stages.length - 1} days`}
					title="Duration"
				/>
				<StatCard
					Icon={IconMountain}
					value={`${trail.minimum_elevation} - ${trail.maximum_elevation} m`}
					title="Elevation range"
				/>
			</Box>
		</Box>
	) : null

export default StatsCard
