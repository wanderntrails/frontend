// @ts-ignore
import mapboxgl, { Map, Marker, NavigationControl } from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import {
	MutableRefObject,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"

import { SetState } from "./interfaces"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export const BASE_URL =
	process.env.NODE_ENV === "production" ? "https://api.wanderntrails.com" : ""

export const MAP_CENTER = [-12, 55]
export const MIN_ZOOM = 3.85
export const MAX_BOUNDS = [
	[-57, 36],
	[40, 66],
]

export type MapMarkers = { [markerType: string]: Marker[] } | null

export interface MapContextProps {
	mapContainer: MutableRefObject<HTMLDivElement | null>
	map: MutableRefObject<Map | null>
	coordinates: { lng: string; lat: string } | null
	isSatellite: boolean
	setIsSatellite: SetState<boolean>
	mapMarkers: MapMarkers
	setMapMarkers: SetState<MapMarkers>
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps)

export const MapProvider = ({ children }: { children: ReactNode }) => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<Map | null>(null)

	const [coordinates, setCoordinates] =
		useState<MapContextProps["coordinates"]>(null)
	const [isSatellite, setIsSatellite] = useState(false)

	const [mapMarkers, setMapMarkers] = useState<MapMarkers>(null)

	useEffect(() => {
		if (map.current) return // initialize map only once
		if (!mapContainer.current) return

		map.current = new Map({
			container: mapContainer.current,
			style: "mapbox://styles/vankhan/ckm5gzob32y9c17pgbw4jwcaq",
			customAttribution: `<a href="/privacy" target="_blank">© Wandern</a>`,
			center: MAP_CENTER,
			bearing: 0,
			pitch: 0,
			minZoom: MIN_ZOOM,
			zoom: MIN_ZOOM,
			maxBounds: MAX_BOUNDS,
		})
		map.current.addControl(
			new NavigationControl({
				visualizePitch: true,
				showZoom: false,
			}),
			"bottom-right"
		)
	})

	// get trails json
	useEffect(() => {
		map.current?.on(
			"click",
			({ lngLat: { lng, lat } }: { lngLat: { lng: number; lat: number } }) =>
				setCoordinates({ lng: lng.toFixed(5), lat: lat.toFixed(5) })
		)
	}, [])

	return (
		<MapContext.Provider
			value={{
				mapContainer,
				map,
				coordinates,
				isSatellite,
				setIsSatellite,
				mapMarkers,
				setMapMarkers,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}

export const useMap = () => useContext(MapContext)
