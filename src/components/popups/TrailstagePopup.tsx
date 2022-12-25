import { IconArrowDownRight, IconArrowUpRight, IconWalk } from "@tabler/icons"
import React from "react"
import { ThemeProvider } from "styled-components"

import { Block, BodyText, SmallBodyText } from "../../design-system/components"
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
			<SmallBodyText className="popup-trailstage-number">
				{trailstage.order_number === 0
					? "Start"
					: isFinishStage
					? "Finish"
					: `Stage ${trailstage.order_number}`}
			</SmallBodyText>

			{trailstage.order_number > 0 && (
				<Block display="flex" my="sm">
					<Block display="flex" color="neutral.4">
						<IconWalk />
						<BodyText color="neutral.0">
							{trailstage.distance_from_last / 1000} km
						</BodyText>
					</Block>
					<Block display="flex" color="neutral.4" mx="xxs">
						<IconArrowUpRight />
						<BodyText color="neutral.0">
							{trailstage.total_ascent_from_last} m
						</BodyText>
					</Block>
					<Block display="flex" color="neutral.4">
						<IconArrowDownRight />
						<BodyText color="neutral.0">
							{trailstage.total_descent_from_last} m
						</BodyText>
					</Block>
				</Block>
			)}

			<BodyText fontWeight="bold" color="neutral.0">
				{trailstage.name}
			</BodyText>

			<style type="text/css">
				{`
        .mapboxgl-popup-content {
          background: #334155;
          border-radius: 8px;
          padding: 12px 16px;
          filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
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
