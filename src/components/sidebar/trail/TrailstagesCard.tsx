import {
	IconArrowDownRight,
	IconArrowUpRight,
	IconDirections,
	IconWalk,
} from "@tabler/icons"

import { Box, Heading, Text } from "../../../design-system/components"
import theme from "../../../design-system/theme"
import { TrailStage } from "../../../interfaces"

const TrailstagesCard = ({ stages }: { stages?: TrailStage[] }) =>
	stages ? (
		<Box p="spacing-lg" bg="white">
			<IconDirections color={theme.colors.neutral[600]} />
			<Heading as="h2" color="neutral.500" my="spacing-xxs" size="md">
				{stages.length - 1} Trail Stages
			</Heading>
			<Box display="flex">
				<Box
					bg="green.700"
					border="2px solid white"
					boxShadow="shadow-sm"
					height="24px"
					width="24px"
					borderRadius="border-radius-circle"
					color="white"
					display="flex"
					alignItems="center"
					justifyContent="center"
					fontSize="font-size-2"
				/>
				<Text bold ml="spacing-sm">
					{stages[0].name}
				</Text>
			</Box>
			{stages.slice(1).map((stage, index) => (
				<Box key={index}>
					<Box
						display="flex"
						height="80px"
						borderLeft="2px dashed"
						borderColor="neutral.400"
						//@ts-ignore
						mx="10px"
						pl="spacing-lg"
						alignItems="center"
					>
						<Box display="flex" color="neutral.500" alignItems="center">
							<IconWalk />
							<Box as="p" color="neutral.500">
								{Math.round(stage.distance_from_last / 1000)} km
							</Box>
						</Box>
						<Box display="flex" color="neutral.500" alignItems="center">
							<IconArrowUpRight />
							<Box as="p" color="neutral.500">
								{stage.total_ascent_from_last} m
							</Box>
						</Box>
						<Box display="flex" color="neutral.500" alignItems="center">
							<IconArrowDownRight />
							<Box as="p" color="neutral.500">
								{stage.total_descent_from_last} m
							</Box>
						</Box>
					</Box>

					<Box display="flex">
						{index + 2 === stages.length ? (
							<Box
								backgroundImage="url(/svg/map-markers/trailstage-end.svg)"
								border="2px solid white"
								boxShadow="shadow-sm"
								height="24px"
								width="24px"
								borderRadius="border-radius-circle"
								color="white"
								display="flex"
								alignItems="center"
								justifyContent="center"
								fontSize="font-size-2"
							/>
						) : (
							<Box
								bg="neutral.700"
								border="2px solid white"
								boxShadow="shadow-sm"
								height="24px"
								width="24px"
								borderRadius="border-radius-circle"
								color="white"
								display="flex"
								alignItems="center"
								justifyContent="center"
								fontSize="font-size-2"
								fontWeight="font-weight-bold"
							>
								{stage.order_number}
							</Box>
						)}
						<Text bold ml="spacing-sm">
							{stage.name}
						</Text>
					</Box>
				</Box>
			))}
		</Box>
	) : null

export default TrailstagesCard
