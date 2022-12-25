import React from "react"

import { useMap } from "../MapContext"
import Box from "../design-system/components/Box/Box"
import { FilterProps } from "../interfaces"
import CampsiteFilter from "./filters/CampsiteFilter"
import HutFilter from "./filters/HutFilter"
import StageFilter from "./filters/StageFilter"

export default () => {
	const { mapMarkers } = useMap()

	const toggleDisplay: FilterProps["toggleDisplay"] =
		(type, setIsHidden) => () =>
			setIsHidden(isHidden => {
				mapMarkers?.[type]?.forEach(marker => {
					marker.getElement().style.display = isHidden ? "" : "None"
				})
				return !isHidden
			})

	return mapMarkers ? (
		<Box
			position="absolute"
			top="16px"
			right="16px"
			zIndex={3}
			display="flex"
			gap="spacing-xs"
		>
			<CampsiteFilter {...{ toggleDisplay }} />
			<HutFilter {...{ toggleDisplay }} />
			<StageFilter
				numStages={mapMarkers.stages?.length}
				{...{ toggleDisplay }}
			/>
		</Box>
	) : null
}
