import React from "react"

import { useMap } from "../MapContext"
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
		<div className="map-filters">
			<CampsiteFilter {...{ toggleDisplay }} />
			<HutFilter {...{ toggleDisplay }} />
			<StageFilter
				numStages={mapMarkers.stages?.length}
				{...{ toggleDisplay }}
			/>
		</div>
	) : null
}
