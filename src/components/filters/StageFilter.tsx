import React, { useState } from "react"

import { FilterProps } from "../../interfaces"

export default ({ numStages, toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<div
			onClick={toggleDisplay("stages", setIsHidden)}
			title="Filter trail stages"
			className={"map-filter" + (isHidden ? " disabled" : "")}
		>
			<div
				className="map-filter-trailstage"
				style={isHidden ? { backgroundColor: "rgb(203, 213, 225)" } : {}}
			>
				{numStages}
			</div>
		</div>
	)
}
