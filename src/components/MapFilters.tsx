import { useMap } from "../MapContext"
import { Box } from "../design-system/components"
import { FilterProps } from "../interfaces"
import CampsiteFilter from "./filters/CampsiteFilter"
import HutFilter from "./filters/HutFilter"
import StageFilter from "./filters/StageFilter"

const MapFilters = () => {
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
			right="24px"
			zIndex={3}
			display="flex"
			gap="spacing-xs"
			flexDirection={["column", "row"]}
			alignItems={["flex-end", "unset"]}
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

export default MapFilters
