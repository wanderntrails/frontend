import { IconBed } from "@tabler/icons"
import React, { useState } from "react"

import { FilterProps } from "../../interfaces"

export default ({ toggleDisplay }: FilterProps) => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<IconBed
			onClick={toggleDisplay("huts", setIsHidden)}
			// title="Filter huts"
			className={"map-filter" + (isHidden ? " disabled" : "")}
			size={18}
		/>
	)
}
