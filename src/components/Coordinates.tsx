import React from "react"

import { useMap } from "../MapContext"
import theme from "../design-system/theme"

export default () => {
	const { coordinates, isSatellite } = useMap()

	return (
		<table
			className="coordinates"
			style={{
				color: theme.colors.neutral[isSatellite ? 0 : 5],
				fontWeight: isSatellite ? "bold" : "",
			}}
		>
			<tbody>
				<tr>
					<td>{coordinates?.lng}</td>
					<td>{coordinates?.lat}</td>
				</tr>
			</tbody>
		</table>
	)
}
