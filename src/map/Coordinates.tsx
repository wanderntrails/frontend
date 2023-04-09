import { useMap } from "../MapContext"
import theme from "../design-system/theme"

const Coordinates = () => {
	const { coordinates, isSatellite } = useMap()

	return (
		<table
			className="coordinates"
			style={{
				color: theme.colors.neutral[isSatellite ? 100 : 500],
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

export default Coordinates
