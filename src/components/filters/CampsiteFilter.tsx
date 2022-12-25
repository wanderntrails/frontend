import { IconTent } from "@tabler/icons"
import React, { useState } from "react"

import { FilterProps } from "../../interfaces"

export default ({ toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<IconTent
			onClick={toggleDisplay("campsites", setIsHidden)}
			// title="Filter campsites"
			className={"map-filter" + (isHidden ? " disabled" : "")}
			size={18}
		/>
	)
}
