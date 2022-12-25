import { IconArrowDownRight, IconArrowUpRight, IconWalk } from "@tabler/icons"
import React from "react"
import { ThemeProvider } from "styled-components"

import Box from "../../design-system/components/Box/Box"
import theme from "../../design-system/theme"
import { TrailStage } from "../../interfaces"

export default ({
	trailstage,
	isFinishStage,
}: {
	trailstage: TrailStage
	isFinishStage: boolean
}) => {
	return (
		<ThemeProvider theme={theme}>
			<Box as="p" fontSize="font-size-2" color="neutral.400">
				{trailstage.order_number === 0
					? "Start"
					: isFinishStage
					? "Finish"
					: `Stage ${trailstage.order_number}`}
			</Box>

			{trailstage.order_number > 0 && (
				<Box display="flex" my="spacing-sm">
					<Box display="flex" color="neutral.400">
						<IconWalk />
						<Box as="p" color="white" fontSize="font-size-3">
							{trailstage.distance_from_last / 1000} km
						</Box>
					</Box>
					<Box display="flex" color="neutral.400" mx="spacing-xxs">
						<IconArrowUpRight />
						<Box as="p" color="white" fontSize="font-size-3">
							{trailstage.total_ascent_from_last} m
						</Box>
					</Box>
					<Box display="flex" color="neutral.400">
						<IconArrowDownRight />
						<Box as="p" color="white" fontSize="font-size-3">
							{trailstage.total_descent_from_last} m
						</Box>
					</Box>
				</Box>
			)}

			<Box
				as="p"
				fontWeight="font-weight-bold"
				color="white"
				fontSize="font-size-3"
			>
				{trailstage.name}
			</Box>

			<style type="text/css">
				{`
        .mapboxgl-popup-content {
          background: ${theme.colors.neutral[700]};
          border-radius: ${theme.radii["border-radius-md"]};
          padding: 12px 16px;
					box-shadow: ${theme.shadows["shadow-lg"]}
        }
        .mapboxgl-popup-content > p {
          margin: 0;
        }
        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
          border-bottom-color: #334155 !important;
        }
        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
          border-top-color: #334155 !important;
        }
        .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
          border-right-color: #334155 !important;
        }
        .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
          border-left-color: #334155 !important;
        }
        .mapboxgl-popup.popup-trailstage.mapboxgl-popup-anchor-bottom {
          max-width: fit-content !important;
        }
        .mapboxgl-popup.popup-trailstage.mapboxgl-popup-anchor-right {
          max-width: fit-content !important;
        }
        .mapboxgl-popup.popup-trailstage.mapboxgl-popup-anchor-left {
          max-width: fit-content !important;
        }
      `}
			</style>
		</ThemeProvider>
	)
}
